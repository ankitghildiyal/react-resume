import Experiences from "./Experiences";
import Heading from "./Heading";
import Skills from "./Skills";

function TopLevelContainer(){
    const sectionHeadingStyling = {fontWeight:"bold", fontSize:"15px", textDecoration:"underline"};
    return (
        <div className="container">
            <div className="row">
                <Heading/>
            </div>
            <div className="row">
                <Skills style={sectionHeadingStyling}/> 
            </div>
            <div className="row">
                <Experiences style={sectionHeadingStyling}/>
            </div>
        </div>
    );
}

export default TopLevelContainer;