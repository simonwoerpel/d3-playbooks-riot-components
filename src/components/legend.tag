import render from 'string-template'

import './raw_html.tag'

<riot-legend class="{ opts.className } d3-playbooks__legend">

  <raw-html content={ rawContent } />

  this.rawContent = render(this.opts.templates.wrapper, {
    body: this.opts.legendItems.map(l => render(this.opts.templates.item, l)).join('')
  })

</riot-legend>
