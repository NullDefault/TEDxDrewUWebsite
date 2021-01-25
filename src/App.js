import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Landing } from './pages/landing';
import { Footer } from './components/Footer';
import { PageNotFound } from './pages/404';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
