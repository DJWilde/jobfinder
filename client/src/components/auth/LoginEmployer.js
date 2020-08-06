import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const LoginEmployer = () => {
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
        <h1>Logowanie pracodawcy</h1>
        <p>
          Chcesz sprawdzić czy masz już potencjalnych kandydatów? Zaloguj się
          przy pomocy tego formularza!
        </p>

        <div className="card card-body mt-4 mb-4">
          <form method="post" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <div className="form-group">
                <label>Adres e-mail: </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group">
                <label>Hasło: </label>
                <input
                  className="form-control"
                  type="password"
                  name="haslo"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div class="form-group">
                <p>
                  Jesteś pracownikiem a masz już konto?{" "}
                  <Link class="card-link" to="/logowanie">
                    Zaloguj się na stronie dla użytkowników!
                  </Link>
                </p>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">
                  Zaloguj się
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginEmployer;
