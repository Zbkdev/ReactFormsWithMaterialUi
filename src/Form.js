import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    nickName: "",
    nickNameError: "",
    Email: "",
    EmailError: "",
    ipAdress: "",
    ipAdressError: "",

  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      ipAdressError: "",
      nickNameError: "",
      EmailError: "",
    };

    const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (!this.state.ipAdress.match(ipformat)) {
      isError = true;
      errors.ipAdressError = "Wrong IpAdress";
    }

    if (!this.state.nickName) {
      isError = true;      
      errors.nickNameError = "NickName can't be blank";
    }

    if (this.state.Email.indexOf("@") === -1) {
      isError = true;
      errors.EmailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        nickName: "",
        nickNameError: "",
        Email: "",
        EmailError: "",
        ipAdress: "",
        ipAdressError: "",
      });
    }
  };

  render() {
    return (
      <form>
        <TextField
          name="nickName"
          hintText="put your nick name here"
          floatingLabelText="Nick name"
          value={this.state.nickName}
          onChange={e => this.onChange(e)}
          errorText={this.state.nickNameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="Email"
          hintText="put your email here"
          floatingLabelText="Email"
          value={this.state.Email}
          onChange={e => this.onChange(e)}
          errorText={this.state.EmailError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="ipAdress"
          hintText="example 255.255.255.25"
          floatingLabelText="ipAdress"
          value={this.state.ipAdress}
          onChange={e => this.onChange(e)}
          errorText={this.state.ipAdressError}
          floatingLabelFixed
        />
        <br />

        <div className="button">
            <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
        </div>
      </form>
    );
  }
}
