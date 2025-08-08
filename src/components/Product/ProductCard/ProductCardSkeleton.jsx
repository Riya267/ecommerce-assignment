import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductCardSkeleton() {
  return (
    <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
      <Skeleton height={592} />
    </div>
  );
}
