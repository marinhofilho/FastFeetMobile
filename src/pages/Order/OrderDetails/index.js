import React, {useEffect, useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StatusBar} from 'react-native';
import BackgroundDefault from '~/components/BackgroundDefault';
import OrderDetailsActionBttn from '~/components/OrderDetailsActionBttn';

import {
  HeaderBackground,
  Container,
  FirstBox,
  HeaderText,
  HeadInfo,
  InfoText,
  DateContainer,
  ContainerLine,
  SecondBox,
  DateContainerLine,
} from './styles';

export default function OrderDetails({route, navigation}) {
  const {order} = route.params;
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="purple" />
      <BackgroundDefault>
        <HeaderBackground />
        <Container>
          <FirstBox>
            <ContainerLine>
              <Icon size={25} name="directions-bike" color="#7D40E7" />

              <HeaderText>Informações da entrega</HeaderText>
            </ContainerLine>
            <HeadInfo>DESTINATÁRIO</HeadInfo>
            <InfoText>{order.recipient.name}</InfoText>
            <HeadInfo>ENDEREÇO DE ENTREGA</HeadInfo>
            <InfoText>
              {`Rua ${order.recipient.street}, n. ${order.recipient.number}, ${order.recipient.city}, ${order.recipient.state}, ${order.recipient.cep}`}
              {order.recipient.addition
                ? `${'\n'}Complemento: ${order.recipient.addition}`
                : ''}
            </InfoText>
            <HeadInfo>PRODUTO</HeadInfo>
            <InfoText>{order.product}</InfoText>
          </FirstBox>
          <SecondBox>
            <ContainerLine>
              <Icon size={25} name="folder-open" color="#7D40E7" />
              <HeaderText>Situação da entrega</HeaderText>
            </ContainerLine>
            <HeadInfo>STATUS</HeadInfo>
            <InfoText>
              {order.canceledStatus ||
                order.deliveredStatus ||
                order.takenStatus ||
                order.pendingStatus}
            </InfoText>
            <DateContainer>
              <DateContainerLine>
                <HeadInfo>DATA DA RETIRADA</HeadInfo>
                <InfoText>
                  {order.start_date ? order.startFormattedDate : '--/--/--'}
                </InfoText>
              </DateContainerLine>
              <DateContainerLine>
                <HeadInfo>DATA DA ENTREGA</HeadInfo>
                <InfoText>
                  {order.end_date ? order.endFormattedDate : '--/--/--'}
                </InfoText>
              </DateContainerLine>
            </DateContainer>
          </SecondBox>
          <OrderDetailsActionBttn order={order} navigation={navigation} />
        </Container>
      </BackgroundDefault>
    </>
  );
}
