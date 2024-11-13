import "./Footer.css";
import myImage from "./assets/footer.png";
import myImage2 from "./assets/footer2.png";
import myImage3 from "./assets/footer3.png";

const footer = () => {
    return(
      <>
       <div className="main">
         <img src={myImage} className="footer"></img>
    
          <div className="main-left">
             <h2>Quick Links</h2>
               <a href="#home"><i>Home</i></a>
               <a href="#about"><i>About Us</i></a>
               <a href="#blog"><i>Blog</i></a>
               <a href="#FAQ"><i>FAQ</i></a>
               <a href="#Contact"><i>Contact</i></a>
               <a href="#help"><i>How We Help?</i></a>
               <a href="#community">Community</a>
          </div>

          <div className="main-center">
            <h2>Features</h2>
            <a href="#plagiarism"><i>Plagiarism Checker</i></a>
            <a href="#publication"><i>Free Publications</i></a>
            <a href="#Books"><i>Provides Books</i></a>
            <a href="#pdf"><i>Provides PDF</i></a>
            <a href="#paraphraser"><i>Paraphraser</i></a>
          </div>

          <div className="main-right">
            <h2>Our Offering</h2>
              <p><i>Free IELTS Masterclass</i></p>
              <p><i>Talk to Counsellor</i></p>
              <p><i>IELTS Exam Overview</i></p>
              <p><i>Important IELTS Articles</i></p>
          </div>

          <div className="main-right2">
            {/* <img src={myImage3} alt="Error" className="image3"/> */}
            <h1>Newsletter</h1>
            <p>You can trust us. We only send promo offers.</p>
            <button>Your email here</button>
            <button>Subscribe</button> <br/>
            <img src={myImage2} alt="Error" className="image"/>
          </div>
          
       </div>
      </>
    );
}

export default footer;
