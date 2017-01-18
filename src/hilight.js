// add hilighted class to drawed selection, find based on data
// can act as public function, gets `C` object
//
// @param data str || object
//  if str, data matching with `data` === `d[xCol]`
//  else complete object matching (data === d)
//
// https://github.com/d3/d3-selection/blob/master/README.md#selection_select
//
export default ({
  drawedSelection,
  xCol
}, data) => {
  let match
  if (typeof data === 'string') match = d => data === d[xCol]
  else match = d => data === d

  return drawedSelection.select(function(d) {
    return match(d) ? this : null
  })
}
