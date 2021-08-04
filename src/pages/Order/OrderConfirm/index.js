import React, {useRef, useState} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

import api from '~/services/api';

import {
  Container,
  Background,
  Content,
  CameraWrapper,
  Camera,
  Button,
  TakePictureButton,
} from './styles';

export default function OrderConfirm({route}) {
  const profile = useSelector((store) => store.user.profile);
  const {order} = route.params;
  const cameraRef = useRef(null);
  const navigation = useNavigation();
  const [pictureUri, setPictureUri] = useState('');

  async function handletakePicture() {
    try {
      if (cameraRef) {
        const options = {quality: 0.5, base64: true};
        const data = await cameraRef.current.takePictureAsync(options);
        await setPictureUri(data.uri);
      }
    } catch (err) {
      console.tron.log(err);
    }
  }

  async function handleSubmit() {
    try {
      const dataFile = new FormData();
      dataFile.append('file', {
        type: 'image/jpg',
        uri: pictureUri,
        name: pictureUri.split('/').pop(),
      });

      const pictureResponse = await api.post('files', dataFile);
      console.tron.log(pictureResponse);

      const updateStatus = await api.put(
        `deliverymen/${profile.id}/deliveries/${order.id}/finalize`,
        {
          end_date: new Date(),
          signature_id: pictureResponse.data.id,
        },
      );

      console.tron.log(updateStatus);

      navigation.push('Dashboard');
    } catch (err) {
      console.tron.log(err);
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        {pictureUri ? (
          <CameraWrapper>
            <Image source={{uri: pictureUri}} style={{height: '100%'}} />
          </CameraWrapper>
        ) : (
          <CameraWrapper>
            <Camera ref={cameraRef} type="back" captureAudio={false} />
            <TakePictureButton onPress={handletakePicture}>
              <Icon name="photo-camera" color="#fff" size={30} />
            </TakePictureButton>
          </CameraWrapper>
        )}
        <Button onPress={handleSubmit} loading={false}>
          Enviar
        </Button>
      </Content>
    </Container>
  );
}
