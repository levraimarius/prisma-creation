<template>
  <div class="space-y-8">
    <!-- Header -->
    <div>
      <h3 class="text-xl font-semibold text-gray-900">
        Comment pouvons-nous vous aider ?
      </h3>
      <p class="mt-2 text-gray-600">
        Choisissez le moyen qui vous convient le mieux pour nous contacter.
      </p>
    </div>

    <!-- Contact Methods -->
    <div class="space-y-6">
      <div
        class="flex items-start p-4 transition-colors rounded-lg hover:bg-indigo-50"
      >
        <MapPinIcon class="flex-shrink-0 w-6 h-6 mr-4 text-indigo-600" />
        <div>
          <h4 class="text-base font-medium text-gray-900">
            Zone d'intervention
          </h4>
          <p class="mt-1 text-sm text-gray-600">
            Nous intervenons dans toute la France pour vos projets web.
          </p>
        </div>
      </div>

      <div
        class="flex items-start p-4 transition-colors rounded-lg hover:bg-indigo-50"
      >
        <EnvelopeIcon class="flex-shrink-0 w-6 h-6 mr-4 text-indigo-600" />
        <div>
          <h4 class="text-base font-medium text-gray-900">Email</h4>
          <a
            href="mailto:contact@prismacreation.fr"
            class="inline-flex items-center mt-1 text-sm text-indigo-600 transition hover:text-indigo-700 group"
          >
            contact@prismacreation.fr
            <ArrowRightIcon
              class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      <div
        class="flex items-start p-4 transition-colors rounded-lg hover:bg-indigo-50"
      >
        <CalendarIcon class="flex-shrink-0 w-6 h-6 mr-4 text-indigo-600" />
        <div>
          <h4 class="text-base font-medium text-gray-900">
            Consultation gratuite
          </h4>
          <a
            href="https://cal.com/prisma-creation/consultation-de-site-web"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center mt-1 text-sm text-indigo-600 transition hover:text-indigo-700 group"
          >
            Prendre rendez-vous
            <ArrowTopRightOnSquareIcon class="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  MapPinIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
} from "@heroicons/vue/24/outline";
</script>
