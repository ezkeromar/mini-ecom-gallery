import { Product } from "../types/product";
import Rating from "./rating";

export default function ProductItem({ product }: { product: Product}) {
  return (
    <div
      key={product.id}
      className="group relative border-b border-r border-gray-200 p-4 sm:p-6 col-span-4"
    >
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg group-hover:opacity-75">
        <img
          alt={product.title}
          src={product.image}
          className="h-64 w-auto object-contain object-center m-auto"
        />
      </div>
      <div className="pb-4 pt-10 text-center">
        <h3 className="text-sm font-medium text-gray-900">
          <a href={`/product/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.title}
          </a>
        </h3>
        <div className="mt-3 flex flex-col items-center">
          <p className="sr-only">{product.rating.rate} out of 5 stars</p>
          <div className="flex items-center">
            <Rating rating={product.rating.rate} />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {product.rating.count} reviews
          </p>
        </div>
        <p className="mt-4 text-base font-medium text-gray-900">
          {product.price}
        </p>
      </div>
    </div>
  );
}
