import * as reducers from './reducers';
import * as TYPES from './types';


  describe('ads load in', () => {
    const adsInitialState = {
      ads: [],
      selectedTag: '',
      typeOfAd: Boolean,
    };

    test('handle load ads success', () => {
      const action = {
        type: TYPES.SELECT_AD_TYPE
      };
      const expectedState = {
        ads: [],
        selectedTag: '',
        typeOfAd: Boolean
      };
      expect(reducers.username(expectedState, action)).toEqual(adsInitialState);
    });
  });

