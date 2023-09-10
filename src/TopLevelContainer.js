import Experiences from "./Experiences";
import Skills from "./Skills";

function TopLevelContainer(){
    const sectionHeadingStyling = {fontWeight:"bold", fontSize:"15px", textDecoration:"underline"};
    //
    return (
        <div class="container top-buffer">
            {
                //Interview - passing variable as props
                //Interview - comments adding in jsx
            }
            <Skills style={sectionHeadingStyling}/> 
            <Experiences style={sectionHeadingStyling}/>
        </div>
    );
}

export default TopLevelContainer;