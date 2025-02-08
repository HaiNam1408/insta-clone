import React from 'react';
import { StyledPostFooterLink } from '../PostFooter';
import { formattedNumber } from '../../../../libs/utils/formattedNumber';

const PostFavorite = ({ countFavorite }) => {
  return (
    <StyledPostFooterLink>
      {countFavorite ? formattedNumber(countFavorite) : '0'} likes
    </StyledPostFooterLink>
  );
};

export default PostFavorite;
