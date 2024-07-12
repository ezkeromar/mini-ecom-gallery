import { useState } from 'react';
import { Product } from 'src/types/product';
import Rating from './rating';

export default function ProductSingle({id}: {id: string}) {
    const [product, setProduct] = useState<Product>({} as Product);

    const loadProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const product = await response.json() as Product;
            setProduct(product);
            console.log(product, "product");
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="flex justify-between">
            <h1 className="text-xl font-medium text-gray-900">
              {product.title}
            </h1>
            <p className="text-xl font-medium text-gray-900">{product.price}</p>
          </div>
          {/* Reviews */}
          <div className="mt-4">
            <h2 className="sr-only">Reviews</h2>
            <div className="flex items-center">
              <p className="text-sm text-gray-700">
                {product.rating.rate}
                <span className="sr-only"> out of 5 stars</span>
              </p>
              <div className="ml-1 flex items-center">
                <Rating rating={product.rating.rate} />
              </div>
              <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                ·
              </div>
              <div className="ml-4 flex">
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  See all {product.rating.count} reviews
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image gallery */}
        <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
          <h2 className="sr-only">Images</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
            <img
              alt={product.title}
              src={product.image}
              className={"lg:col-span-2 lg:row-span-2"}
            />
          </div>
        </div>

        <div className="mt-8 lg:col-span-5">
          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to cart
          </button>

          {/* Product details */}
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Description</h2>

            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
              className="prose prose-sm mt-4 text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
