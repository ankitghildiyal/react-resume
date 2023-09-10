function EquifaxExperience(){
    return (
        <div className="row experience">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <b>Company: </b>Equifax
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <b>Duration: </b>Feb 2021 - Jun 2022
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <b>Role: </b>Senior Developer/Tech Lead
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <b>Location: </b>Toronto, Canada (Remote)
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <b>Tech stack: </b>Java 8, Spring Boot, GCP Dataflow and Apache beam, GCP firestore, GCP logging and metrics, firestore, BigQuery etc., Python, HTML, CSS, Javascript, React.
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12" id="equifaxExpDescription">
                                <p>Global Batch Platform is essentially a batch data processing pipeline. It run on Apache Airflow, GCP Dataflow, Apache beam.</p>
                                <ul>
                                    <li>Pipeline development using apache beam and GCP dataflow. The data pipelines were for processing of client files that had huge data sets in millions. The data was read into Apache beam PCollections and then processed with Dataflow. </li>
                                    <li>Architected reporting framework using GCP Pub/Sub and BigQuery. The reporting data were different events that occurred in the processing of client files. The data was published to GCP Pub/Sub and from there saved to BigQuery tables. Then the data was read using APIs built using spring boot.</li>
                                    <li>Peer code reviews.</li>
                                    <li>Junit testing.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    );
}
export default EquifaxExperience;