import React from 'react';
import Project1 from '../../images/test1.jpeg';
import Project2 from '../../images/test2.jpeg';

function Projects(props) {
  return (
      <div id="projects">
        <h2 className="mt-3 mb-3">Projects</h2> <br/>
        <div className="row  mt-3 mb-3">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
              <div className="ver_mas text-center">
                <a href="https://github.com/sophiamazurek/employee-tracker"><span id="click" className="lnr lnr-eye">Link</span></a> |
                <a href="https://github.com/sophiamazurek/employee-tracker"><span id="click" className="lnr lnr-eye">GitHub</span></a> 
              </div>
              <article className="text-left">
                 <h2>EMPLOYEE TRACKER <br/>React</h2>
                 <h4>Track your Employees</h4>
              </article>
              <img src={Project1} alt=""/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
              <div className="ver_mas text-center">
                <a href="https://www.youtube.com/watch?v=nL6mPFg2KGc"><span id="click" className="lnr lnr-eye">Watch</span></a> 
              </div>
              <article className="text-left">
                 <h2>100 HOLE HIKE<br/>Youth on Course Foundation</h2>
                 <h4>Raised money and hiked 100 holes for YOC</h4>
              </article>
              <img src={Project2} alt=""/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
              <div className="ver_mas text-center">
                <a href="https://github.com/sophiamazurek/budget-tracker"><span id="click" className="lnr lnr-eye">GitHub</span></a> 
              </div>
              <article className="text-left">
                <h2>Budget Tracker<br/>PWA</h2>
                <h4>Progressive Web Application to track finances</h4>
              </article>
              <img src={Project1} alt=""/>
          </div>
      
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
            <div className="ver_mas text-center">
              <a href="https://pumpkin-pie-32612.herokuapp.com/"><span id="click" className="lnr lnr-eye">Link</span></a> 
              <a href="https://github.com/IsiBee/meal-plan-challenge"><span id="click" className="lnr lnr-eye">GitHub</span></a> 
            </div>
            <article className="text-left">
              <h2>MEAL PLAN<br/>Node.js, Handlebars, MySQL</h2>
              <h4>Mobile responsive application to plan your meals for the week.</h4>
            </article>
            <img src={Project1} alt=""/>
          </div>
        </div>
      </div>
  );
}

export default Projects;
