function DndExperience(){
    return (
        <div className="row bottom-buffer" style={{fontSize:"15px"}}>
            <div className="col-md-12 experience">
                <div className="row">
                    <div className="col-md-12">
                        <b>Company: </b>Dye N Durham
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <b>Duration: </b>Jan 2023 - Jun 2023
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
                        <b>Tech stack: </b>Java 11, Rabbit MQ, Spring Boot, Spring Webflux/Reactor, AWS ,EJB, SQL.
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" id="dndExpDescription">
                        <p>Implement asynchronous message driven architecture using RabbitMQ. The existing application was written using EJBs and deployed in Wildfly. The goal was to implement a RabbitMQ message listener that would invoke legacy EJB code based on the message and post a JSON message back. This component had to be deployed along with existing EJBs in Wildfly.</p>
                        <ul>
                            <li>Acted as technical lead and was the go-to person for resolving any technical blockers.</li>
                            <li>Worked on number of POCs to resolve technical blockers, for example:
                                <ol>
                                    <li>Deploying a spring boot app in Wildfly.</li>
                                    <li>Setting up RabbitMQ on local machines for development.</li>
                                    <li>Injecting EJBs to Spring Beans and vice versa.</li>
                                    <li>Using Spring AMQP to receive and post messages to RabbitMQ.</li>
                                    <li>Request tracing in AWS Cloudwatch.</li>
                                </ol>
                            </li>
                            <li>Quickly learnt new technologies like RabbitMQ and AWS setup.</li>
                            <li>Communicate with different teams for any tech related discussions like Devops, business, QA.</li>
                            <li>Peer code reviews.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default DndExperience;