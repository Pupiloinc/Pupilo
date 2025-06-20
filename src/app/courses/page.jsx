import AddOnCourses from "@/components/courses/AddOnCourses";
import PupiloCurriculum from "@/components/courses/pupiloCurriculum";
import TechJourney from "@/components/courses/TechJourney";
import React from "react";

const page = () => {
  return (
    <div>
      <PupiloCurriculum />
      <TechJourney />
      <AddOnCourses />
    </div>
  );
};

export default page;
