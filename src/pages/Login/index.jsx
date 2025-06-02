import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { GoogleIcon } from "../../assets/Icon";
import { Link } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="h-[100vh] bg-blue-200 shadow-lg flex items-center justify-center">
      <div className="w-100 min-h-150 bg-white rounded-2xl p-7 flex-row items-center justify-items-center">
        <div className="flex items-center my-5">
          <FontAwesomeIcon
            className="text-5xl mr-2 text-indigo-600"
            icon={faClipboardCheck}
          />
          <h1 className="text-4xl text-indigo-600 font-bold">TaskNote Pro</h1>
        </div>
        <span>Sign in to access your notes</span>
        <form onSubmit={handleSubmit()} className="gap-2 w-full my-5 ">
          <div className="">
            <span>Email</span>
            <input
              {...register("email", {
                required: "Email cannot be blank",
              })}
              placeholder="your@email.com"
              type="email"
              className="ring-1 ring-gray-200 w-full p-3 rounded-sm my-1"
            />
          </div>
          <div className="my-5 relative">
            <span>Password</span>
            <input
              {...register("password", {
                required: "Password cannot be blank",
              })}
              placeholder="*********"
              type="password"
              className="ring-1 ring-gray-200 w-full p-3 rounded-sm my-1"
            />
            <Link className="text-blue-700 absolute right-0 -top-0.5">
              Forgot password?
            </Link>
          </div>
          <div className="my-5 flex items-center">
            <input type="checkbox" className="" />
            <span className="mx-1">Remember me</span>
          </div>
          <button className="w-full p-3 font-bold text-white bg-indigo-600 rounded-xl">
            Sign In
          </button>
        </form>
        <div className="w-full min-h-20 border-t-1 mt-10 relative border-gray-300">
          <span className="bg-white absolute -top-4 px-2 right-[50%] translate-x-[50%]">
            or
          </span>
          <div className="flex gap-10 mt-5">
            <div className="flex items-center justify-center w-full ring-1 p-2 ring-gray-200 rounded-sm">
              <GoogleIcon />
              <span className="ml-1">Google</span>
            </div>
          </div>
          <p className="text-center mt-5">
            Don't have an account?{" "}
            <Link className="text-blue-700" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
