import React from 'react';
import PropTypes from 'prop-types'; 
import { Wrapper, Infos, InfosData, InfosText } from '../styles/keyDataStyle';

/**
 * Composant KeyData
 * Affiche une icône avec des informations utilisateur.
 * @param  {Object} props - Les propriétés du composant.
 * @param  {string} props.icon - L'URL de l'icône.
 * @param  {string} props.info - Les données informatives à afficher.
 * @param  {string} props.text - Le texte des informations.
 * @return {JSX}
 */
const KeyData = ({ icon, info, text }) => (  
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

// Propriétés attendues par le composant
KeyData.propTypes = {
  icon: PropTypes.any.isRequired,
  info: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default KeyData;
