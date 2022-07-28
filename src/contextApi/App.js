import { createContext } from 'react';
import AboutMyself from './component/AboutMyself';
import About from './component/About/About';
import AboutMeState from './component/Note/contextApi/AboutMeState';
import NoteState from './component/Note/contextApi/NoteState';
import Component1 from './component/ContextApiExample/Component1';

export const FirstName = createContext();
export const LastName = createContext();

function App() {


  return (
    <>
      {/* Context Api examples => Example--1( data inside ContextApiExample Folder) */}
      <FirstName.Provider value={'Aditya'}>
        <LastName.Provider value={"Kumar"} >
          <Component1 />
        </LastName.Provider>
      </FirstName.Provider>


      {/* <Component1 /> */}
      {/* ContextApi example --2 (Data inside Note and AboutMyself.js ) */}
      <NoteState>
        <div className="app">
          <h1>hello world</h1>
          <About />
        </div>

        <AboutMeState>
          {/* This AboutMyself component  can access data from AboutMeState */}
          <AboutMyself />
        </AboutMeState>
      </NoteState>
    </>
  );
}

export default App;
