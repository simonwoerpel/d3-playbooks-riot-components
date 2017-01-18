<riot-selector class="d3-playbooks__selector">

  <select onchange={ hilight }>
    <option each={ label, i in labels } value={ i } selected={ active === i }>{ label }</option>
  </select>

  this.active = 0
  this.data = this.opts.data
  this.labels = Object.keys(this.data)

  this.hilight = e => {
    const label = this.labels[e.target.value]
    const data = this.data[label]
    this.opts.hilight(data)
    this.opts.control.trigger(riot.EVT.updateInfobox, data)
  }

  this.opts.control.on(riot.EVT.updateSelector, data => {
    const active = this.labels.indexOf(this.opts.getLabel(data))
    this.update({active})
  })
</riot-selector>
