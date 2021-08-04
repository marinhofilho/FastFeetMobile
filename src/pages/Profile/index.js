import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, TouchableOpacity} from 'react-native';
import BackgroundDefault from '~/components/BackgroundDefault';

import signOut from '~/store/modules/auth/actions';
import imgSrc from '~/assets/download.jpeg';

import {
  Container,
  Avatar,
  ContentContainer,
  ContentBox,
  Title,
  Name,
  ButtonText,
} from './styles';

export default function Dashboard() {
  const profile = useSelector((store) => store.user.profile);
  const dispatch = useDispatch();

  function logOut() {
    dispatch(signOut());
  }

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 10,
      alignSelf: 'stretch',
      borderRadius: 4,
      height: 40,
    },
  });

  return (
    <BackgroundDefault>
      <Container>
        <Avatar source={imgSrc} />
        <ContentContainer>
          <ContentBox>
            <Title>Nome completo</Title>
            <Name>{profile.name}</Name>
          </ContentBox>
          <ContentBox>
            <Title>Email</Title>
            <Name>{profile.email}</Name>
          </ContentBox>
          <ContentBox>
            <Title>Data de Cadastro</Title>
            <Name>{profile.created_at}</Name>
          </ContentBox>
        </ContentContainer>

        <TouchableOpacity style={styles.button} onPress={logOut}>
          <ButtonText>Logout</ButtonText>
        </TouchableOpacity>
      </Container>
    </BackgroundDefault>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
