import React, { useState, useMemo } from "react";
import CertificateCardItem from "./CertificateCardItem.tsx";
import MyPaginate from "./MyPaginate.js";
import { useResumeStore } from "../stores/ResumeContext.js"; // Adjust the path as needed
import { useTranslation } from "react-i18next";

const itemsPerPage = 3;

const CertificateCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const resumeStore = useResumeStore();
  const { t } = useTranslation();
  const resume = resumeStore.resume; // Assuming `resume` is available directly from the store

  const total = useMemo(() => resume.certificate.length, [resume.certificate]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return resume.certificate.slice(start, end);
  }, [currentPage, resume]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="rounded-xl bg-white p-7 dark:bg-night-800">
      <h2 className="mb-5 text-lg font-semibold dark:text-night-50">{t("license")}</h2>
      {paginatedItems.map((item, index) => (
        <CertificateCardItem
          key={index}
          item={item}
          separator={paginatedItems.length > index + 1}
        />
      ))}
      {/* Paginate */}
      <MyPaginate
        totalItems={total}
        itemsPerPage={itemsPerPage}
        maxVisibleButtons={3}
        onPageChanged={handlePageChange}
      />
    </div>
  );
};

export default CertificateCard;
