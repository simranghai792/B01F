import "./Awesome.css";
import plagiarism from "./assets/a1.png";
import publication from "./assets/a2.png";
import pdf from "./assets/a3.png";
import paraphraser  from "./assets/a4.png";

const Awesome = () => {
    return(
        <>
        <h1>Awesome Features</h1>
        <p className="para">Get ready to unlock the next level of features</p>
        
      <div className="outer">
       <div class="card">
        <img src={plagiarism} alt="error"/>
        <div class="desc">
            <h3>Plagiarism Checker</h3>
            <p>We will provide access to assignments free of plagiarism</p>
        </div>
       </div>
    
      
       <div class="card">
         <img src={publication} alt="error" />
         <div class="desc">
            <h3>Free Publications</h3>
            <p>We will provide access to publication</p>
         </div> 
       </div> 

       <div class="card">
         <img src={pdf} alt="error" />
         <div class="desc">
            <h3>Provides Free Books and PDF</h3>
            <p>Free Books and PDF will be providedr</p>
         </div> 
       </div> 

       <div class="card">
         <img src={paraphraser} alt="error" />
         <div class="desc">
            <h3>Paraphraser</h3>
            <p>A paraphraser will be provided</p>
         </div> 
       </div> 

      </div>  
        </>
    );
}

export default Awesome;