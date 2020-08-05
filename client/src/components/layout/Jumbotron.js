import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container text-center d-flex h-100">
        <div className="row justify-content-center align-self-center">
          <h1 className="display-4 jumbotron-elements">Witaj w JobFinder!</h1>
          <p className="lead jumbotron-elements">
            Z nami znajdziesz swoją pracę marzeń! Ponadto, znajdziesz tu
            najlepszych pracowników! Dołącz do nas już teraz!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
