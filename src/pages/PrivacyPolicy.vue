<template>
  <div class="privacy-policy px-6 py-24 sm:py-32 lg:px-8">
    <div class="container mx-auto max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Politique de Confidentialité
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Cette politique de confidentialité explique comment nous, en tant que
        développeur web, collectons, utilisons et protégeons les informations
        personnelles des utilisateurs qui visitent notre site ou utilisent nos
        services. Nous nous engageons à protéger la confidentialité de vos
        données et à respecter les lois en vigueur.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">
        Collecte des Informations
      </h3>
      <p class="mt-4 text-gray-600">
        Nous collectons des informations lorsque vous nous contactez via notre
        formulaire de contact, lorsque vous souscrivez à nos services, ou
        lorsque vous interagissez avec notre site. Les informations collectées
        peuvent inclure votre nom, votre adresse e-mail, votre numéro de
        téléphone, et toute autre information pertinente pour la fourniture de
        nos services.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">
        Utilisation des Informations
      </h3>
      <p class="mt-4 text-gray-600">
        Les informations que nous collectons sont utilisées pour :
      </p>
      <ul class="list-disc list-inside mt-4 text-gray-600">
        <li>Fournir, exploiter et améliorer nos services</li>
        <li>Répondre à vos questions et demandes de renseignements</li>
        <li>
          Envoyer des communications relatives à nos services, y compris des
          devis, des offres et des mises à jour
        </li>
        <li>Respecter nos obligations légales et réglementaires</li>
      </ul>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">
        Protection des Informations
      </h3>
      <p class="mt-4 text-gray-600">
        Nous prenons des mesures de sécurité appropriées pour protéger vos
        informations personnelles contre tout accès non autorisé, toute
        modification, divulgation ou destruction de données. Vos informations
        sont stockées de manière sécurisée et ne sont accessibles qu'aux
        personnes autorisées.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">
        Partage des Informations
      </h3>
      <p class="mt-4 text-gray-600">
        Nous ne vendons, n'échangeons, ni ne louons vos informations
        personnelles à des tiers sans votre consentement. Cependant, nous
        pouvons partager vos informations avec des partenaires de confiance qui
        nous assistent dans la fourniture de nos services, sous réserve qu'ils
        respectent la confidentialité de vos données.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">Cookies</h3>
      <p class="mt-4 text-gray-600">
        Notre site utilise des cookies pour améliorer l'expérience utilisateur.
        Les cookies sont de petits fichiers stockés sur votre appareil qui nous
        permettent de reconnaître votre navigateur et de capturer certaines
        informations. Vous pouvez configurer votre navigateur pour refuser les
        cookies, bien que cela puisse affecter certaines fonctionnalités du
        site.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">Vos Droits</h3>
      <p class="mt-4 text-gray-600">
        Conformément à la réglementation en vigueur, vous avez le droit
        d'accéder à vos données personnelles, de les rectifier, de demander leur
        suppression ou de vous opposer à leur traitement. Pour exercer ces
        droits, veuillez nous contacter via notre formulaire de contact.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">Consentement</h3>
      <p class="mt-4 text-gray-600">
        En utilisant notre site ou en souscrivant à nos services, vous consentez
        à notre politique de confidentialité et à la collecte, l'utilisation et
        la protection de vos informations personnelles comme décrit dans ce
        document.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">
        Modifications de la Politique de Confidentialité
      </h3>
      <p class="mt-4 text-gray-600">
        Nous nous réservons le droit de modifier cette politique de
        confidentialité à tout moment. Toute modification sera publiée sur cette
        page et prendra effet immédiatement après sa mise à jour.
      </p>
      <h3 class="mt-10 text-2xl font-bold text-gray-900">Contact</h3>
      <p class="mt-4 text-gray-600">
        Si vous avez des questions concernant cette politique de
        confidentialité, veuillez nous contacter via notre formulaire de
        contact.
      </p>
    </div>

    <Contact />
  </div>
</template>

<script setup>
import Contact from "../features/ContactForm/Contact.vue";
</script>

<style scoped>
.privacy-policy {
  background-color: #ffffff;
}
</style>
