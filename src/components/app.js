import React from 'react';
import Create from './create';
import List from './list';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <header>
          <h1>Bacon-powered TODO List</h1>
        </header>

        <Create />
        <List items={this.props.items} />
      </section>
    );
  }
}

App.propTypes = {
  items: React.PropTypes.array.isRequired
};
