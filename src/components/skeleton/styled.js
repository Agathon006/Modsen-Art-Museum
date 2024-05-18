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
  background-color: gray;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

function StyledSkeleton() {
  return <ItemSkeleton />;
}

export default StyledSkeleton;
