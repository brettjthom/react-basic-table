import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import PagingEllipsesLeft from '../src/paging-ellipses-left';

test('PagingEllipsesLeft shows if after page 4', () => {
  const element = mount(
    <PagingEllipsesLeft page={5} numPages={100} />
  );
  expect(element.isEmptyRender()).to.equal(false);
});

test('PagingEllipsesLeft is hidden if before/on page 4', () => {
  let element = mount(
    <PagingEllipsesLeft page={4} numPages={100} />
  );
  expect(element.isEmptyRender()).to.equal(true);

  element = mount(
    <PagingEllipsesLeft page={1} numPages={100} />
  );
  expect(element.isEmptyRender()).to.equal(true);
});