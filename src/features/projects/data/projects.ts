import type { Project } from "../types/project.types";
import { barberApp } from "./barber-app";
import { drinksLanding } from "./drinks-landing";
import { homeEstate } from "./home-estate";
import { restaurantAdminPanel } from "./restaurant-admin-panel";
import { restaurantLanding } from "./restaurant-landing";
import { veterinaryApp } from "./veterinary-app";

export async function getProjects(): Promise<Project[]> {
  return [
    restaurantLanding,
    drinksLanding,
    restaurantAdminPanel,
    barberApp,
    veterinaryApp,
    homeEstate,
  ];
}

export async function getProjectBySlug(slug: string) {
  return (await getProjects()).find((project) => project.slug === slug);
}
