
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Photo, IPhotoProps } from '../../../src/components/PhotoGrid/GridItem';

describe('Menu Item Component', () => {

  const TEST_NAME = 'TEST_NAME';
  const TEST_IMAGE_URL = 'TEST_IMAGE_URL';

  it("should render name and image", () => {
    let thisComponent = shallow(<Photo name={TEST_NAME} imageUrl={TEST_IMAGE_URL} width={100} height={100} />);
    expect(thisComponent.contains(<img className="photo-cover" src={ TEST_IMAGE_URL } />));
    expect(thisComponent.contains(<span className="name">{ TEST_NAME }</span>));
  });
});
