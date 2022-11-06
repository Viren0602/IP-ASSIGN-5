import "./Image.css";

function Image() {
    return <div className="content-container">
        <div className="row">
            <div className="left-panel box">
            <img className='image' src="https://getmyuni.azureedge.net/college-image/big/vivekanand-education-society-institute-of-technology-vesit-mumbai.jpg" alt="BigCo Inc. logo"/>
            </div>
            
            <div className="right-panel box">
                <div className="container" >
                <h1>  Know more about the Institute</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur <br />
                    adipisicing elit. Unde mollitia provident,
                  </p>
                  <button className ="button">
                    Read more
                  </button>
                    </div>           
                     </div>
       </div>
    </div>
}
export default Image;