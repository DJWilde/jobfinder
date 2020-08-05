import React, { Fragment } from "react";

const Featurettes = () => {
  return (
    <div className="container">
      <div className="row featurette">
        <div className="col-md-8">
          <h2 className="featurette-heading">Lorem ipsum dolor sit amet.</h2>
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            saepe, facere accusantium cum ab illo veniam architecto incidunt
            laboriosam culpa vel provident tenetur enim corporis nostrum, quas
            esse. Doloribus, ducimus.
          </p>
        </div>
        <div className="col-md-4">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src="img/report-3183779_960_720.jpg'"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-8 order-md-2">
          <h2 className="featurette-heading">
            Consectetur adipisicing elit. Commodi, doloribus.
          </h2>
          <p className="lead">
            Vel nesciunt quidem fugiat tempore est aperiam assumenda eveniet
            deserunt, amet ut laborum neque ullam mollitia earum nihil, quos
            corrupti. Doloremque est debitis dolor, hic impedit magnam
            reiciendis dolorem quisquam reprehenderit voluptatibus iste unde
            perspiciatis sunt!
          </p>
        </div>
        <div className="col-md-4 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src="img/businessman-1765664_960_720.png"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-8">
          <h2 className="featurette-heading">
            Natus corrupti quidem vel fugit. Maxime, explicabo.
          </h2>
          <p className="lead">
            Eius, provident illo corporis ad hic, assumenda officia iusto
            aliquid dolorum voluptatum neque quisquam ipsum cum expedita dolor
            eum culpa! Cum alias quis architecto consectetur eius reprehenderit
            illum officia accusamus itaque natus, amet numquam vitae?
          </p>
        </div>
        <div className="col-md-4">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src="../../img/working-in-office-2943747_960_720.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Featurettes;
