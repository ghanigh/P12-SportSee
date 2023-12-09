// Données simulées pour USER_MAIN_DATA
const USER_MAIN_DATA = [
    {
      id: 12,
      userInfos: {
        firstName: 'Ghani',
        lastName: 'Manseur',
        age: 31,
      },
      todayScore: 0.12,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50
      }
    },
    {
      id: 18,
      userInfos: {
        firstName: 'Djoulie',
        lastName: 'Dav',
        age: 34,
      },
      score: 0.3,
      keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbohydrateCount: 150,
        lipidCount: 120
      }
    }
  ];
  
  // Données simulées pour USER_ACTIVITY
  const USER_ACTIVITY = [
    {
      userId: 12,
      sessions: [
        // ... données de sessions pour l'utilisateur 12 ...
      ]
    },
    {
      userId: 18,
      sessions: [
        // ... données de sessions pour l'utilisateur 18 ...
      ]
    }
  ];
  
  // Données simulées pour USER_AVERAGE_SESSIONS
  const USER_AVERAGE_SESSIONS = [
    {
      userId: 12,
      sessions: [
        // ... données de sessions moyennes pour l'utilisateur 12 ...
      ]
    },
    {
      userId: 18,
      sessions: [
        // ... données de sessions moyennes pour l'utilisateur 18 ...
      ]
    }
  ];
  
  // Données simulées pour USER_PERFORMANCE
  const USER_PERFORMANCE = [
    {
      userId: 12,
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity'
      },
      data: [
        // ... données de performance pour l'utilisateur 12 ...
      ]
    },
    {
      userId: 18,
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity'
      },
      data: [
        // ... données de performance pour l'utilisateur 18 ...
      ]
    }
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
  