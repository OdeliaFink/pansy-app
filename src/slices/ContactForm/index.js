'use client';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import * as Yup from 'yup';
import Modal from '@/components/Modal';

/**
 * @typedef {import("@prismicio/client").Content.ContactFormSlice} ContactFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactFormSlice>} ContactFormProps
 * @param {ContactFormProps}
 */

const ContactForm = ({ slice }) => {
  // const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const formInputs = [
    { label: slice.primary.first_name, name: 'firstName', type: 'text' },
    { label: slice.primary.last_name, name: 'lastName', type: 'text' },
    { label: slice.primary.email, name: 'email', type: 'text' },
    { label: slice.primary.phone, name: 'phone', type: 'text' },
    { label: slice.primary.postal_code, name: 'postalCode', type: 'text' },
  ];

  const handleSubmit = async (values, actions) => {
    console.log('🚀 ~ file: index.tsx:63 ~ handleSubmit ~ values:', values);
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      postalCode: values.postalCode,
      comments: values.comments,
      selectedOption: values.selectedOption,
    };
    console.log(data); // for debugging purposes only

    try {
      const response = await axios.post(
        'https://formspree.io/f/mleykgjb',
        data
      );

      if (response.status === 200) {
        console.log('form submitted', response.data);
        setShowModal(true);
        window.location.href = '/';
      } else {
        console.error('form fail', response.data);
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again later!');
    }
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
    <>
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
                  <div className="md:grid md:grid-cols-2 md:gap-4 mx-[-14px] grid-cols-1 md:pr-[10rem] lg:pr-[13rem] xl:pr-[19rem]">
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
                        defaultValue=""
                      >
                        <option value="" disabled hidden>
                          Select an option
                        </option>
                        <option value="design_and_planning">
                          Design & Planning
                        </option>
                        <option value="gardening">Gardening</option>
                        <option value="consulting">Consulting</option>
                      </Field>
                    </div>
                  </div>

                  <div className=" bg-dark-beige my-8">
                    <div className="flex flex-col">
                      <label
                        className="py-4 text-[14px] font-body font-light text-center pl-4"
                        htmlFor="comments"
                      >
                        {slice.primary.comments}
                      </label>
                      <div className="flex justify-center pb-8">
                        <Field
                          as="textarea"
                          className="focus:bg-white border-black rounded-sm font-body w-[40%] mx-auto font-light text-[14px]  py-[3rem] focus:bg-white focus:outline-none resize-none"
                          name="comments"
                          id="comments"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full text-left text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={clsx(
                        'border-1 rounded-sm border text-[13px] border-black rounded-xl hover:bg-mossy-green hover:text-pansy-white max-w-fit px-10 py-2 ease-in-out duration-300'
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
      {showModal && (
        <Modal
          closeModal={closeModal}
          title="Form submitted!"
          image={''}
          desc={
            'Someone from pansy will reach out to you to get started on your gardening project.'
          }
        />
      )}
    </>
  );
};

export default ContactForm;
