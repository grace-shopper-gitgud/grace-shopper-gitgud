import { expect } from 'chai';
import { searchButtonPressed } from './searchTerm';

describe('Action creators', () => {

    describe('searchButtonPressed', () => {

      it('returns properly formatted action', () => {

        expect(searchButtonPressed("monster")).to.be.deep.equal({
          type: "SEARCH_BUTTON_PRESSED",
          searchTerm: "monster"
        });
      });
    });
  });