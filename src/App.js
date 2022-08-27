import './App.css';

import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Counter app</h1>
      </header>
      <body>
        <p>Counter1 component</p>
        <Counter1/>
        <p>Counter2 component</p>
        <Counter2/>
      </body>
    </div>
  );
}

export default App;
