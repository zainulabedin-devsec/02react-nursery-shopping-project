import React from "react";
import PRODUCTS from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const groups = {};
  PRODUCTS.forEach((p) => {
    p.groups.forEach((g) => {
      if (!groups[g]) groups[g] = [];
      groups[g].push(p);
    });
  });

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Our Plants</h2>
          <p className="text-sm text-gray-500">Browse by feature</p>
        </div>
      </div>

      {Object.keys(groups).map((groupKey) => (
        <div key={groupKey}>
          <h3 className="text-sm font-semibold text-green-700 uppercase mb-3">{groupKey.replace("-", " ")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups[groupKey].map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
