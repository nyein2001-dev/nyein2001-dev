import React, { useState, useMemo } from 'react';
import ExperienceCardItem from './ExperienceCardItem'; // Adjust the path as needed
import MyPaginate from './MyPaginate'; // Adjust the path as needed
import { useResumeStore } from '../stores/ResumeContext'; // Adjust the path as needed

const itemsPerPage = 3;

const ExperienceCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const resumeStore = useResumeStore();
  const resume = resumeStore.resume; // Assuming `resume` is available directly from the store

  const total = useMemo(() => resume.experience.length, [resume.experience]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return resume.experience.slice(start, end);
  }, [currentPage, resume.experience]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="rounded-xl bg-white mb-5 p-7 dark:bg-night-800">
      <h2 className="mb-4 text-lg font-semibold dark:text-night-50">Experience</h2>
      {paginatedItems.map((item, index) => (
        <ExperienceCardItem
          key={index}
          item={item}
          separator={paginatedItems.length > index + 1}
        />
      ))}
      <MyPaginate
        totalItems={total}
        itemsPerPage={itemsPerPage}
        maxVisibleButtons={3}
        onPageChanged={handlePageChange}
      />
    </div>
  );
};

export default ExperienceCard;
