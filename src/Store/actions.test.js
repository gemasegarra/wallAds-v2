import * as actions from './actions';
import * as TYPES from './types';


import axios from 'axios';

jest.mock('axios');


describe('Example of sync test', () => {
  test('Succesful sign in', () => {
    const username = "test"
    const expectedAction = {
      type: TYPES.SIGN_IN_SUCCESS,
      username,
    };
    expect(actions.signInSuccess(username)).toEqual(
      expectedAction
    );
  });
});

const fetchData = async id => {

  return await axios.get(`http://34.89.93.186:8080/apiv1/anuncios/${id}`)
    .then(function(res) {
      return res
    }  
    );
};


describe('Example of async test', () => {
  test('Fetch data with axios', async ()=> {
    const data = {
      "success": true,
      "result": {
      "tags": [],
      "_id": "5e4c3b443976de16b4d34287",
      "name": "Fallout New Vegas 2",
      "price": 10,
      "description": "PS3 version",
      "type": "buy",
      "photo": "https://upload.wikimedia.org/wikipedia/en/3/34/Fallout_New_Vegas.jpg",
      "createdAt": "2020-02-18T19:30:12.683Z",
      "updatedAt": "2020-02-29T16:17:23.912Z",
      "__v": 0
      }   
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchData('5e4c3b443976de16b4d34287')).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      'http://34.89.93.186:8080/apiv1/anuncios/5e4c3b443976de16b4d34287'
    );
  });
  }
  )