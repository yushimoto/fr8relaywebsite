import { useState, useRef } from "react";

export default function ContactUsSection() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    comments: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Use the correct Google Apps Script URL
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbwtM2W4X_6pq6j-AiSK6lZ7CS9Mo875gKxfm3jpynYkY1XjZYA4WK4aps2EHoNmAESg/exec";

      // Create form data for POST request
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("company", form.company);
      formData.append("role", form.role);
      formData.append("comments", form.comments);

      // Submit using fetch with proper error handling
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // This is needed for Google Apps Script
        body: formData,
      });

      // Since we're using no-cors mode, we can't read the response
      // But we can assume success if no error is thrown
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        comments: "",
      });

      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");

      // Reset error status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white tracking-wide font-roboto">
              Get In Touch
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-roboto">
            Join the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              future of freight
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-roboto">
            Ready to revolutionize your logistics operations? Let's discuss how
            FR8relay can transform your transportation strategy.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 font-roboto"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 font-roboto"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 font-roboto"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name (optional)"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 font-roboto"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-4 font-roboto">
                  Select an option
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "I'm a truck driver",
                    "I'm a carrier",
                    "I'm a broker",
                    "Other",
                  ].map((option) => (
                    <div
                      key={option}
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <input
                        type="radio"
                        name="role"
                        value={option}
                        checked={form.role === option}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 text-purple-500 bg-white/10 border-white/20 focus:ring-purple-500 focus:ring-2"
                      />
                      <label className="text-white font-roboto cursor-pointer">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <textarea
                  name="comments"
                  placeholder="Comments (Optional)"
                  value={form.comments}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none font-roboto"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 font-roboto shadow-lg hover:shadow-xl"
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "success"
                    ? "Sent Successfully!"
                    : status === "error"
                    ? "Submission Failed"
                    : "Submit"}
                </button>
              </div>

              {status === "error" && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-2xl p-4">
                  <p className="text-red-300 text-sm font-roboto">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
