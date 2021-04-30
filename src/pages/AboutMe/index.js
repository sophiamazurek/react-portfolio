import React from 'react';
import aboutmeImg from "../../images/aboutmeimg.jpeg"

function AboutMe(props) {
  return (
    
        <div id="about_me">
                <h2 className="mt-3 mb-3">About Me</h2>
            <div className="row mr-3" >

                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pb-3 pt-3">
                    <img src={aboutmeImg} alt="" className=" rounded mx-auto d-block img-fluid img-thumbnail"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-3" id="profile-text">
                    My name is Sophia Mazurek and I graduated from the University of Wisconsin Oshkosh in May 2020. From UWO I recieved 
                    a BBA in Marketing with an emphasis in Digital Media. While I was at UWO I was a member of the Women's Golf Team and 
                    competed in the Division Three WIAC Confrence. 
                
                    Oshkosh also allowed me to do what I love which is travel the world. My senior year I studied abroad at Lorenzo de Medici 
                    for the month of January. In Florence I studied International Marketing, this helped me see the world in a different perspective
                    in terms of marketing and business as a whole. 
                    <p>
                       <a href="https://docs.google.com/document/d/1MoNPG3DzOppERanmJ0RY9zuHaWt_viCVcN70lFWXriY/edit?usp=sharing"><button>Resume</button></a> 
                    </p>
                </div>
            </div>
        </div>
  );
}

export default AboutMe;
