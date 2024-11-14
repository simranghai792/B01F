import "./Awesome.css";
import book from "../assets/a1.png";
import publication from "../assets/a2.png";
import pdf from "../assets/a3.png";
import paper from "../assets/a4.png";

const Awesome = () => {
 return(
    <>
       <h1> Awesome Features</h1>
       <p>Get ready to unlock the next level of features</p>

       <div className="outer">
        <div className="card">
            <img src={book} alt="error" className="image"/>
            <div className="desc">
                <h3>Plagiarism Checker</h3>
                <p>We will Provide access to assignments free of plagiarism</p>
            </div>
        </div>
 
        <div className="card">
            <img src={publication} alt="error" className="image"/>
            <div className="desc">
                <h3>Free Publication</h3>
                <p>We will provide access to publication</p>
            </div>
        </div>

        <div className="card">
            <img src={pdf} alt="error" className="image"/>
            <div className="desc">
                <h3>Provides Free Books and PDF</h3>
                <p>Free Books and PDF will be provided</p>
            </div>
        </div>

        <div className="card">
            <img src={paper} alt="error" className="image"/>
            <div className="desc">
                <h3>Paraphraser</h3>
                <p>A paraphraser will be provided</p>
            </div>
        </div>

       </div>
    </>
 );
}
export default Awesome;