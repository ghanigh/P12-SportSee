import React from "react";
import { Container, Title, Text, Score } from "../styles/scoreChartStyle";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";

/**
 * Composant ScoreChart
 * Affiche un PieChart avec la valeur du score.
 * @param  {object} {data} - Les données du score.
 * @return {JSX}
 */
export default function ScoreChart({ data }) {
  // Formatage des données pour le PieChart
  const score = [
    { value: data.todayScore || data.score },
    { value: 1 - data.todayScore || data.score },
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
            data={score}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
          >
            {/* Cellules du PieChart avec des couleurs différentes */}
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell
                  key={`cell-${index}`}
                  cornerRadius={10}
                  fill="#ff0000"
                />
              ) : (
                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Texte des informations */}
      <Text>
        {/* Affichage du score */}
        <Score>{score[0].value * 100}%<br /></Score>
        de votre
        <br />
        objectif
      </Text>
    </Container>
  );
}

// Propriétés attendues par le composant
ScoreChart.propTypes = {
  data: PropTypes.object,
};
