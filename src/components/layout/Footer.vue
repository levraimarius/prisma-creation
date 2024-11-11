<template>
  <footer class="px-6 py-16 text-gray-400 bg-gray-900">
    <div class="container flex flex-wrap justify-between gap-8 mx-auto">
      <div class="flex-1 min-w-[200px]">
        <LogoPrismaCreationFooter class="w-auto h-24 mb-4" />
        <p class="mb-4">Votre présence en ligne, sans complexité.</p>
      </div>

      <div class="flex-1 min-w-[200px]">
        <h3 class="mb-4 font-semibold text-white">À propos</h3>
        <ul class="space-y-2">
          <li>
            <a href="/#services" class="transition hover:text-white"
              >Nos services</a
            >
          </li>
          <li>
            <a href="/#faq" class="transition hover:text-white">Questions</a>
          </li>
        </ul>
      </div>

      <div class="flex-1 min-w-[200px]">
        <h3 class="mb-4 font-semibold text-white">Un projet en tête ?</h3>
        <ul class="space-y-2">
          <li>
            <a href="/#contact" class="transition hover:text-white"
              >Contactez-nous</a
            >
          </li>
          <li>
            <a
              href="https://cal.com/prisma-creation/consultation-de-site-web"
              target="_blank"
              class="transition hover:text-white"
              >Prendre un rendez-vous</a
            >
          </li>
        </ul>
      </div>

      <div class="flex-1 min-w-[200px]">
        <h3 class="mb-4 font-semibold text-white">Légal</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="/politique-de-confidentialite"
              class="transition hover:text-white"
              >Politique de confidentialité</a
            >
          </li>
          <li>
            <a
              href="/conditions-utilisation"
              class="transition hover:text-white"
              >Conditions d'utilisation</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="pt-8 mt-12 text-center border-t border-gray-700">
      <p>© 2024 Prisma Création. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup>
import LogoPrismaCreationFooter from "../../assets/logo_prismacreation_footer.svg";
</script>

<style scoped>
footer svg g {
  fill: #ffffff !important;
}
</style>
