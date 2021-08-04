import styled from 'styled-components/native';
import {Dimensions, Platform} from 'react-native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;
export const HeaderBackground = styled.View`
  position: absolute;
  background: purple;
  height: 160px;
  width: ${Dimensions.get('window').width}px;
`;

export const TextAreaContainer = styled.View`
  margin-top: 80px;
  border: 1px solid #efefef;
  border-radius: 4px;
  padding: 5px;
  background: #fff;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
  background: purple;
`;
