import mockedData from '../mock/dataMocked';

/**
 * Récupère les informations sur l'utilisateur.
 *
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {object} - Objet contenant les informations de l'utilisateur.
 */
export function getUserInfosMockedData(id) {
  try {
    // Recherche de l'utilisateur dans USER_MAIN_DATA
    const user = mockedData.USER_MAIN_DATA.find((el) => el.id === id);
    return { data: user };
  } catch (e) {
    // Gestion des erreurs
    console.log(e);
  }
}

/**
 * Récupère l'activité de l'utilisateur.
 *
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {object} - Objet contenant les données d'activité de l'utilisateur.
 */
export function getUserActivityMockedData(id) {
  try {
    // Recherche de l'activité de l'utilisateur dans USER_ACTIVITY
    const activity = mockedData.USER_ACTIVITY.find((el) => el.userId === id);
    return { data: activity };
  } catch (e) {
    // Gestion des erreurs
    console.log(e);
  }
}

/**
 * Récupère la durée moyenne des sessions de l'utilisateur.
 *
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {object} - Objet contenant la durée moyenne des sessions de l'utilisateur.
 */
export function getUserAverageSessionsMockedData(id) {
  try {
    // Recherche des sessions moyennes de l'utilisateur dans USER_AVERAGE_SESSIONS
    const averageSessions = mockedData.USER_AVERAGE_SESSIONS.find((el) => el.userId === id);
    return { data: averageSessions };
  } catch (e) {
    // Gestion des erreurs
    console.log(e);
  }
}

/**
 * Récupère les performances de l'utilisateur.
 *
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {object} - Objet contenant les performances de l'utilisateur.
 */
export function getUserPerformanceMockedData(id) {
  try {
    // Recherche des performances de l'utilisateur dans USER_PERFORMANCE
    const performance = mockedData.USER_PERFORMANCE.find((el) => el.userId === id);
    return { data: performance };
  } catch (e) {
    // Gestion des erreurs
    console.log(e);
  }
}
