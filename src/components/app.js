import React from 'react';
import Spinner from './spinner';
import CreateItem from './items/create';
import ListItems from './items/list';
import AddCountry from './countries/add';
import ListCountries from './countries/list';
import ListUsers from './users/list';
import UserDetails from './users/details';
import styles from './styles.css';

const App = ({ loading, items, countries, users, user }) => (
  <section>
    <header>
      <h1 className={styles.heading}>Functional Reactive State Management with Bacon.js</h1>
    </header>

    <Spinner isVisible={loading} />

    <div className={styles.container}>
      {/* TODO Items */}
      <div className={styles.box}>
        <CreateItem />
        <ListItems items={items} />
      </div>

      {/* Countries */}
      <div className={styles.box}>
        <AddCountry />
        <ListCountries countries={countries} />
      </div>

      {/* GitHub Users List */}
      <div className={styles.box}>
        <ListUsers users={users} />
      </div>

      {/* GitHub User Details */}
      <div className={styles.box}>
        <UserDetails user={user} />
      </div>
    </div>
  </section>
);

App.propTypes = {
  items: React.PropTypes.array.isRequired,
  countries: React.PropTypes.array.isRequired,
  users: React.PropTypes.array.isRequired,
  user: React.PropTypes.object.isRequired,
  loading: React.PropTypes.bool.isRequired
};

export default App;
