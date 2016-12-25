import React from 'react';

const ListCountries = ({ countries }) => (
  <section>
    <h2>Countries I've been to</h2>
    <ul>
      {
        countries.map((country, index) => (
          <li key={index}>{country}</li>
        ))
      }
    </ul>
  </section>
);

ListCountries.propTypes = {
  countries: React.PropTypes.array.isRequired
};

export default ListCountries;
