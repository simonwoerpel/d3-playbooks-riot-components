// available components
import './components/legend.tag'
import './components/infobox.tag'
import './components/selector.tag'

// event handling
import './utils/events/event_names.js'

// additional stzle
import './styles/main.scss'

// exported stuff
import './public.js'

// dev mode
import renderExamples from './examples.js'

if (process.env.NODE_ENV == 'development') {
  renderExamples()
}
