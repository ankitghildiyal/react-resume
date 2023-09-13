import MyPic from "./assets/MyPic.jpeg"

function Heading(){
    
    return (
        <div className= "row">
            <div className="col-md-12 center">
                <img src={MyPic} alt="Ankit Ghildiyal" height="120px" width="120px" style={{borderRadius:"50%"}} />
            </div>
            <hr/>
        </div>
    );
}

export default Heading;