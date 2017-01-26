import plays from './playbooks/plays.js'
import defaults from './playbooks/defaults.js'
import template from './playbooks/template.js'

// Object.assign polyfill already present in base library

// update plays & defaults
Object.assign(plays, d3.playbooks.CHARTS.baseChart.plays)
Object.assign(defaults, d3.playbooks.CHARTS.baseChart.defaults)
d3.playbooks.CHARTS.baseChart = {plays, defaults}

// update playbook template

// existing methods
Object.assign(d3.playbooks.TEMPLATE.init, template.init)
Object.assign(d3.playbooks.TEMPLATE.draw, template.draw)

// new ones
Object.keys(template).filter(k => ['init', 'draw'].indexOf(k) === -1).map(k => {
  d3.playbooks.TEMPLATE[k] = template[k]
})

// add public methods
const publics = ['legend', 'infobox', 'selector', 'hilight', 'unhilight']
d3.playbooks.PUBLIC_METHODS = d3.playbooks.PUBLIC_METHODS.concat(publics)
