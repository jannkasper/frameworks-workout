import './App.css';
import {Button} from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="fill"/>
        <Button type="pulse"/>
        <Button type="close"/>
        <Button type="raise"/>
        <Button type="up"/>
        <Button type="slide"/>
        <Button type="offset"/>
      </header>
    </div>
  );
}

export default App;
