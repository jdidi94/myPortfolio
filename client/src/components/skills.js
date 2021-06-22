
function Skills() {
    return (
        <section className="site-section section-skills">
        <div className="container">
            <div className="text-center">
                <h3>My Skills</h3>
                <img src="assets/img/lines.svg" className="img-lines" alt="lines"/>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="skill">
                        <h4>Html/css</h4>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" data-transitiongoal="100"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <h4>Python</h4>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" data-transitiongoal="75"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="skill">
                        <h4>Javascript</h4>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" data-transitiongoal="82"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <h4>Ruby</h4>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" data-transitiongoal="66"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="skill">
                        <h4>Php</h4>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" data-transitiongoal="97"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <h4>Java</h4>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" data-transitiongoal="45"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    );
  }
  
  export default Skills;