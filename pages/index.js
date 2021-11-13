import { MyApp } from "../components/myD3Component";
import * as d3 from "d3";
import fs from "fs";

const Home = ({ data }) => (
  <div className="home">
    <h1 className="header">How are JIRA tickets progressing...?</h1>
    <MyApp data={data}></MyApp>
    {/* <div className="card-grid">
      {projects.map((project) => {
        const Icon = projectIcons[project.id];
        return <SmallCard key={project.id} Icon={Icon} title={project.name} slug={project.slug} />;
      })}
    </div> */}
  </div>
);

export async function getStaticProps() {
  const data = fs.readFileSync("/data.csv");
  // let dataForHeatMap;
  // await d3.csv("data/data.csv", function (data) {
  //   dataForHeatMap = data;
  // });
  return { props: { data } };
}

export default Home;
