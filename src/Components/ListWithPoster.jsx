import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function ListWithPoster() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mt-3">
          <div className="card">
            <div className="card-vertical">
              <div className="img-square-wrapper">
                <img
                  className=""
                  src="https://m.media-amazon.com/images/M/MV5BMTU0NTg0MDM2Nl5BMl5BanBnXkFtZTcwNzk5MDgzMQ@@._V1_SX300.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p>
                  Example from: https://codepen.io/SteveJRobertson/pen/POdvgz
                </p>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

