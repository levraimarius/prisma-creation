import { ref, computed } from "vue";
import {
  ComputerDesktopIcon,
  ShoppingBagIcon,
  CommandLineIcon,
  GlobeAltIcon,
  ShoppingCartIcon,
  NewspaperIcon,
} from "@heroicons/vue/24/outline";
import type { Service, ServiceCategory } from "../types";

export function useServices() {
  const selectedCategory = ref<ServiceCategory>("custom");

  const allServices: Service[] = [
    // Custom Category
    {
      id: "custom-showcase",
      category: "custom",
      title: "Site vitrine personnalisé",
      priceType: "starting",
      priceLabel: "À partir de",
      price: "999", // Changed to string
      period: "€",
      description:
        "Un site entièrement conçu selon vos besoins, avec un design unique qui reflète votre identité visuelle. Idéal pour les entreprises cherchant une présence en ligne soignée et des fonctionnalités sur mesure.",
      features: [
        "Design 100 % original.",
        "Pages clés incluses.",
        "Fonctionnalités spécifiques.",
        "Optimisation SEO.",
        "Adapté aux mobiles.",
        "Assistance 3 mois.",
      ],
      icon: ComputerDesktopIcon,
      popular: true,
    },
    {
      id: "custom-ecommerce",
      category: "custom",
      title: "Plateforme web sur mesure",
      priceType: "starting",
      priceLabel: "À partir de",
      price: "3999", // Changed to string
      period: "€",
      description:
        "Un site interactif adapté aux projets complexes comme des marketplaces ou portails collaboratifs. Idéal pour répondre à vos besoins spécifiques avec des outils performants.",
      features: [
        "Analyse des besoins.",
        "Back-end robuste.",
        "Gestion utilisateurs.",
        "Sécurité renforcée.",
        "Performances optimisées.",
        "Support 6 mois.",
      ],
      icon: ShoppingBagIcon,
      popular: false,
    },
    {
      id: "custom-application",
      category: "custom",
      title: "Application web avancée",
      priceType: "starting",
      priceLabel: "À partir de",
      price: "9999", // Changed to string
      period: "€",
      description:
        "Un outil web personnalisé pour répondre à vos besoins spécifiques comme la gestion interne ou les solutions SaaS, avec des fonctionnalités avancées selon vos besoins.",
      features: [
        "Développement full-stack.",
        "Intégration CRM/ERP.",
        "Interfaces intuitives.",
        "Hébergement inclus.",
        "Maintenance complète.",
        "Formation équipe.",
      ],
      icon: CommandLineIcon,
      popular: false,
    },
    // WordPress Category
    {
      id: "wordpress-showcase",
      category: "wordpress",
      title: "Site vitrine WordPress",
      priceType: "starting",
      priceLabel: "À partir de",
      price: "899", // Changed to string
      period: "€",
      description:
        "Un site vitrine professionnel et rapide, basé sur un thème premium WordPress. Idéal pour présenter efficacement votre activité en ligne.",
      features: [
        "Thème premium.",
        "Pages standards incluses.",
        "Plugins essentiels.",
        "Design responsive.",
        "Optimisation SEO.",
        "Livraison 2 semaines.",
      ],
      icon: GlobeAltIcon,
      popular: true,
    },
    {
      id: "wordpress-blog",
      category: "wordpress",
      title: "Site WordPress optimisé pour le SEO",
      priceType: "starting",
      priceLabel: "À partir de",
      price: "1999", // Changed to string
      period: "€",
      description:
        "Un site WordPress optimisé pour augmenter votre visibilité grâce à des outils performants et des techniques avancées de référencement.",
      features: [
        "Design SEO-friendly.",
        "Contenu optimisé.",
        "Audit SEO complet.",
        "Plugins avancés.",
        "Performances rapides.",
        "Suivi 3 mois.",
      ],
      icon: NewspaperIcon,
      popular: false,
    },
    {
      id: "wordpress-ecommerce",
      category: "wordpress",
      title: "WooCommerce",
      priceType: "starting",
      priceLabel: "À partir de",
      price: "3499", // Changed to string
      period: "€",
      description:
        "Une boutique en ligne fonctionnelle et simple à gérer, basée sur WooCommerce. Idéal pour développer vos ventes en ligne avec des outils performants.",
      features: [
        "WooCommerce configuré.",
        "Paiement sécurisé.",
        "Gestion des stocks.",
        "Codes promo inclus.",
        "Thème personnalisé.",
        "Formation boutique.",
      ],
      icon: ShoppingCartIcon,
      popular: false,
    },
  ];

  const services = computed(() => {
    return allServices.filter(
      (service) => service.category === selectedCategory.value
    );
  });

  const toggleCategory = () => {
    selectedCategory.value =
      selectedCategory.value === "custom" ? "wordpress" : "custom";
  };

  return {
    services,
    selectedCategory,
    toggleCategory,
  };
}
