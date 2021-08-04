import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BackgroundDefault from '~/components/BackgroundDefault';
import {Container, OrderActionButton, OrderActionButtonText} from './styles';

export default function OrderDetailsActionBttn({navigation, order}) {
  return (
    <BackgroundDefault>
      <Container>
        <OrderActionButton
          onPress={() => navigation.navigate('OrderReportProblem', {order})}>
          <Icon size={25} name="clear" color="#cc2727" />
          <OrderActionButtonText>Informar {'\n'}Problema</OrderActionButtonText>
        </OrderActionButton>

        <OrderActionButton
          onPress={() => navigation.navigate('OrderListProblem', {order})}>
          <Icon size={25} name="info-outline" color="#ccc927" />
          <OrderActionButtonText>
            Visualizar {'\n'}Problemas
          </OrderActionButtonText>
        </OrderActionButton>

        <OrderActionButton>
          <Icon size={25} name="done-outline" color="#7D40E7" />
          <OrderActionButtonText
            onPress={() => navigation.navigate('OrderConfirm', {order})}>
            Confirmar {'\n'}Entrega
          </OrderActionButtonText>
        </OrderActionButton>
      </Container>
    </BackgroundDefault>
  );
}
