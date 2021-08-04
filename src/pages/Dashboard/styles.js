import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-bottom: 0;
`;

export const Header = styled.View`
  align-self: stretch;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 60px;
  margin-right: 10px;
`;

export const GreetingContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;
export const Greeting = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const Name = styled.Text`
  font-size: 23px;
  color: #111111;
  font-weight: bold;
`;

export const OutContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
