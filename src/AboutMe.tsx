import React from 'react';
import './style.css';

const AboutMe = () => {
    return(
    <div className="main">
    <div className="divider">
     <div className='about-me pb-5 pt-5'>
        <div className='container pt-4 text-center'>
            <div className='row justify-content-center align-items-center'>
                <div className='about-me-info col-lg-5 col-sm-12'>
                    <h1 className='m-4'>About Me</h1>
                    <p className='lh-lg'>I am a Colorado School of Mines Student dedicated to the importance of research in machine learning projects and cybersecurity looking to use my knowledge in outreach. 
                        <br></br><br></br><br></br>I enjoy problem-solving and am passionate about software development, and cybersecurity.
                    </p>
                    <br></br><br></br><br></br><br></br>                        
                
                </div>
                <div className='tech-skills col-lg-5 col-sm-12'>
                    <h1 className='m-4'>Technical Skills</h1>
                    <div className='container text-center p-3'>
                        <div className='row g-0'>
                            <div className='col-6'>
                                <p>C++</p>
                                <p>Python</p>
                                <p>HTML/CSS</p>
                                <p>PostgresSQL</p>
                            </div>
                            <div className='col-6'>
                                <p>Java</p>
                                <p>Javascript</p>
                                <p>React</p>
                                <p>Node.js</p>
                            </div>
                        </div>
                    </div>
                    <br></br><br></br><br></br><br></br>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div> 

/*<section id="about" className="py-5 bg-light">


<div className="container">
  <div className="AboutMe-Background" col-lg-5 col-sm-12>
    <div className="col-md-6">
      <h2 className="aboutme-h2">About Me</h2>
      <div className="aboutme-info"col-lg-5 col-sm-12>
      <p className="aboutme-p">Make your employees feel welcome and valued with a carefully crafted opening message. Aside from serving as a greeting, this space is also great for showing what your company culture is like by example. Share your thoughts on the company's beginnings and growth. Mention your vision for the company. Remember to express your appreciation and willingness to listen to everyone's ideas. And finally, remind each person how important they are to the bigger group.
        </p>
      </div>
      </div>
    
    </div>

    <div className='tech-skills col-lg-5 col-sm-12'>
                        <h1 className='m-4'>Technical Skills</h1>
                        <div className='container text-center p-4'>
                            <div className='row'>
                                <div className='col-6'>
                                    <p>C++</p>
                                    <p>Python</p>
                                    <p>HTML/CSS</p>
                                    <p>PostgresSQL</p>
                                </div>
                                <div className='col-6'>
                    </div>
                    </div>
                    </div>

</div>





</div>



</section>
*/
);
}
export default AboutMe;