import React from 'react';
import styled from 'styled-components';

import GridItem from './GridItem';

const MasonryGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

const MasonryGridColumn = styled.div`
  break-inside: avoid;
  padding: 8px;
`;

const MasonryGrid = ({ items }) => {
  return (
    <MasonryGridContainer>
      {items.map((item, index) => (
        <MasonryGridColumn key={index}>
          <GridItem label={item.label} image={item.image} />
        </MasonryGridColumn>
      ))}
    </MasonryGridContainer>
  );
};

export default MasonryGrid;
