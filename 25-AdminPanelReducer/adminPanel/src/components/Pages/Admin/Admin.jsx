import React, { useEffect } from "react";
import { deleteById, getAllDatas, getDataById } from "../../../services";
import { BASE_URL, endPoints } from "../../../services/api";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = ({ state, dispatch }) => {
  useEffect(() => {
    getAllDatas(endPoints.products).then((data) => {
      //   console.log(data);

      dispatch({
        type: "SET_PRODUCTS",
        products: data,
      });
    });
  }, []);

  return (
    <>
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Id</th>
                  <th className="px-4 py-3">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <p>Title</p>
                      <div>
                        <div>
                          <div className="mx-auto max-w-md">
                            <form action="" className="relative mx-auto w-max">
                              <input
                                onChange={(e) => {
                                  //   console.log(e.target.value);

                                  dispatch({
                                    type: "SEARCH_PRODUCTS",
                                    searchValue: e.target.value,
                                  });
                                }}
                                type="search"
                                className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
                              />
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                              </svg>
                            </form>
                          </div>
                        </div>
                      </div>

                      {/* component */}
                      {/* <div className="p-5">
                        <div className="flex justify-center items-baseline flex-wrap">
                          <div className="flex m-2">
                            <button
                              onClick={() => {
                                dispatch({
                                  type: "AtoZ",
                                });
                              }}
                              className="text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
  hover:bg-gray-200  
  bg-gray-100 
  text-gray-700 
  border duration-200 ease-in-out 
  border-gray-600 transition"
                            >
                              <div className="flex leading-5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  height="100%"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-chevron-left w-5 h-5"
                                >
                                  <polyline points="15 18 9 12 15 6" />
                                </svg>
                                A-Z
                              </div>
                            </button>
                            <button
                              onClick={() => {
                                dispatch({
                                  type: "ZtoA",
                                });
                              }}
                              className="text-base  rounded-l-none border-l-0  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
  hover:bg-teal-200  
  bg-teal-100 
  text-teal-700 
  border duration-200 ease-in-out 
  border-teal-600 transition"
                            >
                              <div className="flex leading-5">
                                Z-A
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  height="100%"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-chevron-right w-5 h-5 ml-1"
                                >
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Rate</th>
                  <th className="px-4 py-3">Count</th>
                  <th className="px-4 py-3">Delete</th>
                  <th className="px-4 py-3">Edit</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {state.filteredProd.map((elem) => {
                  //   let count = elem.rating.count;
                  //   let countColor = "text-gray-700";

                  //   if (count > 100) {
                  //     countColor = "text-yellow-500";
                  //   } else if (count < 200) {
                  //     countColor = "text-red-500";
                  //   }
                  return (
                    <tr key={elem.id}>
                      <td className="px-4 py-3 border">{elem.id}</td>
                      <td className="px-4 py-3 border">{elem.title}</td>
                      <td className="px-4 py-3 border">{elem.price}</td>
                      <td className="px-4 py-3 border">{elem.category}</td>
                      <td
                        className="px-4 py-3 border"
                        style={{ width: "100px" }}
                      >
                        <img src={elem.image} alt="" />
                      </td>
                      <td className="px-4 py-3 border">{elem.rating.rate}</td>
                      <td className="px-4 py-3 border">{elem.rating.count}</td>
                      <td className="px-4 py-3 border">
                        <button
                          onClick={() => {
                            let arr = state.products.filter((el) => {
                              el.id !== elem.id;
                            });

                            dispatch({
                              type: "SET_PRODUCTS",
                              products: arr,
                            });
                            axios.delete(
                              `http://localhost:3000/products/${elem.id}`
                            );
                          }}
                          className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          data-ripple-light="true"
                        >
                          Delete
                        </button>
                      </td>
                      <td className="px-4 py-3 border">
                        <Link to={`/edit/${elem.id}`}>
                          <button
                            //  onClick={async () => {
                            //   let arr = await getDataById(endPoints.products, elem.id);
                            //   console.log(arr);
                            // }}
                            className="middle none center rounded-lg bg-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
