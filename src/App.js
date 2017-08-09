import React, { Component } from 'react';
import './App.css';
import ReactDataGrid from 'engage-ui';

class App extends Component {

   getInitialState() {
    this.createRows();
    this._columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' },
      { key: 'count', name: 'Count' } ];

    return null;
  }

  createRows() {
    let rows = [];
    for (let i = 1; i < 1000; i++) {
      rows.push({
        id: i,
        title: 'Title ' + i,
        count: i * 1000
      });
    }

    this._rows = rows;
  }

  rowGetter(i) {
    return this._rows[i];
  }

  render() {
    return  (
      <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={10}
        minHeight={500} />);
  }
}

export default App;
