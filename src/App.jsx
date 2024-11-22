import './App.css';
import {UIProvider} from './components/UIContext.jsx';
import Header from './components/Header.jsx';
import Experience from './components/Experience.jsx';
import TopUI from './components/TopUI.jsx';
import Education from './components/Education.jsx';

function App() {

  return (
    <>
    <UIProvider>
      <div className='App'>
        <TopUI />
        <Header />
        <Experience />
        <Education />
      </div>
    </UIProvider>
    </>
  )
}

export default App
