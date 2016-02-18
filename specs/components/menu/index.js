
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Menu from '../../../src/components/menu';
import MenuItem from '../../../src/components/menu/Item';

describe('Menu Item Component', () => {

  const TEST_ITEMS = [
    { name: 'TEST_NAME_1', imageUrl: 'TEST_IMAGE_URL_1' },
    { name: 'TEST_NAME_2', imageUrl: 'TEST_IMAGE_URL_2' }
  ];

  it("should render title and items", () => {
    let thisComponent = shallow(<Menu title="TEST_TITLE" items={TEST_ITEMS} />);
    expect(thisComponent.contains(<div className="header">TEST_TITLE</div>));
    expect(thisComponent.contains(<MenuItem name="TEST_NAME_1" imageUrl="TEST_IMAGE_URL_1" />));
    expect(thisComponent.contains(<MenuItem name="TEST_NAME_2" imageUrl="TEST_IMAGE_URL_2" />));
  });
});
