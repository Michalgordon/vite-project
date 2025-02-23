import { EXPERIENCE_LIST } from "../constants";
import { ExperienceCard, Icon, ProfilePicture } from "./index";

const MyExperience = () => {
  return (
    <div className="timeline">
      <ProfilePicture
        className={
          "self-center z-10 w-40 border-2 border-russian-blue bg-russian-blue mb-10 laptop:mb-20"
        }
      ></ProfilePicture>

      {EXPERIENCE_LIST.map((experienceItem, index) => (
        <div key={index}  className={`flex laptop:-mt-10 `}>
          <div
            className={`timeline-container ${
              (index + 1) % 2 == 0
                ? "timeline-container--left"
                : "timeline-container--right"
            }`}
          >
            <div
              className={`timeline-icon w-fit border-2 border-russian-blue rounded-full aspect-square bg-white p-1 top-[20px]
${(index + 1) % 2 == 0 ? "timeline-icon--left" : "timeline-icon--right"}`}
            >
              <Icon
                className="w-[var(--icon-w)]"
                name={experienceItem.iconName}
                fill="#9AAEBB" //TODO
              ></Icon>
            </div>

            <ExperienceCard
              {...experienceItem}
              className={`relative z-10 bg-white pt-8 laptop:pt-4 border-2 border-russian-blue ${
                (index + 1) % 2 == 0
                  ? "laptop:border-arrow--left"
                  : "laptop:border-arrow--right"
              }`}
            ></ExperienceCard>
          </div>
        </div>
      ))}
      <img
        className="self-center z-10 w-40 aspect-square rounded-full border-2 border-russian-blue bg-russian-blue mt-10 laptop:mt-20 shadow-lg"
        src="./assets/images/mikey-highschool.png"
      ></img>
    </div>
  );
};

export default MyExperience;
