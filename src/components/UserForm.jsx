import { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "../redux/actions";
import styles from "../styles/UserForm.module.css";

function UserForm({ setUserInfo }) {
  const [localUser, setLocalUser] = useState({
    name: "",
    status: "",
  });

  function handelInput(event) {
    const { name, value } = event.target;
    setLocalUser({
      ...localUser,
      [name]: value,
    });
  }

  function handelSubmit(e) {
    e.preventDefault();
    setUserInfo(localUser);
    setLocalUser({ name: "", status: "" });
  }

  return (
    <div className={styles.container}>
      <h2>Edit User Information</h2>
      <form onSubmit={handelSubmit} className={styles.userFormContainer}>
        <div className={styles.inputContainer}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handelInput}
            value={localUser.name}
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Status</label>
          <input
            type="text"
            name="status"
            onChange={handelInput}
            value={localUser.status}
          />
        </div>
        <button className={styles.btn}>Save</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  setUserInfo,
};

export default connect(null, mapDispatchToProps)(UserForm);
