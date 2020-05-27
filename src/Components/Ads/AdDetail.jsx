import React from 'react';
import axios from 'axios';
import { DetailedCard, AdContent, Type, CardTitle, Price, Picture, Description, Button, StyledLink } from '../StyledComponents/Ads';
import Header from '../Layout/Header';
import GoUpButton from '../UI/BackToTopButton';

class AdDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: Number,
      description: '',
      tags: [],
      type: '',
      photo: '',
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    axios.get(`http://34.89.93.186:8080/apiv1/anuncios/${params.id}`, {
      withCredentials: true,
    })
      .then(res => {
        this.setState(
          res.data.result,
        );
      });
  }

  render() {
    const { name, price, description, tags, type, photo, id } = this.state;
    const tag = tags.join(', ');
    return (
      <>
        <Header />
        <DetailedCard key={id}>
          <AdContent>
            <CardTitle>{name}</CardTitle>
            <Type style={{
              backgroundColor: type === 'buy' ? '#A6373F' : 'green',
            }}>
            Looking to {type}!
            </Type>
            <Price>Price: {price}€</Price>
            <Description>Description: {description}</Description>
            <p>Tags: {tag}</p>
            <Picture alt="product photo" src={photo} />
            <StyledLink to="/adlist">
              <Button>Go back to ad list</Button>
            </StyledLink>
          </AdContent>
        </DetailedCard>
        <GoUpButton />
      </>
    );
  }
}

export default AdDetail;
