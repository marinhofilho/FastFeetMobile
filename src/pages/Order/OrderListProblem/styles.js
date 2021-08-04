import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

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

export const PageTitle = styled.Text`
  margin-top: 80px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  align-self: center;
`;

export const ProblemsList = styled.FlatList``;
