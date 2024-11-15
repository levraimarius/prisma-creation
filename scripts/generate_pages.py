import os
import time
from cities import cities

# Chemins des fichiers
output_dir = "../src/townPages"
os.makedirs(output_dir, exist_ok=True)

routes_file_path = "../src/router/townRoutes.ts"
sitemap_path = "../public/sitemap-towns.xml"

def format_component_name(city):
    """Formate le nom du composant en supprimant les tirets et en mettant chaque mot en capitales."""
    return "AgenceWeb" + "".join(word.capitalize() for word in city.split("-"))

def generate_city_component(city_info):
    """Génère un composant Vue pour une ville donnée."""
    city = city_info["city"]
    component_name = format_component_name(city)
    title_text = f"Prisma Création | Agence Web à {city} - Votre site internet à prix réduit"
    description_text = f"Découvrez Prisma Création, votre agence web à {city}. Création de sites web professionnels, performants et adaptés à vos besoins."
    url = f"https://prismacreation.fr/nos-agences/{city_info['region']}/{city_info['department']}/{city.lower().replace(' ', '-')}"

    # Contenu Vue.js
    component_content = f"""<template>
  <div class="relative py-24 overflow-hidden bg-gray-900 isolate sm:py-32">
    <img
      class="absolute inset-0 object-cover object-right -z-10 size-full md:object-center"
      :src="fondImage"
      alt="Image de fond pour l'agence web de {city} - Prisma Création"
      draggable="false"
    />
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-3xl mx-auto lg:mx-0">
        <h1 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl anime-title">
          Agence Web Prisma Création à
          <span class="highlight-container">
            <span class="highlight-background"></span>
            <span class="highlight">{city}</span>
          </span>
        </h1>
        <p class="mt-8 text-lg font-medium text-gray-600 text-pretty sm:text-xl/8">
          {description_text}
        </p>
      </div>
      <div class="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
        <dl class="grid grid-cols-1 gap-8 mt-16 text-center sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.name"
            class="space-y-2"
          >
            <dt class="text-base font-medium text-gray-600">{{{{ stat.name }}}}</dt>
            <dd class="text-4xl font-bold text-gray-900">{{{{ stat.value }}}}</dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
  </div>
  <Services />
  <Contact />
</template>

<script lang="ts">
import {{ defineComponent, onMounted }} from "vue";
import Services from "../features/Services/Services.vue";
import Contact from "../features/ContactForm/Contact.vue";

export default defineComponent({{
  name: "{component_name}",
  components: {{
    Services,
    Contact,
  }},
  setup() {{
    const fondImage = new URL("../assets/fond.svg", import.meta.url).href;

    const stats = [
      {{ name: "Sites créés", value: "150+" }},
      {{ name: "Clients satisfaits", value: "98%" }},
      {{ name: "Temps moyen de livraison", value: "2 semaines" }},
      {{ name: "Technologies maîtrisées", value: "15+" }},
    ];

    onMounted(() => {{
      document.title = "{title_text}";
    }});

    return {{
      fondImage,
      stats,
    }};
  }}
}});
</script>

<style scoped>
.highlight-container {{
  position: relative;
  display: inline-block;
}}

.highlight-background {{
  position: absolute;
  left: 0;
  bottom: 0;
  height: 90%;
  background-color: #fcd34d;
  z-index: -1;
  width: 0;
  border-radius: 8px;
}}

.highlight {{
  position: relative;
  z-index: 1;
  padding: 0 5px;
}}
</style>
"""
    # Sauvegarder le fichier Vue
    file_path = os.path.join(output_dir, f"{component_name}.vue")
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(component_content)
    print(f"Fichier généré : {file_path}")

    return url, component_name

def generate_routes_file(cities):
    """Génère le fichier de routes pour les villes."""
    with open(routes_file_path, "w", encoding="utf-8") as routes_file:
        routes_file.write("// townRoutes.ts - Fichier généré automatiquement\n")
        routes_file.write("import { RouteRecordRaw } from 'vue-router';\n")

        for city_info in cities:
            component_name = format_component_name(city_info["city"])
            routes_file.write(f"import {component_name} from '../townPages/{component_name}.vue';\n")

        routes_file.write("\nconst townRoutes: RouteRecordRaw[] = [\n")
        for city_info in cities:
            component_name = format_component_name(city_info["city"])
            path = f"/nos-agences/{city_info['region']}/{city_info['department']}/{city_info['city'].lower().replace(' ', '-')}"
            routes_file.write(f"  {{ path: '{path}', name: '{component_name}', component: {component_name} }},\n")
        routes_file.write("];\n\nexport default townRoutes;\n")

    print(f"Fichier des routes généré : {routes_file_path}")

def generate_sitemap(cities):
    """Génère le fichier sitemap basé sur les villes."""
    with open(sitemap_path, "w", encoding="utf-8") as sitemap_file:
        sitemap_file.write('<?xml version="1.0" encoding="UTF-8"?>\n')
        sitemap_file.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')

        for city_info in cities:
            url, _ = generate_city_component(city_info)
            sitemap_file.write(f"  <url>\n")
            sitemap_file.write(f"    <loc>{url}</loc>\n")
            sitemap_file.write(f"    <lastmod>{time.strftime('%Y-%m-%d')}</lastmod>\n")
            sitemap_file.write(f"    <changefreq>monthly</changefreq>\n")
            sitemap_file.write(f"    <priority>0.8</priority>\n")
            sitemap_file.write(f"  </url>\n")
            time.sleep(0.5)  # Délai pour éviter une surcharge

        sitemap_file.write('</urlset>\n')

    print(f"Sitemap généré : {sitemap_path}")

# Générer les fichiers
generate_routes_file(cities)
generate_sitemap(cities)
print("Tous les composants Vue, les routes et le sitemap ont été générés.")
