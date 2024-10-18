<template>
  <footer class="bg-gray-900 text-gray-400 px-6 py-16">
    <div class="container mx-auto flex flex-wrap justify-between gap-8">
      <div class="flex-1 min-w-[200px]">
        <img
          src="../../assets/logo_prismacreation_footer.svg"
          alt="Logo"
          class="h-24 mb-4"
        />
        <p class="mb-4">
          Construire un monde meilleur en créant des interfaces élégantes.
        </p>
      </div>

      <div class="flex-1 min-w-[200px]">
        <h3 class="text-white font-semibold mb-4">Légal</h3>
        <ul class="space-y-2">
          <li>
            <a href="/privacy-policy" class="hover:text-white transition"
              >Politique de confidentialité</a
            >
          </li>
          <li>
            <a href="/terms-of-use" class="hover:text-white transition"
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
