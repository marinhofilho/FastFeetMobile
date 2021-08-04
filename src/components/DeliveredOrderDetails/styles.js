import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 5px;
  background-color: #fff;
  margin: 5px 3px 25px 3px;
  border: 1px solid;
  border-color: #eee;
  border-radius: 4px;
`;

export const Content = styled.View`
  padding: 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
  font-size: 15px;
`;

export const Bottom = styled.View`
  background-color: #eee;
  padding: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const BottomItem = styled.View`
  flex-direction: column;
`;

export const Small = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #999999;
`;
export const SubTitle = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #333;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonTitle = styled.Text`
  font-weight: bold;
  color: #7d40e7;
`;
