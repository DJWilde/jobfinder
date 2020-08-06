import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Fragment>
      <div className="mt-4">
        <h1>Logowanie</h1>
        <p>
          Szukasz nowych ofert pracy a już masz konto? Zaloguj się przy pomocy
          tego formularza!
        </p>
        <div class="card card-body mt-4 mb-4">
          <form method="POST" onSubmit={(e) => onSubmit(e)}>
            <div class="form-group">
              <label>Adres e-mail: </label>
              <input
                class="form-control"
                type="email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div class="form-group">
              <label>Hasło: </label>
              <input
                class="form-control"
                type="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div class="form-group">
              <p>
                Jesteś pracodawcą a masz już konto?{" "}
                <Link class="card-link" to="/pracodawcy/logowanie">
                  Zaloguj się na stronie dla pracodawców!
                </Link>
              </p>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary">
                Zaloguj się
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
