import type { Route } from "./+types/home";
import { Pokemon } from "~/pokemon/pokemon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tipos" },
    { name: "description", content: "Tipos de Pokemon" },
  ];
}

export default function home() {
  return <Pokemon />;
}
