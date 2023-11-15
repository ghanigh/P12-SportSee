import React from "react";
import { Container, Text } from "../styles/sessionsToolTypeStyle";
import PropTypes from "prop-types";

/**
 * Composant SessionsToolType
 * Affiche le temps d'une session sous forme de tooltip.
 * @param  {boolean} active - Indique si le tooltip est actif.
 * @param  {array} payload - Les données de la session.
 * @return {JSX}
 */
export default function SessionsToolType({ active, payload }) {
  // Vérifie si le tooltip est actif
  if (active) {
    // Renvoie le contenu du tooltip avec la durée de la session
    return (
      <Container>
        <Text>{payload[0].value}min</Text>
      </Container>
    );
  }
  // Si le tooltip n'est pas actif, renvoie null
  return null;
}

// Propriétés attendues par le composant
SessionsToolType.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
