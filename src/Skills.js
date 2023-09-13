import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Skills(props){
    
    return (
        <div>
            <div className="row bottom-buffer">
                <div style={props.style}>
                    Key Skills
                </div>
            </div>
            <div className="row bottom-buffer experience">
                <div className="col-md-12">
                    <ul>
                        <li>JAVA 14, Spring Boot, Spring Webflux, Kafka, RabbitMQ, microservices architecture, Docker.</li> 
                        <li>Python.</li> 
                        <li>Google Cloud Platform (GCP) -  Dataflow, PubSub, BigQuery, Storage, Datastore, Logging, metrics.</li> 
                        <li>AWS – Fargate, ECS, EC2, ELB, Cloudwatch, PostgreSQL.</li> 
                        <li>React, HTML 5 CSS3, Javascript.</li> 
                        <li>Test automation using Selenium, Gherkin, Cucumber, Jenkins.</li> 
                        <li>Data structures and algorithms.</li> 
                        <li>Design patterns, clean code principles, SOLID principles, refactoring and code smells.</li> 
                        <li>10 years of experience in Agile XP.</li> 
                        <li>Practiced agile principles like TDD, Pair Programming, code reviews, refactoring etc.</li> 
                        <li>Source code management systems like GitHub, SVN, Perforce and CVS.</li> 
                        <li>Have been involved in different phases of application development like design, coding, testing and support.</li> 
                        <li>Developed Test automation framework using Java 8, Selenium, Cucumber, Gherkin.</li> 
                        <li>ANT, Maven and Gradle.</li> 
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;