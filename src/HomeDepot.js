function HomeDepot(){
    return (
        <div className="row experience">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <b>Company: </b>HomeDepot
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <b>Duration: </b>Sept 2020 - Jan 2021
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
                                <b>Tech stack: </b>Java 8, Spring Boot, Micro Services Architecture, Google Cloud Platform, Event Driven Architecture, HTML, CSS, Javascript, React.
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12" id="homeDepotExpDescription">
                                <p>Event Platform, as the name suggests was a platform to provide carrier events across Home Depot. The data was used to track shipment status within Home Depot. The solution was microservices based architecture using java 8, Spring Boot and GCP (Google Cloud Platform).</p>
                                <ul>
                                    <li>Took the lead in shifting architecture to Event Driven design and asynchronous processing. Technologies used were GCP Pub/Sub , Spring Webflux and Spring boot’s GCP integration libraries.</li>
                                    <li>Took the initiative for adding Junit coverage for project. Increased Junit coverage from 0 to 80%.</li>
                                    <li>Architected carrier integration solution with carriers like Fedex, UPS, Purolator so we get package delivery statuses.</li>
                                    <li>Peer code reviewer and gate keeper for merging code for release.</li>
                                    <li>Co-ordinated release management and branching strategies.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default HomeDepot;