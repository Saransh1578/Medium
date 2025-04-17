import {Link} from "react-router-dom"
import { ModeToggle } from "../components/mode-toggle"
//import { Button } from "@/components/ui/button"
import { Code, MessageSquare, PenSquare, Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 ml-3">
            <Code className="h-6 w-6" />
            <span className="text-xl font-bold ">CodeLog</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden gap-6 md:flex mr-3">
              <Link to="#features" className="text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link to="#community" className="text-sm font-medium transition-colors hover:text-primary">
                Community
              </Link>
              <Link to="#faq" className="text-sm font-medium transition-colors hover:text-primary">
                FAQ
              </Link>
            </nav>
            
            <button className="h-10 mr-3 px-6 py-2 rounded-md bg-green-900 text-white border border-green-700 hover:bg-white hover:text-green-700 transition">
              <Link to="/signin">Login</Link>
            </button>

          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Share Your Code. Solve Your Problems.
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A community where developers can share their programming knowledge and get help with their code.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <button className="h-12 px-8 rounded-md bg-black text-white text-sm font-medium hover:bg-zinc-600 transition">
                  <Link to="/signup">Get Started</Link>
                </button>
                <button className="h-12 px-8 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-100 transition">
                  Learn More
                </button>
              </div>

            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Everything you need to share your programming knowledge and get help with your code.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <PenSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Write Blogs</h3>
                <p className="text-center text-muted-foreground">
                  Share your programming knowledge and experiences with the community.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Ask Questions</h3>
                <p className="text-center text-muted-foreground">
                  Get help with your code from experienced developers in the community.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Discover Solutions</h3>
                <p className="text-center text-muted-foreground">
                  Find solutions to common programming problems and learn new techniques.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="community" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Connect with developers from around the world and grow together.
                </p>
              </div>
              
              <button className="h-12 px-8 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition">
                Join Now
              </button>

            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center ml-4 gap-2">
            <Code className="h-6 w-6" />
            <span className="text-lg font-bold">CodeLog</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeLog. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link to="#" className="mr-3 text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
