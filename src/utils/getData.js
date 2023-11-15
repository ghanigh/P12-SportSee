//import { getUserActivity,getUserAverageSessions, getUserInfos, getUserPerformance, } from "./ApiCall";
import { getUserActivity, getUserAverageSessions, getUserInfos, getUserPerformance } from "./dataMocked";

/**
 * Récupère les données en fonction du type et de l'identifiant.
 * @param {string} type - Type de données à récupérer (ex: "USER_ACTIVITY").
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {Array} - Tableau contenant les données récupérées.
 */
export const getData = async (type, id) => {
  let data = [];

  switch (type) {
    case "USER_ACTIVITY":
      data = await getUserActivity(id);
      break;
    case "USER_PERFORMANCE":
      data = await getUserPerformance(id);
      break;
    case "USER_AVERAGE_SESSIONS":
      data = await getUserAverageSessions(id);
      break;
    case "USER_MAIN_DATA":
      data = await getUserInfos(id);
      break;
  }
  return data;
};
