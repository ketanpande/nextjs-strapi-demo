import React from "react";

import { Inter } from "next/font/google";
import Link from "next/link";
import { Data } from "@/constants/constant";

const inter = Inter({ subsets: ["latin"] });
const Products = (props) => {
  return (
    <div>
      <main
        className={`flex min-h-screen flex-col  justify-between p-24 ${inter.classNameName}`}
      >
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Product list - My Shop
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
              {props.productList.map((product, index) => {
                return (
                  <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <img
                        unop
                        className="h-40 rounded w-full object-cover object-center mb-6"
                        src="https://dummyimage.com/720x400"
                        alt="content"
                      />

                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        {product.attributes.productname}
                      </h2>
                      <p className="leading-relaxed text-base">
                        {product.attributes.description}
                      </p>
                    </div>
                    <Link href={`/products/${product.attributes.productname}`}>
                      <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  let headers = {
    Authorization: Data.token,
  };
  // Fetch data from external API
  const res = await fetch(Data.api_url, {
    headers: headers,
  });
  const repo = await res.json();
  const productList = repo.data;
  return { props: { productList } };
}

export default Products;
