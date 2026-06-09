import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./App.css";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert("Registration Successful!");
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input
  type="text"
  placeholder="Enter your full name"
  {...register("name")}
/>
          <p className="error">{errors.name?.message}</p>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
  type="email"
  placeholder="Enter your email"
  {...register("email")}
/>
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
  type="password"
  placeholder="Enter password"
  {...register("password")}
/>
          <p className="error">{errors.password?.message}</p>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
  type="password"
  placeholder="Confirm password"
  {...register("confirmPassword")}
/>
          <p className="error">{errors.confirmPassword?.message}</p>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;