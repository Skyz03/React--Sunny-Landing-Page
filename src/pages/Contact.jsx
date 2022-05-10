import React from "react";
import { useFormik } from "formik";
import telephone from "../images/telephone.jpg";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length < 20) {
    errors.message = "Please describe your issues in detail";
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      email: "",

      message: "",
    },

    validate,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="contact">
      <div className="contact__left">
        <img src={telephone} alt="call" />
      </div>

      <div className="contact__right">
        <h3 className="contact__title">Need Support?</h3>
        <p className="contact__subtitle">
          Contact us if you need further assitance.
        </p>
        <form onSubmit={formik.handleSubmit} className="form">
          <label htmlFor="firstName">First Name</label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />

          {formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}

          <label htmlFor="lastName">Last Name</label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />

          {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            rows="5"
          />

          {formik.errors.message ? <div>{formik.errors.message}</div> : null}

          <button className="btn-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
