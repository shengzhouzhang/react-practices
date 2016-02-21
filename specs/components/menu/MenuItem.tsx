
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { MenuItem, IMenuItemProps } from '../../../src/components/menu/MenuItem';

describe('Menu Item Component', () => {

  const TEST_NAME = 'TEST_NAME';
  const TEST_IMAGE_URL = 'TEST_IMAGE_URL';

  it("should render name and image", () => {
    let thisComponent = shallow(<MenuItem name={TEST_NAME} imageUrl={TEST_IMAGE_URL} />);
    expect(thisComponent.contains(<img className="image-cover" src={ TEST_IMAGE_URL } />));
    expect(thisComponent.contains(<span className="name">{ TEST_NAME }</span>));
  });
});
