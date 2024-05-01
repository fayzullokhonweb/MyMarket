import React from "react";
import { Form, useActionData } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";
import { useSignup } from "../hooks/useSignup";
import FormInput from "../components/FormInput";

// context

export const action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("displayName");
  let email = formData.get("email");
  let image = formData.get("image");
  let password = formData.get("password");

  return { name, email, image, password };
};

function Signup() {
  const { signUpWithGoogle, registerWithEmailAndPassword } = useSignup();

  return (
    <div className="min-h-screen  grid place-content-center">
      <div className="mb-3">
        <Form method="POST" >
          <FormInput label="Display Name" type="text" name="displayName" />
          <FormInput label="Email" type="email" name="email" />
          <FormInput label="Image" type="url" name="image" />
          <FormInput label="Password" type="password" name="password" />
          <button
            onClick={registerWithEmailAndPassword}
            type="submit"
            className="btn btn-primary w-full mt-3"
          >
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
      </div>
    </div>
  );
}

export default Signup;
