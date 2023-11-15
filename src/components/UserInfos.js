import React from 'react';
import PropTypes from 'prop-types'; 
import {Head, Name} from "../styles/userInfosStyle";

/**
 * Composant UserInfos
 * Affiche le nom d'utilisateur avec un message de félicitations.
 * @param {string} name - Le nom d'utilisateur.
 * @return {JSX}
 */
export default function UserInfos({ name }) {
  return (  
    <Head>
      <h1>Bonjour <Name>{name}</Name></h1>
      <span>Félicitations ! Vous avez explosé vos objectifs hier 👏</span>
    </Head>
  );
}

UserInfos.propTypes = {
  name: PropTypes.string,
};
