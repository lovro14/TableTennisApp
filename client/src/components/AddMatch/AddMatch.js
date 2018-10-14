import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Input from "../UI/Input";
import { withRouter } from "react-router-dom";
import { addNewMatch } from "../../store/actions";
import { INPUT } from "../../element-type-constants";

class AddMatch extends Component {
  state = {
    username1: "",
    username2: "",
    user1set1: "",
    user2set1: "",
    user1set2: "",
    user2set2: "",
    user1set3: "",
    user2set3: "",
    user1set4: "",
    user2set4: "",
    user1set5: "",
    user2set5: "",
    errors: {}
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const matchData = {
      username1: this.state.username1,
      username2: this.state.username2,
      user1set1: this.state.user1set1,
      user2set1: this.state.user2set1,
      user1set2: this.state.user1set2,
      user2set2: this.state.user2set2,
      user1set3: this.state.user1set3,
      user2set3: this.state.user2set3,
      user1set4: this.state.user1set4,
      user2set4: this.state.user2set4,
      user1set5: this.state.user1set5,
      user2set5: this.state.user2set5
    };
    this.props.addNewMatch(matchData, this.props.history);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="addMatch">
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-auto">
              <h1 className="display-4 text-center">Add Match</h1>
              <br />
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Set 1</th>
                    <th scope="col">Set 2</th>
                    <th scope="col">Set 3</th>
                    <th scope="col">Set 4</th>
                    <th scope="col">Set 5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: "25%" }}>
                      <Input
                        elementType={INPUT}
                        type="text"
                        placeholder="Username"
                        name="username1"
                        value={this.state.username1}
                        onChange={e => this.onChangeHandler(e)}
                        error={errors.username1}
                      />
                    </td>
                    <td style={{ width: "15%" }}>
                      <Input
                        elementType={INPUT}
                        type="number"
                        placeholder=""
                        name="user1set1"
                        value={this.state.user1set1}
                        onChange={e => this.onChangeHandler(e)}
                        error={errors.user1set1}
                      />
                    </td>
                    <td style={{ width: "15%" }}>
                      <Input
                        elementType={INPUT}
                        type="number"
                        placeholder=""
                        name="user1set2"
                        value={this.state.user1set2}
                        onChange={e => this.onChangeHandler(e)}
                        error={errors.user1set2}
                      />
                    </td>
                    <td style={{ width: "15%" }}>
                      <Input
                        elementType={INPUT}
                        type="number"
                        placeholder=""
                        name="user1set3"
                        value={this.state.user1set3}
                        onChange={e => this.onChangeHandler(e)}
                        error={errors.user1set3}
                      />
                    </td>
                    <td style={{ width: "15%" }}>
                      <Input
                        elementType={INPUT}
                        type="number"
                        placeholder=""
                        name="user1set4"
                        value={this.state.user1set4}
                        onChange={e => this.onChangeHandler(e)}
                        error={errors.user1set4}
                      />
                    </td>
                    <td style={{ width: "15%" }}>
                      <Input
                        elementType={INPUT}
                        type="number"
                        placeholder=""
                        name="user1set5"
                        value={this.state.user1set5}
                        onChange={e => this.onChangeHandler(e)}
                        error={errors.user1set5}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "25%" }}>
                      <Input
                        elementType={INPUT}
                        type="text"
                        placeholder="Username"
                        name="username2"
                        value={this.state.username2}
                        onChange={e => this.onChangeHandler(e)}
                        error={errors.username2}
                      />
                    </td>
                    <td style={{ width: "15%" }}>
                      <Input
                        elementType={INPUT}
                        type="number"
                        placeholder=""
                        name="user2set1"
                        value={this.state.user2set1}
                        onChange={e => this.onChangeHandler(e)}
                        error={errors.user2set1}
                      />
                    </td>
                    <td style={{ width: "15%" }}>
                      <Input
                        elementType={INPUT}
                        type="number"
                        placeholder=""
                        name="user2set2"
                        value={this.state.user2set2}
                        onChange={e => this.onChangeHandler(e)}
                        error={errors.user2set2}
                      />
                    </td>
                    <td style={{ width: "15%" }}>
                      <Input
                        elementType={INPUT}
                        type="number"
                        placeholder=""
                        name="user2set3"
                        value={this.state.user2set3}
                        onChange={e => this.onChangeHandler(e)}
                        error={errors.user2set3}
                      />
                    </td>
                    <td style={{ width: "15%" }}>
                      <Input
                        elementType={INPUT}
                        type="number"
                        placeholder=""
                        name="user2set4"
                        value={this.state.user2set4}
                        onChange={e => this.onChangeHandler(e)}
                        error={errors.user2set4}
                      />
                    </td>
                    <td style={{ width: "15%" }}>
                      <Input
                        elementType={INPUT}
                        type="number"
                        placeholder=""
                        name="user2set5"
                        value={this.state.user2set5}
                        onChange={e => this.onChangeHandler(e)}
                        error={errors.user2set5}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "25%" }} />
                    <td style={{ width: "15%", color: "red" }}>
                      {errors.set1}
                    </td>
                    <td style={{ width: "15%", color: "red" }}>
                      {errors.set2}
                    </td>
                    <td style={{ width: "15%", color: "red" }}>
                      {errors.set3}
                    </td>
                    <td style={{ width: "15%", color: "red" }}>
                      {errors.set4}
                    </td>
                    <td style={{ width: "15%", color: "red" }}>
                      {errors.set5}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p style={{ color: "red" }}>{errors.match}</p>
              <button
                className="btn btn-primary"
                onClick={this.onSubmitHandler}
              >
                Add Match
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddMatch.propTypes = {
  errors: PropTypes.object.isRequired,
  addNewMatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = {
  addNewMatch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddMatch));
