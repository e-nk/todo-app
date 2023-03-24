import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to My Todo App</h1>
        <p className="lead">
          This is a simple Todo app built with React and Bootstrap.
        </p>
        <hr className="my-4" />
        <p>
          With this app, you can create, update, and delete tasks in your to-do
          list, and keep track of your progress.
        </p>
        <p>
          To get started, click on the "Get Started" button below and you'll be
          taken to the Todo page where you can start adding tasks to your list.
        </p>
        <p>
          If you're new to the app, we recommend checking out the "About" page
          to learn more about how the app works and what features are available.
        </p>
        <hr className="my-4" />
        <h2>Why use our Todo App?</h2>
        <ul>
          <li>Easy to use and navigate</li>
          <li>Fast and responsive interface</li>
          <li>Flexible task management features</li>
          <li>Free and open source</li>
        </ul>
        <p className="lead">
          <a
            className="btn btn-primary btn-lg"
            href="/Todos"
            role="button"
          >
            Get Started
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
