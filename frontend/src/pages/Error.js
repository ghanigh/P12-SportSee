import React from 'react';
import { Link } from 'react-router-dom';
import { Main, Title } from "../styles/errorStyle";

/**
 * Component representing the error page for 404 Not Found.
 * @return {JSX}
 */
export default function Error() {
  return (
    <Main>
      <Title>404</Title>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to='/'>Retourner sur la page d’accueil</Link>
    </Main>
  );
}
