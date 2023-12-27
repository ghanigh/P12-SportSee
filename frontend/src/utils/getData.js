import apiCall from "./ApiCall";
import dataMocked from "./dataMocked";

/**
 * Récupère les données en fonction du type et de l'identifiant.
 * @param {string} type - Type de données à récupérer (ex: "USER_ACTIVITY").
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {Array} - Tableau contenant les données récupérées.
 */
export const getData = async (type, id) => {
  try {
     
        const activity = await apiCall.getUserActivity(id);
      
        const perform = apiCall.getUserPerformance(id);
     
        const sessions = apiCall.getUserAverageSessions(id);
    
        const user =  apiCall.getUserInfos(id);
      
        return { user, activity, sessions, perform,};
    }
   catch (error) {
    console.error(`Erreur lors de la récupération des données de type ${type} pour l'utilisateur ${id}:`, error);
    return null; // Vous pouvez retourner une valeur par défaut ou null en cas d'erreur
  }
};
