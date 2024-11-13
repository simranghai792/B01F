import "./Service.css";
import Assignment from "./assets/s1.png";
import Dissertation from "./assets/s2.png";
import Work from "./assets/s3.png";
import Thesis from "./assets/s4.png";
import Essay from "./assets/s5.png";
import Paper from "./assets/s6.png";
import Presentation from "./assets/s7.png";
import Program from "./assets/s8.png";
import Writing from "./assets/s9.png";
import Study from "./assets/s10.png";
import Writing2 from "./assets/s11.png";
import Writing3 from "./assets/s12.png";
import Writing4 from "./assets/s13.png";
import Maker from "./assets/s14.png";


const Service = () => {
    return(
    <>
         <h1>Our Services</h1>
         <p className="para">We offer some fantastic services</p>

      <div className="outer3">
       <div class="card3">
        <img src={Assignment} alt="error"/>
        <div class="desc">
            <h3>Assignment</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="first-rate1" title="Terrible">1 star</label>
               <input type="radio" id="first-rate2" name="rating" value="2" />
               <input type="radio" id="first-rate1" name="rating" value="1" />
               <label for="first-rate2" title="Not good">2 stars</label>
               <input type="radio" id="first-rate3" name="rating" value="3" />
               <label for="first-rate3" title="Average">3 stars</label>
               <input type="radio" id="first-rate4" name="rating" value="4" />
               <label for="first-rate4" title="Very good">4 stars</label>
               <input type="radio" id="first-rate5" name="rating" value="5" />
               <label for="first-rate5" title="Amazing">5 stars</label>
            </fieldset>
        </div>
      </div>
    
      
       <div class="card3">
         <img src={Dissertation} alt="error" />
         <div class="desc">
            <h3>Dissertation</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="second-rate1" title="Terrible">1 star</label>
               <input type="radio" id="second-rate2" name="rating" value="2" />
               <input type="radio" id="second-rate1" name="rating" value="1" />
               <label for="second-rate2" title="Not good">2 stars</label>
               <input type="radio" id="second-rate3" name="rating" value="3" />
               <label for="second-rate3" title="Average">3 stars</label>
               <input type="radio" id="second-rate4" name="rating" value="4" />
               <label for="second-rate4" title="Very good">4 stars</label>
               <input type="radio" id="second-rate5" name="rating" value="5" />
               <label for="second-rate5" title="Amazing">5 stars</label>
            </fieldset>
         </div> 

       </div> 

       <div class="card3">
         <img src={Work} alt="error" />
         <div class="desc">
            <h3>Course Work</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="third-rate1" title="Terrible">1 star</label>
               <input type="radio" id="third-rate2" name="rating" value="2" />
               <input type="radio" id="third-rate1" name="rating" value="1" />
               <label for="third-rate2" title="Not good">2 stars</label>
               <input type="radio" id="third-rate3" name="rating" value="3" />
               <label for="third-rate3" title="Average">3 stars</label>
               <input type="radio" id="third-rate4" name="rating" value="4" />
               <label for="third-rate4" title="Very good">4 stars</label>
               <input type="radio" id="third-rate5" name="rating" value="5" />
               <label for="third-rate5" title="Amazing">5 stars</label>
            </fieldset>
         </div> 
       </div> 

       <div class="card3">
         <img src={Thesis} alt="error" />
         <div class="desc">
            <h3>Thesis</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="four-rate1" title="Terrible">1 star</label>
               <input type="radio" id="four-rate2" name="rating" value="2" />
               <input type="radio" id="four-rate1" name="rating" value="1" />
               <label for="four-rate2" title="Not good">2 stars</label>
               <input type="radio" id="four-rate3" name="rating" value="3" />
               <label for="four-rate3" title="Average">3 stars</label>
               <input type="radio" id="four-rate4" name="rating" value="4" />
               <label for="four-rate4" title="Very good">4 stars</label>
               <input type="radio" id="four-rate5" name="rating" value="5" />
               <label for="four-rate5" title="Amazing">5 stars</label>
            </fieldset>
         </div> 
       </div> 

       <div class="card3">
         <img src={Essay} alt="error" />
         <div class="desc">
            <h3>Essay</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="five-rate1" title="Terrible">1 star</label>
               <input type="radio" id="five-rate2" name="rating" value="2" />
               <input type="radio" id="five-rate1" name="rating" value="1" />
               <label for="five-rate2" title="Not good">2 stars</label>
               <input type="radio" id="five-rate3" name="rating" value="3" />
               <label for="five-rate3" title="Average">3 stars</label>
               <input type="radio" id="five-rate4" name="rating" value="4" />
               <label for="five-rate4" title="Very good">4 stars</label>
               <input type="radio" id="five-rate5" name="rating" value="5" />
               <label for="five-rate5" title="Amazing">5 stars</label>
            </fieldset>
         </div> 
       </div> 

       <div class="card3">
         <img src={Paper} alt="error" />
         <div class="desc">
            <h3>Research Paper</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="six-rate1" title="Terrible">1 star</label>
               <input type="radio" id="six-rate2" name="rating" value="2" />
               <input type="radio" id="six-rate1" name="rating" value="1" />
               <label for="six-rate2" title="Not good">2 stars</label>
               <input type="radio" id="six-rate3" name="rating" value="3" />
               <label for="six-rate3" title="Average">3 stars</label>
               <input type="radio" id="six-rate4" name="rating" value="4" />
               <label for="six-rate4" title="Very good">4 stars</label>
               <input type="radio" id="six-rate5" name="rating" value="5" />
               <label for="six-rate5" title="Amazing">5 stars</label>
            </fieldset>
         </div> 
       </div> 

       <div class="card3">
         <img src={Presentation} alt="error" />
         <div class="desc">
            <h3>Power Point Presentation</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="seven-rate1" title="Terrible">1 star</label>
               <input type="radio" id="seven-rate2" name="rating" value="2" />
               <input type="radio" id="seven-rate1" name="rating" value="1" />
               <label for="seven-rate2" title="Not good">2 stars</label>
               <input type="radio" id="seven-rate3" name="rating" value="3" />
               <label for="seven-rate3" title="Average">3 stars</label>
               <input type="radio" id="seven-rate4" name="rating" value="4" />
               <label for="seven-rate4" title="Very good">4 stars</label>
               <input type="radio" id="seven-rate5" name="rating" value="5" />
               <label for="seven-rate5" title="Amazing">5 stars</label>
            </fieldset>
         </div> 
       </div> 

       <div class="card3">
         <img src={Program} alt="error" />
         <div class="desc">
            <h3>Programming</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="eight-rate1" title="Terrible">1 star</label>
               <input type="radio" id="eight-rate2" name="rating" value="2" />
               <input type="radio" id="eight-rate1" name="rating" value="1" />
               <label for="eight-rate2" title="Not good">2 stars</label>
               <input type="radio" id="eight-rate3" name="rating" value="3" />
               <label for="eight-rate3" title="Average">3 stars</label>
               <input type="radio" id="eight-rate4" name="rating" value="4" />
               <label for="eight-rate4" title="Very good">4 stars</label>
               <input type="radio" id="eight-rate5" name="rating" value="5" />
               <label for="eight-rate5" title="Amazing">5 stars</label>
            </fieldset>
         </div> 
       </div> 

       <div class="card3">
         <img src={Writing} alt="error" />
         <div class="desc">
            <h3>Paper Writing</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="nine-rate1" title="Terrible">1 star</label>
               <input type="radio" id="nine-rate2" name="rating" value="2" />
               <input type="radio" id="nine-rate1" name="rating" value="1" />
               <label for="nine-rate2" title="Not good">2 stars</label>
               <input type="radio" id="nine-rate3" name="rating" value="3" />
               <label for="nine-rate3" title="Average">3 stars</label>
               <input type="radio" id="nine-rate4" name="rating" value="4" />
               <label for="nine-rate4" title="Very good">4 stars</label>
               <input type="radio" id="nine-rate5" name="rating" value="5" />
               <label for="nine-rate5" title="Amazing">5 stars</label>
            </fieldset>
         </div> 
       </div> 

       <div class="card3">
         <img src={Study} alt="error" />
         <div class="desc">
            <h3>Case Study</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="ten-rate1" title="Terrible">1 star</label>
               <input type="radio" id="ten-rate2" name="rating" value="2" />
               <input type="radio" id="ten-rate1" name="rating" value="1" />
               <label for="ten-rate2" title="Not good">2 stars</label>
               <input type="radio" id="ten-rate3" name="rating" value="3" />
               <label for="ten-rate3" title="Average">3 stars</label>
               <input type="radio" id="ten-rate4" name="rating" value="4" />
               <label for="ten-rate4" title="Very good">4 stars</label>
               <input type="radio" id="ten-rate5" name="rating" value="5" />
               <label for="ten-rate5" title="Amazing">5 stars</label>
            </fieldset>
         </div> 
       </div> 

       <div class="card3">
         <img src={Writing2} alt="error" />
         <div class="desc">
            <h3>Speech Writing</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="elev-rate1" title="Terrible">1 star</label>
               <input type="radio" id="elev-rate2" name="rating" value="2" />
               <input type="radio" id="elev-rate1" name="rating" value="1" />
               <label for="elev-rate2" title="Not good">2 stars</label>
               <input type="radio" id="elev-rate3" name="rating" value="3" />
               <label for="elev-rate3" title="Average">3 stars</label>
               <input type="radio" id="elev-rate4" name="rating" value="4" />
               <label for="elev-rate4" title="Very good">4 stars</label>
               <input type="radio" id="elev-rate5" name="rating" value="5" />
               <label for="elev-rate5" title="Amazing">5 stars</label>
            </fieldset>
         </div> 
       </div> 

       <div class="card3">
         <img src={Writing3} alt="error" />
         <div class="desc">
            <h3>Term Paper Writing</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="twelve-rate1" title="Terrible">1 star</label>
               <input type="radio" id="twelve-rate2" name="rating" value="2" />
               <input type="radio" id="twelve-rate1" name="rating" value="1" />
               <label for="twelve-rate2" title="Not good">2 stars</label>
               <input type="radio" id="twelve-rate3" name="rating" value="3" />
               <label for="twelve-rate3" title="Average">3 stars</label>
               <input type="radio" id="twelve-rate4" name="rating" value="4" />
               <label for="twelve-rate4" title="Very good">4 stars</label>
               <input type="radio" id="twelve-rate5" name="rating" value="5" />
               <label for="twelve-rate5" title="Amazing">5 stars</label>
            </fieldset>
         </div> 
       </div> 

       <div class="card3">
         <img src={Writing4} alt="error" />
         <div class="desc">
            <h3>Cover Letter Writing</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="thirty-rate1" title="Terrible">1 star</label>
               <input type="radio" id="thirty-rate2" name="rating" value="2" />
               <input type="radio" id="thirty-rate1" name="rating" value="1" />
               <label for="thirty-rate2" title="Not good">2 stars</label>
               <input type="radio" id="thirty-rate3" name="rating" value="3" />
               <label for="thirty-rate3" title="Average">3 stars</label>
               <input type="radio" id="thirty-rate4" name="rating" value="4" />
               <label for="thirty-rate4" title="Very good">4 stars</label>
               <input type="radio" id="thirty-rate5" name="rating" value="5" />
               <label for="thirty-rate5" title="Amazing">5 stars</label>
            </fieldset>
         </div> 
       </div> 

       <div class="card3">
         <img src={Maker} alt="error" />
         <div class="desc">
            <h3>Resume Maker</h3>
            <fieldset class="starability-slot margin">
               <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
               <label for="f-rate1" title="Terrible">1 star</label>
               <input type="radio" id="f-rate2" name="rating" value="2" />
               <input type="radio" id="f-rate1" name="rating" value="1" />
               <label for="f-rate2" title="Not good">2 stars</label>
               <input type="radio" id="f-rate3" name="rating" value="3" />
               <label for="f-rate3" title="Average">3 stars</label>
               <input type="radio" id="f-rate4" name="rating" value="4" />
               <label for="f-rate4" title="Very good">4 stars</label>
               <input type="radio" id="f-rate5" name="rating" value="5" />
               <label for="f-rate5" title="Amazing">5 stars</label>
            </fieldset>
         </div> 
       </div> 

      </div>  
    </>
    );
}

export default Service;