export default ({
  drawedSelection,
  control,
  // clearSvg
}) => {
  drawedSelection
    .on('mouseover', function(data) {
      control.trigger(riot.EVT.mouseover, {
        node: this,
        data
      })
    })
  drawedSelection
    .on('mouseout', function(data) {
      control.trigger(riot.EVT.mouseout, {
        node: this,
        data
      })
    })
  // if (clearSvg) {
    // for mobile devices: open tooltip on click,
    // but only if it's possible to clear it afterwards
    // (that's what the `clearSvg` flag is for)
    // FIXME: this obviously crashes with the `clearSvg` click event
    // drawedSelection
    //   .on('touchstart', d => {
    //     control.trigger(riot.EVT.hilight, d)
    //   })
  // }
}
