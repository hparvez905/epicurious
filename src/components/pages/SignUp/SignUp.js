import React from "react";
import {
   useCreateUserWithEmailAndPassword,
   useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loading from "../../sharedPage/loading";

// import Footer from "../../sharedPage/Footer";

const SignUp = () => {
   const navigate = useNavigate();
   const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);
   const [signInWithGoogle, guser, gloading, gerror] =
      useSignInWithGoogle(auth);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   let errorMessage;
   const onSubmit = async (data) => {
      errorMessage = (
         <p className="text-red-600 font-serif">{error?.message}</p>
      );

      const email = data.email;
      const password = data.password;
      await createUserWithEmailAndPassword(email, password);
   };

   if (error || gerror) {
      errorMessage = (
         <p className="text-red-600 font-serif">
            {error?.message || gerror?.message}
         </p>
      );
   }
   if (loading || gloading) {
      return <Loading />;
   }
   if (user || guser) {
      toast.success("New User");
      return navigate("/");
   }
   return (
      <div className="h-screen w-full mx-auto flex flex-col justify-around items-center  bg-[#f5f1e7]">
         <h1 className="mt-12 ease-in-out delay-150 transition-all  text-xl sm:text-3xl font-serif font-extrabold">
            Create an Account
         </h1>
         <div className="mx-auto w-max-md sm:w-[400px]  ease-in-out delay-150 transition-all rounded-2xl bg-white p-5 ">
            <form
               className=" mx-auto space-y-2 "
               onSubmit={handleSubmit(onSubmit)}
            >
               {/* register your input into the hook by invoking the "register" function */}
               <div className="my-2">
                  <label>
                     <div className="text-left ml-2 font-serif font-bold">
                        <span>Full Name</span>
                     </div>
                  </label>
                  <input
                     placeholder="Enter Your Full Name"
                     id="fullName"
                     type="text"
                     className="border-black px-2 w-full input"
                     {...register("fullName", {
                        required: {
                           value: true,
                           message: "full name is required",
                        },
                     })}
                  />
                  <p className="text-red-600 font-serif">
                     {errors.email?.type === "required" && errors.email.message}
                  </p>
               </div>
               <div className="my-2">
                  <label>
                     <div className="text-left ml-2 font-serif font-bold">
                        <span>Email</span>
                     </div>
                  </label>
                  <input
                     placeholder="Email"
                     id="email"
                     type="email"
                     className="border-black px-2 w-full input"
                     {...register("email", {
                        required: {
                           value: true,
                           message: "Email is required",
                        },
                     })}
                  />
                  <p className="text-red-600 font-serif">
                     {errors.email?.type === "required" && errors.email.message}
                  </p>
               </div>

               {/* include validation with required or other standard HTML validation rules */}
               <div>
                  <label>
                     <div className="text-left ml-2 font-serif font-bold">
                        <span>Password</span>
                     </div>
                  </label>
                  <input
                     id="pass"
                     type="password"
                     className="border-black input px-2 w-full"
                     {...register("password", {
                        required: {
                           value: true,
                           message: "Password is required",
                        },
                        minLength: {
                           value: 6,
                           message: "Must be Six Characters or more ",
                        },
                     })}
                  />
                  <p className="text-red-600 font-serif">
                     {errors.password?.type === "required" &&
                        errors.password.message}
                  </p>
                  <p className="text-red-600 font-serif">
                     {errors.password?.type === "minLength" &&
                        errors.password.message}
                  </p>
               </div>
               {/* errors will return when field validation fails  */}
               {errorMessage}

               <input
                  className="font-serif font-bold btn"
                  type="submit"
                  value="Sign Up"
               />
            </form>
            <div className="divider">OR</div>
            <div>
               <button className="btn" onClick={() => signInWithGoogle()}>
                  Sign In With Google
               </button>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
