import { render } from 'preact'
import { App } from './app'
import 'bulma/css/bulma.min.css'
import './style/main.css'

render(<App />, document.getElementById('app'))