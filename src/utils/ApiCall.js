import axios from "axios";

// Création d'une instance Axios avec une URL de base
const api = axios.create({
  baseURL: `http://localhost:3000/`
});

/**
 * Récupère l'activité de l'utilisateur.
 * @param {string} id - Identifiant de l'utilisateur.
 * @returns {Array} - Tableau des données d'activité.
 */
export const getUserActivity = async (id) => {
  try {
    // Requête GET pour obtenir les données d'activité de l'utilisateur
    const res = await api.get(`http://localhost:3000/user/${id}/activity`);
    return res.data;
  } catch (e) {
    // Gestion des erreurs
    console.log(e);
  }
};

/**
 * Récupère les informations sur l'utilisateur.
 * @param {string} id - Identifiant de l'utilisateur.
 * @returns {object} - Objet contenant les informations de l'utilisateur.
 */
export const getUserInfos = async (id) => {
  try {
    // Requête GET pour obtenir les informations de l'utilisateur
    const res = await api.get(`http://localhost:3000/user/${id}`);
    return res.data;
  } catch (e) {
    // Gestion des erreurs
    console.log(e);
  }
};

/**
 * Récupère les performances de l'utilisateur.
 * @param {string} id - Identifiant de l'utilisateur.
 * @returns {object} - Objet contenant les performances de l'utilisateur.
 */
export const getUserPerformance = async (id) => {
  try {
    // Requête GET pour obtenir les performances de l'utilisateur
    const res = await api.get(`http://localhost:3000/user/${id}/performance`);
    return res.data;
  } catch (e) {
    // Gestion des erreurs
    console.log(e);
  }
};

/**
 * Récupère la durée moyenne des sessions de l'utilisateur.
 * @param {string} id - Identifiant de l'utilisateur.
 * @returns {object} - Objet contenant la durée moyenne des sessions de l'utilisateur.
 */
export const getUserAverageSessions = async (id) => {
  try {
    // Requête GET pour obtenir la durée moyenne des sessions de l'utilisateur
    const res = await api.get(`http://localhost:3000/user/${id}/average-sessions`);
    return res.data;
  } catch (e) {
    // Gestion des erreurs
    console.log(e);
  }
};
