import React from 'react';
import { Container, Text } from "../styles/activityToolTypeStyle";
import PropTypes from 'prop-types';

/**
 * Composant ActivityToolType
 * Crée un infobulle personnalisé pour le graphique en barres d'activité de l'utilisateur.
 *
 * @param  {boolean} active - Indique si l'infobulle est active.
 * @param  {array} payload - Données associées au point de la barre survolé.
 * @return {JSX} - Élément JSX représentant l'infobulle.
 */
export default function ActivityToolType({ active, payload }) {
    // Vérifie si l'infobulle est active
    if (active) {
        // Retourne l'infobulle avec les données de poids et de calories
        return (
            <Container>
                <Text>{payload[0].value}kg</Text>
                <Text>{payload[1].value}Kcal</Text>
            </Container>
        );
    }
    // Si l'infobulle n'est pas active, retourne null
    return null;
}

// Propriétés attendues par le composant
ActivityToolType.propTypes = {
    active: PropTypes.bool, // Indique si l'infobulle est active
    payload: PropTypes.array, // Données associées au point de la barre survolé
};
