import React from 'react';
import { Head, Nav } from '../styles/headerStyle';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

/**
 * Composant Header
 * Affiche l'en-tête de la page avec le logo et les liens de navigation.
 * @return {JSX}
 */
const Header = () => (
  <Head>
    {/* Logo de l'application */}
    <img src={logo} alt="sportSee" aria-label="logo sportSee" />

    {/* Liens de navigation */}
    <Nav>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="#">Profil</NavLink>
      <NavLink to="#">Réglages</NavLink>
      <NavLink to="#">Communauté</NavLink>
    </Nav>
  </Head>
);

export default Header;
