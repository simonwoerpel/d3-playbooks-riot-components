// agnostic function for mounting of concrete riot tags
// the first argument (object) is the actual chart (`C`) object
export default ({
  cssNamespace,
  elementId,
  element
}, {
  tagName,        // riot tag name identifier as exported in component's `.tag` file
  riotSelector,   // optional dom element selector (must be present), otherwise append to `element`
  cssClass,       // optional css name to append to `C.cssNamespace + '__'`
  opts={}         // optional opts given to tag initialization
}) => {
  if (!elementId && !riotSelector) {
    // instead of `d3-playbooks-base`, here we need actual element ids
    throw new Error('need `chart.elementId` or `element` for riot components be able to be mounted')
  }

  const className = cssNamespace + '__' + (cssClass || tagName)

  if (!riotSelector) {
    riotSelector = elementId + '-' + tagName
    element
      .append('div')
      .attr('id', riotSelector)
      .attr('class', className)
    riotSelector = '#' + riotSelector
  }

  // add custom css class
  opts.className = className

  return riot.mount(riotSelector, tagName, opts)[0]
}
