// render some base examples
export default () => {

  const chart = d3.playbooks.barChart({
    elementId: 'chart1',
    data: [
      ['a', 'c', 'b'],
      ['1', 3, '2']
    ],
  }).render().legend({
    wrapperTemplate: '<h3>Legend</h3><p>{body}</p>',
    itemTemplate: 'The color for <strong>{label}</strong> is <em>{color}</em>.'
  })
  .infobox({
    element: '#my-infobox',
    template: '<p><strong>Value for {x}:</strong> {y}</p>'
  }).selector({
    getLabel: d => d.x + ' (' + d.y + ')',
    sortItems: (a, b) => b.y - a.y
  })

  d3.playbooks.scatterChart({
    elementId: 'chart2',
    data: {
      x: [1, 2, 3, 4, 6],
      y: [2, 5, 1, 1, 8]
    },
    color: d3.schemeCategory10,
    getLegendItems: C => {
      return C.data.map(d => {
        return {
          label: 'Item ' + d.x,
          color: C.getColor(d)
        }
      })
    }
  }).render().legend().infobox().selector()

  d3.playbooks.multiLineChart({
    elementId: 'chart3',
    dataUrl: 'data/multiline.csv',
    yCols: ['y1', 'y2', 'y3']
  }).render().legend()

}
