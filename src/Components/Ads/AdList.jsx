import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';


import axios from 'axios';


import { Grid, AdCard, AdContent, CardTitle, Type, Price, Picture, Button, NoAds, StyledLink } from '../StyledComponents/Ads';
import { FilterContainer, SearchForm, SearchContainer, SelectForm } from '../StyledComponents/Forms'
import Header from '../Layout/Header';
import GoUpButton from '../UI/BackToTopButton';

const tags = [
  { value: 'motor', label: 'Motor' },
  { value: 'work', label: 'Work' },
  { value: 'lifestyle', label: 'Lifestyle' },
  { value: 'mobile', label: 'Mobile' },
];

const type = [
  { value: 'buy', label: 'Buying' },
  { value: 'sell', label: 'Selling' },
];


class AdList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      selectedTag: '',
      typeOfAd: Boolean,
      ads: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.get('http://34.89.93.186:8080/apiv1/anuncios', {
      withCredentials: true,
    })
      .then(res => {
        console.log(res.data.results);
        this.setState({
          ads: res.data.results
        })
       
      })
  }


  handleChange(e) {
    this.setState({ value: e.target.value });
  };

  handleTagChange = selectedTag => {
    this.setState(
      { selectedTag },
      () => axios.get(`http://34.89.93.186:8080/apiv1/anuncios?tag=${this.state.selectedTag.value}`, {
        withCredentials: true,
      })
        .then(res => {
          this.setState({
            ads: res.data.results
          })
        })
    )
  };

  buyingType() {
    axios.get('http://34.89.93.186:8080/apiv1/anuncios?venta=false', {
      withCredentials: true,
    })
      .then(res => {
        this.setState({
          ads: res.data.results
        })
      })
  };

  sellingType() {
    axios.get('http://34.89.93.186:8080/apiv1/anuncios?venta=true', {
      withCredentials: true,
    })
      .then(res => {
        this.setState({
          ads: res.data.results
        })
      })
  };

  handleTypeChange = typeOfAd => {
    this.setState(
      { typeOfAd },
      () => typeOfAd.value === 'buy' ? this.sellingType() : this.buyingType()
    )
  };

  handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`http://34.89.93.186:8080/apiv1/anuncios?name=${this.state.value}`, {
      withCredentials: true,
    })
      .then(res => {
        this.setState({
          ads: res.data.results
        })
      })
  };

  render() {

    const { ads } = this.state;
    const allAds = ads.length ? (ads.map(ad => {
      return (
        <AdCard key={ad._id}>
          <AdContent>
            <Picture alt='product photo' src={ad.photo}></Picture>
            <CardTitle>{ad.name}</CardTitle>
            <Type buy={ad.type} style={{
              backgroundColor: ad.type === 'buy' ? '#A6373F' : 'green'
            }}>Looking to {ad.type}!</Type>
            <Price>{ad.price}€</Price>
            <StyledLink to={`/addetail/${ad._id}`}>
              <Button>Details</Button></StyledLink>
            <StyledLink to={`/editad/${ad._id}`}>
              <Button>Edit</Button></StyledLink>
          </AdContent>
        </AdCard>
      )
    })) : (<NoAds>You need to <Link to="/SignIn"> sign in</Link> to see our ads!</NoAds>)
    return (
      <>
        <Header />
          <FilterContainer>
            <SearchForm onSubmit={this.handleSubmit}>
              <SearchContainer>
                <input
                  type='text' value={this.state.value}
                  onChange={this.handleChange} />
                <button type='submit' value='search'>
                  Search
              </button>
            </SearchContainer>
            <SelectForm>
              <Select placeholder='Choose a tag...'
                value={this.state.selectedTag}
                onChange={this.handleTagChange}
                options={tags}/>
            </SelectForm>
            <SelectForm>
              <Select placeholder='Buying or selling...?'
                value={this.state.typeOfAd}
                onChange={this.handleTypeChange}
                options={type}/>
            </SelectForm>
            <SelectForm>
 
            </SelectForm>
          </SearchForm>
        </FilterContainer>
        <Grid>
          {allAds}
        </Grid>
        <GoUpButton />
      </>
    )
  }
}

export default AdList;
