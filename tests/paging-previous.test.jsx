import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import PagingPrevious from '../src/paging-previous';

test('PagingPrevious calls the set page prop', () => {
  const onClick = sinon.spy();
  let element = mount(
    <PagingPrevious page={5} numPages={100} setPage={onClick} />
  );
  element.find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 1);
  element.find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 2);
});

test('PagingPrevious does not call the set page prop when at first page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingPrevious page={1} numPages={100} setPage={onClick} />
  );
  element.find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 0);
});

test('PagingPrevious does not call the set page prop when less than first page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingPrevious page={0} numPages={100} setPage={onClick} />
  );
  element.find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 0);
});

test('PagingPrevious is disabled when at first page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingPrevious page={1} numPages={100} setPage={onClick} />
  );
  element.find('a');
  expect(element.find('.previous').hasClass('disabled')).to.equal(true)
});

test('PagingPrevious is not disabled when at first page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingPrevious page={2} numPages={100} setPage={onClick} />
  );
  element.find('a');
  expect(element.find('.previous').hasClass('disabled')).to.equal(false)
});

test('PagingPrevious is disabled when theres no pages', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingPrevious page={5} numPages={0} setPage={onClick} />
  );
  element.find('a');
  expect(element.find('.previous').hasClass('disabled')).to.equal(true)
});