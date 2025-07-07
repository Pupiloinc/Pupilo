"use client";
import React, { useState } from "react";
import Description from "../common/Description";
import Icons from "../common/Icons";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { SEND_EMAIL_URL } from "../../../utils/urls";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    date: "",
    time: "",
    notes: "",
    countryCode: "+91",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.parentName.trim())
      newErrors.parentName = "Parent name is required";
    if (!formData.phone || formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.childName.trim())
      newErrors.childName = "Child name is required";
    if (!formData.childAge || formData.childAge < 3 || formData.childAge > 18) {
      newErrors.childAge = "Age must be between 3 and 18";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "countryCode") {
      setFormData({ ...formData, countryCode: value });
      return;
    }

    if (name === "phone") {
      const onlyNums = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: onlyNums });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      setLoading(true);

      const response = await fetch(`${SEND_EMAIL_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          toEmail: formData.email,
          formData,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to send email");
      }
      setFormData({
        parentName: "",
        phone: "",
        email: "",
        childName: "",
        childAge: "",
        date: "",
        time: "",
        notes: "",
      });
      toast.success("Form submitted and email sent successfully!");
      setLoading(false);
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send email. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex max-md:py-[60px] relative max-lg:py-[100px] py-[30px] justify-center items-center bg-[url(/assets/images/webp/bg-hero.webp)] bg-cover bg-no-repeat bg-center">
      <Image
        src="/assets/images/png/form-ellips-start.png"
        alt="bottom-left"
        width={325}
        height={325}
        className="absolute bottom-0 left-0 pointer-events-none max-lg:hidden"
      />
      <Image
        src="/assets/images/png/form-ellipse.png"
        alt="left-ellipse"
        width={180}
        height={340}
        className="absolute top-1/3 right-0 pointer-events-none max-lg:hidden"
      />
      <Image
        src="/assets/images/png/form-ellips-start-yello.png"
        alt="left-ellipse"
        width={325}
        height={325}
        className="absolute top-0 left-[16%] pointer-events-none max-lg:hidden"
      />
      <ToastContainer />
      <div className="container max-w-[1140px] xl:px-0 px-4 md:px-6 mx-auto">
        <div className="flex gap-10 justify-between max-lg:flex-col max-lg:items-center">
          <div className="max-w-[524px] flex-col flex gap-10 max-lg:gap-8 max-sm:gap-6">
            <div className="flex flex-col gap-4 max-md:gap-2">
              <h2 className="max-lg:text-center font-semibold text-[38px] sm:text-[43px] md:text-5xl lg:text-[58px] xl:text-custom-6xl leading-120 text-dark-black mt-4 relative z-10 lg:max-w-[524px]">
                Let's Connect.{" "}
                <span className="block text-purple">Build. Empower.</span>
              </h2>
              <Description
                className={
                  "text-dark-grey font-Inter !leading-160 max-lg:text-center"
                }
                text={
                  "Have a question? Want to partner, teach, or enroll your child? Whether you're a parent, educator, investor, or simply passionate about coding education in Africa — we'd love to hear from you."
                }
              />
            </div>

            <div className="flex gap-4 flex-col">
              <p className="md:text-2xl text-xl font-semibold leading-120 max-lg:text-center">
                Follow us :
              </p>
              <div className="flex gap-2 max-lg:justify-center max-lg:items-center">
                <a
                  href="https://www.instagram.com/hellopupilo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-all duration-300 hover:opacity-80"
                >
                  <Icons icon="instagramIcon" />
                </a>
                <a
                  href="https://www.facebook.com/hellopupilo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-all duration-300 hover:opacity-80"
                >
                  <Icons icon="facebookIcon" />
                </a>
                <a
                  href="https://www.tiktok.com/@hellopupilo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-all duration-300 hover:opacity-80"
                >
                  <Icons icon="tiktokIcon" />
                </a>
                <a
                  href="https://www.linkedin.com/company/pupiloinc/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-all duration-300 hover:opacity-80"
                >
                  <Icons icon="linkedinIcon" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 max-lg:p-4 max-sm:p-3 relative max-lg:rounded-2xl max-sm:rounded-xl border-black/4 bg-white max-w-[550px] w-full form-shadow rounded-3xl border border-solid">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-md:gap-3.5"
            >
              <CustomInput
                name="parentName"
                type="text"
                value={formData.parentName}
                onChange={handleChange}
                placeholder={`Parent's Full Name`}
                error={errors.parentName}
              />

              <div className="flex max-xl:flex-col gap-4 w-full">
                <CustomInput
                  name="childName"
                  type="text"
                  value={formData.childName}
                  onChange={handleChange}
                  placeholder="Child's Name"
                  error={errors.childName}
                />
                <CustomInput
                  name="childAge"
                  type="number"
                  value={formData.childAge}
                  onChange={handleChange}
                  placeholder="Child's Age"
                  minValue={3}
                  maxValue={18}
                  error={errors.childAge}
                />
              </div>

              <div className="w-full">
                <PhoneInput
                  country={"za"}
                  value={formData.phone}
                  onChange={(phone) => {
                    setFormData({ ...formData, phone });
                    // Remove non-digits and check length
                    const onlyNums = phone.replace(/\D/g, "");
                    if (onlyNums.length >= 8) {
                      setErrors({ ...errors, phone: "" });
                    }
                  }}
                  inputClass={`!bg-white-100 !outline-0 !py-[13px] !px-12 !rounded-xl !h-[54px] !leading-160 !w-full !placeholder:text-dark-grey !text-dark-grey pl-3 ${
                    errors.phone ? "!border !border-red-500" : "!border-none"
                  }`}
                  buttonClass="!bg-white-100 !border-none !outline-0 !rounded-xl ml-4 my-[1px]"
                  containerClass="!w-full !rounded-xl m-[0.5px]"
                  dropdownClass="!rounded-xl"
                />
                {errors.phone && (
                  <div className="text-red-500 text-xs mt-1 pl-2">
                    {errors.phone}
                  </div>
                )}
              </div>
              <CustomInput
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                error={errors.email}
              />

              <div className="bg-dark-black/8 h-[1px] w-full" />

              <div className="flex max-xl:flex-col gap-4 w-full">
                <CustomInput
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Date for Trial"
                  icon="calendarIcon"
                />
                <CustomInput
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  placeholder="Time for Trial"
                  icon="clockIcon"
                />
              </div>

              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="bg-white-100 outline-0 py-[13px] px-5 rounded-xl h-[130px] resize-none leading-160 w-full placeholder:text-dark-grey text-dark-grey"
                placeholder="Any Specific Notes or Questions?"
              ></textarea>

              <CustomButton
                text={loading ? "Loading..." : "Submit"}
                className={"justify-center items-center max-md:mt-2 mt-2"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
