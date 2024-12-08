import React from "react";

function page({ params }: { params: { productId: string; reviewId: string } }) {
  return (
    <div>
      Dynamic {params.productId} {params.reviewId}
    </div>
  );
}

export default page;
