import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Mail, Menu } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactez-nous</h1>
              <p className="text-gray-500 md:text-xl">
                Nous sommes là pour répondre à toutes vos questions concernant FastZakat.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 w-full max-w-md">
              <Button 
                asChild
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                <a href="mailto:anis@html.agency">
                  <Mail className="mr-2 h-5 w-5" />
                  anis@html.agency
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

