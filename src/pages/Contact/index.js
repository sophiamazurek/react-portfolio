import React from 'react';

function ContactMe(props) {
  return (
    <div id="contact_me">
        <h2 className="mt-3 mb-3">Contact Me</h2>
        <div className="row mt-3 mb-3">
            <div className="col">
            <p id="reachout">
                Feel free to reach out to me <br />
                or check out some of my social <br />
                and GitHub page! 
                </p>
            </div>
            <div className="col">
                P:(262)290.7775 <br />
                E:<a href="smazurek44@gmail.com">smazurek44@gmail.com</a> <br />
                GitHub:<a href="https://github.com/sophiamazurek">sophiamazurek</a> <br />
                VSCO:<a href="https://vsco.co/smazurek44/gallery">smazurek44</a> <br />
            </div>
        </div>

    </div>
  );
}

export default ContactMe;
