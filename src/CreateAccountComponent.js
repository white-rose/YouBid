import React, { Component } from 'react';

class CreateAccountComponent extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
          <div>
            <h2>Create Account</h2>
            <form>
              <label>
                First Name:
                <input type="text" name="name" />
                Last Name:
                <input type="text" name="name" />
                Email:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        );
    }
}

export default CreateAccountComponent;
