"use client";

import { Skeleton } from "@heroui/react";

const HomePageLoading = () => {
  const perPage = parseInt(process.env.NEXT_PUBLIC_PER_PAGE) || 6;

  return (
    <div className="w-full space-y-2 lg:space-y-3">
      {Array.from({ length: perPage }).map((_, i) => (
        <div
          key={i}
          className="h-max w-full rounded-md border bg-white dark:border-slate-700 dark:bg-default-100"
        >
          <div className="grid w-full sm:grid-cols-5">
            <Skeleton className="sm:col-span-2 h-48 sm:h-full w-full rounded-l-md bg-gray-200"></Skeleton>
            <div className="sm:col-span-3 space-y-3 p-4 dark:border-slate-700 lg:p-4">
              <div className="space-y-1">
                <Skeleton className="h-6 w-full rounded bg-gray-200"></Skeleton>
                <Skeleton className="h-6 w-4/5 rounded bg-gray-200"></Skeleton>
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-full rounded bg-gray-200"></Skeleton>
                <Skeleton className="h-4 w-full rounded bg-gray-200"></Skeleton>
                <Skeleton className="h-4 w-3/4 rounded bg-gray-200"></Skeleton>
              </div>
              <div className="flex justify-between text-xs font-light sm:text-sm">
                <div className="flex items-center gap-2 dark:text-gray-500">
                  <Skeleton className="h-4 w-16 rounded bg-gray-200"></Skeleton>
                  <Skeleton className="h-4 w-8 rounded bg-gray-200"></Skeleton>
                </div>
                <Skeleton className="h-4 w-32 rounded bg-gray-200"></Skeleton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePageLoading;
