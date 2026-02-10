import { useState } from "react";
import Navbar from "./navbar";

export default function TrackShipment() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [status, setStatus] = useState(null);

  // Mock shipment statuses
  const mockStatuses = {
    "ABC123": "📦 In Transit - Departed from Colombo",
    "XYZ789": "🚚 Out for Delivery - Expected today",
    "LMN456": "✅ Delivered - Received by customer",
  };

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingNumber in mockStatuses) {
      setStatus(mockStatuses[trackingNumber]);
    } else {
      setStatus("❌ Tracking number not found. Please check again.");
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero / Page Heading */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
            Track Your Shipment
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Enter your tracking number below to see the current status of your shipment.
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-12 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Tracking Number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-1 border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              Track
            </button>
          </form>

          {/* Status Display */}
          {status && (
            <div className="mt-6 p-4 bg-slate-50 rounded-2xl shadow-md text-center text-slate-700">
              {status}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
