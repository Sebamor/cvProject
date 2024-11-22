import './App.css';
import {UIProvider} from './components/UIContext.jsx';
import Header from './components/Header.jsx';
import Experience from './components/Experience.jsx';
import TopUI from './components/TopUI.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';

function App() {

  return (
    <>
    <UIProvider>
      <div className='App'>
        <TopUI />
        <Header />
        <Experience />
        <Education />
        <Skills />
      </div>
    </UIProvider>
    </>
  )
}

export default App
