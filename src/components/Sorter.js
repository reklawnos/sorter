import React, { Component } from 'react';

async function mergeSort(arr, compare) {
  if (arr.length <= 1) {
    return arr;
  }
  const splitPoint = Math.floor(arr.length / 2);
  const a = await mergeSort(arr.slice(0, splitPoint), compare);
  const b = await mergeSort(arr.slice(splitPoint), compare);
  return merge(a, b, compare);
}

async function merge(a, b, compare) {
  const result = [];
  let indexA = 0;
  let indexB = 0;
  while (indexA < a.length || indexB < b.length) {
    if (indexB === b.length) {
      result.push(a[indexA]);
      indexA += 1;
      continue;
    }
    if (indexA === a.length) {
      result.push(b[indexB]);
      indexB += 1;
      continue;
    }

    const comparison = await compare(a[indexA], b[indexB]);
    if (comparison <= 0) {
      result.push(a[indexA]);
      indexA += 1;
    } else {
      result.push(b[indexB]);
      indexB += 1;
    }
  }
  return result;
}

function OptionButton({ onPress, children }) {
  return (
    <div className="option-button--container">
      <button onClick={onPress} className="option-button--button">
        {children}
      </button>
    </div>
  );
}

class Sorter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentComparison: null,
    };
  }

  componentDidMount() {
    const {
      options,
      onRankingComplete,
    } = this.props;
    window.addEventListener('keydown', this.onKeyPress);
    mergeSort(options, this.compare).then(onRankingComplete);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyPress);
  }

  onKeyPress = (e) => {
    const { currentComparison } = this.state;

    switch (e.key) {
      case 'ArrowLeft':
        this.completeComparison(currentComparison.optionA);
        break;
      case 'ArrowRight':
        this.completeComparison(currentComparison.optionB);
        break;
      default:
    }
  };

  compare = (a, b) => {
    return new Promise((resolve) => {
      this.setState({
        currentComparison: {
          optionA: a,
          optionB: b,
          onSelect: resolve,
        },
      })
    });
  };

  completeComparison = (option) => {
    const {
      currentComparison: {
        optionA,
        onSelect,
      },
    } = this.state;
    onSelect(option === optionA ? -1 : 1);
    this.setState({ currentComparison: null });
  };

  render() {
    const { currentComparison } = this.state;
    return currentComparison !== null && (
      <div>
        <OptionButton
          onPress={() => this.completeComparison(currentComparison.optionA)}
        >
          {currentComparison.optionA}
        </OptionButton>
        <OptionButton
          onPress={() => this.completeComparison(currentComparison.optionB)}
        >
          {currentComparison.optionB}
        </OptionButton>
      </div>
    );
  }
}

export default Sorter;
