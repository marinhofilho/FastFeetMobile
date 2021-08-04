import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  background-color: #f5f5f5;
  flex-direction: row;
`;

export const OrderActionButton = styled.TouchableOpacity`
  height: 90px;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const OrderActionButtonText = styled.Text`
  color: #444;
  font-size: 12px;
`;
