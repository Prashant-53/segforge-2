import React from "react";
import { motion } from "framer-motion";
import { Send, Check, Mail, Phone, Clock3, CheckCircle2 } from "lucide-react";
import MainLayout from "../layouts/mainLayout";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

const ContactSales = () => {
  /* =====================================================
   FORM STATE
===================================================== */

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobFunction: "",
    jobTitle: "",
    email: "",
    phone: "",
    country: "",
    companySize: "",
    industry: "",
    deployment: "",
    cloudProvider: "",
    expectedVolume: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const [touched, setTouched] = useState({});

  const [submitting, setSubmitting] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  /* =====================================================
   INPUT REFS
   (Used to focus first invalid field)
===================================================== */

  const refs = {
    firstName: useRef(null),
    lastName: useRef(null),
    company: useRef(null),
    jobFunction: useRef(null),
    jobTitle: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    country: useRef(null),
    companySize: useRef(null),
    industry: useRef(null),
    deployment: useRef(null),
    cloudProvider: useRef(null),
    expectedVolume: useRef(null),
    message: useRef(null),
    consent: useRef(null),
  };

  /* =====================================================
   REGEX
===================================================== */

  const regex = {
    name: /^[A-Za-zÀ-ÿ]+(?:[ '-][A-Za-zÀ-ÿ]+)*$/,

    company: /^[A-Za-z0-9&.,'()\- ]{2,100}$/,

    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,

    phone: /^\+?[1-9]\d{7,14}$/,

    country: /^[A-Za-zÀ-ÿ ]{2,60}$/,

    job: /^[A-Za-z0-9&(),.'\- ]{2,60}$/,
  };

  /* =====================================================
   VALIDATION
===================================================== */

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        if (!value.trim()) return "First name is required.";

        if (value.trim().length < 2) return "Minimum 2 characters.";

        if (value.trim().length > 50) return "Maximum 50 characters.";

        if (!regex.name.test(value.trim())) return "Only letters are allowed.";

        return "";

      case "lastName":
        if (!value.trim()) return "Last name is required.";

        if (value.trim().length < 2) return "Minimum 2 characters.";

        if (value.trim().length > 50) return "Maximum 50 characters.";

        if (!regex.name.test(value.trim())) return "Only letters are allowed.";

        return "";

      case "company":
        if (!value.trim()) return "Company name is required.";

        if (value.trim().length < 2) return "Minimum 2 characters.";

        if (!regex.company.test(value.trim())) return "Invalid company name.";

        return "";

      case "jobFunction":
        if (value.length > 60) return "Maximum 60 characters.";

        return "";

      case "jobTitle":
        if (!value.trim()) return "Job title is required.";

        if (!regex.job.test(value.trim())) return "Invalid job title.";

        return "";

      case "email":
        if (!value.trim()) return "Business email is required.";

        if (!regex.email.test(value.trim())) return "Invalid email address.";

        return "";

      case "phone":
        if (!value.trim()) return "Phone number is required.";

        if (!regex.phone.test(value.trim())) return "Invalid phone number.";

        return "";

      case "country":
        if (!value.trim()) return "Country is required.";

        if (!regex.country.test(value.trim())) return "Invalid country.";

        return "";

      case "companySize":
        if (!value) return "Please select company size.";

        return "";

      case "industry":
        if (!value) return "Please select an industry.";

        return "";

      case "deployment":
        if (!value) return "Select deployment preference.";

        return "";

      case "cloudProvider":
        if (formData.deployment === "Cloud" && !value)
          return "Select a cloud provider.";

        return "";

      case "expectedVolume":
        if (!value) return "Select expected data volume.";

        return "";

      case "message":
        if (!value.trim()) return "Message is required.";

        if (value.trim().length < 20) return "Minimum 20 characters.";

        if (value.trim().length > 1000) return "Maximum 1000 characters.";

        return "";

      case "consent":
        if (!value) return "You must agree before submitting.";

        return "";

      default:
        return "";
    }
  };

  /* =====================================================
   VALIDATE ENTIRE FORM
===================================================== */

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);

      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =====================================================
   HANDLE CHANGE
===================================================== */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Live validation after field touched

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, fieldValue),
      }));
    }

    // Reset cloud provider if deployment changes

    if (name === "deployment" && value !== "Cloud") {
      setFormData((prev) => ({
        ...prev,
        deployment: value,
        cloudProvider: "",
      }));
    }
  };

  /* =====================================================
   HANDLE BLUR
===================================================== */

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;

    const fieldValue = type === "checkbox" ? checked : value;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, fieldValue),
    }));
  };

  /* =====================================================
   HANDLE SUBMIT
===================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent double submission
    if (submitting) return;

    /* ---------------------------------
     Validate form synchronously
  ----------------------------------*/

    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);

      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    // Mark everything as touched
    const touchedFields = {};
    Object.keys(formData).forEach((key) => {
      touchedFields[key] = true;
    });

    setTouched(touchedFields);

    // Focus first invalid field
    if (Object.keys(newErrors).length > 0) {
      const firstInvalid = Object.keys(newErrors)[0];

      refs[firstInvalid]?.current?.focus();

      return;
    }

    try {
      setSubmitting(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          first_name: formData.firstName.trim(),
          last_name: formData.lastName.trim(),
          company_name: formData.company.trim(),
          job_function: formData.jobFunction.trim(),
          job_title: formData.jobTitle.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          country: formData.country.trim(),
          company_size: formData.companySize,
          industry: formData.industry,
          deployment: formData.deployment,
          cloud_provider: formData.cloudProvider,
          data_volume: formData.expectedVolume,
          message: formData.message.trim(),
          marketing_consent: formData.consent ? "Yes" : "No",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        jobFunction: "",
        jobTitle: "",
        email: "",
        phone: "",
        country: "",
        companySize: "",
        industry: "",
        deployment: "",
        cloudProvider: "",
        expectedVolume: "",
        message: "",
        consent: false,
      });

      setErrors({});
      setTouched({});
    } catch (err) {
      console.error("EmailJS Error:", err);

      alert("Failed to send your request. Please try again in a few moments.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white py-38">
        {/* Background */}

        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(to right,#06b6d4 1px,transparent 1px),
              linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
            `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="absolute left-1/3 top-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[170px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr]">
            {/* ===========================
              LEFT
          ============================ */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10"
            >
              {/* Heading */}

              <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                Contact Enterprise Sales
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                Tell us about your project
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Our enterprise team typically responds within one business day.
              </p>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-12 space-y-6"
              >
                {/* Row 1 */}

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      First Name *
                    </label>

                    <input
                      ref={refs.firstName}
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="John"
                      autoComplete="given-name"
                      maxLength={50}
                      className={`w-full rounded-xl  ${
                        errors.firstName ? "border-red-500" : "border-slate-300"
                      } border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100`}
                    />
                    {errors.firstName && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Last Name *
                    </label>

                    <input
                      ref={refs.lastName}
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="Doe"
                      autoComplete="family-name"
                      maxLength={15}
                      className={`w-full rounded-xl  ${
                        errors.lastName ? "border-red-500" : "border-slate-300"
                      } border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100`}
                    />
                    {errors.lastName && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2 */}

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Company Name *
                    </label>

                    <input
                      ref={refs.company}
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="Acme Inc."
                      autoComplete="organization"
                      maxLength={100}
                      className={`w-full rounded-xl  ${
                        errors.company ? "border-red-500" : "border-slate-300"
                      } border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100`}
                    />
                    {errors.company && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Job Function
                    </label>

                    <input
                      ref={refs.jobFunction}
                      id="jobFunction"
                      name="jobFunction"
                      value={formData.jobFunction}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="Engineering"
                      maxLength={60}
                      className={`w-full rounded-xl  ${
                        errors.jobFunction
                          ? "border-red-500"
                          : "border-slate-300"
                      } border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100`}
                    />
                    {errors.jobFunction && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.jobFunction}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3 */}

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Job Title *
                    </label>

                    <input
                      ref={refs.jobTitle}
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="Senior Data Engineer"
                      maxLength={60}
                      className={`w-full rounded-xl  ${
                        errors.jobTitle ? "border-red-500" : "border-slate-300"
                      } border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100`}
                    />
                    {errors.jobTitle && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.jobTitle}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Business Email Address *
                    </label>

                    <input
                      ref={refs.email}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                      placeholder="john@company.com"
                      autoComplete="email"
                      maxLength={100}
                      className={`w-full rounded-xl  ${
                        errors.email ? "border-red-500" : "border-slate-300"
                      } border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100`}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 4 */}

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Phone Number *
                    </label>

                    <input
                      ref={refs.phone}
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="+1 (555) 123-4567"
                      autoComplete="tel"
                      maxLength={20}
                      className={`w-full rounded-xl  ${
                        errors.phone ? "border-red-500" : "border-slate-300"
                      } border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100`}
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Country *
                    </label>

                    <input
                      ref={refs.country}
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="United States"
                      autoComplete="country-name"
                      maxLength={60}
                      className={`w-full rounded-xl  ${
                        errors.country ? "border-red-500" : "border-slate-300"
                      } border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100`}
                    />
                    {errors.country && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 5 */}

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Company Size
                    </label>

                    <select
                      ref={refs.companySize}
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    >
                      <option value="">Select Company Size</option>
                      <option>1-50</option>
                      <option>51-200</option>
                      <option>201-1000</option>
                      <option>1000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Industry
                    </label>

                    <select
                      ref={refs.industry}
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    >
                      <option value="">Select Industry</option>
                      <option>Financial Services</option>
                      <option>Healthcare</option>
                      <option>Retail</option>
                      <option>Manufacturing</option>
                      <option>Technology</option>
                      <option>Telecommunications</option>
                      <option>Government</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 6 */}

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Deployment Preference
                    </label>

                    <select
                      ref={refs.deployment}
                      name="deployment"
                      value={formData.deployment}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    >
                      <option value="">Select Deployment Type</option>

                      <option>Cloud</option>
                      <option>Self Hosted</option>
                      <option>Hybrid</option>
                      <option>Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Cloud Provider
                    </label>

                    <select
                      ref={refs.cloudProvider}
                      name="cloudProvider"
                      value={formData.cloudProvider}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    >
                      <option value="">Select Cloud Provider</option>

                      <option>AWS</option>
                      <option>Azure</option>
                      <option>Google Cloud</option>
                      <option>Private Cloud</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 7 */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Expected Data Volume
                  </label>

                  <select
                    ref={refs.expectedVolume}
                    name="expectedVolume"
                    value={formData.expectedVolume}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  >
                    <option value="">Select Expected Data Volume</option>
                    <option value="Less than 1 TB">Less than 1 TB</option>
                    <option value="1 TB - 10 TB">1 TB - 10 TB</option>
                    <option value="10 TB - 100 TB">10 TB - 100 TB</option>
                    <option value="More than 100 TB">More than 100 TB</option>
                  </select>
                </div>

                {/* Message */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Message
                  </label>

                  <textarea
                    ref={refs.message}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={7}
                    maxLength={1000}
                    placeholder="Tell us about your data platform, current challenges, or what you'd like to build."
                    className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                {/* Consent */}

                <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <input
                    ref={refs.consent}
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mt-1 h-4 w-4 accent-cyan-500"
                  />

                  <span className="text-sm leading-6 text-slate-600">
                    I agree to receive communications from Seg Forge.
                  </span>
                </label>

                {/* Submit */}

                {/* Success Message */}

                {submitted && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    <p className="font-semibold">
                      Request submitted successfully!
                    </p>
                    <p className="mt-1">
                      Thank you for contacting Seg Forge. Our enterprise team
                      will reach out within one business day.
                    </p>
                  </div>
                )}

                {/* Submit Button */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl border border-slate-900 px-8 py-4 font-semibold text-slate-900 transition-colors duration-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

                  <span className="relative z-10 flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    {submitting ? "Submitting..." : "Request Demo"}
                  </span>
                </button>
              </form>
            </motion.div>
            {/* ===========================
    RIGHT SIDEBAR
=========================== */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {/* Contact Information */}

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">
                  Contact Information
                </h3>

                <div className="mt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                      <Mail className="h-5 w-5 text-cyan-600" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">Email</p>

                      <p className="font-medium text-slate-900">
                        enquiry@seganalytics.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                      <Phone className="h-5 w-5 text-cyan-600" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">Phone</p>

                      <p className="font-medium text-slate-900">
                        +91-9920322489{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                      <Clock3 className="h-5 w-5 text-cyan-600" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">Business Hours</p>

                      <p className="font-medium text-slate-900">
                        Monday – Friday
                      </p>

                      <p className="text-sm text-slate-600">
                        10:00 AM – 7:00 PM UTC
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Contact Sales */}

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">
                  Why Contact Sales?
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "Architecture review",
                    "Deployment planning",
                    "Enterprise pricing",
                    "Migration guidance",
                    "Security review",
                    "Performance optimization",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500" />

                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise Features */}

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">
                  Enterprise Features
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    "Apache Flink",
                    "Apache Iceberg",
                    "Real-Time CDC",
                    "Visual ETL",
                    "Lakehouse",
                    "Notebook Analytics",
                    "Workflow Engine",
                    "ML & AI",
                    "Data Governance",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}

              <div className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-white p-7 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-wider text-cyan-700">
                  Response Time
                </p>

                <h2 className="mt-4 text-5xl font-bold text-slate-900">
                  &lt;24 Hours
                </h2>

                <p className="mt-3 text-slate-600">
                  Average first response from our enterprise engineering team.
                </p>
              </div>

              {/* Trusted */}

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">
                  Trusted by Modern Data Teams
                </h3>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-3xl font-bold text-cyan-600">500+</h2>

                    <p className="mt-1 text-sm text-slate-600">
                      Enterprise Pipelines
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-cyan-600">99.9%</h2>

                    <p className="mt-1 text-sm text-slate-600">
                      Platform Availability
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-cyan-600">50+</h2>

                    <p className="mt-1 text-sm text-slate-600">Connectors</p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-cyan-600">24/7</h2>

                    <p className="mt-1 text-sm text-slate-600">
                      Enterprise Support
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>{" "}
            <div />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactSales;
