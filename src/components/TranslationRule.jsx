import React from 'react';
import ConstraintsContainer from './ConstraintsContainer';
import OutputRulesContainer from './OutputRulesContainer';

class TranslationRule extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Rule X</h2> {this.props.a}
        <ConstraintsContainer></ConstraintsContainer>
        <hr></hr>
        <OutputRulesContainer></OutputRulesContainer>
      </React.Fragment>
    );
  }
}

export default TranslationRule;
