import React from 'react';
import CreateItem from './items/create';
import ListItems from './items/list';
import AddCountry from './countries/add';
import ListCountries from './countries/list';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <header>
          <h1>Functional Reactive State Management with Bacon.js</h1>
        </header>

        {/* To do items */}
        <CreateItem />
        <ListItems items={this.props.items} />

        {/* Countries */}
        <AddCountry />
        <ListCountries countries={this.props.countries} />
      </section>
    );
  }
}

App.propTypes = {
  items: React.PropTypes.array.isRequired,
  countries: React.PropTypes.array.isRequired
};
