export default chart => {
  chart.control.on(riot.EVT.mouseover, ({node, data}) => {
    // clear if 'mouseout' is deactivated:
    if (!chart.mouseout) chart.clearHilight(chart)
    chart.hilightedSel ? chart.unhilight(chart) : null
    chart.hilightNode(node)
    chart.control.trigger(riot.EVT.updateInfobox, data)
    chart.control.trigger(riot.EVT.updateSelector, data)
  })

  if (chart.mouseout) {
    chart.control.on(riot.EVT.mouseout, ({node, data}) => {
      chart.unhilightNode(node)
      chart.control.trigger(riot.EVT.emptyInfobox)
    })
  }
}
