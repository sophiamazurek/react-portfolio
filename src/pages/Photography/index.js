import React from 'react';
import Img1 from '../../images/slide1pic.jpeg';
import Img2 from '../../images/slide2pic.jpeg';
import Img3 from '../../images/slide3pic.jpeg'

function Photography(props) {
  return (
    <div id="photography">
  <h2 className="mt-3 mb-3">Photography</h2> <br/>
  <div className="row  mt-3 mb-3">
    <div className="col">
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Florence, Italy</h5>
              
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Sorrento, Italy</h5>
              
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Rome, Italy</h5>
              
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</div>
  );
}

export default Photography;
