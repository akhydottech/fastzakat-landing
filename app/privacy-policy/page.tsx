export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Politique de confidentialité de FastZakat</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Cette politique de confidentialité décrit comment FastZakat collecte, utilise et protège vos 
              informations personnelles lorsque vous utilisez notre service. Nous accordons une importance 
              primordiale à la protection de vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Informations collectées</h2>
            <p>
              Nous collectons les informations suivantes :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Informations d'identification (nom, prénom, adresse email)</li>
              <li>Informations sur l'organisation (nom)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Utilisation des informations</h2>
            <p>
              Nous utilisons vos informations pour :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Fournir et améliorer nos services</li>
              <li>Communiquer avec vous concernant votre compte et nos services</li>
              <li>Personnaliser votre expérience utilisateur</li>
              <li>Assurer la sécurité de notre plateforme</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations 
              personnelles contre tout accès non autorisé, modification, divulgation ou destruction. 
              Vos données sont stockées sur des serveurs sécurisés et nous utilisons le chiffrement 
              pour protéger les informations sensibles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Partage des informations</h2>
            <p>
              Nous ne vendons ni ne louons vos informations personnelles à des tiers. Nous pouvons 
              partager vos informations uniquement dans les cas suivants :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Avec votre consentement explicite</li>
              <li>Pour respecter des obligations légales</li>
              <li>Pour protéger nos droits et notre sécurité</li>
              <li>Avec nos fournisseurs de services qui nous aident à opérer notre plateforme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Vos droits</h2>
            <p>
              Vous avez le droit de :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Accéder à vos informations personnelles</li>
              <li>Corriger vos informations inexactes</li>
              <li>Demander la suppression de vos données</li>
              <li>Vous opposer au traitement de vos données</li>
              <li>Exporter vos données</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
            <p>
              Nous utilisons uniquement des cookies de connexion (cookies d'authentification) pour vous permettre 
              d'accéder à votre compte et de naviguer sur notre plateforme de manière sécurisée. Nous ne 
              collectons pas de cookies de tracking ni d'autres types de cookies. Vous pouvez désactiver les 
              cookies dans les paramètres de votre navigateur, mais cela pourrait affecter votre capacité à 
              utiliser certaines fonctionnalités de notre service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Modifications de la politique</h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Les 
              modifications entrent en vigueur dès leur publication sur notre site. Nous vous 
              informerons de tout changement important via notre site web ou par email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou vos données 
              personnelles, veuillez nous contacter à l'adresse suivante : anis@html.agency
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
