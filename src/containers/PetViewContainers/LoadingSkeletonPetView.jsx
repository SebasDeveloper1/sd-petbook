import React from 'react';
import { Typography } from 'components/indexComponents';

function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 rounded-full w-60 h-60 mb-4" />
      <div className="w-full mb-1 h-6 bg-gray-200 rounded-full" />
      <div className="w-1/2 h-4 mx-auto bg-gray-200 rounded-full" />
    </div>
  );
}

function LoadingList() {
  return (
    <ul className="flex flex-col gap-6 p-4 text-xl text-slate-300">
      {[1, 2, 3, 4, 5].map((key) => (
        <li key={key} className="flex items-center gap-3 animate-pulse">
          <div className="bg-gray-200 rounded-full w-8 h-8" />
          <div className="w-2/3 h-4 bg-gray-200 rounded-full" />
        </li>
      ))}
    </ul>
  );
}

function LoadingImage() {
  return (
    <div className="animate-pulse bg-gray-300 rounded-lg w-full aspect-square" />
  );
}

function LoadingArticle() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="animate-pulse bg-gray-300 rounded-lg h-8 w-full md:w-1/2" />
      <div className="animate-pulse bg-gray-300 rounded-lg h-8 w-full md:w-2/3" />
      <div className="animate-pulse bg-gray-300 rounded-lg h-8 w-full md:w-1/2" />
    </div>
  );
}

function LoadingListItem() {
  return (
    <li className="flex flex-col bg-gray-200 col-span-2 md:col-span-1 h-28 rounded-lg" />
  );
}

export function LoadingSkeletonPetView() {
  return (
    <section className="flex justify-center w-full min-h-screen py-12 bg-BeamsCover bg-contain bg-top bg-no-repeat">
      <div className="w-11/12">
        <section className="grid grid-cols-3 justify-center gap-6 divide-y md:divide-x md:divide-y-0">
          <div className="col-span-3 md:col-span-1 flex flex-col items-center gap-6">
            <LoadingSkeleton />
            <div className="w-11/12 h-12 rounded-xl font-semibold bg-gray-200 animate-pulse" />
            <section className="w-full pt-4 border-t">
              <LoadingList />
            </section>
          </div>
          <div className="col-span-3 md:col-span-2 w-full">
            <div className="grid grid-cols-3 justify-center items-center gap-6 w-full p-6 max-w-2xl mx-auto mb-12 rounded-xl bg-gray-100">
              <figure className="col-span-3 md:col-span-1 ">
                {/* Loading skeleton for image */}
                <LoadingImage />
              </figure>
              <section className="col-span-3 md:col-span-2 space-y-3 text-gray-50 text-xl">
                {/* Loading skeleton for article */}
                <LoadingArticle />
              </section>
            </div>
            <div className="px-0 md:px-6 pt-6 pb-12 w-full">
              <Typography
                variant="h4"
                value="Historial de Vacunación"
                styles="pb-8 max-w-prose font-semibold text-slate-900 truncate"
              />
              <ul className="animate-pulse w-full mx-auto grid grid-cols-2 gap-3 md:gap-6">
                {[1, 2, 3, 4].map((key) => (
                  <LoadingListItem key={key} />
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
