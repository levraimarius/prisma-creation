import type { Component } from "vue";

export type ServiceCategory = "custom" | "wordpress";
export type PriceType = "starting" | "estimate";

export interface Service {
  id: string;
  title: string;
  priceType: PriceType;
  priceLabel: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  icon: ServiceIcon;
  popular: boolean;
  category: ServiceCategory;
}

export type ServiceIcon = Component;

export interface AnimationConfig {
  duration: number;
  easing: string;
  delay: number | ((el: Element, index: number) => number);
}
