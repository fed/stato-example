import React from 'react';
import Spinner from './spinner';
import CreateItem from './items/create';
import ListItems from './items/list';
import AddCountry from './countries/add';
import ListCountries from './countries/list';
import styles from './styles.css';

const App = ({ loading, items, countries }) => (
  <section>
    <header>
      <h1 className={styles.heading}>Functional Reactive State Management with Bacon.js</h1>
    </header>

    <Spinner isVisible={loading} />

    <div className={styles.container}>
      {/* To do items */}
      <div className={styles.box}>
        <CreateItem />
        <ListItems items={items} />
      </div>

      {/* Countries */}
      <div className={styles.box}>
        <AddCountry />
        <ListCountries countries={countries} />
      </div>
    </div>
  </section>
);

App.propTypes = {
  items: React.PropTypes.array.isRequired,
  countries: React.PropTypes.array.isRequired,
  loading: React.PropTypes.bool.isRequired
};

export default App;
