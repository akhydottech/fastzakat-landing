"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardContent className="flex flex-col items-center p-8 space-y-6">
          <div className="w-48 h-auto">
            <Image src="/identity-logo.svg" alt="FastZAKAT Logo" width={200} height={60} priority />
          </div>

          <h1 className="text-3xl font-bold text-center mt-6">à l&apos;année prochaine</h1>

          <p className="text-muted-foreground text-center">Nous vous remercions pour votre confiance</p>
        </CardContent>
      </Card>

      <footer className="mt-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} FastZAKAT. Tous droits réservés.
      </footer>
    </div>
  )
}

