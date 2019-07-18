import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Table from "./Table";
import Form from "./Form";
import orderBy from "lodash/orderBy";
import "./App.css";

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class App extends Component {
  state = {
    data: [
      {
        nickName: "Dawid",
        Email: "randommail@gmail.com",
        ipAdress: "255.255.255.255"
      },
      {
        nickName: "Bartosz",
        Email: "random@gmail.com",
        ipAdress: "175.245.245.255"
      },
      {
        nickName: "Adam",
        Email: "random@yahoo.com",
        ipAdress: "215.245.245.255"
      }
    ],
    sortingColumn: "",
    sortingDirection: "desc"
  };

  handleSort = columnName => {
    this.setState(state => ({
      sortingColumn: columnName,
      sortingDirection:
        state.sortingColumn === columnName
          ? invertDirection[state.sortingDirection]
          : "asc"
    }));
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  handleRemoveAll = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j === i)
    }));
  };

  render() {
    return (
      <div className="container paper">
        <header>
          <h1>
            React forms <br /> using material-ui{" "}
          </h1>
        </header>
        <MuiThemeProvider>
          <div className="App">
            <Form
              onSubmit={submission =>
                this.setState({
                  data: [...this.state.data, submission]
                })
              }
            />

            <Table
              handleSort={this.handleSort}
              handleRemoveAll={this.handleRemoveAll}
              handleRemove={this.handleRemove}
              data={orderBy(
                this.state.data,
                this.state.sortingColumn,
                this.state.sortingDirection
              )}
              header={[
                {
                  name: "Nick name",
                  prop: "nickName"
                },
                {
                  name: "Email",
                  prop: "Email"
                },
                {
                  name: "Ip Adress",
                  prop: "ipAdress"
                }
              ]}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
