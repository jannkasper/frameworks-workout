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
        <br/>
        <Button type="bop"/>
        <Button type="flick"/>
        <Button type="twist"/>
        <Button type="spin"/>
        <br/>
        <Button type="rainbow"/>
        <br/>
        <Button type="atom"/>
        <br/>
        <Button type="prism"/>
      </header>
    </div>
  );
}

export default App;
