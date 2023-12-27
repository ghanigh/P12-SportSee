import { mockedData } from "./public/dataMocked.js";

// Données simulées pour USER_MAIN_DATA
export const USER_MAIN_DATA = [
  // ... données simulées ...
];

// Données simulées pour USER_ACTIVITY
export const USER_ACTIVITY = [
  // ... données simulées ...
];

// Données simulées pour USER_AVERAGE_SESSIONS
export const USER_AVERAGE_SESSIONS = [
  // ... données simulées ...
];

// Données simulées pour USER_PERFORMANCE
export const USER_PERFORMANCE = [
  // ... données simulées ...
];

/**
 * Récupère les informations sur l'utilisateur.
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {object} - Objet contenant les informations de l'utilisateur.
 */
export const getUserInfos = async (id) => {
  try {
    // Recherche de l'utilisateur dans USER_MAIN_DATA
    const res = USER_MAIN_DATA.find((el) => el.id == id);
    return { data: res };
  } catch (e) {
    // Gestion des erreurs
    console.log(e);
  }
};

/**
 * Récupère l'activité de l'utilisateur.
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {object} - Objet contenant les données d'activité de l'utilisateur.
 */
export const getUserActivity = async (id) => {
  try {
    // Recherche de l'activité de l'utilisateur dans USER_ACTIVITY
    const res = USER_ACTIVITY.find((el) => el.userId == id);
    return { data: res };
  } catch (e) {
    // Gestion des erreurs
    console.log(e);
  }
};

/**
 * Récupère la durée moyenne des sessions de l'utilisateur.
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {object} - Objet contenant la durée moyenne des sessions de l'utilisateur.
 */
export const getUserAverageSessions = async (id) => {
  try {
    // Recherche des sessions moyennes de l'utilisateur dans USER_AVERAGE_SESSIONS
    const res = USER_AVERAGE_SESSIONS.find((el) => el.userId == id);
    return { data: res };
  } catch (e) {
    // Gestion des erreurs
    console.log(e);
  }
};

/**
 * Récupère les performances de l'utilisateur.
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {object} - Objet contenant les performances de l'utilisateur.
 */
export const getUserPerformance = async (id) => {
  try {
    // Recherche des performances de l'utilisateur dans USER_PERFORMANCE
    const res = USER_PERFORMANCE.find((el) => el.userId == id);
    return { data: res };
  } catch (e) {
    // Gestion des erreurs
    console.log(e);
  }
};
