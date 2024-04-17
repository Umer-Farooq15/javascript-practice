import React from 'react';

function UserGreeting() {
  return <h1 className="text-3xl text-blue-700">Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1 className="text-3xl text-red-700">Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Greeting;
