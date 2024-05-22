import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.8;
  }
`;

const ItemSkeleton = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fdecee;
  animation: ${pulse} 1.5s ease-in-out infinite;
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
