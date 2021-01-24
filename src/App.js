import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { InDevLanding } from './pages/inDevLanding';
import { Footer } from './components/Footer';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <InDevLanding/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
