import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const RegisterEmployer = () => {
  const [formData, setFormData] = useState({
    name: "",
    typeOfCompany: "",
    nip: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, typeOfCompany, nip, email, password, password2 } = formData;

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
        <h1>Rejestracja pracodawcy</h1>
        <p>
          Jeżeli szukasz swojego pracownika dopasowanego do Twoich potrzeb,
          załóż konto już dziś!
        </p>

        <div className="card card-body mt-4 mb-4">
          <form method="post" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <div className="form-group">
                <label>Nazwa firmy: </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group">
                <label>Typ firmy: </label>
                <input
                  className="form-control"
                  type="text"
                  name="typeOfCompany"
                  value={typeOfCompany}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group">
                <label>NIP: </label>
                <input
                  className="form-control"
                  type="email"
                  name="nip"
                  value={nip}
                  onChange={(e) => onChange(e)}
                />
              </div>
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
                  name="haslo"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
                <div className="invalid-feedback"></div>
              </div>
              <div className="form-group">
                <label>Potwierdź hasło: </label>
                <input
                  className="form-control"
                  type="password"
                  name="haslo2"
                  value={password2}
                  onChange={(e) => onChange(e)}
                />
                <div className="invalid-feedback"></div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-user-plus"></i> Chcę znaleźć pracownika!
                </button>
              </div>
              <p>
                Jesteś pracownikiem a nie masz jeszcze konta?{" "}
                <Link className="card-link" to="/rejestracja">
                  Załóż konto dla użytkowników!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterEmployer;
