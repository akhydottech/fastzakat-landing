import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Package, Users, BarChart3, Gift, MapPin } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                    Simplifiez la distribution de votre Zakat
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    FastZakat est une application web qui vous aide à gérer efficacement la distribution des colis de
                    Zakat, de la collecte à la livraison.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href={`${process.env.APP_URL}`}>Commencer gratuitement</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/dashboard.png?height=550&width=550"
                  width={550}
                  height={550}
                  alt="FastZakat Dashboard"
                  className="rounded-lg object-cover w-full max-w-[550px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-emerald-600 text-white">
                  Pourquoi choisir FastZakat
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fonctionnalités principales</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Notre plateforme offre tous les outils nécessaires pour gérer efficacement vos distributions de Zakat
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Gestion des Bénévoles</h3>
                <p className="text-center text-gray-500">
                  Gérez votre équipe de bénévoles en toute simplicité. Créez des profils, attribuez des rôles et suivez leur implication dans vos distributions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Package className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Suivi des colis</h3>
                <p className="text-center text-gray-500">
                  Visualisez en temps réel le statut de chaque colis. De la préparation à la livraison, suivez chaque étape et assurez-vous que rien n'est oublié.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <BarChart3 className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Cartes interactives</h3>
                <p className="text-center text-gray-500">
                  Explorez des cartes interactives pour visualiser vos zones de distribution. Identifiez les zones prioritaires et optimisez vos itinéraires de livraison.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="how-it-works">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comment ça marche</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Un processus simple en quatre étapes pour gérer efficacement vos distributions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border-t pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">1. Enregistrement</h3>
                <p className="text-center text-gray-500">Créez votre compte et personnalisez les paramètres de votre organisation pour commencer à gérer vos distributions</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-t pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Gift className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">2. Préparation</h3>
                <p className="text-center text-gray-500">Enregistrez vos bénéficiaires, gérez l'inventaire et préparez vos colis de manière organisée</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-t pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">3. Distribution</h3>
                <p className="text-center text-gray-500">Coordonnez vos équipes, suivez les livraisons en temps réel et assurez-vous que chaque colis atteint sa destination</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-t pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <BarChart3 className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">4. Analyse</h3>
                <p className="text-center text-gray-500">
                  Consultez les statistiques et optimisez vos futures distributions
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white" id="get-started">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Prêt à simplifier votre gestion de Zakat al Fitr ?
                </h2>
                <p className="text-emerald-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Optimisez votre distribution de Zakat al Fitr avec une solution moderne et efficace
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                  <Link href={`${process.env.APP_URL}`}>Commencer gratuitement</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

