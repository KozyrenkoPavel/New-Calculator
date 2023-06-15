import { useState } from 'react';
import Buttons from './Buttons';
import Input from './Input';
import Button from './Button';
import HistoryWindow from './HistoryWindow';

function Calculator() {
  const [result, setResult] = useState('');

  const changeResult = (event) => {
    event.preventDefault();

    let targetValue = event.target.value;

    setResult(result + targetValue);

    if (targetValue === 'Sin') {
      targetValue = Math.sin(result);

      setResult(targetValue);
    } else if (targetValue === 'Ln') {
      targetValue = Math.log(result);

      setResult(targetValue);
    } else if (targetValue === 'EXP') {
      targetValue = Math.exp(result);

      setResult(targetValue);
    } else if (targetValue === '&#x3C0;') {
      targetValue = Math.PI;

      setResult(result + targetValue);
    } else if (targetValue === 'Cos') {
      targetValue = Math.cos(result);

      setResult(targetValue);
    } else if (targetValue === 'Log') {
      targetValue = Math.log10(result);

      setResult(targetValue);
    } else if (targetValue === 'e') {
      targetValue = Math.E;

      setResult(result + targetValue);
    } else if (targetValue === 'tan') {
      targetValue = Math.tan(result);

      setResult(targetValue);
    } else if (targetValue === '&#x221A;') {
      targetValue = Math.sqrt(result);

      setResult(targetValue);
    } else if (targetValue === '%') {
      //
    } else if (targetValue === 'CE') {
      setResult('');
    } else if (targetValue === '&#247;') {
      targetValue = '/';

      setResult(result + targetValue);
    } else if (targetValue === '&#215;') {
      targetValue = '*';

      setResult(result + targetValue);
    } else if (targetValue === '=') {
      setResult(eval(result));
    }
  };

  return (
    <div className="container">
      <HistoryWindow text={result} />

      <form action="" onSubmit={changeResult}>
        <Input output={result} changeOutput={changeResult} />
        <Buttons changeOutput={changeResult} />
      </form>
    </div>
  );
}

export default Calculator;
