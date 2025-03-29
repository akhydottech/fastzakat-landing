export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Conditions d'utilisation de FastZakat</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptation des conditions</h2>
            <p>
              En accédant et en utilisant FastZakat, vous acceptez d'être lié par ces conditions d'utilisation. 
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Description du service</h2>
            <p>
              FastZakat est une plateforme de gestion de distribution de Zakat qui permet aux organisations 
              de gérer efficacement leurs distributions de colis de Zakat, de la collecte à la livraison.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Inscription et compte</h2>
            <p>
              Pour utiliser FastZakat, vous devez créer un compte. Vous êtes responsable de maintenir 
              la confidentialité de votre compte et de votre mot de passe. Vous acceptez de nous informer 
              immédiatement de toute utilisation non autorisée de votre compte.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Utilisation du service</h2>
            <p>
              Vous vous engagez à utiliser FastZakat uniquement à des fins légales et conformes à ces 
              conditions d'utilisation. Vous ne devez pas utiliser le service pour :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Violer les lois ou réglementations applicables</li>
              <li>Enfreindre les droits d'autrui</li>
              <li>Transmettre des informations fausses ou trompeuses</li>
              <li>Interférer avec le bon fonctionnement du service</li>
              <li>Tenter d'accéder non autorisé à des parties du service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Données personnelles</h2>
            <p>
              Nous collectons et traitons vos données personnelles conformément à notre politique de 
              confidentialité. En utilisant FastZakat, vous consentez à ce traitement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Propriété intellectuelle</h2>
            <p>
              FastZakat est un projet open source. Le code source est disponible sous licence MIT, permettant 
              son utilisation, modification et distribution libre. Les marques déposées et le contenu 
              spécifique à FastZakat restent protégés par les lois sur la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Limitation de responsabilité</h2>
            <p>
              FastZakat est fourni "tel quel" sans garantie d'aucune sorte. Nous ne serons pas 
              responsables des dommages directs, indirects, accessoires ou consécutifs résultant de 
              l'utilisation ou de l'impossibilité d'utiliser le service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Modifications des conditions</h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications 
              entrent en vigueur dès leur publication sur le site. Votre utilisation continue du service 
              après ces modifications constitue votre acceptation des nouvelles conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact</h2>
            <p>
              Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à 
              l'adresse suivante : anis@html.agency
            </p>
          </section>
        </div>
      </main>
    </div>
  )
} 