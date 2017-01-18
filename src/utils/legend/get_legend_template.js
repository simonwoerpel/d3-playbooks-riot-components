const WRAPPER_TEMPLATE = '<ul class="d3-playbooks__legend-list">{body}</ul>'

const ITEM_TEMPLATE = `<li class="d3-playbooks__legend-item">
  <span style="background-color:{color};"></span>{label}</li>`

export default ({}, {
  wrapperTemplate,
  itemTemplate
}) => {
  return {
    wrapper: wrapperTemplate || WRAPPER_TEMPLATE,
    item: itemTemplate || ITEM_TEMPLATE
  }
}
