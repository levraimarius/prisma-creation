<template>
  <section class="terms-of-use px-6 py-24 sm:py-32 lg:px-8">
    <div class="container mx-auto max-w-2xl">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Conditions d'Utilisation
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Les présentes conditions d'utilisation régissent l'accès et
        l'utilisation de notre site et de nos services. En accédant à notre site
        ou en utilisant nos services, vous acceptez d'être lié par ces
        conditions.
      </p>

      <article>
        <h2 class="mt-10 text-2xl font-bold text-gray-900">
          Utilisation des Services
        </h2>
        <p class="mt-4 text-gray-600">
          Nos services sont destinés à des utilisateurs particuliers et
          professionnels souhaitant bénéficier de prestations de développement
          web. Vous vous engagez à utiliser nos services de manière légale et à
          ne pas les détourner à des fins illicites ou non autorisées.
        </p>
      </article>

      <article>
        <h2 class="mt-10 text-2xl font-bold text-gray-900">
          Compte Utilisateur
        </h2>
        <p class="mt-4 text-gray-600">
          Pour accéder à certains de nos services, vous devrez peut-être créer
          un compte utilisateur. Vous êtes responsable de la confidentialité de
          vos informations de connexion et de toutes les activités effectuées
          sous votre compte.
        </p>
      </article>

      <article>
        <h2 class="mt-10 text-2xl font-bold text-gray-900">
          Propriété Intellectuelle
        </h2>
        <p class="mt-4 text-gray-600">
          Tous les contenus présents sur notre site, y compris les textes,
          images, logos et graphiques, sont protégés par des droits de propriété
          intellectuelle et sont la propriété exclusive de notre entreprise.
        </p>
      </article>

      <!-- Ajout de sous-sections pour le SEO -->
      <article>
        <h2 class="mt-10 text-2xl font-bold text-gray-900">
          Limitation de Responsabilité
        </h2>
        <p class="mt-4 text-gray-600">
          Nous mettons tout en œuvre pour assurer l'exactitude des informations
          disponibles sur notre site. Cependant, nous ne garantissons pas que
          ces informations sont complètes ou exemptes d'erreurs.
        </p>
      </article>

      <article>
        <h2 class="mt-10 text-2xl font-bold text-gray-900">Résiliation</h2>
        <p class="mt-4 text-gray-600">
          Nous nous réservons le droit de suspendre ou de résilier votre accès à
          nos services en cas de non-respect des présentes conditions
          d'utilisation.
        </p>
      </article>

      <article>
        <h2 class="mt-10 text-2xl font-bold text-gray-900">
          Modifications des Conditions d'Utilisation
        </h2>
        <p class="mt-4 text-gray-600">
          Nous nous réservons le droit de modifier ces conditions d'utilisation
          à tout moment. Toute modification sera publiée sur cette page.
        </p>
      </article>

      <article>
        <h2 class="mt-10 text-2xl font-bold text-gray-900">Loi Applicable</h2>
        <p class="mt-4 text-gray-600">
          Les présentes conditions d'utilisation sont régies par la loi
          française.
        </p>
      </article>

      <article>
        <h2 class="mt-10 text-2xl font-bold text-gray-900">Contact</h2>
        <p class="mt-4 text-gray-600">
          Pour toute question concernant ces conditions d'utilisation, veuillez
          nous contacter via notre formulaire de contact.
        </p>
      </article>
    </div>

    <Contact />
  </section>
</template>

<script setup>
import Contact from "../features/ContactForm/Contact.vue";
</script>

<style scoped>
.terms-of-use {
  background-color: #ffffff;
}
</style>
