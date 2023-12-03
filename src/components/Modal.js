const Modal = ({ title, desc, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-bg-beige p-4 rounded-lg max-w-md w-full">
        <h2 className="font-display text-center text-[2rem]">{title}</h2>
        <p className="text-center mt-2 font-body">{desc}</p>
        <div className="text-center py-2">
          <button
            onClick={closeModal}
            className="display-block w-fit border-solid px-7 py-[.5rem] rounded-sm text-white font-body border-dark-deen bg-dark-green hover:bg-lighter-green transition-color duration-200 ease-in-out  mb-8 md:mb-0 "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
