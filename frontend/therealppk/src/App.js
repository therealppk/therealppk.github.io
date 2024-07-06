import NavigationBar from "./components/navigationbar";
import Header from "./components/header";
import {Container} from "react-bootstrap";
import Experience from "./components/section/experience";
import Education from "./components/section/education";
import Project from "./components/section/project";
import Footer from "./components/footer";

function App() {
    const experience_records = [
        {
            company: "DataGenie",
            role: "Data Engineer (Consultant)",
            period: "June 2024 - Current",
            description: (
                "Currently <b>migrating core data pipelines</b> from Scala Spark to PySpark improving code " +
                "comprehensibility, and <b>developing python packages</b> for common functionality across different " +
                "repositories."
            ),
            techUsed: {
                languages: "Python, Scala",
                packages: "Pydantic",
                platforms_and_tools: "Spark (PySpark), Databricks, Git"
            }
        },{
            company: "Cloudflare",
            role: "Data Engineer Intern",
            period: "June 2023 - August 2023",
            description: (
                "Worked in the <em>Business Intelligence Team</em> to create an <b>explainable time-series " +
                "forecasting model</b> to predict CPU demand on Cloudflare’s edge servers.<br/><br/>" +
                "Analyzed sales and marketing data to understand its implications and effects on CPU utilization " +
                "across the network."
            ),
            techUsed: {
                languages: "Python",
                packages: "Darts, Matplotlib"
            }
        },
        {
            company: "WorkIndia",
            role: "Software Engineer",
            period: "July 2020 - June 2022",
            description: (
                "Worked in the <em>Data and Platform Teams</em> to create platforms for internal teams.<br/><br/>" +
                "These platforms had a huge impact on the growth of the company and the developer productivity. The " +
                "growth team <b>increased the Annual Revenue Per User (ARPU) by 1.3 times</b> and <b>improved " +
                "conversion rates</b> for paid users at different stages.<br/><br/>" +
                "<b>Mentored interns</b> and guided them to develop applications independently and take ownership of " +
                "projects.<br/><br/>" +
                "Awarded the <b>Best Practices and Center of Excellence Award at WorkIndia, 2022 Q1</b> for pushing " +
                "the team to continuously learn and choose the right strategies through tech sessions and code " +
                "reviews.<br/><br/>" +
                "Handled cloud admin responsibilities (AWS) for various projects, including IAM, infrastructure " +
                "planning and provisioning (using Infrastructure-as-Code tools like <em>Terraform</em> and " +
                "<em>Ansible</em>), and cost analysis."
            ),
            teams: [
                {
                    name: "Data Team",
                    projects: [
                        {
                            name: "Data Platform",
                            description: (
                                "Built a robust <b>data lake and warehouse</b>, using <em>PySpark</em> and " +
                                "<em>Django</em>, that ingests large-scale and dynamic data from various sources.<br/><br/>" +
                                "Built a <b>highly available, high-traffic API</b> capable of capturing ~126 million " +
                                "daily app events. Implemented the service in <em>Go</em> using the <em>Gin Web Framework</em>.<br/><br/>" +
                                "<b>Reduced data costs to two-thirds</b> by improving the efficiency of Spark processes by adding " +
                                "appropriate configurations, optimizing cron mechanisms, and right-sizing infrastructure."
                            )
                        }
                    ]
                },
                {
                    name: "Platform Team",
                    projects: [
                        {
                            name: "Unified Communication Platform (Segmentation)",
                            description: (
                                "Designed and developed a <b>unified communication platform</b> for internal teams to send " +
                                "customized and targeted communications (App Notifications, SMS, Email, WhatsApp) to users.<br/><br/>" +
                                "Scaled the platform to deliver <b>~ 10 million communications per day</b> by incorporating " +
                                "complex distributed strategies and revamping the infrastructure. Migrated the queues " +
                                "from <em>Amazon EC2</em> to <em>Kubernetes</em> for faster scaling-in and easier orchestration and used " +
                                "<em>Apache Zookeeper<em/> to coordinate clusters."
                            )
                        },
                        {
                            name: "Verification Platform",
                            description: (
                                "Designed and architected the employer verification system that automated and " +
                                "streamlined the verification and re-verification of employers on the platform.<br/><br/>" +
                                "Developed a data pipeline manager to collect data points from different sources " +
                                "and calculate new aggregations from a combination of data points.<br/><br/>" +
                                "Used Drools Rule Engine to manage rules to filter fraud employers and job posts."
                            )
                        }
                    ]
                },
            ],
            techUsed: {
                languages: "Python, Go, HTML/CSS",
                frameworks: "Django, Gin",
                platforms_and_tools: "Spark (PySpark), Kafka, Kubernetes, Docker, Ansible, Terraform, Git, Zookeeper",
                databases: "MySQL, PostgreSQL, Cassandra, Redis",
                cloud_platforms: "Amazon Web Services (AWS)"
            }
        },
        {
            company: "WorkIndia",
            role: "Software Engineer Intern",
            period: "January 2020 - June 2020",
            description: (
                "Worked in the <em>Data Team</em> to build a <b>data lake</b> to stream data from various databases " +
                "to the data lake store for further analytics.<br/><br/>" +
                "<b>Migrated complex data analytics</b> use cases of the entire firm from the traditional RDBMS and " +
                "<em>Amazon Redshift</em> to the above-built big data platform.<br/><br/>" +
                "<b>Built multiple data pipelines</b> using <em>Apache Kafka</em>, capable of handling ~ 1 million " +
                "messages per minute."
            ),
            techUsed: {
                languages: "Python, HTML/CSS",
                frameworks: "Django",
                platforms_and_tools: "Spark (PySpark), Kafka, Kubernetes, Docker, Git, JIRA",
                databases: "MySQL, PostgreSQL, Redshift, PrestoDB",
                cloud_platforms: "Amazon Web Services (AWS)"
            }
        },
        {
            company: "Kristal.AI",
            role: "Software Engineer Intern",
            period: "May 2019 - June 2019",
            description: (
                "Worked on <b>migrating the website search functionality</b> from legacy <em>Apache Solr</em> to " +
                "<em>SolrCloud</em>, thus improving reliability and performance.<br/><br/>" +
                "Integrated the search data with data models in <em>Spring Boot</em> to enable CRUD operations.<br/><br/>" +
                "Proactively <b>took the initiative to refine the search results</b> by tweaking filters and tokenizers."
            ),
            techUsed: {
                languages: "Java",
                frameworks: "Spring Boot",
                platforms_and_tools: "Zookeeper, Git",
                databases: "Solr"
            }
        },
    ]

    const education_records = [
        {
            university: "North Carolina State University",
            degree: "Master of Computer Science",
            period: "August 2022 - May 2024",
            courses: [
                {
                    type: "Core",
                    value: "Operating Systems, Design and Analysis of Algorithms, Software Engineering"
                },
                {
                    type: "Electives",
                    value: "Object Oriented Design and Development, Automated Software Engineering, Programmer Centered Design and Development, Cloud Computing, Automated Learning and Data Analysis"
                },
                {
                    type: "Others",
                    value: "Tech Entrepreneurship and Commercialization"
                }
            ]
        },
        {
            university: "Vellore Institute of Technology",
            degree: "Bachelor of Technology",
            major: "Computer Science and Engineering",
            period: "September 2016 - May 2020",
            courses: [
                {
                    type: "Core",
                    value: "Operating Systems, Data Structures and Algorithms, Software Engineering, Network and Communication"
                },
                {
                    type: "Electives",
                    value: "Object Oriented Design and Development, Large Scale Data Processing, Parallel and Distributed Computing, High Performance Computing, Internet and Web Programming, Java Programming, Machine Learning "
                },
                {
                    type: "Others",
                    value: "Lean Startup Management"
                }
            ]
        }
    ]

    const project_records = [
        {
            name: "Right to Know",
            paragraphs: [
                {
                    type: "normal",
                    content: (
                        "Right to Know is a simple Mobile Web App that prompts users with real-time suggestions when " +
                        "they encounter any situation with law enforcement. This app was built by me, Swarangi Gaurkar, " +
                        "Abhimanyu Bellam and Arun Srinivasan Parthasarathy as part of DiamondHacks 2024, organized by " +
                        "WiCS @ NCSU."
                    )
                },
                {
                    type: "highlight",
                    content: "We won in the <b>Social Impact</b> track."
                },
                {
                    type: "normal",
                    content: (
                        "The app listens to the conversation between the citizen and the law enforcement officer. " +
                        "Based on the ongoing conversation, the app constantly suggests the person with prompts, " +
                        "telling them the possible ways to handle the situation. The user's location is also used to " +
                        "review laws pertinent to the particular state and county."
                    )
                },
                {
                    type: "normal",
                    content: (
                        "We created a simple Python Flask application. The connection between the backend and frontend " +
                        "was handled by using SocketIO. The audio was transcribed and sent to Gemini API with the " +
                        "required supporting prompts, and the suggestions were shown to the user."
                    )
                },
                {
                    type: "link",
                    content: "Link to Github Repo",
                    link: "https://github.com/therealppk/right-to-know"
                }
            ]
        },
        {
            name: "Multi-Objective Semi-Supervised Learner",
            paragraphs: [
                {
                    type: "normal",
                    content: (
                        "Ashley King, Jainam Shah and I built a multi-objective semi-supervised explanation system as " +
                        "part of the course CSC 591 (Automated Software Engineering) under Dr. Tim Menzies. We tested " +
                        "our model on eleven different datasets."
                    )
                },
                {
                    type: "normal",
                    content: (
                        "Our aim was to improve SWAY, a technique to solve SE problems with multiple conflicting " +
                        "objectives. We were looking to find an approach to discover an optimal set of hyperparameters " +
                        "with minimal evaluations. Instead of exploring all possible combinations of hyperparameters, " +
                        "we seek to find a method to explore only a subset of representative hyperparameters. SWAY " +
                        "takes a large input space of possible explanatory variables and only evaluates examples to a " +
                        "log degree of the original dataset size. Using this same technique, we used SWAY to explore the " +
                        "set of hyperparameters to pass to SWAY."
                    )
                },
                {
                    type: "highlight",
                    content: "Our improved SWAY <b>outperformed the original parameters</b> on all columns for 5 out of the 11 datasets."
                },
                {
                    type: "link",
                    content: "Link to Github Repo",
                    link: "https://github.com/kingan1/CSC591-MultiGoal-SemiSupervised/tree/main"
                },
                {
                    type: "link",
                    content: "Link to Project Report",
                    link: "https://github.com/kingan1/CSC591-MultiGoal-SemiSupervised/blob/main/Report.pdf"
                }
            ]
        }
    ]

    return (
        <div className="App">
            <NavigationBar/>
            <Header/>
            <Container>
                <Experience records={experience_records}/>
                <Education records={education_records}/>
                <Project records={project_records}/>
            </Container>
            <Footer/>
    </div>
  );
}

export default App;
