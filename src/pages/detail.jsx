import "../style.css";
import Navbar from '../component/navbar';


const Detail = () => {
    return (
    <div>
        <Navbar />
      <div className="container-fluid text-center" style={{ marginTop: "160px" }}>    
        <div className="row content">
          <div className="col-sm-2 sidenav">
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
          </div>
  
          <div className="col-sm-8 text-left"> 
            <h1>Welcome</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <hr />
            <h3>Test</h3>
            <p>Lorem ipsum...</p>
          </div>
        </div>
      </div>
      </div>
      

    );
  };
  
  export default Detail;
  