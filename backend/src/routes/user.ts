import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode,verify,sign} from "hono/jwt"
import { signinInput, signupInput } from "@saransh1578/medium-common";


export const userRoute=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>();

userRoute.post('signup',async (c) => {
	const body=await c.req.json();
	const{success}=signupInput.safeParse(body);
	if(!success){
		c.status(411);
		return c.json({
			message:"Incorrect credentials"
		})
	}
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())
	
	try{
		const user=await prisma.user.create({
			data:{
				username: body.username,
				password: body.password,
				name: body.name
			}
		})
		const jwt=await sign({
			id:user.id
		},c.env.JWT_SECRET)
		return c.text(jwt)
	}
	catch(e)
	{
		console.log(e)
		c.status(411);
		return c.text("Invalid");
	}
})

userRoute.post('/signin', async(c) => {
	const body=await c.req.json();
	const{success}=signinInput.safeParse(body);
	if(!success){
		c.status(411);
		return c.json({
			message:"Incorrect credentials"
		})
	}
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())
	
	try{
		const user=await prisma.user.findFirst({
			where:{
				username: body.username,
				password: body.password,
			}
		})

		if(!user){
			c.status(403)
			return c.json({
				message:"Not found"
			})
		}
		const jwt=await sign({
			id:user.id
		},c.env.JWT_SECRET)
		return c.text(jwt)
	}
	catch(e)
	{
		console.log(e)
		c.status(411);
		return c.text("Invalid");
	}
})
