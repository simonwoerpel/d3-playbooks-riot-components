import {fromJS as _} from 'immutable'
import plays from './playbooks/plays.js'
import defaults from './playbooks/defaults.js'
import template from './playbooks/template.js'

// update plays & defaults
const update = _(d3.playbooks.CHARTS.baseChart).mergeDeep({plays, defaults})
d3.playbooks.CHARTS.baseChart = update.toJS()

// update playbook template
d3.playbooks.TEMPLATE = d3.playbooks.TEMPLATE.mergeDeep(template)

const publics = d3.playbooks.PUBLIC_METHODS.concat(['legend', 'infobox', 'selector', 'hilight', 'unhilight'])
d3.playbooks.PUBLIC_METHODS = publics
