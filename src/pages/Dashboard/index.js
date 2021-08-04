import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {StatusBar, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import imgSrc from '~/assets/download.jpeg';

import {signOut} from '~/store/modules/auth/actions';
import BackgroundDefault from '~/components/BackgroundDefault';
import {
  Container,
  Header,
  Avatar,
  GreetingContainer,
  Greeting,
  Name,
  OutContainer,
} from './styles';

import ListOrders from './ListOrders';

export default function Dashboard({navigation}) {
  const profile = useSelector((store) => store.user.profile);
  const dispatch = useDispatch();

  const name =
    profile.name.split(' ').length > 2
      ? profile.name
          .split(' ')
          .splice(0, 2)
          .reduce((total, current) => (total += `${current}`))
      : profile.name;

  function logOut() {
    navigation.navigate('SignIn');
    dispatch(signOut());
  }

  // avatar needs to have in alternative in case of no image

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <BackgroundDefault>
        <Container>
          <Header>
            <Avatar name={name} source={imgSrc} />
            <GreetingContainer>
              <Greeting>Bem vindo de volta,</Greeting>
              <Name>{profile.name}</Name>
            </GreetingContainer>
            <OutContainer>
              <TouchableOpacity onPress={logOut}>
                <Icon name="exit-to-app" size={25} color="#ff2200" />
              </TouchableOpacity>
            </OutContainer>
          </Header>
          <ListOrders navigation={navigation} />
        </Container>
      </BackgroundDefault>
    </>
  );
}

/* Dashboard.navigationOptions = {
  headerShow: false,
  tabBarLabel: 'Entregas',
  tabBarIcon: ({tintColor}) => (
    <Icon name="article" size={20} color={tintColor} />
  ),
}; */

Dashboard.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
