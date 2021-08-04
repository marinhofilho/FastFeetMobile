import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderText = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const SelectOrderContainer = styled.View`
  flex-direction: row;
`;

export const FilterButton = styled.TouchableOpacity`
  margin-left: 12px;
`;

export const FilterText = styled.Text`
  font-size: 13px;
  text-decoration: underline;
  font-weight: bold;
  color: ${(props) => (props.selected ? 'purple' : '#444444')};
`;

export const PendingList = styled.FlatList``;

export const DeliveredList = styled.FlatList``;
