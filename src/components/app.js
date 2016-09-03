import React from 'react';
import Create from './create';
import List from './list';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <header>
          <h1>Bacon-powered TODO List</h1>
          <p>Built using <a href="https://facebook.github.io/react/">React</a> and <a href="https://baconjs.github.io/">Bacon.js</a>. Have a look at the source code <a href="https://github.com/fknussel/bacon-react">here</a>.</p>
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
