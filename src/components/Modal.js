import clsx from 'clsx';

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-bg-beige p-4 border border-solid border-1 border-black rounded-p-sm max-w-md w-full flex flex-row justify-between">
        <h2 className="font-display text-center text-[2rem]">hoorah!</h2>
        <div className="text-center py-2">
          <button
            onClick={closeModal}
            className={clsx(
              'border-1 border text-[13px] rounded-p-sm hover:bg-sage-green max-w-fit px-10 py-2 ease-in-out duration-300'
            )}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
