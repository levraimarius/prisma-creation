<template>
  <footer class="bg-gray-900 text-gray-400 px-6 py-16">
    <div class="container mx-auto flex flex-wrap justify-between gap-8">
      <div class="flex-1 min-w-[200px]">
        <img
          class="h-24 mb-4"
          src="../../assets/logo_prismacreation_footer.svg"
          alt="Logo Prisma Création"
          loading="lazy"
        />
        <p class="mb-4">Votre présence en ligne, sans complexité.</p>
      </div>

      <div class="flex-1 min-w-[200px]">
        <h3 class="text-white font-semibold mb-4">À propos</h3>
        <ul class="space-y-2">
          <li>
            <a href="/#services" class="hover:text-white transition"
              >Nos services</a
            >
          </li>
          <li>
            <a href="/#faq" class="hover:text-white transition">Questions</a>
          </li>
        </ul>
      </div>

      <div class="flex-1 min-w-[200px]">
        <h3 class="text-white font-semibold mb-4">Un projet en tête ?</h3>
        <ul class="space-y-2">
          <li>
            <a href="/#contact" class="hover:text-white transition"
              >Contactez-nous</a
            >
          </li>
          <li>
            <a
              href="https://cal.com/prisma-creation/consultation-de-site-web"
              target="_blank"
              class="hover:text-white transition"
              >Prendre un rendez-vous</a
            >
          </li>
        </ul>
      </div>

      <div class="flex-1 min-w-[200px]">
        <h3 class="text-white font-semibold mb-4">Légal</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="/politique-de-confidentialite"
              class="hover:text-white transition"
              >Politique de confidentialité</a
            >
          </li>
          <li>
            <a
              href="/conditions-utilisation"
              class="hover:text-white transition"
              >Conditions d'utilisation</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-12 border-t border-gray-700 pt-8 text-center">
      <p>© 2024 Prisma Création. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style scoped>
footer svg g {
  fill: #ffffff !important;
}
</style>
