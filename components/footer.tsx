import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t max-w-7xl mx-auto">
    <div className="flex items-center gap-2">
      <Image
        src="/identity-logo.svg"
        alt="FastZakat Logo"
        width={125}
        height={24}
        className="h-5 w-auto"
      />
      <span className="font-semibold">FastZakat</span>
    </div>
    <p className="text-xs text-gray-500 sm:ml-4">
      &copy; {new Date().getFullYear()} FastZakat by <a href="https://html.agency" className="hover:underline">html.agency</a>. Tous droits réservés.
    </p>
    <nav className="flex flex-wrap gap-4 sm:ml-auto sm:gap-6">
      <Link className="text-xs hover:underline underline-offset-4" href="/terms">
        Conditions d'utilisation
      </Link>
      <Link className="text-xs hover:underline underline-offset-4" href="/privacy-policy">
        Politique de confidentialité
      </Link>
      <Link className="text-xs hover:underline underline-offset-4" href="/contact">
        Contact
      </Link>
    </nav>
  </footer>
  )
}

export default Footer;  