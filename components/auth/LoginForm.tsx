
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Backend login API yahan connect hogi
  //   console.log("Login Data:", formData);

  //   // Demo flow
  //   router.push("/dashboard");
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const email = formData.email.trim().toLowerCase();
  
    // Employer demo login
    if (email.endsWith("@ran.com")) {
      router.push("/employer/dashboard");
      return;
    }
  
    // Student demo login
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl grid lg:grid-cols-2">
        
        {/* Left Side */}
        <div className="relative hidden lg:flex min-h-[650px] items-center justify-center overflow-hidden bg-slate-900">
          <Image
            src="/images/auth-illustration.png"
            alt="Rising Skills"
            fill
            className="object-cover opacity-80"
            priority
          />

          <div className="absolute inset-0 bg-slate-900/60" />

          <div className="relative z-10 max-w-md px-10 text-white">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <LogIn size={25} />
            </div>

            <h1 className="text-4xl font-bold leading-tight">
              Welcome back
              <br />
              to Rising Skills.
            </h1>

            <p className="mt-5 text-slate-200 leading-7">
              Continue building your skills, complete assessments, manage
              your evidence and discover opportunities matched to your
              capabilities.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center px-6 py-10 sm:px-10 lg:px-14">
          <div className="w-full max-w-md mx-auto">
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                Welcome back
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Sign in to your Rising Skills account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-12 outline-none focus:border-slate-900"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 py-3.5 font-semibold text-white transition hover:bg-slate-800"
              >
                Sign In
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-slate-900 hover:underline"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

