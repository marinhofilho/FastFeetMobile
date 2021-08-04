import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {format, parseISO} from 'date-fns';
import {showMessage} from 'react-native';

import api from '~/services/api';
import PendingOrderDetails from '~/components/PendingOrderDetails';
import DeliveredOrderDetails from '~/components/DeliveredOrderDetails';

import {
  Container,
  Header,
  HeaderText,
  SelectOrderContainer,
  FilterButton,
  FilterText,
  PendingList,
  DeliveredList,
} from './styles';

export default function ListOrders({navigation}) {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('pending');
  const userData = useSelector((store) => store.auth.id);

  function parseOrders(items) {
    return items.map((order) => ({
      canceledStatus: order.canceled_at ? 'Cancelada' : '',
      deliveredStatus: order.end_date ? 'Entregue' : '',
      takenStatus: order.start_date ? 'Retirada' : '',
      pendingStatus: order.start_date === null ? 'Pendente' : '',
      ...order,
      formattedId: order.id < 10 ? `0${order.id}` : String(order.id),
      createFormattedDate: order.created_at
        ? format(parseISO(order.created_at), 'dd/MM/yyyy')
        : '',
      endFormattedDate: order.end_date
        ? format(parseISO(order.end_date), 'dd/MM/yyy')
        : '',
      startFormattedDate: order.start_date
        ? format(parseISO(order.start_date), 'dd/MM/yyy')
        : '',
    }));
  }

  const loadOrders = useCallback(async () => {
    setOrders([]);
    try {
      if (filter === 'pending') {
        const remainingOrders = `/deliverymen/${userData}/deliveries`;
        const response = await api.get(remainingOrders);
        const data = response.data.orders;
        setOrders(parseOrders(data));
      } else if (filter === 'delivered') {
        const deliveredOrders = `/deliverymen/${userData}/deliveriesfinished`;
        const response = await api.get(deliveredOrders);
        const data = response.data.orders;
        setOrders(parseOrders(data));
      }
    } catch (err) {
      showMessage({
        message: 'Falha na requisição',
        description: err.response
          ? err.response.data.error
          : 'Erro ao buscar entregas, tente mais tarde',
        type: 'danger',
      });
    }
  }, [userData, filter]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  return (
    <Container>
      <Header>
        <HeaderText>Entregas</HeaderText>
        <SelectOrderContainer>
          <FilterButton onPress={() => setFilter('pending')}>
            <FilterText selected={filter === 'pending'}>Pendentes</FilterText>
          </FilterButton>
          <FilterButton onPress={() => setFilter('delivered')}>
            <FilterText selected={filter === 'delivered'}>
              Finalizadas
            </FilterText>
          </FilterButton>
        </SelectOrderContainer>
      </Header>
      {filter === 'pending' ? (
        <PendingList
          data={orders}
          keyExtractor={(order) => String(order.id)}
          renderItem={({item}) => (
            <PendingOrderDetails navigation={navigation} order={item} />
          )}
        />
      ) : (
        <DeliveredList
          data={orders}
          keyExtractor={(order) => String(order.id)}
          renderItem={({item}) => (
            <DeliveredOrderDetails navigation={navigation} order={item} />
          )}
        />
      )}
    </Container>
  );
}

ListOrders.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
