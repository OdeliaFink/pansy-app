'use client';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import * as Yup from 'yup';
import { PrismicNextImage } from '@prismicio/next';
import Modal from '@/components/Modal';
import { Bounded } from '@/components/Bounded';

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
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      postalCode: values.postalCode,
      comments: values.comments,
      selectedOption: values.selectedOption,
    };
    // for debugging purposes only

    try {
      const response = await axios.post(
        'https://formspree.io/f/mleykgjb',
        data
      );

      if (response.status === 200) {
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
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="bg-medium-beige mt-[1rem] mb-[3rem]"
      >
        <div className="flex md:flex-row flex-col md:px-0 px-4 justify-between md:gap-[8rem] lg:gap-[15rem] gap-[2rem]">
          <div className="flex flex-1 flex-col text-left gap-3 pb-10">
            <div className="font-body font-regular text-[4.5rem] text-mossy-green max-w-[16rem] leading-tight">
              <h2>{slice.primary.where}</h2>
            </div>
            <div className="font-body font-light text-[1.3rem] max-w-[22rem]">
              <h6>{slice.primary.address}</h6>
              <h6>{slice.primary.inquiries}</h6>
              <h6>{slice.primary.ouremail}</h6>
            </div>
          </div>
          <div className="flex-1">
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
                  {formInputs.map((input) => (
                    <div
                      key={input.name}
                      className="flex md:flex-col items-center flex-col gap-2 pt-2"
                    >
                      <div className="md:text-left text-center w-full">
                        <label
                          className="md:pt-2 pt-4 md:text-[14px] text-[12px] flex-1 font-body font-light"
                          htmlFor={input.name}
                        >
                          {input.label}
                        </label>
                      </div>
                      <Field
                        className=" border-black rounded-p-sm p-2 w-full flex-1 md:text-left text-left h-[40%] md:h-auto font-body font-light focus:bg-white focus:border-f4bfdb focus:outline-none"
                        type={input.type}
                        name={input.name}
                        id={input.name}
                      />
                    </div>
                  ))}
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-full md:text-left text-center  pt-3">
                      <label
                        className="md:pt-2 pt-4 text-[14px] flex-1 font-body font-light text-right"
                        htmlFor="selectedOption"
                      >
                        Services:
                      </label>
                    </div>
                    <Field
                      as="select"
                      className=" border-black rounded-p-sm p-4 font-body w-full  h-[50%] md:h-auto font-light text-[12px] focus:bg-white flex-1 focus:outline-none"
                      name="selectedOption"
                      id="selectedOption"
                    >
                      <option value="" disabled>
                        {slice.items[0].select_heading}
                      </option>

                      <option value="gardening">
                        {slice.items[0].heading1}
                      </option>
                      <option value="garden_design">
                        {slice.items[0].heading2}
                      </option>
                      <option value="maintenance">
                        {slice.items[0].heading3}
                      </option>
                      <option value="complete package">
                        {slice.items[0].heading4}
                      </option>
                    </Field>
                  </div>
                  <div className="flex flex-col pt-3">
                    <label
                      className="text-[14px] font-body font-light md:text-left text-center pb-4"
                      htmlFor="comments"
                    >
                      {slice.primary.comments}
                    </label>

                    <Field
                      as="textarea"
                      className="focus:bg-white border-black rounded-p-sm text-left font-body px-[1rem] mx-auto font-light text-[14px]  py-[3rem] focus:bg-white focus:outline-none resize-none w-full"
                      name="comments"
                      id="comments"
                    />
                  </div>

                  <div className="w-full text-left text-center pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={clsx(
                        'border-1 rounded-p-sm border text-[13px] rounded-xl hover:bg-mossy-green hover:text-pansy-white max-w-fit px-10 py-2 ease-in-out duration-300'
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
      </Bounded>
      {showModal && (
        <Modal
          closeModal={closeModal}
          title="Form submitted!"
          desc={
            'Someone from pansy will reach out to you to get started on your gardening project.'
          }
        />
      )}
    </>
  );
};

export default ContactForm;
