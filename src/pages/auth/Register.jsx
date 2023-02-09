import React from 'react'
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import styles from "./auth.module.scss";
import './auth.module.scss'
import { TiUserAddOutline } from "react-icons/ti";
function Register() {
  return (
    <div className={`container ${styles.auth}`}>
    {/* {isLoading && <Loader />} */}
    <Card>
      <div className={styles.form}>
        <div className="--flex-center">
          <TiUserAddOutline size={35} color="#999" />
        </div>
        <h2>Login</h2>

        <form >
        <input
            type="text"
            placeholder="Name"
            required
            name="name"
            // value={email}
            // onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            // value={email}
            // onChange={handleInputChange}
          />

          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            // value={password}
            // onChange={handleInputChange}
          />
          
          <input
            type="password"
            placeholder="Confirm Password"
            required
            name="password"
            // value={password}
            // onChange={handleInputChange}
          />
          <button type="submit" className="--btn --btn-primary --btn-block">
            Register
          </button>
        </form>


        <span className={styles.register}>
          <Link to="/">Home</Link>
          <p> &nbsp; Already have an account? &nbsp;</p>
          <Link to="/login">Login</Link>
        </span>
      </div>
    </Card>
  </div>
  )
}

export default Register