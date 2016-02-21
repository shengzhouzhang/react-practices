
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Menu, IMenuProps } from '../../../src/components/menu/Menu';
import { MenuItem, IMenuItemProps } from '../../../src/components/menu/MenuItem';

describe('Menu Item Component', () => {

  const TEST_ITEMS = [
    { name: 'TEST_NAME_1', imageUrl: 'TEST_IMAGE_URL_1' },
    { name: 'TEST_NAME_2', imageUrl: 'TEST_IMAGE_URL_2' }
  ];

  it("should render title and items", () => {
    let thisComponent = shallow(<Menu title="TEST_TITLE" items={TEST_ITEMS} />);
    expect(thisComponent.contains(<div className="header">TEST_TITLE</div>));
    expect(thisComponent.find(MenuItem)).to.have.length(TEST_ITEMS.length);
    expect(thisComponent.contains(<MenuItem name="TEST_NAME_1" imageUrl="TEST_IMAGE_URL_1" />));
    expect(thisComponent.contains(<MenuItem name="TEST_NAME_2" imageUrl="TEST_IMAGE_URL_2" />));
  });
});
