import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  -webkit-column-gap: 0.3rem;
  -moz-column-gap: 0.3rem;
  column-gap: 0.1rem;
  margin: auto;
  width: 90%;
`;

export const AdCard = styled.div`
  margin: 5px;   
  background: white;
  border-radius: 10px;
`;

export const DetailedCard = styled.div`
  margin: 2rem auto;   
  background: white;
  width: 90%;
  @media (max-width: 425px){
      margin: 1rem auto;
      width: 70%;
    }
`;

export const AdContent = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h1`
  font-size: 1.3rem;
  color: #8e3b56;
`;

export const Type = styled.div`
  background-color: #eeeeee;
  padding: 0.25rem 1rem;
  color: white; 
`;

export const Description = styled.p`
  font-size: 1rem;
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Picture = styled.img`
  display: block;
  object-fit: contain;
  max-height: auto;
  max-width: 100%;
  margin: 0.5rem 0;
`;

export const Button = styled.button`
  color: #db7093;
  width: 100%;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  border: 1px solid #db7093;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #f8e5eb;
  }
`;

export const NoAds = styled.div`
  margin: 1rem 6rem;
`;

export const StyledLink = styled(Link)`
display: flex;
margin-top: 1rem;
font-size: 2.5rem;
text-decoration: none;
color: #db7093;
`;
