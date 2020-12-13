import './App.css';
import {Button} from "./components";
import {Input, InputAnimation} from "./components/input";

function App() {

  const buttons = (
      <div>
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
      </div>
  )

  const inputs = (
      <div>
        <Input type="minimal" />
        <br />
        <Input type="form" />
        <br />
        <InputAnimation />
      </div>
  )

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {buttons}
        <br />
        {inputs}
      </header>
    </div>
  );
}

export default App;
