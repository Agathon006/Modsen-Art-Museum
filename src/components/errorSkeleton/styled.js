import React from 'react';
import styled from 'styled-components';

const ItemSkeleton = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fdecee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemSkeletonSpan = styled.span`
  font-size: 24px;
  color: #a60000;
`;

function StyledErrorSkeleton() {
  return (
    <ItemSkeleton>
      <ItemSkeletonSpan>Some Error...</ItemSkeletonSpan>
    </ItemSkeleton>
  );
}

export default StyledErrorSkeleton;
