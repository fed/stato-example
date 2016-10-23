import React from 'react';
import Spinner from './spinner/spinner';
import CreateItem from './items/create';
import ListItems from './items/list';
import AddCountry from './countries/add';
import ListCountries from './countries/list';
import styles from './styles.css';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <header>
          <h1 className={styles.heading}>Functional Reactive State Management with Bacon.js</h1>
        </header>

        <Spinner isVisible={this.props.loading} />

        <div className={styles.container}>
          {/* To do items */}
          <div className={styles.box}>
            <CreateItem />
            <ListItems items={this.props.items} />
          </div>

          {/* Countries */}
          <div className={styles.box}>
            <AddCountry />
            <ListCountries countries={this.props.countries} />
          </div>
        </div>
      </section>
    );
  }
}

App.propTypes = {
  items: React.PropTypes.array.isRequired,
  countries: React.PropTypes.array.isRequired,
  loading: React.PropTypes.bool.isRequired
};
