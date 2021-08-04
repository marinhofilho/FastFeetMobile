import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  padding: 0 15px;
  align-self: stretch;
  margin-top: 12px;
`;
export const Line = styled.View`
  height: 1px;
  background: purple;
  border: 1px solid purple;
  margin-left: 40px;
  margin-right: 24px;
`;
export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: -6px;
`;
export const LabelContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Dot = styled.View`
  width: 10px;
  height: 10px;
  border: 1px solid purple;
  border-radius: 6px;
  margin-bottom: 5px;
  background: ${(props) => (props.filling ? 'purple' : '#ffffff')};
`;

export const Label = styled.Text`
  font-size: 12px;
`;

export const FirstLabel = styled.Text`
  font-size: 11px;
`;
