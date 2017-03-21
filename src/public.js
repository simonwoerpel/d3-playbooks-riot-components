// FIXME
// refactor to better library handling in general.


import _plays from './playbooks/plays.js'
import _defaults from './playbooks/defaults.js'
import _template from './playbooks/template.js'

// Object.assign polyfill already present in base library

// update plays & defaults
const getUpdatedPlaybook = base => {
  const plays = Object.assign(_plays, base.plays)
  const defaults = Object.assign(_defaults, base.defaults)
  return {plays, defaults}
}

// update playbook template
const updateTemplate = template => {
  // existing methods
  Object.assign(template.init, _template.init)
  Object.assign(template.draw, _template.draw)

  // new ones
  Object.keys(_template).filter(k => ['init', 'draw'].indexOf(k) === -1).map(k => {
    template[k] = _template[k]
  })
}


if (d3.playbooks.CHARTS) {
  d3.playbooks.CHARTS.baseChart = getUpdatedPlaybook(d3.playbooks.CHARTS.baseChart)
  updateTemplate(d3.playbooks.TEMPLATE)
}

if (d3.playbooks.maps) {
  d3.playbooks.maps.MAPS.baseMap = getUpdatedPlaybook(d3.playbooks.maps.MAPS.baseMap)
  updateTemplate(d3.playbooks.maps.TEMPLATE)
}


// add public methods
const publics = ['legend', 'infobox', 'selector', 'hilight', 'unhilight']
d3.playbooks.PUBLIC_METHODS = d3.playbooks.PUBLIC_METHODS.concat(publics)
