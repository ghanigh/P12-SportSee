import React, { useState, useEffect } from "react";
import { Container, Title } from "../styles/userAverageSessionStyle";
import { getData } from '../utils/getData';
import { useParams } from "react-router";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import SessionsToolType from "./SessionsToolType.js";

const dayOfWeekMap = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};

export default function UserAverageSessions() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const request = await getData("USER_AVERAGE_SESSIONS", id);
      if (!request) return alert("Erreur de récupération des données");
      
      const formatData = request.data.sessions.map((data) => ({
        ...data,
        day: dayOfWeekMap[data.day] || data.day,
      }));

      setData(formatData);
    };

    fetchData();
  }, [id]);

  if (data.length === 0) return null;

  const handleMouseMove = (e) => {
    if (e.isTooltipActive === true) {
      // Gestion du fond de couleur lors du survol
      const div = document.querySelector('.bUPtxZ');
      if (div) {
        const windowWidth = div.clientWidth;
        const mouseXpercentage = Math.round(
          (e.activeCoordinate.x / windowWidth) * 100
        );
        div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
      }
    }
  };

  return (
    <Container>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          strokeWidth={1}
          onMouseMove={handleMouseMove}
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
