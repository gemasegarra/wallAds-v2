import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import { connect } from 'react-redux';
import {
  loadAds,
  selectTag,
  selectAdType,
  submitSearch,
} from '../../Store/actions';

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
      search: '',
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);

    props.onMount();
  }

  handleSearchChange(e) {
    this.setState({ search: e.target.value });
  };

  render() {

    const { ads, selectedTag, typeOfAd, handleTagChange, handleTypeChange, handleSubmitSearch } = this.props;
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
          <SearchForm onSubmit={(e) => {
            e.preventDefault();
            handleSubmitSearch(this.state.search);
          }}>
            <SearchContainer>
              <input
                type='text' value={this.state.search}
                onChange={this.handleSearchChange} />
              <button type='submit' value='search'>
                Search
              </button>
            </SearchContainer>
            <SelectForm>
              <Select placeholder='Choose a tag...'
                value={selectedTag}
                onChange={({ value }) => handleTagChange(value)}
                options={tags} />
            </SelectForm>
            <SelectForm>
              <Select placeholder='Buying or selling...?'
                value={typeOfAd}
                onChange={({ value }) => handleTypeChange(value)}
                options={type} />
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

const mapStateToProps = state => ({
  username: state.username,
  ...state.ads,
});

const mapDispatchToProps = dispatch => ({
  onMount: () => loadAds(dispatch),
  handleTagChange: (tag) => selectTag(tag, dispatch),
  handleTypeChange: (type) => selectAdType(type, dispatch),
  handleSubmitSearch: (search) => submitSearch(search, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdList);
