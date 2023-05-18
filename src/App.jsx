import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyle';

import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { Contact } from './pages/Contact';
import { NewProject } from './pages/NewProject';
import { Projects } from './pages/Projects';

import { Container } from './components/layout/Container';

import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      
      <NavBar/>

      <Container minHeight='minHeight'>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/company' element= {<Company/>}/>
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/newproject' element= {<NewProject/>}/>
          <Route path='/projects' element= {<Projects/>}/>
        </Routes>
      </Container>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;
