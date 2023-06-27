import React from 'react';
import '../CSS/about.css'
import mahipal from '../images/mahipal.jpg'
import atharva from '../images/atharva.jpg'
import pankaj from '../images/pankaj.jpg'
import akash from '../images/akash.jpg'


function About() {
    
    return (
        
          <div>
            <br></br>
           <div class="about-section">
  <h1>About Us</h1>
  <h3 style={{textAlign:'left',font:'revert-layer'}}>" I’ve Always Believed That If You Put In The Work, The Results Will Come. " – MICHAEL JORDAN.</h3>
  <p style={{textAlign:'left'}}>Being physically and mentally fit is necessary to live a happy, long life. 
  Exercise is one of the best ways to keep a person healthy. 
  Hence, it is always best to find a workout routine no matter how busy you are. 
  With the numerous diseases that spread today, many individuals realized the essence of workout. 
  Specifically, having a workout routine will give an individual the greatest physical, mental, and social benefits. 
  Accordingly, exercise will help you increase energy levels, reduce chronic disease risk, lose weight, and help improve brain health and memory. 
  With such benefits, you probably will love to do workout routines soon. Luckily, you don’t need to do it yourself as various personal trainers, or professional fitness coaches provide the help you need. 
  And joining fitness classes is just at your fingertips. 
  
</p>

</div>
<center><h2>OUR TEAM</h2></center>

<div >
  <div class="column">
    <div class="card">
    <img src={mahipal} alt="Mahipal"></img>
      
      <div class="container">
        <h2>Mahipal Lende</h2>
        <p class="title">CEO & Founder</p>
        
        <p>mlende55@gmail.com</p>
        <p>+91 85540 19164</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={akash} alt="Akash"></img>
      <div class="container">
        <h2>Akash More</h2>
        <p class="title">Managing Director</p>

        <p>akashmore2332@gmail.com</p>
        <p>+91 87936 87522</p>
        
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={pankaj} alt="Pankaj"></img>
      <div class="container">
        <h2>Pankaj Sahu</h2>
        <p class="title">Designer</p>
        
        <p>ps.sahupankaj@gmail.com</p>
        <p>+91 70203 51228</p>
        
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={atharva} alt="atharva"></img>
      <div class="container">
        <h2>Atharva Adrakatti</h2>
        <p class="title">Art Director</p>
        <p>atharva02001@gmail.com</p>
        <p>+91 83298 72060</p>
        
      </div>
      

    </div>
    </div>
            </div>
          </div>
        
    )
    

}

export default About;