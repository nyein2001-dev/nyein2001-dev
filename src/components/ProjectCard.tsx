import React, { useState, useMemo } from "react";
import ProjectCardItem from "./ProjectCardItem.tsx";
import MyPaginate from "./MyPaginate";
import { useResumeStore } from "../stores/ResumeContext"; // Adjust import based on your actual setup

const itemsPerPage = 3;

const ProjectList: React.FC = () => {
  const resumeStore = useResumeStore();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const resume = resumeStore.resume; // Adjust according to how you access your store

  const total = useMemo(() => {
    return resume.project.length;
  }, [resume.project]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return resume.project.slice(start, end);
  }, [currentPage, resume.project]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="rounded-xl bg-white p-7 dark:bg-night-800">
      <h2 className="mb-5 text-lg font-semibold dark:text-night-50">Project</h2>
      {/* Project Items */}
      {paginatedItems.map((item, index) => (
        <ProjectCardItem
          key={index}
          item={item}
          separator={paginatedItems.length > index + 1}
        />
      ))}
      {/* Pagination */}
      <MyPaginate
        totalItems={total}
        itemsPerPage={itemsPerPage}
        maxVisibleButtons={3}
        onPageChanged={onPageChange}
      />
    </div>
  );
};

export default ProjectList;
