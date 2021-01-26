import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Landing } from './pages/landing';
import { Footer } from './components/Footer';
import { PageNotFound } from './pages/404';
import { TopNavBar } from './components/TopNav/TopNavBar';
import { About } from './pages/about';
import { Videos} from './pages/videos';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <TopNavBar />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
