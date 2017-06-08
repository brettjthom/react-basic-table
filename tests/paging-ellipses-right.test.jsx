import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import PagingEllipsesRight from '../src/paging-ellipses-right';

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