import SmallCard from "../components/SmallCard";
import { projectIcons } from "../components/Icons";

import { projects } from "../utils/projectsData";

import { MyApp } from "../components/myD3Component";

const Home = () => (
  <div className="home">
    <h1 className="header">How are JIRA tickets progressing...?</h1>
    <MyApp></MyApp>
    {/* <div className="card-grid">
      {projects.map((project) => {
        const Icon = projectIcons[project.id];
        return <SmallCard key={project.id} Icon={Icon} title={project.name} slug={project.slug} />;
      })}
    </div> */}
  </div>
);

export default Home;
