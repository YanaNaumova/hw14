import React from "react";
import { connect } from "react-redux";
import style from "../styles/User.module.css";

function User({ user }) {
  return (
    <div className={style.userContainer}>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Status: {user.status}</p>
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state,
});
export default connect(mapStateToProps)(User);
