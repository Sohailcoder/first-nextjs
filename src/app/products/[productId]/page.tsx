import React from "react";

function page({ params }: { params: { productId: string } }) {
  return (<div>Dynamicc {params.productId}</div>);
}

export default page;
