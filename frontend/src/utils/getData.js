import { getUserActivity, getUserAverageSessions, getUserInfos, getUserPerformance } from "./ApiCall";
import { getUserActivityMockedData, getUserAverageSessionsMockedData, getUserInfosMockedData, getUserPerformanceMockedData } from "./dataMocked";

/**
 * Récupère les données en fonction du type et de l'identifiant.
 * @param {string} type - Type de données à récupérer (ex: "USER_ACTIVITY").
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {Array} - Tableau contenant les donnees récupérées.
 */
export const getData = async (type, id) => {
  try {

     if(type == true) { 
        const activity = await getUserActivity(id);
      
        const perform = await getUserPerformance(id);
     
        const sessions = await getUserAverageSessions(id);
    
        const user =  await getUserInfos(id);
      
        return { user, activity, sessions, perform};
      }
      else{
      const activity = await getUserActivityMockedData(id);
      
      const perform = await getUserPerformanceMockedData(id);
   
      const sessions = await getUserAverageSessionsMockedData(id);
  
      const user = await getUserInfosMockedData(id);
    
      return { user, activity, sessions, perform}}
    }
   catch (error) {
    console.error(`Erreur lors de la récupération des données de type ${type} pour l'utilisateur ${id}:`, error);
    return null; // On peux retourner une valeur par défaut ou null en cas d'erreur
  }
};
