import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';
import { StyledDisplay } from '../../../../styles/mixins';

const PostSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <StyledPostSkeleton>
        <StyledPostSkeletonHeader>
          <Skeleton circle={true} width={42} height={42} />
          <StyledPostSkeletonHeaderContent>
            <Skeleton height={10} />
            <Skeleton height={10} />
          </StyledPostSkeletonHeaderContent>
        </StyledPostSkeletonHeader>
        <StyledPostSkeletonContent>
          <Skeleton height={400} />
        </StyledPostSkeletonContent>
      </StyledPostSkeleton>
    </SkeletonTheme>
  );
};

const StyledPostSkeleton = styled.div`
  margin-bottom: 12px;
`;

const StyledPostSkeletonHeader = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '12px' })}
`;

const StyledPostSkeletonHeaderContent = styled.div`
  width: 40%;
`;

const StyledPostSkeletonContent = styled.div`
  width: 100%;
  padding-top: 10px;
`;

export default PostSkeleton;
