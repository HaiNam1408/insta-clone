import React from 'react';
import SuggestList from '../../components/molecules/SuggestList';
import styled from 'styled-components';
import { StyledTypo } from '../../styles/mixins';
const StylesPeople = styled.div`
  margin: 0 316px;
  padding: 60px 0;
`;
const StyleTxt = styled.div`
  ${StyledTypo.heading5({})}
  margin-bottom: 10px;
`;
const PeoplePage = () => {
  return (
    <StylesPeople>
      <StyleTxt>Suggested</StyleTxt>
      <SuggestList isSolid={true} isSubTitle={true} />
    </StylesPeople>
  );
};

export default PeoplePage;
