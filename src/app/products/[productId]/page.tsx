import React from "react";

function page({ params }: { params: { productId: string } }) {

  return (<div>Dynamic {params.productId}</div>);
}

export default page;
