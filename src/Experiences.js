import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DndExperience from "./DndExperience";
import ExperienceLabel from "./ExperienceLabel";
import NuanceExperience from "./NuanceExperience";
import EquifaxExperience from "./EquifaxExperience";
import HomeDepot from "./HomeDepot";
import SapientExperiences from "./SapientExperiences";
import PreSapient from "./PreSapient";

function Experiences(props){
    return (
        <div>
            <ExperienceLabel style={props.style} className="bottom-buffer"/>
            <DndExperience />
            <NuanceExperience/>
            <EquifaxExperience/>
            <HomeDepot/>
            <SapientExperiences/>
            <PreSapient/>
        </div>
        
    );
}

export default Experiences;