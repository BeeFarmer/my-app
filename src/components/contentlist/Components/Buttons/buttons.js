import React from 'react';
import Button from '@material-ui/core/Button';
import MyTemplete  from '../../../templete';
import CodeBlock from '../../../';
import ReactMarkdown from 'react-markdown';

class Buttons extends React.Component
{

  renderButton()
  {
    return(
      <div>
            <br/>
            <h3>Default</h3>
            <div className="buttons">
                <Button>Default</Button>
                <Button color="primary">
                    Primary
                </Button>
                <Button color="secondary">
                    Secondary
                </Button>
                <Button disabled>
                    Disabled
                </Button>
            </div>
            <h3>Outlined</h3>
            <div className="buttons">
                <Button variant="outlined">Default</Button>
                <Button variant="outlined" color="primary">
                    Primary
                </Button>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" disabled>
                    Disabled
                </Button>
            </div>
            <h3>Contained</h3>
            <div className="buttons">
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
            </div>
            <h3>Size</h3>
            <div className="buttons">
                <Button size="small" variant="contained">
                    Small
                </Button>
                <Button size="medium" variant="contained" color="secondary">
                    Medium
                </Button>
                <Button size="medium" variant="contained" disabled>
                    Disabled
                </Button>
                <Button size="large" variant="contained" color="primary">
                    Large
                </Button>
            </div>
        </div>
    );
  }

  render()
  {

    let output = this.renderButton();
    let myName = "Button";
    let string = `
    import Button from '@material-ui/core/Button';
      <Button color="primary | secondary" variant="outlined | contained" size="small | medium | large">
        Button
      </Button>
      <Button disabled>
        Disabled Button
      </Button>`;

    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);

    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }

}

export default Buttons;
