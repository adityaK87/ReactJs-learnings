import About from './component/About/About';
import NoteState from './component/Note/contextApi/NoteState';


function App() {
    
  return (
      <NoteState>
          <div className="app">
              <h1>hello world</h1>
              <About />
          </div>
      </NoteState>
    );
};

export default App;
