import React from 'react';
import { expect } from 'chai';
import sortTable from '../src/sorting';

test('sortTable just returns the old table sortedBy.column or sortedBy.mode is undefined', () => {
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
    const sortedTable = sortTable(rows, {});
    expect(sortedTable[0][0].props['data-ReactBasicTable-value'] === "OneA").to.equal(true);
    expect(sortedTable[1][1].props['data-ReactBasicTable-value'] === "TwoB").to.equal(true);
    expect(sortedTable[2][2].props['data-ReactBasicTable-value'] === "ThreeC").to.equal(true);
});

test('sortTable sorts in ascending order if passed in asc mode', () => {
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
    const sortedTable = sortTable(rows, {column: 0, mode: "Asc"});
    expect(sortedTable[0][0].props['data-ReactBasicTable-value'] === "OneA").to.equal(true);
    expect(sortedTable[1][1].props['data-ReactBasicTable-value'] === "ThreeB").to.equal(true);
    expect(sortedTable[2][2].props['data-ReactBasicTable-value'] === "TwoC").to.equal(true);
});

test('sortTable sorts in descending order if passed in desc mode', () => {
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
    const sortedTable = sortTable(rows, {column: 0, mode: "Desc"});
    expect(sortedTable[0][0].props['data-ReactBasicTable-value'] === "TwoA").to.equal(true);
    expect(sortedTable[1][1].props['data-ReactBasicTable-value'] === "ThreeB").to.equal(true);
    expect(sortedTable[2][2].props['data-ReactBasicTable-value'] === "OneC").to.equal(true);
});

test('sortTable sorts on the column that is passed', () => {
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
    let sortedTable = sortTable(rows, {column: 0, mode: "Asc"});
    expect(sortedTable[0][0].props['data-ReactBasicTable-value'] === "OneA").to.equal(true);
    expect(sortedTable[1][0].props['data-ReactBasicTable-value'] === "ThreeA").to.equal(true);
    expect(sortedTable[2][0].props['data-ReactBasicTable-value'] === "TwoA").to.equal(true);

    sortedTable = sortTable(rows, {column: 1, mode: "Asc"});
    expect(sortedTable[0][1].props['data-ReactBasicTable-value'] === "1").to.equal(true);
    expect(sortedTable[1][1].props['data-ReactBasicTable-value'] === "2").to.equal(true);
    expect(sortedTable[2][1].props['data-ReactBasicTable-value'] === "3").to.equal(true);

    sortedTable = sortTable(rows, {column: 2, mode: "Asc"});
    expect(sortedTable[0][2].props['data-ReactBasicTable-value'] === "01/01/2008").to.equal(true);
    expect(sortedTable[1][2].props['data-ReactBasicTable-value'] === "01/01/2009").to.equal(true);
    expect(sortedTable[2][2].props['data-ReactBasicTable-value'] === "01/01/2010").to.equal(true);
});