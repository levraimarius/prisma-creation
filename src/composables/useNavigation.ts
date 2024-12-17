import { ref, onMounted, onUnmounted } from "vue";

export interface NavigationItem {
  name: string;
  href: string;
}

export const useNavigation = () => {
  const navigation: NavigationItem[] = [
    { name: "Accueil", href: "#accueil" },
    { name: "Nos services", href: "#services" },
    { name: "Questions", href: "#faq" },
    { name: "Avis", href: "#avis" },
    { name: "Contact", href: "#contact" },
  ];

  const activeSection = ref("accueil");

  const detectSectionInView = () => {
    const sections = navigation.map((item) =>
      document.querySelector(item.href)
    ) as HTMLElement[];

    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach((section) => {
      if (
        section &&
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        activeSection.value = section.id;
      }
    });
  };

  onMounted(() => {
    window.addEventListener("scroll", detectSectionInView);
    detectSectionInView();
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", detectSectionInView);
  });

  return {
    navigation,
    activeSection,
  };
};
