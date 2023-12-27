import React from "react";
import { NavLink } from "react-router-dom";
import { Main, Title } from "../styles/homeStyle";

/**
 * Composant représentant la page d'accueil avec la sélection d'utilisateurs.
 * @return {JSX} Élément JSX représentant la structure de la page d'accueil.
 */
export default function Home() {
  return (
    <Main>
      {/* En-tête de la page d'accueil */}
      <Title>Sélectionner un utilisateur</Title>

      {/* Liens de navigation vers les pages d'utilisateurs avec des emojis représentant chaque utilisateur */}
      <NavLink to="user/12">👦 Ghani </NavLink>
      <NavLink to="user/18">👩 Ju </NavLink>
    </Main>
  );
}
