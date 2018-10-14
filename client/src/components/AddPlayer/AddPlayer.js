import React, { Component } from "react";
import { addPlayer } from "../../store/actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Input from "../UI/Input";
import { withRouter } from "react-router-dom";
import { INPUT } from "../../element-type-constants";

class AddPlayer extends Component {
  state = {
    username: "",
    fullName: "",
    errors: {}
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const playerData = {
      username: this.state.username,
      fullName: this.state.fullName
    };
    this.props.addPlayer(playerData, this.props.history);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="addPlayer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Player</h1>
              <form noValidate onSubmit={this.onSubmitHandler}>
                <Input
                  elementType={INPUT}
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={e => this.onChangeHandler(e)}
                  error={errors.username}
                />
                <Input
                  elementType={INPUT}
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={e => this.onChangeHandler(e)}
                  error={errors.fullName}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddPlayer.propTypes = {
  errors: PropTypes.object.isRequired,
  addPlayer: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = {
  addPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddPlayer));
