import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import PagingNumber from '../src/paging-number';

test('PagingNumber calls the set page prop', () => {
  const onClick = sinon.spy();
  let element = mount(
    <PagingNumber index={4} page={5} numPages={100} setPage={onClick} />
  );
  element.find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 1);
});

test('PagingNumber does not call the set page prop when already on that page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingNumber index={5} page={5} numPages={100} setPage={onClick} />
  );
  element.find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 0);
});

test('PagingNumber does not call the set page prop when greater than max page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingNumber index={101} page={5} numPages={100} setPage={onClick} />
  );
  element.find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 0);
});

test('PagingNumber does not call the set page prop when less than first page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingNumber index={0} page={5} numPages={100} setPage={onClick} />
  );
  element.find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 0);
});

test('PagingNumber is disabled when already at same page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingNumber index={5} page={5} numPages={100} setPage={onClick} />
  );
  element.find('a');
  expect(element.find('.paging-number').hasClass('disabled')).to.equal(true)
});

test('PagingNumber is not disabled when not on the same page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingNumber index={4} page={5} numPages={100} setPage={onClick} />
  );
  element.find('a');
  expect(element.find('.paging-number').hasClass('disabled')).to.equal(false)
});
