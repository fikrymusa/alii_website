import { useState, useEffect } from "react";
import { api } from "../../../utils/api";
import LoadingDots from "../../../components/LoadingDots";

export default function LoginPage() {
  const [err, setErr] = useState("");
  const [animate, setAnimate] = useState(false);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false); // state modal

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAnimate(true);
    setErr("");
    await api
      .post(`/auth/login_manual`, input)
      .then((res) => {
        console.log("res", res.data);

        let stt = res.data.status;
        if (stt == 404) {
          setErr(res.data.message);
          setAnimate(false);
          return;
        }
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("data", JSON.stringify(res.data.data_enc || null));

        localStorage.setItem("theme", "light");

        window.location.href = "/u/d";
        setAnimate(false);
      })
      .catch((err) => {
        setAnimate(false);
        console.log("res", err)
        // setErr(err?.response?.data?.detail)
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-3xl p-8 w-full max-w-lg">
      <div className="flex flex-col items-center">
      <div className="w-28">
      <img src="/assets/images/alii-logo-white.png" />

      </div>
        <h2 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-lg uppercase">
    administrator
        </h2>

      </div>

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
          {/* Email */}
          {err && (
            <div className="bg-red-500 text-white p-4 rounded-xl text-center">
              {err}
            </div>
          )}
          <div>
            <label className="text-white/90 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-2.5 rounded-xl bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white/40 focus:outline-none"
              placeholder="example@mail.com"
              value={input?.email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-white/90 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full mt-1 p-2.5 rounded-xl bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white/40 focus:outline-none"
              placeholder="******"
              value={input?.password}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="mt-4">
          {animate ? 
          <LoadingDots />
          : 
          <button
            type="submit"
            className="w-full bg-white/30 hover:bg-white/40 transition text-white font-semibold py-2.5 rounded-xl backdrop-blur-sm"
          >
            Login
          </button>
          }
          </div>
        </form>
      </div>
    </div>
  );
}
