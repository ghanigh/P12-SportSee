import React from 'react';
import PropTypes from 'prop-types'; 
import { Wrapper, Infos, InfosData, InfosText } from "../styles/keyDataStyle";

/**
 * Composant KeyData
 * Affiche une icône avec des informations utilisateur.
 * @param  {string} icon - L'URL de l'icône.
 * @param  {string} info - Les données informatives à afficher.
 * @param  {string} text - Le texte des informations.
 * @return {JSX}
 */
export default function KeyData({ icon, info, text }) {
     
    return (  
        <Wrapper>
            {/* Icône */}
            <img src={icon} alt="calories icon" />

            {/* Conteneur des informations */}
            <Infos>
                {/* Données informatives */}
                <InfosData>{info}</InfosData>

                {/* Texte des informations */}
                <InfosText>{text}</InfosText>
            </Infos>
        </Wrapper>
    );
}

// Propriétés attendues par le composant
KeyData.propTypes = {
    icon: PropTypes.any,
    info: PropTypes.string,
    text: PropTypes.string,
}
