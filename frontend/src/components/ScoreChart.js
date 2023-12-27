import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Title,
  Text,
  Score,
} from "../styles/scoreChartStyle";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/**
 * Composant ScoreChart
 * Affiche un PieChart avec la valeur du score.
 * @param {object} { data } - Les données du score.
 * @return {JSX}
 */
export default function ScoreChart({ data }) {
  // Formatage des données pour le PieChart
  const scoreData = [
    { value: data.todayScore || data.score },
    { value: 1 - (data.todayScore || data.score) },
  ];

  return (
    <Container>
      {/* Titre */}
      <Title>Score</Title>

      {/* Conteneur responsive pour le PieChart */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* Configuration du PieChart */}
          <Pie
            data={scoreData}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
          >
            {/* Cellules du PieChart avec des couleurs différentes */}
            {scoreData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                cornerRadius={index === 0 ? 10 : 0}
                fill={index === 0 ? "#ff0000" : "#FBFBFB"}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Texte des informations */}
      <Text>
        {/* Affichage du score */}
        <Score>{scoreData[0].value * 100}%</Score>
        <br />
        de votre objectif
      </Text>
    </Container>
  );
}

// Propriétés attendues par le composant
ScoreChart.propTypes = {
  data: PropTypes.object,
};
