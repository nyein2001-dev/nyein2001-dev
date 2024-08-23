import React from "react";
import { Certificate } from "../models/Certificate";
import HeroIcon from "./HeroIcon.tsx";
import { getImagePath } from "../helpers/Helper.js";

interface CertificateCardItemProps {
  item: Certificate;
  separator: boolean;
}

const CertificateCardItem: React.FC<CertificateCardItemProps> = ({
  item,
  separator,
}) => {
  return (
    <div className="mb-5 flex items-start">
      <img
        src={getImagePath(item.schoolLogo)}
        alt="school logo"
        className="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700"
      />
      <div className="ml-3 w-full space-y-5">
        <div className="items-start justify-between sm:flex">
          <div className="mb-2 space-y-1.5 text-gray-400 dark:text-night-400">
            <div className="font-medium text-gray-900 dark:text-night-50">
              {item.course}
            </div>
            <span className="text-sm font-medium">{item.course}</span>
            <div className="text-xs">
              {item.issueDate} · {item.expirationDate}
            </div>
            {item.credentialCode && (
              <div className="text-xs">
                Credential Code:
                <span className="rounded-xl bg-primary-500/10 py-1 px-1 text-primary-500">
                  {item.credentialCode}
                </span>
              </div>
            )}
          </div>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-100 px-2 py-2 text-xs text-gray-400 hover:bg-gray-100 dark:border-night-700 dark:text-night-300 dark:hover:bg-night-700"
            >
              <span>View Credential</span>
              <HeroIcon
                icon="ArrowTopRightOnSquareIcon"
                isSolid={false}
                className="h-4 w-4 shrink-0"
              />
            </a>
          )}
        </div>
        {separator && (
          <div className="hidden border-b border-dashed border-gray-200 dark:border-night-600"></div>
        )}
      </div>
    </div>
  );
};

export default CertificateCardItem;
