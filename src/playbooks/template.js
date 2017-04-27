export default {
  init: {
    control: 'getControl',
    _events: 'initRiotEvents'
  },
  draw: {
    _events: 'addMouseEvents',
  },
  legend: {
    legendItems: 'getLegendItems',
    legendTemplates: 'getLegendTemplates',
    legendEl: 'mountLegend'
  },
  infobox: {
    infoboxTemplate: 'getInfoboxTemplate',
    infoboxEl: 'mountInfobox'
  },
  selector: {
    selectorData: 'getSelectorData',
    selectorEl: 'mountSelector'
  },
  hilight: {
    // _unhilight: 'unhilightSelection',
    _clear: 'clearHilight',
    hilightedSel: 'findSelectionForHilight',
    _hilight: 'hilightSelection'
  },
  unhilight: {
    hilightedSel: 'unhilightSelection'
  }
}
