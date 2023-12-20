// Données simulées pour USER_MAIN_DATA
/**
   * Récupère les informations sur l'utilisateur.
   * @param {number} id - Identifiant de l'utilisateur.
   * @returns {object} - Objet contenant les informations de l'utilisateur.
   */
  export const getUserInfos = async (id) => {
    try {
      // Recherche de l'utilisateur dans USER_MAIN_DATA
      const res = process.env.USER_MAIN_DATA.find((el) => el.id == id);
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
      const res = process.env.USER_ACTIVITY.find((el) => el.userId == id);
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
      const res = process.env.USER_AVERAGE_SESSIONS.find((el) => el.userId == id);
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
      const res = process.env.USER_PERFORMANCE.find((el) => el.userId == id);
      return { data: res };
    } catch (e) {
      // Gestion des erreurs
      console.log(e);
    }
  };
  
  