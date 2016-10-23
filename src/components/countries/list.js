import React from 'react';

export default class ListCountries extends React.Component {
  render() {
    return (
      <section>
        <h2>Countries I've been to</h2>
        <ul>
          {
            this.props.countries.map((country, index) => (
              <li key={index}>{country}</li>
            ))
          }
        </ul>
      </section>
    );
  }
}

ListCountries.propTypes = {
  countries: React.PropTypes.array.isRequired
};
