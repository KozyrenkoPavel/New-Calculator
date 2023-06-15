import Button from './Button';

function Buttons(props) {
  const specialСharacters = {
    PI: '&#x3C0;',
    Sqrt: '&#x221A;',
    division: '&#247;',
    multiplication: '&#215;',
  };

  return (
    <div className="buttons">
      <table className="buttons__btn-one">
        <tbody>
          <tr>
            <td>
              <Button changeOutput={props.changeOutput} value="Sin">
                Sin
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="Ln">
                Ln
              </Button>
            </td>

            <td>
              <Button changeOutput={props.changeOutput} value="EXP">
                EXP
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <Button
                changeOutput={props.changeOutput}
                value={specialСharacters.PI}
              >
                &#x3C0;
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="Cos">
                Cos
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="Log">
                Log
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <Button changeOutput={props.changeOutput} value="e">
                e
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="tan">
                tan
              </Button>
            </td>
            <td>
              <Button
                changeOutput={props.changeOutput}
                value={specialСharacters.Sqrt}
              >
                &#x221A;
              </Button>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="buttons__btn-two">
        <tbody>
          <tr>
            <td>
              <Button changeOutput={props.changeOutput} value="(">
                (
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value=")">
                )
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="%">
                %
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="CE">
                CE
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <Button changeOutput={props.changeOutput} value="7">
                7
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="8">
                8
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="9">
                9
              </Button>
            </td>
            <td>
              <Button
                changeOutput={props.changeOutput}
                value={specialСharacters.division}
              >
                &#247;
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <Button changeOutput={props.changeOutput} value="4">
                4
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="5">
                5
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="6">
                6
              </Button>
            </td>
            <td>
              <Button
                changeOutput={props.changeOutput}
                value={specialСharacters.multiplication}
              >
                &#215;
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <Button changeOutput={props.changeOutput} value="1">
                1
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="2">
                2
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="3">
                3
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="-">
                -
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <Button changeOutput={props.changeOutput} value="0">
                0
              </Button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value=".">
                .
              </Button>
            </td>
            <td>
              <button id="equals" onClick={props.changeOutput} value="=">
                =
              </button>
            </td>
            <td>
              <Button changeOutput={props.changeOutput} value="+">
                +
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Buttons;
