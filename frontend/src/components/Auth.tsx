import { SignupInput } from "@javed-ak/common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { BACKEND_URL } from "../config";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Auth({ type }: { type: "signup" | "signin" }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState<SignupInput>({
    name: "",
    email: "",
    password: ""
  });

  async function sendRequest() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === 'signup' ? 'signup' : 'signin'}`,
        inputValues
      );
      const jwt = response.data;
      localStorage.setItem('token', jwt);
      navigate("/blogs");
    } catch (e) {
      setLoading(false);
      toast.error("Error While Signing Up", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <div className="w-full h-full lg:w-1/2 flex lg:flex-col justify-center items-center">
      <ToastContainer />
      <div className="w-80">
        <div className="text-4xl font-bold text-center mb-2">
          {type === 'signup' ? 'Create an account' : 'Login Now'}
        </div>
        <div className="flex gap-2 justify-center text-slate-500">
          {type === "signup" ? "Already have an account?" : "Don't have an account?"}
          <Link className="underline cursor-pointer" to={type === 'signup' ? '/signin' : '/signup'}>
            {type === 'signup' ? 'Login' : 'Sign Up'}
          </Link>
        </div>
        <div>
          {type === "signup" ? (
            <LabelInput label="Name" type="text" placeholder="John Duo" onChange={(e) => {
              setInputValues({ ...inputValues, name: e.target.value });
            }} />
          ) : null}
          <LabelInput label="Email" type="email" placeholder="john@mail.com" onChange={(e) => {
            setInputValues({ ...inputValues, email: e.target.value });
          }} />
          <LabelInput label="Password" type="password" placeholder="" onChange={(e) => {
            setInputValues((inputValues) => ({ ...inputValues, password: e.target.value }));
          }} />
          <button
            onClick={sendRequest}
            className={`w-full bg-slate-900 text-slate-50 rounded-lg p-2 mt-4 ${loading && 'cursor-progress'}`}
            disabled={loading}
          >
            {loading ? 'Processing...' : type === 'signup' ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}

interface LabelInputType {
  label: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelInput({ label, type, placeholder, onChange }: LabelInputType) {
  return (
    <div className="flex flex-col mt-5">
      <label className="font-bold mb-1">{label}</label>
      <input className="border p-2 rounded-lg" type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
