import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      {/* component */}
      <meta charSet="UTF-8" />
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        * {\n            margin: 0;\n            padding: 0;\n        }\n        .instagram-logo {\n            background-position: 0 -130px;\n            height: 51px;\n            width: 175px;\n            background-image: url(https://bit.ly/3v2LT17);\n        }\n        .facebook-logo {\n            background-position: -414px -259px;\n            background-image: url(https://bit.ly/3v2LT17);\n            height: 16px;\n            width: 16px;\n        }\n        .apple-store-logo {\n            background-position: -132px -182px;\n            height: 42px;\n            width: 128px;\n            background-image: url(https://bit.ly/3v2LT17);\n        }\n        .google-store-logo {\n            background-position: 0 -182px;\n            height: 42px;\n            width: 130px;\n            background-image: url(https://bit.ly/3v2LT17);\n        }\n    ",
        }}
      />
      <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
          <h1 className="bg-no-repeat instagram-logo" />
          <p
            style={{
              textAlign: "center",
              width: "250px",
              color: "#737373",
              fontWeight: "500",
              marginTop: "10px",
            }}
          >
            Sign up to see photos and videos from your friends.
          </p>

          <button
            style={{ display: "flex", gap: "10px", marginTop: "10px" }}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded"
          >
            <AiFillFacebook />
            <span className="text-xs text-white-900 font-semibold">
              Log in with Facebook
            </span>
          </button>

          <div className="flex justify-evenly space-x-2 w-64 mt-4">
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
            <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
              or
            </span>
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
          </div>

          <form className="mt-8 w-64 flex flex-col">
            <input
              autofocus=""
              className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="email"
              placeholder="Mobile Number or email"
              type="text"
            />
            <input
              autofocus=""
              className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="password"
              placeholder="Full Name"
              type="password"
            />
            <input
              autofocus=""
              className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="password"
              placeholder="Username"
              type="password"
            />
            <input
              autofocus=""
              className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="password"
              placeholder="Password"
              type="password"
            />
            <div
              style={{
                textAlign: "center",
                fontSize: "13px",
                width: "290px",
                alignSelf: "center",
                color: "#737373",
              }}
            >
              <span>
                People who use our service may have uploaded your contact
                information to Instagram.
              </span>
              <span>
                <a style={{ color: "#00376B" }} href="">
                  Learn More
                </a>
              </span>
            </div>

            <div
              style={{
                textAlign: "center",
                fontSize: "13px",
                width: "330px",
                alignSelf: "center",
                marginTop: "10px",
                color: "#737373",
                marginBottom: "10px",
              }}
            >
              <span>By signing up, you agree to our </span>
              <span>
                <a style={{ color: "#00376B" }} href="">
                  Terms,Privacy,Policy,Cookies Policy
                </a>
              </span>
            </div>

            <a className=" text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
              Sign Up
            </a>
          </form>
        </div>
        <Link to={"/login"}>
          <div className="bg-white border border-gray-300 text-center w-80 py-4">
            <span className="text-sm">Have an account?</span>
            <a className="text-blue-500 text-sm font-semibold">Log in</a>
          </div>
        </Link>
        <div className="mt-3 text-center">
          <span className="text-xs">Get the app</span>
          <div className="flex mt-3 space-x-2">
            <div className="bg-no-repeat apple-store-logo" />
            <div className="bg-no-repeat google-store-logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
