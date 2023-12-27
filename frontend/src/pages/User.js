import React, { useState, useEffect } from "react";
import { getData } from "../utils/getData";
import { useParams } from "react-router";
import SideBar from "../components/SideBar";
import UserInfos from "../components/UserInfos";
import { Main, Container, Content, BottomChart } from "../styles/userStyle";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/proteines-icon.svg";
import glucidesIcon from "../assets/glucides-icon.svg";
import lipidesIcon from "../assets/lipides-icon.svg";
import BarCharts from "../components/BarChart";
import ScoreChart from "../components/ScoreChart";
import KeyData from "../components/KeyData";
import UserAverageSessions from "../components/UserAverageSession";
import UserPerformance from "../components/UserPerformance";

/**
 * Composant représentant le tableau de bord de l'utilisateur.
 * @return {JSX} Élément JSX représentant la structure du tableau de bord.
 */
export default function User() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const request = await getData(process.env.CONNECT_API, id);
      if (!request) return alert("Erreur de données");
      setData(request.data);
    };
    fetchData();
  }, [id]);

  // Si les données ne sont pas disponibles, retourne null
  if (data.length === 0) return null;

  return (
    <Main>
      {/* Barre latérale contenant les icônes des activités */}
      <SideBar />

      {/* Conteneur principal */}
      <Container>
        {/* Informations utilisateur et titre de bienvenue */}
        <UserInfos name={data.userInfos.firstName} />

        {/* Contenu principal du tableau de bord */}
        <Content>
          <section>
            {/* Graphiques à barres représentant l'activité quotidienne de l'utilisateurs */}
            <BarCharts />

            {/* Section inférieure du tableau de bord contenant plusieurs graphiques */}
            <BottomChart>
              {/* Graphique représentant la durée moyenne des sessions de l'utilisateur */}
              <UserAverageSessions />

              {/* Graphique radar représentant les performances de l'utilisateur */}
              <UserPerformance />

              {/* Graphique circulaire représentant le score d'activité de l'utilisateur */}
              <ScoreChart data={data} />
            </BottomChart>
          </section>

          {/* Section latérale contenant les informations clés */}
          <aside>
            {/* Informations clés sur les calories */}
            <KeyData
              icon={caloriesIcon}
              info={`${data.keyData.calorieCount}kCal`}
              text="Calories"
            />

            {/* Informations clés sur les protéines */}
            <KeyData
              icon={proteinsIcon}
              info={`${data.keyData.proteinCount}g`}
              text="Protéines"
            />

            {/* Informations clés sur les glucides */}
            <KeyData
              icon={glucidesIcon}
              info={`${data.keyData.carbohydrateCount}g`}
              text="Glucides"
            />

            {/* Informations clés sur les lipides */}
            <KeyData
              icon={lipidesIcon}
              info={`${data.keyData.lipidCount}g`}
              text="Lipides"
            />
          </aside>
        </Content>
      </Container>
    </Main>
  );
};
