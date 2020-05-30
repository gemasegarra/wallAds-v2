// todo
import * as selector from './selectors';

describe('mock testing with selector', ()=> {

    const initialState = {
        ads: [
          {
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
        ]
    };

    test('showAds returns available ads', ()=> {
        const ads = selector.showAds(initialState);
        expect(ads).toEqual(initialState.ads);
    });

})