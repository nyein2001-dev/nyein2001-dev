import React, { useMemo } from "react";
import ExperienceCardItem from "./ExperienceCardItem"; // Adjust the path as needed
import { useResumeStore } from "../stores/ResumeContext"; // Adjust the path as needed

const VolunteerCard = () => {
  const resumeStore = useResumeStore();
  const resume = resumeStore.resume; // Assuming `resume` is available directly from the store

  const total = useMemo(() => resume.volunteer.length, [resume.volunteer]);

  return (
    <div className="rounded-xl bg-white p-7 dark:bg-night-800">
      <h2 className="mb-5 text-lg font-semibold dark:text-night-50">
        Volunteer
      </h2>
      {resume.volunteer.map((item, index) => (
        <ExperienceCardItem
          key={index}
          item={item}
          separator={total > index + 1}
        />
      ))}
    </div>
  );
};

export default VolunteerCard;
