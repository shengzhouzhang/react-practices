
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Grid, IGridProps } from '../../../src/components/PhotoGrid/Grid';
import { Photo, IPhotoProps } from '../../../src/components/PhotoGrid/GridItem';

describe('Menu Item Component', () => {

  const TEST_ITEMS = [
    { name: 'TEST_NAME_1', imageUrl: 'TEST_IMAGE_URL_1' },
    { name: 'TEST_NAME_2', imageUrl: 'TEST_IMAGE_URL_2' }
  ];

  it("should render title and items", () => {
    let thisComponent = shallow(<Grid title="TEST_TITLE" items={TEST_ITEMS} />);
    expect(thisComponent.contains(<div className="header">TEST_TITLE</div>));
    expect(thisComponent.find(Photo)).to.have.length(TEST_ITEMS.length);
    expect(thisComponent.contains(<Photo name="TEST_NAME_1" imageUrl="TEST_IMAGE_URL_1" />));
    expect(thisComponent.contains(<Photo name="TEST_NAME_2" imageUrl="TEST_IMAGE_URL_2" />));
  });
});
