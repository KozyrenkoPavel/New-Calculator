import Button from './Button';

function Buttons() {
  return (
    <div className="buttons">
      <table className="buttons__btn-one">
        <tr>
          <td>
            <Button>Rad</Button>
          </td>
          <td>
            <Button>Deg</Button>
          </td>
          <td>
            <Button>x!</Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button>inv</Button>
          </td>
          <td>
            <Button>sin</Button>
          </td>
          <td>
            <Button>ln</Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button>Pi</Button>
          </td>
          <td>
            <Button>cos</Button>
          </td>
          <td>
            <Button>log</Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button>e</Button>
          </td>
          <td>
            <Button>tan</Button>
          </td>
          <td>
            <Button>sqrt</Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button>Ans</Button>
          </td>
          <td>
            <Button>EXP</Button>
          </td>
          <td>
            <Button>xy</Button>
          </td>
        </tr>
      </table>

      <table className="buttons__btn-two">
        <tr>
          <td>
            <Button>(</Button>
          </td>
          <td>
            <Button>)</Button>
          </td>
          <td>
            <Button>%</Button>
          </td>
          <td>
            <Button>CE</Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button>7</Button>
          </td>
          <td>
            <Button>8</Button>
          </td>
          <td>
            <Button>9</Button>
          </td>
          <td>
            <Button>/</Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button>4</Button>
          </td>
          <td>
            <Button>5</Button>
          </td>
          <td>
            <Button>6</Button>
          </td>
          <td>
            <Button>*</Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button>1</Button>
          </td>
          <td>
            <Button>2</Button>
          </td>
          <td>
            <Button>3</Button>
          </td>
          <td>
            <Button>-</Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button>0</Button>
          </td>
          <td>
            <Button>.</Button>
          </td>
          <td>
            <Button>=</Button>
          </td>
          <td>
            <Button>+</Button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Buttons;
