import { useState } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/auth/verifyaccount`, { otp }, { withCredentials: true });
      alert("Email verified successfully!");
    } catch (err) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Verify Email</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Label>OTP</Label>
          <Input value={otp} onChange={(e) => setOtp(e.target.value)} required />
          <Button type="submit" className="w-full">Verify</Button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
