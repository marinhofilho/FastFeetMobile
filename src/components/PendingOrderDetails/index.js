import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  Header,
  Title,
  Bottom,
  BottomItem,
  Small,
  SubTitle,
  Button,
  ButtonTitle,
} from './styles';

import Timeline from '~/components/Timeline';

export default function PendingOrderDetails({order, navigation}) {
  return (
    <Container>
      <Content>
        <Header>
          <Icon size={25} name="directions-bike" color="#7D40E7" />
          <Title>{`Encomenda ${order.id}`}</Title>
        </Header>
        <Timeline start={order.start_date} end={order.end_date} />
      </Content>
      <Bottom>
        <BottomItem>
          <Small>Data</Small>
          <SubTitle>{order.createFormattedDate}</SubTitle>
        </BottomItem>
        <BottomItem>
          <Small>Cidade</Small>
          <SubTitle>{order.recipient.city}</SubTitle>
        </BottomItem>
        <BottomItem>
          <Button onPress={() => navigation.navigate('OrderDetails', {order})}>
            <Small />
            <ButtonTitle>Ver detalhes</ButtonTitle>
          </Button>
        </BottomItem>
      </Bottom>
    </Container>
  );
}

PendingOrderDetails.defaultProps = {
  order: PropTypes.shape({
    formattedId: PropTypes.string.isRequired,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    formattedDate: PropTypes.string.isRequired,
    recipient: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }),
};
