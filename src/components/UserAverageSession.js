import React, { useState, useEffect } from "react";
import { Container, Title } from "../styles/userAverageSessionStyle";
import { getData } from '../utils/getData';
import { useParams } from "react-router";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import SessionsToolType from "./SessionsToolType.js";

/**
 * Composant UserAverageSessions
 * Affiche un graphique en ligne avec la durée moyenne des sessions de l'utilisateur.
 * @return {JSX}
 */
export default function UserAverageSessions() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const request = await getData("USER_AVERAGE_SESSIONS", id);
      if (!request) return alert("Erreur de récupération des données");
      
      const formatData = request.data.sessions.map((data) => {
        // Formatage du jour de la semaine
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
          default:
            return { ...data };
        }
      });
      setData(formatData);
    };
    fetchData();
  }, [id]);

  if (data.length === 0) return null;

  return (
    <Container>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          strokeWidth={1}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              // Gestion du fond de couleur lors du survol
              let div = document.querySelector('.bUPtxZ');
              let windowWidth = div.clientWidth;
              let mouseXpercentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              );
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
            }
          }}
        >
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke="red"
            padding={{ right: 5, left: 5 }}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.8 }}
          />
          <YAxis dataKey="sessionLength" domain={[0, "dataMax + 30"]} hide={true} />
          <Tooltip content={<SessionsToolType />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
