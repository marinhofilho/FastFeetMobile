import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {
  Container,
  HeaderBackground,
  TextAreaContainer,
  SubmitButton,
} from './styles';
import api from '~/services/api';

export default function OrderReportProblem({navigation, route}) {
  const {order} = route.params;
  const [problemtext, setProblemtext] = useState('');
  const orderid = order.id;

  const style = StyleSheet.create({
    textInputStyle: {
      height: 300,
      textAlign: 'center',
    },
  });

  const handleSubmit = async () => {
    try {
      api.post('problems', {description: problemtext, order_id: orderid});

      console.tron.log('success');

      setProblemtext('');
      navigation.navigate('OrderDetails');
    } catch (err) {
      console.tron.log(`Falhou${err}`);
    }
  };

  return (
    <>
      <Container>
        <HeaderBackground />
        <TextAreaContainer>
          <TextInput
            multiline
            numberOfLines={4}
            placeholderTextColor="#333"
            placeholder="Explique o problema que ocorreu na entrega."
            style={style.textInputStyle}
            onChangeText={(text) => setProblemtext(text)}
            value={problemtext}
            onSubmitEditing={handleSubmit}
          />
        </TextAreaContainer>
        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </Container>
    </>
  );
}
