import { Skill } from "./index";
import { SKILLS } from "../constants";
import { Fragment } from "react";
const Skills = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5 laptop:grid-flow-row gap-8">
        {SKILLS.map((skill, index) => (
          <Skill {...skill} key={index} iconColor="#8BA7B8"></Skill>
        ))}
      </div>
    </Fragment>
  );
};
export default Skills;
