import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b max-w-7xl mx-auto w-full">
    <Link className="flex items-center justify-center" href="/">
      <Image
        src="/identity-logo.svg"
        alt="FastZakat Logo"
        width={125}
        height={24}
        className="h-6 w-auto"
      />
    </Link>
    <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#features">
        Fonctionnalités
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#how-it-works">
        Comment ça marche
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
        Contact
      </Link>
    </nav>
    <div className="hidden md:block ml-4">
      <Button asChild>
        <Link href={`${process.env.APP_URL}`}>Connexion</Link>
      </Button>
    </div>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="ml-auto md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>FastZakat</SheetTitle>
          <SheetDescription>Application de gestion de Zakat</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Fonctionnalités
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Comment ça marche
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Témoignages
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
          <Button asChild className="mt-2">
            <Link href={`${process.env.APP_URL}`}>Connexion</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  </header>
  )
}

export default Header;  