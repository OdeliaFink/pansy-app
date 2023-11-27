'use client';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import * as Yup from 'yup';

/**
 * @typedef {import("@prismicio/client").Content.ContactFormSlice} ContactFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactFormSlice>} ContactFormProps
 * @param {ContactFormProps}
 */

const ContactForm = ({ slice }) => {
  const [showModal, setShowModal] = useState(false);

  const formInputs = [
    { label: slice.primary.first_name, name: 'firstName', type: 'text' },
    { label: slice.primary.last_name, name: 'lastName', type: 'text' },
    { label: slice.primary.email, name: 'email', type: 'text' },
    { label: slice.primary.phone, name: 'phone', type: 'text' },
    { label: slice.primary.postal_code, name: 'postalCode', type: 'text' },
  ];

  const handleSubmit = async (values, actions) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      postalCode: values.postalCode,
      comments: values.comments,
      selectedOption: values.selectedOption,
    };

    try {
      const response = await axios.post(
        'https://formspree.io/f/mleykgjb',
        data
      );

      if (response === 200) {
        setShowModal(true);
      } else {
        alert('Something went wrong. Please try again later');
      }
    } catch (error) {
      alert('Something went wrong. Please try again later');
    }
    actions.setSubmitting(false);
    actions.resetForm();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('*'),
    lastName: Yup.string().required('*'),
    email: Yup.string().email('*').required('*'),
    phone: Yup.string().required('*'),
    postalCode: Yup.string().required('*'),
    comments: Yup.string(),
    selectedOption: Yup.string().required('*'),
  });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-medium-beige mt-[1rem] mb-[3rem] px-6 md:px-0"
    >
      <div className="">
        <div className="flex flex-col  md:w-90% md:mx-auto py-7 ">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              postalCode: '',
              comments: '',
              selectedOption: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="md:grid md:grid-cols-2 md:gap-4 mx-[-14px] grid-cols-1 md:pr-[18rem]">
                  {formInputs.map((input) => (
                    <div
                      key={input.name}
                      className="flex md:flex-row items-center flex-col gap-4 "
                    >
                      <label
                        className="md:pt-2 pt-4 md:text-[14px] text-[12px] flex-1 font-body font-light  text-right"
                        htmlFor={input.name}
                      >
                        {input.label}
                      </label>
                      <Field
                        className=" border-black rounded-sm p-2 w-full flex-1  h-[40%] md:h-auto font-body font-light focus:bg-white focus:border-f4bfdb focus:outline-none"
                        type={input.type}
                        name={input.name}
                        id={input.name}
                      />
                    </div>
                  ))}
                  <div className="flex md:flex-row items-center flex-col gap-4">
                    <label
                      className="md:pt-2 pt-4 md:text-[14px] flex-1 text-[12px] font-body font-light text-right"
                      htmlFor="selectedOption"
                    >
                      Services:
                    </label>
                    <Field
                      as="select"
                      className=" border-black rounded-sm p-2 font-body  h-[40%] md:h-auto font-light text-[12px] focus:bg-white flex-1 focus:outline-none"
                      name="selectedOption"
                      id="selectedOption"
                    >
                      <option value="Design-and-Planning">
                        Design & Planning
                      </option>
                      <option value="option2">Gardening</option>
                      <option value="option3">Consulting</option>
                    </Field>
                  </div>
                </div>

                <div className="flex flex-row py-1 bg-dark-beige my-[2rem] py-[3rem]">
                  <label
                    className="pt-4 text-[14px] font-body font-light center w-[29%] md:pl-[9rem] pl-4 text-left"
                    htmlFor="comments"
                  >
                    {slice.primary.comments}
                  </label>
                  <Field
                    as="textarea"
                    className="focus:bg-white border-black rounded-sm font-body font-light text-[12px]  p-2 focus:bg-white focus:outline-none md:w-[54%] w-[60%] max-h-[60%] ml-[25px] mx-auto"
                    name="comments"
                    id="comments"
                  />
                </div>

                <div className="w-full text-left text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={clsx(
                      'display-block w-fit border-solid border bg-transparent border-dark-green hover:bg-lighter-green hover:text-white  transition-color duration-200 ease-in-out px-9 py-1 rounded-sm font-body text-sm font-light text-base md:mb-0'
                    )}
                  >
                    send
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
