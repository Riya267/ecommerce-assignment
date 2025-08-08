import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CategorySkeleton() {
  return (
    <div className="col-12 py-5 text-center">
      <Skeleton height={40} width={560} />
    </div>
  );
}
