export default ({hilightedSel}) => {
  hilightedSel ? hilightedSel.classed('-hilight', false) : null
  return null
}
