import { expect } from 'chai';
import { categorySelected } from './category';


const CATEGORIES = [
  { title: 'HORROR'},
  { title: 'ACTION'},
  { title: 'ADVENTURE'},
];

function getRandomCat (cat) {
  return cat[Math.floor(Math.random() * cat.length)];
}
describe('Action creators', () => {

    describe('categorySelected', () => {

      it('returns properly formatted action', () => {

        const category = getRandomCat(CATEGORIES);
        expect(categorySelected(category)).to.be.deep.equal({
          type: 'CATEGORY_SELECTED',
          category: category
        });
      });
    });
  }); // end Action creators
  