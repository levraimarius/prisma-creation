<template>
  <div class="terms-of-use px-6 py-24 sm:py-32 lg:px-8">
    <div class="container mx-auto max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Conditions d'Utilisation
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Les présentes conditions d'utilisation régissent l'accès et
        l'utilisation de notre site et de nos services. En accédant à notre site
        ou en utilisant nos services, vous acceptez d'être lié par ces
        conditions.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">
        Utilisation des Services
      </h3>
      <p class="mt-4 text-gray-600">
        Nos services sont destinés à des utilisateurs particuliers et
        professionnels souhaitant bénéficier de prestations de développement
        web. Vous vous engagez à utiliser nos services de manière légale et à ne
        pas les détourner à des fins illicites ou non autorisées.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">Compte Utilisateur</h3>
      <p class="mt-4 text-gray-600">
        Pour accéder à certains de nos services, vous devrez peut-être créer un
        compte utilisateur. Vous êtes responsable de la confidentialité de vos
        informations de connexion et de toutes les activités effectuées sous
        votre compte. Vous vous engagez à nous informer immédiatement de toute
        utilisation non autorisée de votre compte.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">
        Propriété Intellectuelle
      </h3>
      <p class="mt-4 text-gray-600">
        Tous les contenus présents sur notre site, y compris les textes, images,
        logos et graphiques, sont protégés par des droits de propriété
        intellectuelle et sont la propriété exclusive de notre entreprise. Toute
        reproduction, distribution ou utilisation non autorisée de ces contenus
        est strictement interdite.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">
        Limitation de Responsabilité
      </h3>
      <p class="mt-4 text-gray-600">
        Nous mettons tout en œuvre pour assurer l'exactitude des informations
        disponibles sur notre site. Cependant, nous ne garantissons pas que ces
        informations sont complètes ou exemptes d'erreurs. Nous ne saurions être
        tenus responsables de tout dommage direct ou indirect résultant de
        l'utilisation de notre site ou de nos services.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">Résiliation</h3>
      <p class="mt-4 text-gray-600">
        Nous nous réservons le droit de suspendre ou de résilier votre accès à
        nos services en cas de non-respect des présentes conditions
        d'utilisation, sans préavis ni responsabilité envers vous.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">
        Modifications des Conditions d'Utilisation
      </h3>
      <p class="mt-4 text-gray-600">
        Nous nous réservons le droit de modifier ces conditions d'utilisation à
        tout moment. Toute modification sera publiée sur cette page et prendra
        effet immédiatement après sa mise à jour. Il est de votre responsabilité
        de consulter régulièrement cette page pour prendre connaissance des
        éventuelles modifications.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">Loi Applicable</h3>
      <p class="mt-4 text-gray-600">
        Les présentes conditions d'utilisation sont régies par la loi française.
        Tout litige relatif à l'interprétation ou à l'exécution de ces
        conditions sera soumis aux tribunaux compétents.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">Contact</h3>
      <p class="mt-4 text-gray-600">
        Pour toute question concernant ces conditions d'utilisation, veuillez
        nous contacter via notre formulaire de contact.
      </p>
    </div>

    <Contact />
  </div>
</template>

<script setup>
import Contact from "../features/ContactForm/Contact.vue";
</script>

<style scoped>
.terms-of-use {
  background-color: #ffffff;
}
</style>
