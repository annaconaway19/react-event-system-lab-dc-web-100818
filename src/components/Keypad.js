// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

handleClick = () => {
  console.log('Entering password...')
}

  render() {
    return(
      <div>
        Enter password:
        <input type='password' onKeyUp={this.handleClick} />
      </div>
    );
  }
}

export default Keypad
