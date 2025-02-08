import React, { useState } from 'react';
import { StyledPostFooterLink } from '../PostFooter';
import { StyledDisplay, StyledTypo } from '../../../../styles/mixins';
import { APP_COLORS } from '../../../../themes';
import styled from 'styled-components';

const REGEX_LENGTH_DESC = /<br\s*\/?>|\n/;

const PostDesc = ({ username, description }) => {
  const [shouldShowReadMore, setShouldShowReadMore] = useState(
    description.split(REGEX_LENGTH_DESC).length > 1
  );

  return (
    <StyledPostDesc>
      <StyledPostFooterLink>{username}</StyledPostFooterLink>
      <p
        className="desc"
        dangerouslySetInnerHTML={{
          __html: shouldShowReadMore ? description.split(REGEX_LENGTH_DESC)[0] + '...' : description
        }}></p>
      {shouldShowReadMore && (
        <button onClick={() => setShouldShowReadMore(!shouldShowReadMore)}>more</button>
      )}
    </StyledPostDesc>
  );
};

const StyledPostDesc = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '4px', wrap: 'wrap' })}

  .desc {
    ${StyledTypo.textBody2({ color: APP_COLORS.grayExtraLight })}
  }

  button {
    color: ${APP_COLORS.grayLight};
  }
`;

export default PostDesc;
