import React, { Component } from 'react';
import Sorter from './Sorter';
import OptionsInput from './OptionsInput';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: null,
      result: null,
    };
  }

  onTextSubmit = (text) => {
    this.setState({ options: text.split('\n') });
  };

  onRankingComplete = (rankedOptions) => {
    this.setState({ result: rankedOptions });
  };

  render() {
    const { options, result } = this.state;
    return (
      <div>
        {!options &&
          <OptionsInput onSubmit={this.onTextSubmit} />
        }
        {options && !result &&
          <Sorter
            options={options}
            onRankingComplete={this.onRankingComplete}
          />
        }
        {result &&
          <div className="result-list">
            {result.map((result, i) => (
              <div key={i}>
                {result}
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
}

export default App;
