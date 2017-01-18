// convert data to mapping for selector, this works only for unique (ordinal) scales
//
// opts:
//  - getLabel: function to compute label based on chart `data`, default xCol
//  - sortItems: function to sort labels, BUT based on chart `data` itself not on computed labels
export default ({
  data,
  xCol
}, {
  getLabel,
  sortItems
}) => {
  const _data = {}
  const getKey = d => getLabel ? getLabel(d) : d[xCol]
  const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0
  const _sort = sortItems ? sortItems : (a, b) => compare(getKey(a), getKey(b))
  data.sort(_sort).map(d => _data[getKey(d)] = d)
  return _data
}
