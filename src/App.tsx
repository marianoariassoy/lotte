import { Route, Switch } from 'wouter'
import Layout from './layout/Layout'
import Projects from './pages/projects'
import Home from './pages/home'
import Plants from './pages/plants'
import Journal from './pages/journal'
import Texts from './pages/texts'
import Error from './error'

function App() {
  return (
    <Layout>
      <Switch>
        <Route
          path='/'
          component={Home}
        />
        <Route
          path='/projects'
          component={Projects}
        />
        <Route
          path='/plants'
          component={Plants}
        />
        <Route
          path='/journal'
          component={Journal}
        />
        <Route
          path='/texts'
          component={Texts}
        />

        <Route component={Error} />
      </Switch>
    </Layout>
  )
}

export default App
