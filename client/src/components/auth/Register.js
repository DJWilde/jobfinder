import React, { Fragment, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <div className="mt-4">
        <h1>Rejestracja</h1>
        <p>
          Jeżeli szukasz swojej wymarzonej pracy, załóż konto już dziś! To takie
          proste i nic Cię nie kosztuje!
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
                <small>
                  Ta strona używa systemu Gravatar, zatem radzimy użyć adresu z
                  konta Gravatar, jeśli chcesz mieć swój awatar.
                </small>
              </div>
              <div className="form-group">
                <label>Hasło: </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group">
                <label>Potwierdź hasło: </label>
                <input
                  className="form-control"
                  type="password"
                  name="password2"
                  value={password2}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">
                  <i class="fas fa-user-plus"></i> Chcę znaleźć pracę!
                </button>
              </div>
              Jesteś pracodawcą a nie masz jeszcze konta?{" "}
              <a className="card-link" href="#">
                Załóż konto dla pracodawców!
              </a>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
