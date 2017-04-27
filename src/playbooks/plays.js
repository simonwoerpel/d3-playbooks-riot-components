import mountRiotTag from '../utils/mount_riot_tag.js'
import getLegendItems from '../utils/legend/get_legend_items.js'
import getLegendTemplates from '../utils/legend/get_legend_template.js'
import getInfoboxTemplate from '../utils/infobox/get_infobox_template.js'
import getSelectorData from '../utils/selector/get_selector_data.js'
import findSelectionForHilight from '../utils/hilight/find_selection.js'
import hilightSelection from '../utils/hilight/hilight_selection.js'
import unhilightSelection from '../utils/hilight/unhilight_selection.js'
import clearHilight from '../utils/hilight/clear_hilighted.js'
import addMouseEvents from '../utils/events/add_mouse_events.js'
import initRiotEvents from '../utils/events/init_riot_events.js'

export default {
  // event bus
  getControl: () => riot.observable(),
  addMouseEvents,
  initRiotEvents,

  // legend
  getLegendItems,
  getLegendTemplates,
  mountLegend: (C, opts) => mountRiotTag(C, {
    tagName: 'riot-legend',
    riotSelector: opts.element,
    cssClass: 'legend',
    opts: {
      legendItems: C.legendItems,
      templates: C.legendTemplates
    }
  }),

  // infobox
  getInfoboxTemplate,
  mountInfobox: (C, opts) => mountRiotTag(C, {
    tagName: 'riot-infobox',
    riotSelector: opts.element,
    cssClass: 'infobox',
    opts: {
      control: C.control,
      template: C.infoboxTemplate
    }
  }),

  // data selector
  getSelectorData,
  mountSelector: (C, opts) => mountRiotTag(C, {
    tagName: 'riot-selector',
    riotSelector: opts.element,
    cssClass: 'selector',
    opts: {
      getLabel: opts.getLabel ? opts.getLabel : d => d[C.xCol],
      control: C.control,
      data: C.selectorData,
      hilight: C.hilight
    }
  }),

  // hilighting
  findSelectionForHilight,
  hilightSelection,
  unhilightSelection,
  clearHilight
}
