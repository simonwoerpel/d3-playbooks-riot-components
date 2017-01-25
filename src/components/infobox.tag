import render from 'string-template'

import './raw_html.tag'

<riot-infobox class="{ opts.className } d3-playbooks__infobox { -empty: empty }">
  <raw-html content={ rawContent } />

  this.empty = true

  this.opts.control.on(riot.EVT.updateInfobox, data => {
    this.update({
      empty: false,
      rawContent: render(this.opts.template, data)
    })
  })

  this.opts.control.on(riot.EVT.emptyInfobox, () => {
    this.update({empty: true})
  })
</riot-infobox>
