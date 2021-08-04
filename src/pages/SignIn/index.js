import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image} from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import {Container, Form, FormInput, SubmitButton} from './styles';

import {signInRequest} from '~/store/modules/auth/actions';

export default function SignIn() {
  const [id, setId] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    if (!id) setError(true);
    else dispatch(signInRequest(id));
  }

  useEffect(() => {
    setError(false);
  }, [id]);

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            value={id}
            icon="call"
            keyboardType="numeric"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            onChangeText={setId}
          />
          <SubmitButton onPress={handleSubmit}>
            {loading ? 'Carregando...' : 'Entrar'}
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
