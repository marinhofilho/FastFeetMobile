import React, {useState, useCallback, useEffect} from 'react';

import api from '~/services/api';
import ProblemDetailed from '~/components/ProblemDetailed';

import {Container, HeaderBackground, PageTitle, ProblemsList} from './styles';

export default function OrderListProblem({navigation, route}) {
  const {order} = route.params;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      setProblems([]);
      try {
        const response = await api.get(`problems/${order.id}`);
        setProblems(response.data);
      } catch (err) {
        // console.tron.log(err);
      }
    }
    loadOrders();
  }, []);

  return (
    <Container>
      <HeaderBackground />
      <PageTitle>Encomenda {order.id}</PageTitle>
      <ProblemsList
        data={problems}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <ProblemDetailed navigation={navigation} problem={item} />
        )}
      />
    </Container>
  );
}
