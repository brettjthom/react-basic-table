import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactBasicTable from '../src/index';
import PagingMain from '../src/paging-main';
import PagingNext from '../src/paging-next';
import PagingPrevious from '../src/paging-previous';
import PagingNumber from '../src/paging-number';
import PagingFirst from '../src/paging-first';
import PagingLast from '../src/paging-last';
import PagingEllipsesLeft from '../src/paging-ellipses-left';
import PagingEllipsesRight from '../src/paging-ellipses-right';

const columns = ['Col1', 'Col2', 'Col3'];
const rows = [
    [
        <span data-ReactBasicTable-value="OneA">OneA</span>,
        <span data-ReactBasicTable-value="1">1</span>,
        <span data-ReactBasicTable-value="01/01/2010">01/01/2010</span>
    ],
    [
        <span data-ReactBasicTable-value="TwoA">TwoA</span>,
        <span data-ReactBasicTable-value="2">2</span>,
        <span data-ReactBasicTable-value="01/01/2009">01/01/2009</span>
    ],
    [
        <span data-ReactBasicTable-value="ThreeA">ThreeA</span>,
        <span data-ReactBasicTable-value="3">3</span>,
        <span data-ReactBasicTable-value="01/01/2008">01/01/2008</span>
    ],
    [
        <span data-ReactBasicTable-value="FourA">FourA</span>,
        <span data-ReactBasicTable-value="4">4</span>,
        <span data-ReactBasicTable-value="01/01/2007">01/01/2007</span>
    ],
    [
        <span data-ReactBasicTable-value="FiveA">FiveA</span>,
        <span data-ReactBasicTable-value="5">5</span>,
        <span data-ReactBasicTable-value="01/01/2006">01/01/2006</span>
    ]
];


test('ReactBasicTable renders TH elements for every column', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} />
    );
    expect(element.find('th').length).to.equal(3);
});

test('ReactBasicTable renders TR elements for every row', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} />
    );
    expect(element.find('tbody').find('tr').length).to.equal(5);
});

test('ReactBasicTable renders TD elements for every item in every row', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} />
    );
    expect(element.find('tbody').find('td').length).to.equal(15);
});

test('ReactBasicTable renders ONE PagingMain', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} />
    );
    expect(element.find(PagingMain).length).to.equal(1);
});

test('ReactBasicTable renders ONE PagingMain with the right props', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} />
    );
    expect(element.find(PagingMain).length).to.equal(1);
    expect(element.find(PagingMain).props().page).to.equal(1);
    expect(element.find(PagingMain).props().numPages).to.equal(1);
    expect(element.find(PagingMain).props().setPage).to.be.a('function');
});

test('ReactBasicTable can take pageSize prop to adjust the rows shown', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} pageSize={2} />
    );
    expect(element.find('tbody').find('td').length).to.equal(6);
    expect(element.find('tbody').find('tr').length).to.equal(2);
    expect(element.find(PagingMain).props().numPages).to.equal(3);

    element = mount(
        <ReactBasicTable columns={columns} rows={rows} pageSize={10} />
    );
    expect(element.find('tbody').find('td').length).to.equal(15);
    expect(element.find('tbody').find('tr').length).to.equal(5);
    expect(element.find(PagingMain).props().numPages).to.equal(1);
});

test('ReactBasicTable defaults pageSize prop to 10', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} />
    );
    expect(element.find('tbody').find('td').length).to.equal(15);
    expect(element.find('tbody').find('tr').length).to.equal(5);
    expect(element.find(PagingMain).props().numPages).to.equal(1);
});

test('ReactBasicTable shows an empty message when there are no rows', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={[]} />
    );
    expect(element.text().indexOf('No matching records found.') >= 0).is.equal(true);

    element = mount(
        <ReactBasicTable columns={columns} rows={rows} />
    );
    expect(element.text().indexOf('No matching records found.') >= 0).is.equal(false);
});

test('ReactBasicTable hides columns when passed the hidden prop', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} hideColumns={[0]} />
    );
    expect(element.find('th.hidden').length).to.equal(1);
    expect(element.find('tbody').find('td.hidden').length).is.equal(5);

    element = mount(
        <ReactBasicTable columns={columns} rows={rows} hideColumns={[0,1]} />
    );
    expect(element.find('th.hidden').length).to.equal(2);
    expect(element.find('tbody').find('td.hidden').length).is.equal(10);

    element = mount(
        <ReactBasicTable columns={columns} rows={rows} />
    );
    expect(element.find('th.hidden').length).to.equal(0);
    expect(element.find('tbody').find('td.hidden').length).is.equal(0);
});

test('ReactBasicTable filters rows when passed the filter prop and a filter mode of or', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} 
            filter={[
                {id: 0, match: 'OneA'},
                {id: 1, match: '2'}
            ]}
            filterMode='Or'
        />
    );
    expect(element.find('tbody').find('tr').length).to.equal(2);

    element = mount(
        <ReactBasicTable columns={columns} rows={rows} 
            filter={[
                {id: 0, match: 'A'},
                {id: 1, match: 'zzzzzzzzzzzzzzzzzzzzz'}
            ]}
            filterMode='Or'
        />
    );
    expect(element.find('tbody').find('tr').length).to.equal(5);
});

test('ReactBasicTable filters rows when passed the filter prop and a filter mode of and', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} 
            filter={[
                {id: 0, match: 'OneA'},
                {id: 1, match: '2'}
            ]}
            filterMode='And'
        />
    );
    // The empty tr
    expect(element.find('tbody').find('tr').length).to.equal(1);

    element = mount(
        <ReactBasicTable columns={columns} rows={rows} 
            filter={[
                {id: 0, match: 'A'},
                {id: 2, match: '01'}
            ]}
            filterMode='And'
        />
    );
    expect(element.find('tbody').find('tr').length).to.equal(5);

    element = mount(
        <ReactBasicTable columns={columns} rows={rows} 
            filter={[
                {id: 0, match: 'A'},
                {id: 1, match: '1'}
            ]}
            filterMode='And'
        />
    );
    expect(element.find('tbody').find('tr').length).to.equal(1);
});

test('ReactBasicTable allows sorting rows on a column when sort prop', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} sort={[1]} />
    );

    element.find('th').at(1).simulate('click');
    expect(element.find('tbody')
        .find('tr').at(0)
        .find('td').at(1)
        .find('span').at(0)
        .prop('data-ReactBasicTable-value')).to.equal('1');
    element.find('th').at(1).simulate('click');
    expect(element.find('tbody')
        .find('tr').at(0)
        .find('td').at(1)
        .find('span').at(0)
        .prop('data-ReactBasicTable-value')).to.equal('5');
    element.find('th').at(1).simulate('click');
    expect(element.find('tbody')
        .find('tr').at(0)
        .find('td').at(1)
        .find('span').at(0)
        .prop('data-ReactBasicTable-value')).to.equal('1');
});

test('ReactBasicTable does not allows sorting on a column when it is not in sort prop', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} sort={[0]} />
    );

    element.find('th').at(1).simulate('click');
    expect(element.find('tbody')
        .find('tr').at(0)
        .find('td').at(1)
        .find('span').at(0)
        .prop('data-ReactBasicTable-value')).to.equal('1');
    element.find('th').at(1).simulate('click');
    expect(element.find('tbody')
        .find('tr').at(0)
        .find('td').at(1)
        .find('span').at(0)
        .prop('data-ReactBasicTable-value')).to.equal('1');
});

test('ReactBasicTable allows paging with PagingLast', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} pageSize={1} />
    );

    expect(element.state('page')).is.equal(1);
    element.find(PagingLast).find('a').simulate('click');
    expect(element.state('page')).is.equal(5);
});

test('ReactBasicTable allows paging with PagingNext', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} pageSize={1} />
    );

    expect(element.state('page')).is.equal(1);
    element.find(PagingNext).find('a').simulate('click');
    expect(element.state('page')).is.equal(2);
});

test('ReactBasicTable allows paging with PagingPrevious', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} pageSize={1} />
    );

    element.setState({page: 2});
    expect(element.state('page')).is.equal(2);
    element.find(PagingPrevious).find('a').simulate('click');
    expect(element.state('page')).is.equal(1);
});

test('ReactBasicTable allows paging with PagingFirst', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} pageSize={1} />
    );

    element.setState({page: 2});
    expect(element.state('page')).is.equal(2);
    element.find(PagingFirst).find('a').simulate('click');
    expect(element.state('page')).is.equal(1);
});

test('ReactBasicTable allows paging with the PagingNumber', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} pageSize={1} />
    );

    element.find(PagingNumber).forEach((item) => {
        item.find('a').simulate('click');
        expect(element.state('page')).is.equal(item.prop('index'));
    });
});

test('ReactBasicTable goes to page one when the filter changes', () => {
    let element = mount(
        <ReactBasicTable columns={columns} rows={rows} 
            filter={[
                {id: 0, match: 'OneA'}
            ]}
            filterMode='Or'
        />
    );

    element.setState({page: 2});
    expect(element.state('page')).is.equal(2);
    element.setProps({filter:[{id: 0, match: 'OneA'}]});
    expect(element.state('page')).is.equal(2);
    element.setProps({filter:[{id: 1, match: 'OneA'}]});
    expect(element.state('page')).is.equal(1);
});