import React from "react"
import { Redirect, Route } from "react-router-dom"

export default function PublicRoute({ render: Comp, ...rest }) {
    return (
        <Route
        {...rest}
        render={() =>
        !(localStorage.getItem("user")) ? (
            <Comp />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    )
}