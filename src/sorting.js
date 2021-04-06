import natsort from 'natsort';

export default function sortTable(rows, sortedBy) {
  if (sortedBy.column === undefined || sortedBy.mode === undefined) {
    return rows;
  }
  const sorter = natsort({
    insensitive: true,
    desc: sortedBy.mode !== 'Asc',
  });

  const arrayDictionary = rows.map((item, index) => ({
    id: index,
    value: item[sortedBy.column].props['data-ReactBasicTable-value'],
  })).sort((a, b) => sorter(a.value, b.value));

  return arrayDictionary.map((item) => rows[item.id]);
}
