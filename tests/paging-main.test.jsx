import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import PagingMain from '../src/paging-main';
import PagingNext from '../src/paging-next';
import PagingPrevious from '../src/paging-previous';
import PagingNumber from '../src/paging-number';
import PagingFirst from '../src/paging-first';
import PagingLast from '../src/paging-last';
import PagingEllipsesLeft from '../src/paging-ellipses-left';
import PagingEllipsesRight from '../src/paging-ellipses-right';

test('PagingMain renders the PagingNext', () => {
  const element = mount(
    <PagingMain page={5} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingNext).length).is.equal(1);
});

test('PagingMain through a prop to PagingNext calls set page', () => {
  const onClick = sinon.spy();
  let element = mount(
    <PagingMain page={5} numPages={100} setPage={onClick} />
  );
  element.find(PagingNext).find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 1);
  element.find(PagingNext).find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 2);
});

test('PagingMain renders a PagingNext with the proper props', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingMain page={5} numPages={100} setPage={onClick} />
  );
  expect(element.find(PagingNext).props().page).to.equal(5);
  expect(element.find(PagingNext).props().numPages).to.equal(100);
  expect(element.find(PagingNext).props().setPage).to.be.a('function');
});

test('PagingMain renders the PagingPrevious', () => {
  const element = mount(
    <PagingMain page={5} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingPrevious).length).is.equal(1);
});

test('PagingMain through a prop to PagingPrevious calls set page', () => {
  const onClick = sinon.spy();
  let element = mount(
    <PagingMain page={5} numPages={100} setPage={onClick} />
  );
  element.find(PagingPrevious).find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 1);
  element.find(PagingPrevious).find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 2);
});

test('PagingMain renders a PagingPrevious with the proper props', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingMain page={5} numPages={100} setPage={onClick} />
  );
  expect(element.find(PagingPrevious).props().page).to.equal(5);
  expect(element.find(PagingPrevious).props().numPages).to.equal(100);
  expect(element.find(PagingPrevious).props().setPage).to.be.a('function');
});

test('PagingMain renders the PagingFirst', () => {
  const element = mount(
    <PagingMain page={5} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingFirst).length).is.equal(1);
});

test('PagingMain through a prop to PagingFirst calls set page', () => {
  const onClick = sinon.spy();
  let element = mount(
    <PagingMain page={5} numPages={100} setPage={onClick} />
  );
  element.find(PagingFirst).find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 1);
});

test('PagingMain renders a PagingFirst with the proper props', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingMain page={5} numPages={100} setPage={onClick} />
  );
  expect(element.find(PagingFirst).props().page).to.equal(5);
  expect(element.find(PagingFirst).props().numPages).to.equal(100);
  expect(element.find(PagingFirst).props().setPage).to.be.a('function');
});

test('PagingMain renders the PagingLast', () => {
  const element = mount(
    <PagingMain page={5} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingLast).length).is.equal(1);
});

test('PagingMain through a prop to PagingLast calls set page', () => {
  const onClick = sinon.spy();
  let element = mount(
    <PagingMain page={5} numPages={100} setPage={onClick} />
  );
  element.find(PagingLast).find('a').simulate('click');
  expect(onClick).to.have.property('callCount', 1);
});

test('PagingMain renders a PagingLast with the proper props', () => {
  const onClick = sinon.spy();
  const element = mount(
    <PagingMain page={5} numPages={100} setPage={onClick} />
  );
  expect(element.find(PagingLast).props().page).to.equal(5);
  expect(element.find(PagingLast).props().numPages).to.equal(100);
  expect(element.find(PagingLast).props().setPage).to.be.a('function');
});

test('PagingMain renders the PagingEllipsesLeft', () => {
  const element = mount(
    <PagingMain page={5} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingEllipsesLeft).length).is.equal(1);
});

test('PagingMain renders a PagingEllipsesLeft with the proper props', () => {
  const element = mount(
    <PagingMain page={5} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingEllipsesLeft).props().page).to.equal(5);
  expect(element.find(PagingEllipsesLeft).props().numPages).to.equal(100);
});

test('PagingMain renders the PagingEllipsesRight', () => {
  const element = mount(
    <PagingMain page={5} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingEllipsesRight).length).is.equal(1);
});

test('PagingMain renders a PagingEllipsesRight with the proper props', () => {
  const element = mount(
    <PagingMain page={5} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingEllipsesRight).props().page).to.equal(5);
  expect(element.find(PagingEllipsesRight).props().numPages).to.equal(100);
});

test('PagingMain renders the correct number of PagingNumber in middle of total pages', () => {
  let element = mount(
    <PagingMain page={50} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingNumber).length).is.equal(7);
});

test('PagingMain renders the correct number of PagingNumber on left sides of total pages', () => {
  let element = mount(
    <PagingMain page={1} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingNumber).length).is.equal(4);

  element = mount(
    <PagingMain page={2} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingNumber).length).is.equal(5);

  element = mount(
    <PagingMain page={3} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingNumber).length).is.equal(6);

  element = mount(
    <PagingMain page={4} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingNumber).length).is.equal(7);
});

test('PagingMain renders the correct number of PagingNumber on right sides of total pages', () => {
  let element = mount(
    <PagingMain page={100} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingNumber).length).is.equal(4);

  element = mount(
    <PagingMain page={99} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingNumber).length).is.equal(5);

  element = mount(
    <PagingMain page={98} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingNumber).length).is.equal(6);

  element = mount(
    <PagingMain page={97} numPages={100} setPage={() => {}} />
  );
  expect(element.find(PagingNumber).length).is.equal(7);
});

test('PagingMain through a prop to PagingNumber calls set page', () => {
  const onClick = sinon.spy();
  let element = mount(
    <PagingMain page={50} numPages={100} setPage={onClick} />
  );
  element.find(PagingNumber).find('a').forEach((item) => {
    item.simulate('click');
  });
  expect(onClick).to.have.property('callCount', 6);
});