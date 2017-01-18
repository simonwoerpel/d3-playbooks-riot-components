export default node => {
  node.classList.add('-hilight')
  node.parentNode.appendChild(node)
}
