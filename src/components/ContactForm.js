// ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xvgayjqw', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      form.reset();
      setStatus('sent');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-2 font-medium">Message</label>
        <textarea
          name="message"
          required
          rows="4"
          className="w-full mb-4 p-2 border rounded"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'sent' && (
          <p className="mt-4 text-green-600">Thanks! Your message has been sent.</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600">Oops! Something went wrong.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;