import { createContext } from 'react';
import './App.css';
import AboutMyself from './component/AboutMyself';
// import About from './component/About/About';
import AboutMeState from './component/Note/contextApi/AboutMeState';
import NoteState from './component/Note/contextApi/NoteState';
import Component1 from './component/Component1';

export const FirstName = createContext();
export const LastName = createContext();

function App() {


  return (
    <>
      <FirstName.Provider value={'Aditya'}>
        <LastName.Provider value={"Kumar"} >
          <Component1 />
        </LastName.Provider>
      </FirstName.Provider>

      {/* <Component1 /> */}
      <NoteState>
        {/* <div className="app"> */}
          {/* <h1>hello world</h1> */}
          {/* <About /> */}
        <AboutMeState>
          <AboutMyself />
        </AboutMeState>


        {/* </div> */}

      </NoteState>
    </>
  );
}

export default App;
