import React from "react";

export default function page({ params }: { params: { productId: string } }) {
  const mockData = [
    {
      id: "zero-waste",
      name: "Product 1",
      description: "Description for Product 1",
    },
    { id: "2", name: "Product 2", description: "Description for Product 2" },
    // Add more mock data as needed
  ];

  const findProductById = (productId: string) => {
    return mockData.find((product) => product.id === productId);
  };
  const product = findProductById(params.productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}
