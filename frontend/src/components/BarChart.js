import React, { useState, useEffect } from 'react';
import { getData } from '../utils/getData';
import { useParams } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ActivityToolType from './ActivityToolType';
import { Wrapper, Head, Title, Text, Icon, Legend, Info } from '../styles/barChartStyle';

export default function BarCharts() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await getData('USER_ACTIVITY', id,);
        if (!request) throw new Error('Erreur de données');
        setData(request.data.sessions);
      } catch (error) {
        console.error(error);
        alert('Erreur de données');
      }
    };
    fetchData();
  }, [id]);

  // Si aucune donnée n'est disponible, retourne un message d'erreur
  if (data.length === 0) {
    return <div>Les données ne sont pas disponibles.</div>;
  }

  // Formatage de la propriété "day" dans les données avec clés uniques
  const formattedData = data.map((item, index) => ({
    ...item,
    day: index + 1,
    // Ajoutez une clé unique pour chaque élément de la liste générée
    key: `day-${index + 1}`,
  }));

  return (
    <Wrapper>
      <Head>
        <Title>Activité quotidienne</Title>
        <Legend>
          <Info>
            <Icon color="#282D30" />
            <Text>Poids (kg)</Text>
          </Info>
          <Info>
            <Icon color="#E60000" />
            <Text>Calories brûlées (kCal)</Text>
          </Info>
        </Legend>
      </Head>
      <ResponsiveContainer height={200}>
        <BarChart data={formattedData} barGap={8} barCategoryGap={1}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14 }} dy={15} stroke="1 1" />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={['dataMin - 2', 'dataMax + 1']}
            tickCount={4}
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
          <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']} hide />
          <Tooltip content={<ActivityToolType />} />
          <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
          <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}
