import React from "react"
import { Link, navigate } from "@reach/router"
import { useAuthValue } from "../Auth/AuthContext";
import { status, status__text } from "./status.module.css"
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

export default () => {

  const { currentUser } = useAuthValue();

  let details
  if (!currentUser) {
    details = (
      <p className={status__text}>
        To get the full app experience, you’ll need to
        {` `}
        <Link to="/app/login">log in</Link>.
      </p>
    )
  } else {
    details = (
      <p className={status__text}>
        Logged in as {currentUser.email}
        {` `}
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            signOut(auth)
            navigate(`/app/login`)
          }}
        >
          log out
        </a>
      </p>
    )
  }

  return <div className={status}>{details}</div>
}
