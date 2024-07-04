import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
  margin-bottom: 16px;
  font-family: 'NomeDaFonte', sans-serif;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Label = styled.div`
  margin-top: 8px;
`;

const GridItem = ({ label, image }) => {
    return (
        <Item>
            {image && <Image src={image} alt={label} />}
            <Label>{label}</Label>
        </Item>
    );
};

export default GridItem;
