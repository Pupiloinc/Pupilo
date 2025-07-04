"use client"
import { useState } from "react";


function Email() {
  const [email, setEmail] = useState("");

  const handleSearch = async () => {
  

    if (!email) {
      console.log("email required: true");
      return;
    }
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toEmail: email, toName: email.split("@")[0] }),
      });
      if (res.ok) {
        alert("Email sent!");
      } else {
        alert("Failed to send email");
      }
    } catch (err) {
      alert("Error sending email");
    }
  };
  return (
    <div className="p-3">
      <input
        type="email"
        className="border border-white w-full py-2 rounded px-2 max-w-[500px]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button
        className="bg-blue-50 px-4 py-2 text-black rounded ml-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default Email;
