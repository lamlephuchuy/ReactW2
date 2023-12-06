import React, {useState} from "react"
import Button from "react-bootstrap/Button"

const UsingState = () => {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
      setCounter(counter + 1);
    };
    return (
      <div className="component-using-state">
        <div className="result">{counter}</div>
        <Button onClick={increaseCounter} size="lg">
          Click
        </Button>
      </div>
    );
   };
   export default UsingState;