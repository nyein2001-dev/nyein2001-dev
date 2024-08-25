import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";

const MyPaginate = ({
  totalItems,
  itemsPerPage,
  maxVisibleButtons,
  onPageChanged,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();
  const lastPageCount = useMemo(
    () => Math.ceil(totalItems / itemsPerPage),
    [totalItems, itemsPerPage]
  );

  const visibleButtons = useMemo(
    () => Math.min(maxVisibleButtons, lastPageCount),
    [maxVisibleButtons, lastPageCount]
  );

  const startPage = useMemo(() => {
    if (currentPage === 1) return 1;
    if (currentPage === lastPageCount)
      return lastPageCount - visibleButtons + 1;
    return currentPage - 1;
  }, [currentPage, lastPageCount, visibleButtons]);

  const endPage = useMemo(
    () => Math.min(startPage + visibleButtons - 1, lastPageCount),
    [startPage, visibleButtons, lastPageCount]
  );

  const pages = useMemo(() => {
    const range = [];
    for (let i = startPage; i <= endPage; i += 1) {
      range.push({
        id: i,
        isDisabled: i === currentPage,
      });
    }
    return range;
  }, [startPage, endPage, currentPage]);

  const isInFirstPage = useMemo(() => currentPage === 1, [currentPage]);
  const isInLastPage = useMemo(
    () => currentPage === lastPageCount,
    [currentPage, lastPageCount]
  );

  const firstItem = useMemo(
    () => (currentPage - 1) * itemsPerPage,
    [currentPage, itemsPerPage]
  );
  const lastItem = useMemo(
    () => Math.min(firstItem + itemsPerPage, totalItems),
    [firstItem, itemsPerPage, totalItems]
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChanged(page);
  };

  return (
    <div className="flex items-center justify-between border-t border-dashed py-4 dark:border-night-600">
      {/* Small screen */}
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          disabled={isInFirstPage}
          onClick={() => handlePageChange(currentPage - 1)}
          className="arrow-button rounded-lg text-gray-700 dark:text-night-300"
        >
          <span className="sr-only text-gray-700 dark:text-night-300">
            Previous
          </span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          <span className="pr-2 text-xs text-gray-700 dark:text-night-300">
            Previous Page
          </span>
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isInLastPage}
          className="arrow-button rounded-lg text-gray-700 dark:text-night-300"
        >
          <span className="sr-only text-gray-700 dark:text-night-300">
            Next
          </span>
          <span className="pl-2 text-xs text-gray-700 dark:text-night-300">
            Next Page
          </span>
          <ChevronRightIcon
            className="h-5 w-5 text-gray-700 dark:text-night-300"
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 dark:text-night-300">
            {t("paginate.count", {
              first: firstItem + 1,
              last: lastItem,
              total: totalItems,
            })}
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex gap-2 -space-x-px"
            aria-label="Pagination"
          >
            <button
              disabled={isInFirstPage}
              onClick={() => handlePageChange(1)}
              className="arrow-button rounded-full text-gray-700 dark:text-night-300"
            >
              <span className="sr-only text-gray-700 dark:text-night-300">
                First Page
              </span>
              <ChevronDoubleLeftIcon
                className="h-5 w-5 text-gray-700 dark:text-night-300"
                aria-hidden="true"
              />
            </button>
            <button
              disabled={isInFirstPage}
              onClick={() => handlePageChange(currentPage - 1)}
              className="arrow-button rounded-lg text-gray-700 dark:text-night-300"
            >
              <span className="sr-only text-gray-700 dark:text-night-300">
                Previous Page
              </span>
              <ChevronLeftIcon
                className="h-5 w-5 text-gray-700 dark:text-night-300"
                aria-hidden="true"
              />
            </button>

            {pages.map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => handlePageChange(page.id)}
                disabled={page.isDisabled}
                className={`button ${
                  page.isDisabled ? "active" : ""
                } text-gray-700 dark:text-night-300`}
                aria-label={`Go to page number ${page.id}`}
              >
                {page.id}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isInLastPage}
              className="arrow-button rounded-lg text-gray-700 dark:text-night-300"
            >
              <span className="sr-only text-gray-700 dark:text-night-300">
                Next Page
              </span>
              <ChevronRightIcon
                className="h-5 w-5 text-gray-700 dark:text-night-300"
                aria-hidden="true"
              />
            </button>
            <button
              disabled={isInLastPage}
              onClick={() => handlePageChange(lastPageCount)}
              className="arrow-button rounded-full text-gray-700 dark:text-night-300"
            >
              <span className="sr-only text-gray-700 dark:text-night-300">
                Last Page
              </span>
              <ChevronDoubleRightIcon
                className="h-5 w-5 text-gray-700 dark:text-night-300"
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

MyPaginate.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  maxVisibleButtons: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired,
};

export default MyPaginate;
