"use client";

import { useState } from "react";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { PiBellRingingLight } from "react-icons/pi";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { TbManualGearbox } from "react-icons/tb";
import { MapPin, Gauge, Fuel } from "lucide-react";

// Define types
type CategoryKey = "exterior" | "interior" | "safety";
type FeatureKey =
  | "multiZoneAC"
  | "adjustableSteeringWheel"
  | "autoDimmingRearviewMirror"
  | "climateControl"
  | "driverAdjustableLumbar"
  | "heatedFrontSeats"
  | "intermittentWipers"
  | "leatherSeats"
  | "passengerIlluminatedVisorMirror"
  | "passengerAdjustableLumbar"
  | "steeringWheelAudioControls"
  | "powerDoorLocks"
  | "bankThroughRearSeat"
  | "passThroughRearSeat"
  | "universalGarageDoorOpener";

export default function SellCarPage() {
  const [role, setRole] = useState("private");
  const [condition, setCondition] = useState("new");

  // State for Features checkboxes
  const [features, setFeatures] = useState<{
    [key in FeatureKey]: boolean;
  }>({
    multiZoneAC: true,
    adjustableSteeringWheel: true,
    autoDimmingRearviewMirror: false,
    climateControl: false,
    driverAdjustableLumbar: false,
    heatedFrontSeats: true,
    intermittentWipers: false,
    leatherSeats: true,
    passengerIlluminatedVisorMirror: true,
    passengerAdjustableLumbar: false,
    steeringWheelAudioControls: false,
    powerDoorLocks: true,
    bankThroughRearSeat: false,
    passThroughRearSeat: false,
    universalGarageDoorOpener: true,
  });

  // State for category expansion
  const [expandedCategories, setExpandedCategories] = useState<{
    [key in CategoryKey]: boolean;
  }>({
    exterior: false,
    interior: true,
    safety: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  const toggleCategory = (category: CategoryKey) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleFeatureChange = (feature: FeatureKey) => {
    setFeatures((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen bg-gray-100 p-6 gap-6 w-full">
      <div className="flex justify-between">
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-2xl font-bold mt-15">Sell Car</h1>
          {/* Photos / Videos */}
          <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-semibold mb-4">Photos / videos</h2>
            <p className="text-sm text-gray-500 mb-4">
              The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the
              main picture first.
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="rounded-md flex items-center justify-center">
                <Image
                  src="/images/suv.jpg"
                  alt="Car Image"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="rounded-md flex items-center justify-center">
                <Image
                  src="/images/suv.jpg"
                  alt="Car Image"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="rounded-md flex items-center justify-center">
                <Image
                  src="/images/suv.jpg"
                  alt="Car Image"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/suv.jpg"
                  alt="Car Image"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="w-48 h-30 border-2 border-gray-100 rounded-lg flex items-center justify-center bg-gray-100 text-center text-gray-500 cursor-pointer">
                <Upload size={15} />
                Upload Photos/Videos
              </div>
            </div>
            <label htmlFor="" className="font-semibold">
              Link to the video tour
            </label>
            <input
              type="url"
              placeholder="www.youtube.com/..."
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>


        {/* Body type */}
        <div className="mt-5">
          <h3 className="text-sm font-medium mb-2">Body type *</h3>
          <div className="flex gap-3">
            <button className="flex flex-col items-center rounded-md border border-gray-100 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <im
                src="/images/sedan.jpg"
                alt="Sedan"
                height={200}
                width={200}
                className="object-contain"
              />
              <span className="text-sm mt-1">Sedan</span>
            </button>
            <button className="flex flex-col items-center rounded-md border border-gray-100 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <Image
                src="/images/sedan.jpg"
                alt="Convertible"
                height={200}
                width={200}
                className="object-contain"
              />
              <span className="text-xs mt-1">Convertible</span>
            </button>
            <button className="flex flex-col items-center rounded-md border border-gray-100 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <Image
                src="/images/sedan.jpg"
                alt="SUV"
                height={200}
                width={200}
                className="object-contain"
              />
              <span className="text-xs mt-1">SUV</span>
            </button>
            <button className="flex flex-col items-center rounded-md border border-gray-100 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <Image
                src="/images/sedan.jpg"
                alt="Coupe"
                height={200}
                width={200}
                className="object-contain"
              />
              <span className="text-xs mt-1">Coupe</span>
            </button>
          </div>
        </div>


            <div className="flex gap-3 mb-4">
              <button
                type="button"
                onClick={() => setCondition("new")}
                className={`px-4 py-2 border rounded-full ${
                  condition === "new"
                    ? "bg-gray-100 border-black"
                    : "border-gray-300"
                }`}
              >
                New car
              </button>
              <button
                type="button"
                onClick={() => setCondition("used")}
                className={`px-4 py-2 border rounded-full ${
                  condition === "used"
                    ? "bg-gray-100 border-black"
                    : "border-gray-300"
                }`}
              >
                Used car
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="carBrand"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Car Brand *
                </label>
                <input
                  type="text"
                  id="carBrand"
                  placeholder="Mercedes-Benz"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="carModel"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Car Model *
                </label>
                <input
                  type="text"
                  id="carModel"
                  placeholder="A2025"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="manufacturingYear"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Manufacturing Year
                </label>
                <input
                  type="number"
                  id="manufacturingYear"
                  placeholder="2021"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="mileage"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mileage *
                </label>
                <input
                  type="text"
                  id="mileage"
                  placeholder="K miles"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
            </div>

            {/* Body type */}
            <div className="mt-5">
              <h3 className="text-sm font-medium mb-2">Body type *</h3>
              <div className="flex gap-3">
                <button className="flex flex-col items-center rounded-md border border-gray-100 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
                  <img
                    src="/images/sedan.jpg"
                    alt="Sedan"
                    height={200}
                    width={200}
                    className="object-contain"
                  />
                  <span className="text-sm mt-1">Sedan</span>
                </button>
                <button className="flex flex-col items-center rounded-md border border-gray-100 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
                  <img
                    src="/images/sedan.jpg"
                    alt="Convertible"
                    height={200}
                    width={200}
                    className="object-contain"
                  />
                  <span className="text-xs mt-1">Convertible</span>
                </button>
                <button className="flex flex-col items-center rounded-md border border-gray-100 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
                  <img
                    src="/images/sedan.jpg"
                    alt="SUV"
                    height={200}
                    width={200}
                    className="object-contain"
                  />
                  <span className="text-xs mt-1">SUV</span>
                </button>
                <button className="flex flex-col items-center rounded-md border border-gray-100 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
                  <img
                    src="/images/sedan.jpg"
                    alt="Coupe"
                    height={200}
                    width={200}
                    className="object-contain"
                  />
                  <span className="text-xs mt-1">Coupe</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Chicago"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="radius"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Radius
                </label>
                <input
                  type="text"
                  id="radius"
                  placeholder="50 mi"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md mt-3">
              <div className="mt-5">
                <h2 className="font-bold text-xl mb-3">
                  Cars with a verified VIN code sell faster
                </h2>
                <p className="text-gray-600 mb-3">
                  We will check the car for free in the registers of the Ministry
                  of Internals Affairs, the open data portal and dealer databases.
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="VIN code"
                    className="border p-2 rounded-md bg-white"
                  />
                  <CameraIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6">Specifications</h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="driveType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Drive type *
                </label>
                <select
                  id="driveType"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Select drive type</option>
                  {/* Add options as needed */}
                </select>
              </div>
              <div>
                <label
                  htmlFor="engine"
                  className="block text-sm font-medium text-gray-700"
                >
                  Engine *
                </label>
                <select
                  id="engine"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Select engine</option>
                  {/* Add options as needed */}
                </select>
              </div>
              <div>
                <label
                  htmlFor="transmission"
                  className="block text-sm font-medium text-gray-700"
                >
                  Transmission *
                </label>
                <select
                  id="transmission"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>7-Speed Shiftable Automatic</option>
                  {/* Add other options as needed */}
                </select>
              </div>
              <div>
                <label
                  htmlFor="fuelType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fuel type *
                </label>
                <select
                  id="fuelType"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Gasoline</option>
                  {/* Add other options as needed */}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="cityMPG"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City MPG
                  </label>
                  <select
                    id="cityMPG"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Miles per gallon</option>
                    {/* Add options as needed */}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="highwayMPG"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Highway MPG
                  </label>
                  <select
                    id="highwayMPG"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Miles per gallon</option>
                    {/* Add options as needed */}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="exteriorColor"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Exterior color
                  </label>
                  <select
                    id="exteriorColor"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option></option>
                    {/* Add options as needed */}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="interiorColor"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Interior color
                  </label>
                  <select
                    id="interiorColor"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option></option>
                    {/* Add options as needed */}
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description *
                </label>
                <textarea
                  id="description"
                  placeholder="Here you can let your imagination run wild and describe the car in the best possible way!"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500 h-24"
                  maxLength={2000}
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Maximum 2000 characters
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Features
            </h2>
            <div className="space-y-4">
              {/* Exterior */}
              <div>
                <button
                  onClick={() => toggleCategory("exterior")}
                  className="w-full flex justify-between items-center text-lg font-medium text-gray-900"
                >
                  <span>Exterior</span>
                  <span className="text-sm text-gray-500">
                    {expandedCategories.exterior ? "-" : "+"}
                  </span>
                </button>
                {expandedCategories.exterior && (
                  <div className="mt-2 space-y-2 pl-4">
                    {/* Add exterior features here if needed */}
                  </div>
                )}
              </div>

              {/* Interior */}
              <div>
                <button
                  onClick={() => toggleCategory("interior")}
                  className="w-full flex justify-between items-center text-lg font-medium text-gray-900"
                >
                  <span>Interior</span>
                  <span className="text-sm text-gray-500">
                    {expandedCategories.interior ? "-" : "+"}
                  </span>
                </button>
                {expandedCategories.interior && (
                  <div className="mt-2 space-y-2 pl-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.multiZoneAC}
                        onChange={() => handleFeatureChange("multiZoneAC")}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Multi-Zone A/C</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.adjustableSteeringWheel}
                        onChange={() =>
                          handleFeatureChange("adjustableSteeringWheel")
                        }
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Adjustable Steering Wheel</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.autoDimmingRearviewMirror}
                        onChange={() =>
                          handleFeatureChange("autoDimmingRearviewMirror")
                        }
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Auto-Dimming Rearview Mirror</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.climateControl}
                        onChange={() => handleFeatureChange("climateControl")}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Climate Control</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.driverAdjustableLumbar}
                        onChange={() =>
                          handleFeatureChange("driverAdjustableLumbar")
                        }
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Driver Adjustable Lumbar</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.heatedFrontSeats}
                        onChange={() => handleFeatureChange("heatedFrontSeats")}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Heated Front Seats</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.intermittentWipers}
                        onChange={() => handleFeatureChange("intermittentWipers")}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Intermittent Wipers</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.leatherSeats}
                        onChange={() => handleFeatureChange("leatherSeats")}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Leather Seats</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.passengerIlluminatedVisorMirror}
                        onChange={() =>
                          handleFeatureChange("passengerIlluminatedVisorMirror")
                        }
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Passenger Illuminated Visor Mirror</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.passengerAdjustableLumbar}
                        onChange={() =>
                          handleFeatureChange("passengerAdjustableLumbar")
                        }
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Passenger Adjustable Lumbar</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Safety */}
              <div>
                <button
                  onClick={() => toggleCategory("safety")}
                  className="w-full flex justify-between items-center text-lg font-medium text-gray-900"
                >
                  <span>Safety</span>
                  <span className="text-sm text-gray-500">
                    {expandedCategories.safety ? "-" : "+"}
                  </span>
                </button>
                {expandedCategories.safety && (
                  <div className="mt-2 space-y-2 pl-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.steeringWheelAudioControls}
                        onChange={() =>
                          handleFeatureChange("steeringWheelAudioControls")
                        }
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Steering Wheel Audio Controls</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.powerDoorLocks}
                        onChange={() => handleFeatureChange("powerDoorLocks")}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Power Door Locks</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.bankThroughRearSeat}
                        onChange={() =>
                          handleFeatureChange("bankThroughRearSeat")
                        }
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Bank-Through Rear Seat</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.passThroughRearSeat}
                        onChange={() =>
                          handleFeatureChange("passThroughRearSeat")
                        }
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Pass-Through Rear Seat</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={features.universalGarageDoorOpener}
                        onChange={() =>
                          handleFeatureChange("universalGarageDoorOpener")
                        }
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Universal Garage Door Opener</span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Price</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price *
              </label>
              <div className="flex gap-2">
                <select className="border border-gray-300 rounded-md p-2">
                  <option>$</option>
                  <option>€</option>
                  <option>£</option>
                </select>
                <input
                  type="number"
                  placeholder="41900"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <Image
                  src="/images/switch.png"
                  alt="switch"
                  width={40}
                  height={40}
                />
              </label>
              <span className="text-gray-700 text-sm font-semibold">
                Negotiated price
              </span>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2 text-gray-700 text-sm">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  defaultChecked
                />
                Payment in installments is possible
              </label>

              <label className="flex items-center gap-2 text-gray-700 text-sm">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                Exchange for a car is possible
              </label>

              <label className="flex items-center gap-2 text-gray-700 text-sm">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                Uncleared car
              </label>
            </div>
          </div>

          {/* Contacts */}
          <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-semibold mb-6">Contacts</h2>

            <div className="flex gap-3 mb-6">
              <button
                type="button"
                onClick={() => setRole("private")}
                className={`flex items-center gap-2 px-4 py-2 border rounded-full ${
                  role === "private"
                    ? "bg-gray-100 border-black"
                    : "border-gray-300"
                }`}
              >
                <User size={18} /> Private seller
              </button>

              <button
                type="button"
                onClick={() => setRole("dealer")}
                className={`flex items-center gap-2 px-4 py-2 border rounded-full ${
                  role === "dealer"
                    ? "bg-gray-100 border-black"
                    : "border-gray-300"
                }`}
              >
                <Briefcase size={18} /> Dealer
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    placeholder="(__) __-____"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="coop" className="w-4 h-4" />
                <label htmlFor="coop" className="text-sm">
                  Ready to cooperate with dealers
                </label>
              </div>
            </form>
          </div>
          {/* Submit Buttons */}
          <div className="w-full max-w-4xl flex justify-between items-center flex-wrap gap-4">
            <button
              type="button"
              className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50"
            >
              <Eye size={18} /> Detailed preview
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600"
            >
              <Image
                src="/images/save.png" // Ensure this path is correct in your public directory
                alt="save image"
                height={20}
                width={20}
              />{" "}
              Save and publish
            </button>
          </div>
        </div>

        {/* QUICK PREVIEW */}
        <div className="lg:max-w-s">
          <div className="bg-white rounded-lg shadow p-4 space-y-4 mt-32 ml-5">
            <h2 className="text-sm font-semibold">Quick Preview</h2>
            <div className="rounded-lg overflow-hidden relative">
              <Image
                src="/images/suv.jpg"
                alt="Preview Car"
                width={300}
                height={200}
                className="object-cover w-full h-40"
              />
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                Used
              </span>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>15/07/2024</span>
                <div className="flex space-x-2">
                  <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-200 flex items-center justify-center">
                    <FiHeart className="text-gray-600 text-xs sm:text-sm" />
                  </button>
                  <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-200 flex items-center justify-center">
                    <PiBellRingingLight className="text-gray-600 text-xs sm:text-sm" />
                  </button>
                  <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-200 flex items-center justify-center">
                    <HiArrowsRightLeft className="text-gray-600 text-xs sm:text-sm" />
                  </button>
                </div>
              </div>
              <h3 className="font-semibold text-gray-800">
                Mercedes-Benz A205{" "}
                <span className="text-gray-400 font-normal text-xs sm:text-sm">
                  (2021)
                </span>
              </h3>
              <p className="text-sm font-semibold p-2">$41,900</p>
              <hr className="border-gray-200 mb-4" />
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Chicago</span>
                </div>
                <div className="flex items-center gap-1">
                  <Gauge className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>---</span>
                </div>
                <div className="flex items-center gap-1">
                  <Fuel className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Gasoline</span>
                </div>
                <div className="flex items-center gap-1">
                  <TbManualGearbox className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Automatic</span>
                </div>
              </div>
              <div className="mt-4 bg-white p-2 rounded flex flex-col">
                <span className="text-gray-800 font-medium mb-3">
                  The quality of content
                </span>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-orange-500 h-1.5 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}