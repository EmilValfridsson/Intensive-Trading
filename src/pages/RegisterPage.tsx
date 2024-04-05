import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import userService from "../services/userService";
import { isAxiosError } from "axios";
import { useUserContext } from "../UserContext";
import authService from "../services/authService";

const schema = z.object({
  name: z.string(),
  username: z
    .string()
    .min(1, { message: "Username is required." })
    .email({ message: "Invalid email." }),
  password: z
    .string()
    .min(1, { message: "Password is required." })
    .min(5, { message: "Password is too short." }),
});

type FormData = z.infer<typeof schema>;

function RegisterPage() {
  const navigate = useNavigate();
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });
  const { setUser } = useUserContext();

  async function onSubmit(data: FormData) {
    try {
      await userService.register(data);
      const loggedIn = await authService.getCurrentUser();

      setUser(loggedIn);
      navigate("/");
    } catch (error) {
      if (isAxiosError(error))
        if (error.response?.status === 400)
          setError("username", { message: error.response.data });
    }
  }

  return (
    <div className="vh-100 d-grid justify-content-center align-content-center">
      <h1 className="mb.4 text-center">Register Page</h1>
      <div className="p-5 shadow rounded-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input {...register("name")} className="form-control login-input" />
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              {...register("username")}
              className="form-control login-input"
            />
            {errors.username && (
              <p className="text-danger">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              {...register("password")}
              className="form-control login-input"
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <div className="d-grid justify-content-center mt-4">
            <button className="btn btn-primary" disabled={!isValid}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
