import React from 'react';
import './style.css';

const AboutMe = () => {
    return (
        <div className="main">
            <div className="divider">
                <div className='about-me'>
                    <div className='container'>
                        <div className='row justify-content-center align-items-start g-4'>
                            {/* About Me Section */}
                            <div className='col-lg-5 col-md-6 col-sm-12'>
                                <div className='about-section'>
                                    <h1 className='section-title'>About Me</h1>
                                    <p className='about-text'>
                                        I am a Colorado School of Mines student specializing in full-stack development, 
                                        cloud infrastructure, and cybersecurity. With hands-on experience building scalable 
                                        web applications and cloud solutions, I'm passionate about creating robust, 
                                        secure software systems.
                                    </p>
                                    <p className='about-text'>
                                        Currently working on mobile application development while continuously expanding 
                                        my expertise in modern development practices and security protocols.
                                    </p>
                                </div>
                            </div>

                            {/* Technical Skills Section */}
                            <div className='col-lg-5 col-md-6 col-sm-12'>
                                <div className='skills-section'>
                                    <h1 className='section-title'>Technical Skills</h1>
                                    
                                    <div className='skill-category'>
                                        <h3 className='category-title'>Cloud & Infrastructure</h3>
                                        <div className='skills-grid'>
                                            <span className='skill-badge'>AWS (VPC, EC2, S3)</span>
                                            <span className='skill-badge'>Networking</span>
                                            <span className='skill-badge'>DevOps</span>
                                        </div>
                                    </div>

                                    <div className='skill-category'>
                                        <h3 className='category-title'>Frontend Development</h3>
                                        <div className='skills-grid'>
                                            <span className='skill-badge'>React</span>
                                            <span className='skill-badge'>Next.js</span>
                                            <span className='skill-badge'>TypeScript</span>
                                            <span className='skill-badge'>HTML/CSS</span>
                                        </div>
                                    </div>

                                    <div className='skill-category'>
                                        <h3 className='category-title'>Backend & Database</h3>
                                        <div className='skills-grid'>
                                            <span className='skill-badge'>Node.js</span>
                                            <span className='skill-badge'>Python</span>
                                            <span className='skill-badge'>PostgreSQL</span>
                                            <span className='skill-badge'>REST APIs</span>
                                        </div>
                                    </div>

                                    <div className='skill-category'>
                                        <h3 className='category-title'>Languages & Security</h3>
                                        <div className='skills-grid'>
                                            <span className='skill-badge'>JavaScript</span>
                                            <span className='skill-badge'>Java</span>
                                            <span className='skill-badge'>C++</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;