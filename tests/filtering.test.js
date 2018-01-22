import React from 'react';
import { expect } from 'chai';
import filterTable from '../src/filtering';

test('filterTable ignores empty strings for a match', () => {
    const rows = [
            [
                <span data-ReactBasicTable-value="OneA">OneA</span>,
                <span data-ReactBasicTable-value="OneB">OneB</span>,
                <span data-ReactBasicTable-value="OneC">OneC</span>
            ],
            [
                <span data-ReactBasicTable-value="TwoA">TwoA</span>,
                <span data-ReactBasicTable-value="TwoB">TwoB</span>,
                <span data-ReactBasicTable-value="TwoC">TwoC</span>
            ],
            [
                <span data-ReactBasicTable-value="ThreeA">ThreeA</span>,
                <span data-ReactBasicTable-value="ThreeB">ThreeB</span>,
                <span data-ReactBasicTable-value="ThreeC">ThreeC</span>
            ]
    ];
    const filteredTable = filterTable(rows, [{id: 0, match: ''}], () => {}, 'And');
    expect(filteredTable.length).to.equal(3);
});

test('filterTable properly filters down with "and/or mode" on one column', () => {
    const rows = [
            [
                <span data-ReactBasicTable-value="OneA">OneA</span>,
                <span data-ReactBasicTable-value="OneB">OneB</span>,
                <span data-ReactBasicTable-value="OneC">OneC</span>
            ],
            [
                <span data-ReactBasicTable-value="TwoA">TwoA</span>,
                <span data-ReactBasicTable-value="TwoB">TwoB</span>,
                <span data-ReactBasicTable-value="TwoC">TwoC</span>
            ],
            [
                <span data-ReactBasicTable-value="ThreeA">ThreeA</span>,
                <span data-ReactBasicTable-value="ThreeB">ThreeB</span>,
                <span data-ReactBasicTable-value="ThreeC">ThreeC</span>
            ]
    ];
    let filteredTable = filterTable(rows, [{id: 0, match: 'One'}], () => {}, 'Or');
    expect(filteredTable.length).to.equal(1);
    filteredTable = filterTable(rows, [{id: 0, match: 'One'}], () => {}, 'And');
    expect(filteredTable.length).to.equal(1);
});

test('filterTable properly filters down with "and mode" on two columns', () => {
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
            ]
    ];
    let filteredTable = filterTable(rows, [{id: 0, match: 'OneA'}, {id: 1, match: '1'}], () => {}, 'And');
    expect(filteredTable.length).to.equal(1);
    filteredTable = filterTable(rows, [{id: 0, match: 'One'}, , {id: 1, match: '2'}], () => {}, 'And');
    expect(filteredTable.length).to.equal(0);
    filteredTable = filterTable(rows, [{id: 0, match: 'A'}, {id: 2, match: '01'}],() => {}, 'And');
    expect(filteredTable.length).to.equal(3);
});

test('filterTable properly filters down with "or mode" on two columns', () => {
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
            ]
    ];
    let filteredTable = filterTable(rows, [{id: 0, match: 'OneA'}, {id: 1, match: '1'}], () => {}, 'Or');
    expect(filteredTable.length).to.equal(1);
    filteredTable = filterTable(rows, [{id: 0, match: 'One'}, , {id: 1, match: '2'}], () => {}, 'Or');
    expect(filteredTable.length).to.equal(2);
    filteredTable = filterTable(rows, [{id: 0, match: 'A'}, {id: 2, match: '01'}], () => {}, 'Or');
    expect(filteredTable.length).to.equal(3);
});

test('filterTable properly filters down with "function mode"', () => {
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
            ]
    ];
    let filteredTable = filterTable(rows, [], (...values) => {
        return values[0] === 'OneA';
    }, 'Function');
    expect(filteredTable.length).to.equal(1);
    filteredTable = filterTable(rows, [], (...values) => {
        return values[0] === 'OneA' || values[0] === 'TwoA';
    }, 'Function');
    expect(filteredTable.length).to.equal(2);
    filteredTable = filterTable(rows, [], (...values) => {
        return (values[0] === 'OneA' || values[0] === 'TwoA') && values[1] === '2';
    }, 'Function');
    expect(filteredTable.length).to.equal(1);
});
