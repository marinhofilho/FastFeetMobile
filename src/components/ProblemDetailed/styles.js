import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: auto;
  width: 90%;
  height: 90%;
`;

export const ProblemBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  height: 60px;
  padding: 4px;
  overflow: hidden;
  background-color: #fff;
  padding: 10px;
`;

export const DescriptionText = styled.Text`
  font-size: 15px;
  color: #444444;
  width: 200px;
`;
export const ProblemDate = styled.Text`
  color: #444444;
`;
