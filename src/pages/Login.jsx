import { Form, Link, useActionData } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";
import FormInput from "../components/FormInput";
import { useSignup } from "../hooks/useSignUp";
import "../hooks/useLogin";
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");

  return { email, password };
};

function Login() {
  const { signUpWithGoogle } = useSignup();
  const { loginWithEmailAndPassword } = useLogin();

  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      loginWithEmailAndPassword(actionData);
    }
  }, [actionData]);

  return (
    <div className="min-h-screen  grid place-content-center">
      <div className="mb-3">
        <Form method="POST" className="w-96">
          <h1 className="text-4xl text-center font-medium mb-3">Login</h1>
          <FormInput label="Email" type="email" name="email" />
          <FormInput label="Password" type="password" name="password" />
          <button type="submit" className="btn btn-primary w-full mt-3">
            Submit
          </button>
        </Form>
      </div>
      <div>
        <button
          onClick={signUpWithGoogle}
          type="button"
          className="btn btn-secondary w-full"
        >
          <span
            className="flex items-center gap-1
"
          >
            <GrGoogle className="w-5 h-5" />
            <span>Signup</span>
          </span>
        </button>
        <p className="mt-4 text-center">
          Do not have account yet ?
          <Link to="/signup" className="link link-primary ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
