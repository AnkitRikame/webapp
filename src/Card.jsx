import React from "react";

import web1 from "../src/images/img1.jpg";
import web2 from "../src/images/img2.jpg";
import web3 from "../src/images/img2.jpg";
import web4 from "../src/images/img4.jpg";
import web5 from "../src/images/img5.png";
import web6 from "../src/images/img6.jpg";

const Service = () => {

    
  return (
    <div className="my-5">
      <h1 className="tab-center"> <center style={{color: "blue"}}>Our Services</center></h1>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={web1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title"> Web Development</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      view
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={web2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">App Development</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      view
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={web2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title"> Business consultant</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>

                    <a href="#" class="btn btn-primary">
                      view
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={web4} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title"> Machine Learning</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      view
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={web5} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title"> Robot Process Automation</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      view
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={web6} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title"> Digital Markating</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                      make up the bulk of the card's content.
                      make up the bulk of the card's content.
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      view
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
