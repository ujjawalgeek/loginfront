import { useState } from "react";
import axios from "axios";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const sendOtp = async () => {
    await axios.post(`${API_BASE_URL}/api/auth/sendResetOtp`, { email });
    setStep(2);
  };

  const resetPassword = async () => {
    await axios.post(`${API_BASE_URL}/api/auth/resetPassword`, { email, otp, password });
    alert("Password reset successful!");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white shadow rounded w-96">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        {step === 1 ? (
          <>
            <Label>Email</Label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button onClick={sendOtp} className="mt-4 w-full">Send OTP</Button>
          </>
        ) : (
          <>
            <Label>OTP</Label>
            <Input value={otp} onChange={(e) => setOtp(e.target.value)} />
            <Label>New Password</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={resetPassword} className="mt-4 w-full">Reset</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
