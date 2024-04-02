import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../services/authService";

const schema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z.string().min(1, { message: "Username is required." }),
});

type FormData = z.infer<typeof schema>;

function LoginPage() {
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });
  const navigate = useNavigate();
  const { state: fromUrl } = useLocation();
  const user = auth.getCurrentUser();

  async function onSubmit(data: FormData) {
    console.log("Submitted", data);
    navigate(fromUrl || "/");
    try {
      await auth.login(data);
    } catch (error: any) {
      if (error.response.status === 400) {
        setError("username", { message: error.response.data });
      }
    }
  }

  if (user) return <Navigate to={"/"} />;

  return (
    <div className="h-screen grid place-items-center place-content-center">
      <h1 className="mb-4 text-center font-bold text-3xl">Login</h1>
      <div className="p-10 shadow rounded-3xl ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              {...register("username")}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.username && (
              <p className="text-error">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              {...register("password")}
              className="input input-bordered w-full max-w-3xl"
            />
            {errors.password && (
              <p className="text-error">{errors.password.message}</p>
            )}
          </div>
          <div className="grid place-items-center mt-4">
            <button className="btn btn-primary" disabled={!isValid}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
