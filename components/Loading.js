import React from "react";

// Loader page used when data is being fetched
export default function Loading() {
  return (
    <div
      className="flex flex-col flex-1 justify-center
    items-center"
    >
      <i className="fa fa-solid fa-spinner fa-5x text-[var(--light-bold)] animate-spin"></i>
    </div>
  );
}
