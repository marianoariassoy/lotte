import { Route, Switch } from 'wouter'
import Layout from './layout/Layout'
import Projects from './pages/projects'

function App() {
  return (
    <Layout>
      <Switch>
        <Route
          path='/'
          component={Projects}
        />

        {/* <Route component={Error} /> */}
      </Switch>
    </Layout>
  )
}

export default App
