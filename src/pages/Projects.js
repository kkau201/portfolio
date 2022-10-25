import ProjectCard from "../components/ProjectCard";

const projectList = [
  {
    title: "Pūioio",
    img: "puuioio.png",
    year: "2022",
    desc: "With the ubiquity of mobile phones and the benefits of tracking physical activity, our final year research explored the feasibility of counting exercise repetitions in real-time, using only on-device inference, on flagship smartphones. As a result, we developed Pūioio, a cross-platform mobile application designed to track repetitions using our proposed pipeline for three standard exercises: Squats, Push-ups, and Pull-ups. Overall, Pūioio attained an accuracy of 98.8% in real-world testing and my partner and I won 1st in our category for the top 'AI & Machine Learning' project.",
  },
  {
    title: "Quinzical | Java GUI Application",
    img: "quinzical.png",
    year: "2020",
    desc: "The Quinzical application is a quiz game that aims to teach children more about New Zealand. A cooperative effort to develop Quinzical with my partner, Wayne, took place over two weeks. We chose the target audience of children aged 8-12 in order to teach the next generation about their beautiful and fascinating country. Furthermore, the application would require fun and colourful GUI design.",
  },
  {
    title: "Motukā | Android Mobile Application (Java)",
    img: "motukaa.png",
    year: "2021",
    desc: "Our final Android application, Motukā, helps users browse information about different vehicles. The app was developed to meet the specifications given for a university paper as a competition. This involved developing an android app that can be used to showcase or sell items. More importantly, the team properly applied and realised SOLID principles during the period of this project.",
  },
  {
    title: "The Missed | Web Application Curriculum Resource",
    img: "missed.png",
    year: "2017",
    desc: "A web application created as a digital curriculum resource for Year 7-10 students. Includes one-click-translation from English to Maori. Awarded with the amazing opportunity to attend the 100th Anniversary of the Battle of Passchendaele in Belgium by the Ministry of Education. Used technologies: HTML, CSS, jQuery and Adobe Photoshop",
  },
  {
    title: "Homey | Mobile Application Prototype",
    img: "homey.png",
    year: "2020",
    desc: "A flatting workflow management app that promotes an organized and efficient living environment with roommates. It includes gamification as its main feature. This concept was a semi-finalist in the ON:Pitch competition.",
  },
  {
    title: "Mauao Collective | NZQA Level 3 Design Portfolio",
    img: "mauao.png",
    year: "2016",
    desc: "A systematic body of work designed for an art collective consisting of a range of mediums, from logos and invitations to posters and a zine. Integrates conventions and regenerates ideas within design practice. My year-long portfolio was top 12 in NCEA Design Level 3, placing it in the NZQA Top Art Exhibition touring the country.",
  },
  {
    title: "Stroke Rehabilitation | Mobile Application Prototype",
    img: "stroke.png",
    year: "2018",
    desc: "This app has been designed to aid stroke patients who experience difficulties with communication. The UI/UX was completed on Adobe XD.",
  },
  {
    title: "The Pink Room | e-Commerce Web Application",
    img: "pinkroom.JPG",
    year: "2016",
    desc: "The Pink Room is a web application for a independent clothing outlet. It aims to help promote their clothing lines to potential and existing customers. It integrates a database to keep track of items, quantities, price etc.",
  },
  {
    title: "RGHS Te Mātārere | School Bulletin",
    img: "bulletin.png",
    year: "2017",
    desc: "Took the initiative to revamp the my high school bulletin. As a co-designer, we developed each bulletin in Adobe Photoshop where 10 issues were released over the course of the year.",
  },
  {
    title: "Biopad | e-Commerce Website",
    img: "digichem.png",
    year: "2016",
    desc: "An e-Commerce web application intended for selling biodegradable packaging for sanitary products.",
  },

  // { title: "", img: "", year: "", desc: "" },
];

const Projects = () => {
  return (
    <div className="App">
      <header className="App-header pt-20">
        <h1>Projects</h1>

        <div>
          {projectList.map((project) => (
            <ProjectCard
              title={project.title}
              img={project.img}
              year={project.year}
              desc={project.desc}
            ></ProjectCard>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Projects;
