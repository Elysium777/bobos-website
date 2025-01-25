"use client";

import { useState } from "react";

interface WaitlistDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistDialog({ isOpen, onClose }: WaitlistDialogProps) {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 这里可以添加实际的邮件提交逻辑
    setShowSuccess(true);
  };

  const handleClose = () => {
    setEmail("");
    setShowSuccess(false);
    onClose();
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="bg-[#131815] p-6 rounded-lg w-[400px] border border-[#333]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-semibold text-white text-center flex-1">Tips</h2>
            <button onClick={handleClose} className="text-[#666] hover:text-white bg-[#2a2e2c] w-5 h-5 leading-none flex items-center justify-center rounded-full">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7M7 1L1 7" stroke="#fff" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 flex-shrink-0 rounded-full bg-[#14F46F] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="max-w-[300px]">
              <p className="text-white">Registration successful!</p>
              <p className="text-[#B7CBC1] text-sm ">Confirmation email has been sent to {email}</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-full bg-[#14F46F] text-black py-2 rounded-md font-semibold hover:bg-[#14F46F]/90 transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#131815] p-6 rounded-lg w-[400px] border border-[#333]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-semibold text-white text-center flex-1">Join Waitlist</h2>
          <button onClick={handleClose} className="text-[#666] hover:text-white bg-white w-4 h-4 leading-none flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7M7 1L1 7" stroke="#666666" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-white mb-2">Your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-[#333] rounded-md text-black focus:outline-none focus:border-[#14F46F]"
              placeholder="xxx@gmail.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#14F46F] text-black py-2 rounded-md font-semibold hover:bg-[#14F46F]/90 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
