
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Photo, IPhotoProps } from '../../../src/components/PhotoGrid/GridItem';

describe('Menu Item Component', () => {

  const TEST_NAME = 'TEST_NAME';
  const TEST_IMAGE_URL = 'TEST_IMAGE_URL';

  it("should render name and image", () => {
    let thisComponent = shallow(<Photo author={TEST_NAME} imageUrl={TEST_IMAGE_URL} />);
    expect(thisComponent.contains(<img className="photo-cover" src={ TEST_IMAGE_URL } />));
    expect(thisComponent.contains(<span className="author">{ TEST_NAME }</span>));
  });
});
