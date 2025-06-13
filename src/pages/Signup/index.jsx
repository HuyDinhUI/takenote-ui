import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { GoogleIcon } from "../../assets/Icon";
import { Link, Navigate, useNavigate } from "react-router-dom";
import authorizedAxiosInstance from '../../utils/axios'


export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const submitLogin = async (data) => {
    console.log("submit login: ", data);
    try {
      const res = await authorizedAxiosInstance.post(
        "http://localhost:5024/v1/users/signup",
        data
      );

      navigate('/login')
    } catch (error) {}
  };

  return (
    <div className="h-[100vh] bg-blue-200 shadow-lg flex items-center justify-center">
      <div className="w-100 min-h-150 bg-white rounded-2xl p-7 flex-row items-center justify-items-center">
        <div className="flex items-center my-5">
          <FontAwesomeIcon
            className="text-5xl mr-2 text-indigo-600"
            icon={faClipboardCheck}
          />
          <h1 className="text-4xl text-indigo-600 font-bold">TaskNote</h1>
        </div>
        <span>Welcome to Tasknote</span>
        <form onSubmit={handleSubmit(submitLogin)} className="gap-2 w-full my-5 ">
            <div className="">
            <span>Username</span>
            <input
              {...register("username", {
                required: "Email cannot be blank",
              })}
              placeholder="huydinh123"
              type="text"
              className="ring-1 ring-gray-200 w-full p-3 rounded-sm my-1"
            />
          </div>
          <div className="my-5">
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
          </div>
          <div className="my-5 relative">
            <span>Confirm Password</span>
            <input
              {...register("confirmPassword", {
                required: "Password cannot be blank",
              })}
              placeholder="*********"
              type="password"
              className="ring-1 ring-gray-200 w-full p-3 rounded-sm my-1"
            />
          </div>
          <button type="submit" className="w-full p-3 font-bold text-white bg-indigo-600 rounded-xl">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
