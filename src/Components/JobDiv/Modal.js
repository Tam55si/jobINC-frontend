import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="bg-[#C4B5FD] w-96 md:w-[60rem] p-6 rounded shadow ">
                <div className="mb-4">{children}</div>
                <div className='text-center '>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;