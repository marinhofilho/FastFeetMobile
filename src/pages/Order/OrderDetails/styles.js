import styled from 'styled-components/native';
import {Dimensions, Platform} from 'react-native';

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

export const FirstBox = styled.View`
  margin-top: 100px
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0, 0.1);
`;

export const HeaderText = styled.Text`
  color: purple;
  margin-top: 5px;
  font-weight: bold;
  margin-left: 5px;
`;
export const HeadInfo = styled.Text`
  color: #888888;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 4px;
`;
export const InfoText = styled.Text`
  color: #333;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerLine = styled.View`
  flex-direction: row;
`;
export const DateContainerLine = styled.View``;

export const SecondBox = styled.View`
  margin-top: 20px
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0, 0.1);
`;
