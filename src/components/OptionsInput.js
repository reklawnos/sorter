import React, { Component } from 'react';

class OptionsInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
    };
  }

  onTextChanged = (e) => {
    this.setState({ inputText: e.target.value });
  };

  onSubmit = () => {
    this.props.onSubmit(this.state.inputText);
  };

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <textarea
          value={inputText}
          onChange={this.onTextChanged}
          className="options-input"
        />
        <div className="start-button-container">
          <button onClick={this.onSubmit}>
            Start
          </button>
        </div>
      </div>
    );
  }
}

export default OptionsInput;
