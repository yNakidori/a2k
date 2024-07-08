import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.div`
  background: 
  #EBF5FB;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
  margin-bottom: 16px;
  font-family: 'Ubuntu-Bold', sans-serif;

  &:hover {
    transform: scale(1.01);
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

const GridItem = ({ label, image, path }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Item>
        {image && <Image src={image} alt={label} />}
        <Label>{label}</Label>
      </Item>
    </Link>
  )
}

export default GridItem;
