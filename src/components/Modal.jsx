import React from "react";

function Modal({ closeModal }) {
  return (
    <div className="fixed inset-0 bg-white/20 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg relative text-center">
        <button
          onClick={() => closeModal(false)}
          className="absolute top-2 right-2 text-red-500 font-bold text-xl hover:text-red-700"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-3 text-black">📘 Book Details</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae, similique qui obcaecati dolorum repellendus libero in modi maiores dignissimos, asperiores recusandae quae eaque dolorem labore repellat nesciunt, hic quod reiciendis itaque fuga! Vitae, vero quidem tenetur voluptatibus ab sit aliquid hic beatae recusandae consequatur inventore nemo a! Consequatur, ducimus.
        </p>
        <button
          onClick={() => closeModal(false)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
