import React from 'react';
import { mount, configure } from 'enzyme';
import { expect } from 'chai';
import PagingEllipsesRight from '../src/paging-ellipses-right';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('PagingEllipsesRight shows if more than 3 pages before end', () => {
  let element = mount(
    <PagingEllipsesRight page={5} numPages={100} />
  );
  expect(element.isEmptyRender()).to.equal(false);

  element = mount(
    <PagingEllipsesRight page={96} numPages={100} />
  );
  expect(element.isEmptyRender()).to.equal(false);
});

test('PagingEllipsesRight is hidden if 3 pages or less before end', () => {
  let element = mount(
    <PagingEllipsesRight page={98} numPages={100} />
  );
  expect(element.isEmptyRender()).to.equal(true);

  element = mount(
    <PagingEllipsesRight page={97} numPages={100} />
  );
  expect(element.isEmptyRender()).to.equal(true);
});