import { Route, Switch } from 'wouter'
import Layout from './layout/Layout'
import Projects from './pages/projects'
import Plants from './pages/plants'
import Texts from './pages/texts'
import Error from './error'

function App() {
  return (
    <Layout>
      <Switch>
        <Route
          path='/'
          component={Projects}
        />
        <Route
          path='/plants'
          component={Plants}
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
