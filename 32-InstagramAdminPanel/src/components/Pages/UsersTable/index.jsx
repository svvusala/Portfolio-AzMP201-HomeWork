import React, { useEffect } from "react";
import { useGetUserByIdQuery } from "../../../services/users";
import { useDispatch, useSelector } from "react-redux";
import { getAllDatas } from "../../../servicesData";
import { endPoints } from "../../../servicesData/api";
import { setUsers } from "../../../redux/UserTableSlice";

const UserTable = () => {
  // const obj = useGetUserByIdQuery("2");
  // console.log(obj);

  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.user);

  useEffect(() => {
    getAllDatas(endPoints.users).then((data) => {
      dispatch(setUsers(data));
      console.log(data);
    });
  }, []);

  return (
    <>
      {/* component */}
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Profile</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Age</th>
                  <th className="px-4 py-3">Bio</th>
                  <th className="px-4 py-3">Gender</th>
                  <th className="px-4 py-3">Delete</th>
                  <th className="px-4 py-3">Edit</th>
                  <th className="px-4 py-3">Post</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {users &&
                  users.map((elem) => {
                    return (
                      <tr className="text-gray-700">
                        <td className="text-gray-700">
                          <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src={elem.profilePhoto}
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-black">
                                {elem.name}
                              </p>
                              <p className="text-xs text-gray-600">
                                {elem.username}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          {elem.email}
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          {elem.age}
                        </td>
                        <td className="px-4 py-3 text-xs border">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                            {" "}
                            {elem.bio}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          {elem.gender}
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          <button
                            className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                          >
                            Delete
                          </button>
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          <button
                            className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                          >
                            Edit
                          </button>
                        </td>
                        <td className="px-4 py-3 text-sm border">
                          <button
                            className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                          >
                            Post
                          </button>
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

export default UserTable;
