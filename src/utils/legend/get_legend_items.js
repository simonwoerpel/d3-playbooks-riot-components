export default ({
  groupCol,
  data,
  yCol,
  yCols,
  multiData,
  getColor
}, {labels}) => {
  if (groupCol) {
    let groups = []
    let items = []
    data.map(d => {
      let item = d[groupCol]
      if (groups.indexOf(item) < 0) {
        groups.push(item)
        items.push({
          label: item,
          color: getColor(d)
        })
      }
    })
    return items
  } else if (yCols) {
    // FIXME ?
    let {yValues} = multiData
    return yCols.map((c, i) => {
      return {
        label: labels ? labels[c] : c,
        color: getColor(yValues[i])
      }
    })
  } else if (yCol) {
    return [{
      label: labels ? labels[yCol] : yCol,
      color: getColor(data)
    }]
  }
}
