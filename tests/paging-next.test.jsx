import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import PagingNext from '../src/paging-next';

test('PagingNext calls the set page prop', () => {
  const onClick = sinon.spy();
  let element = mount(
    <PagingNext page={5} numPages={100} setPage={onClick} />
  );
  element.find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 1);
  element.find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 2);
});

test('PagingNext does not call the set page prop when at max page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingNext page={100} numPages={100} setPage={onClick} />
  );
  element.find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 0);
});

test('PagingNext does not call the set page prop when greater than max page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingNext page={101} numPages={100} setPage={onClick} />
  );
  element.find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 0);
});

test('PagingNext is disabled when at max page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingNext page={100} numPages={100} setPage={onClick} />
  );
  element.find('a');
  expect(element.find('.next').hasClass('disabled')).to.equal(true)
});

test('PagingNext is not disabled when at max page', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingNext page={99} numPages={100} setPage={onClick} />
  );
  element.find('a');
  expect(element.find('.next').hasClass('disabled')).to.equal(false)
});

test('PagingNext is disabled when theres no pages', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingNext page={5} numPages={0} setPage={onClick} />
  );
  element.find('a');
  expect(element.find('.next').hasClass('disabled')).to.equal(true)
});