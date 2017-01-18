import getTemplate from 'string-template'

const DEFAULT_TEMPLATE = `
  <dl class="d3-playbooks__infobox-table">
    <dt class="d3-playbooks__infobox-label d3-playbooks__infobox-label--{xCol}">{xCol}</dt>
    <dd class="d3-playbooks__infobox-value d3-playbooks__infobox-value--{xCol}">{xVar}</dd>
    {yDt}
  </dl>
`

const YCOL_TEMPLATE = `
  <dt class="d3-playbooks__infobox-label d3-playbooks__infobox-label--{yCol}">{yCol}</dt>
  <dd class="d3-playbooks__infobox-value d3-playbooks__infobox-value--{yCol}">{yVar}</dd>
`

const varTmpl = _var => '{' + _var + '}'
const getYColTemplate = yCol => getTemplate(YCOL_TEMPLATE, {yCol, yVar: varTmpl(yCol)})

export default ({
  xCol,
  yCol,
  yCols
}, {template}) => {
  return template ? template :
    getTemplate(DEFAULT_TEMPLATE, {
        xCol: xCol,
        xVar: varTmpl(xCol),
        yDt: yCols ? yCols.map(yCol => getYColTemplate(yCol)).join('') : getYColTemplate(yCol)
    })
}
