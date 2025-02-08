import React from 'react';
import styled from 'styled-components';
import { StyledDisplay, StyledTypo } from '../../../../styles/mixins';
import { APP_COLORS } from '../../../../themes';
import ButtonText from '../../../atoms/ButtonText';
import { ArrowLeftIcon } from '../../../../assets/svgs/ArrowLeftIcon';

const CreatePostHeader = ({ title, hasNext, handleGoBack, handleClickNext, titleBtn = 'Next' }) => {
  return (
    <StyledCreatePostHeader $hasNext={hasNext}>
      {hasNext && (
        <button onClick={handleGoBack}>
          <ArrowLeftIcon />
        </button>
      )}
      {title}
      {hasNext && <ButtonText title={titleBtn} onClick={handleClickNext} />}
    </StyledCreatePostHeader>
  );
};

export const StyledCreatePostHeader = styled.div`
  ${StyledTypo.heading6({})};

  ${(props) => StyledDisplay.dFlex({ justify: props.$hasNext ? 'space-between' : 'center' })};

  padding: 12px;
  border-bottom: 1px solid ${APP_COLORS.greyLight};
  text-align: center;
`;

export default CreatePostHeader;
