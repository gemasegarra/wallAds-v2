import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Layout/Header';
import { FormContainer, Form, InputField, Button } from '../StyledComponents/Forms';

class CreateAd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: Number,
      description: '',
      tags: [],
      type: '',
      photo: '',
    }
  }

  createAd() {
    let body = {};
    Object.keys(this.state).forEach(key => {
      body[key] = this.state[key];
    });
    if (body.tags.length > 0) {
      body.tags = body.tags.split(',')}    
      
    axios.post('http://34.89.93.186:8080/apiv1/anuncios', body,
      {
        withCredentials: true,
      }).then(res => {
        console.log(res)
      })
    .catch(error => {
      console.log(error)
    })   
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.createAd();
    this.props.history.push('/adlist');
  }

  render() {
    const { name, price, description, tags, type, photo } = this.state;

    return (

      <>
      <Header></Header>
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
        <h1>Create a new ad:</h1>
          <InputField>
            <input type='text' name='name' value={name} onChange={this.handleChange} placeholder='Name' />
          </InputField>
          <InputField>
            <input type='number' name='price' value={price} onChange={this.handleChange} placeholder='Price' />
          </InputField>
          <InputField>
            <input type='text' name='description' value={description} onChange={this.handleChange} placeholder='Description' />
          </InputField>
          <InputField>
          <input type='text' name='type' value={type} onChange={this.handleChange} placeholder='buy or sell' />
          </InputField>
          <InputField>
            <input type='text' name='tags' value={tags} onChange={this.handleChange} placeholder='Tags' />
          </InputField>
          <InputField>
            <input type='text' name='photo' value={photo} onChange={this.handleChange} placeholder='Photo link' />
          </InputField>
          <Button type='submit'>Create!</Button>
        </Form>
        </FormContainer>
      </>
    )
  }
}


export default CreateAd;
