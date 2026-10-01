"use client";

import { useState } from "react";

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    autoComplete: "name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    autoComplete: "tel",
    required: false,
  },
  {
    name: "brand",
    label: "Brand",
    type: "text",
    autoComplete: "off",
    required: true,
  },
  {
    name: "model",
    label: "Model",
    type: "text",
    autoComplete: "off",
    required: true,
  },
  {
    name: "reference",
    label: "Reference",
    type: "text",
    autoComplete: "off",
    required: false,
  },
  {
    name: "year",
    label: "Year",
    type: "text",
    autoComplete: "off",
    required: false,
  },
];

export default function SellWatchForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="sell-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      aria-labelledby="form-title"
    >
      <h2 id="form-title">Tell us about your watch</h2>
      <p className="form-notice">
        Demonstration form only. Details and photos are not sent or saved. Use
        our contact links for a real enquiry.
      </p>
      <div className="form-grid">
        {fields.map((field) => (
          <label key={field.name} htmlFor={`sell-${field.name}`}>
            {field.label}
            {field.required && <span aria-hidden="true"> *</span>}
            <input
              id={`sell-${field.name}`}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required={field.required}
              maxLength={field.name === "year" ? 4 : 200}
              inputMode={field.name === "year" ? "numeric" : undefined}
            />
          </label>
        ))}
        <label htmlFor="sell-condition">
          Condition
          <select id="sell-condition" name="condition" defaultValue="">
            <option value="">Select condition</option>
            <option>Unworn</option>
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
            <option>Needs attention</option>
            <option>Not sure</option>
          </select>
        </label>
        <label className="form-wide" htmlFor="sell-message">
          Message
          <textarea
            id="sell-message"
            name="message"
            rows={5}
            maxLength={5000}
          />
        </label>
        <div className="upload-placeholder form-wide">
          <p className="eyebrow">PHOTOS</p>
          <p>Watch, box, papers and accessories</p>
          <span>
            Photo uploads will be enabled when the enquiry service is ready.
          </span>
        </div>
      </div>
      <p className="required-note">* Required fields</p>
      <button type="submit" className="button button-dark">
        SUBMIT WATCH DETAILS <span aria-hidden="true">↗</span>
      </button>
      <div role="status" className="form-status">
        {submitted &&
          "Thank you. The form is currently in demonstration mode. No details have been sent or saved."}
      </div>
    </form>
  );
}
