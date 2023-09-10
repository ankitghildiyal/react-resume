function LloydsBank(){
    return (
        <div class="row bottom-buffer regular-font-size">
                    <div class="col-md-12 experience">
                        <div class="row">
                            <div class="col-md-12">
                                <b>End Client: </b> Lloyds Bank
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <b>Duration: </b>Jul 2018 - Mar 2020
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <b>Role: </b>Senior Developer
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <b>Location: </b>London, UK 
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <b>Tech stack: </b>Java 8, Kafka, Spring Boot, Spring JPA, Log4j, Docker, TDD, Junit, Mockito, Maven, Jenkins, Sonar, Oracle.
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12" id="lloydsExpDescription">
                                <p>Upgradation of the bank’s authentication mechanism to have multi-factor authentication. This means that a customer must authorize high risk transactions or user journeys using at least two authentication factors, for example, Username Password, Memorable Information, Call Challenge, SMS OTP etc. The technical architecture was micro service based with services being written in java using Spring boot.</p>
                                <ul>
                                    <li>Owner of the first microservice that went live in production for the project. Which means I was responsible for understanding requirements, developing them and doing everything necessary for making it go live. This involved communication across teams, solving performance related issues, production support, looking at prod issues. </li>
                                    <li>The API needed to be called by different teams within the bank so, I took active part in that integration.</li>
                                    <li>Developed common logging module for request tracing using Log4j. This involved building a common module for logging the request and response of any microservice within a journey. This greatly help in tracing a request through the platform. </li>
                                    <li>Worked on Docker file for running software tool called OpenAM on development environment. This involved  building the image starting from a base image which was available at the bank’s registry then copying certain files, security certificates etc., which were specific to our project needs. Once the image was built we used docker compose for bringing the containers up.</li>
                                    <li>Also worked on building other services in platform. These microservices were used to implement different authentication mechanisms like User Name and password, Memorable Info, Call Challenge, SMS OTP etc.</li>
                                    <li>Participated in code review sessions.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default LloydsBank;