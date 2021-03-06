import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Landing } from './pages/landing';
import { Footer } from './components/Footer';
import { PageNotFound } from './pages/404';
import { TopNavBar } from './components/topNavigation/TopNavBar';
import { About } from './pages/about';
import { Videos } from './pages/videos';
import { Blog } from './pages/blog';
import { Talks } from './pages/talks';
import { Contact } from './pages/contact';
import { Sponsors } from './pages/sponsors';
import { JoinUs } from './pages/join';
import { Admin } from './pages/admin';
import { Login } from './pages/login';
import { SuccessPage } from './pages/successPage';
import { ErrorPage } from './pages/errorPage';
import { Team } from './pages/team';


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
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/talks">
            <Talks />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/sponsors">
            <Sponsors />
          </Route>
          <Route path="/join">
            <JoinUs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/success">
            <SuccessPage />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/error">
            <ErrorPage />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
