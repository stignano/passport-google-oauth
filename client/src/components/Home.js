/* Authenticated users will see this component */

import React from "react";
import { connect } from "react-redux";

import requireAuth from "./requireAuth";

function Home() {
  return (
    <div>
      <p>Hi, you are signed in :)</p>
      <a href="/api/signout">
        <button>Sign out</button>
      </a>
    </div>
  );
}

// Wrap in requireAuth HOC
export default connect(null)(requireAuth(Home));
