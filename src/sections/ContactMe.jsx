import { useState } from 'react';
import Social from "../components/Social";

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setErrors({});
    setFormStatus('Submitting...');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '13934743-89de-4a61-9d06-f64ebaf4bd69', // Replace with your Web3Forms access key
          ...formData
        })
      });
      if (response.ok) {
        setFormStatus('Success! Thank you for your message.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="pt-24 px-4 md:px-16 pb-16 bg-black text-white">
      <p className="raleway-bold text-4xl">Contact Me</p>
      <div className="w-full h-1 rounded-sm bg-white my-6 mb-8"></div>

      <div className="md:flex md:gap-2">
        <div className="md:w-1/2">
          <p className="work-sans-regular text-lg">
            If you want to know more about me or my work, or if you would just like to say hello, send me a message. I&apos;d love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 work-sans-regular pr-4 md:pr-10">
            <label className="text-lg">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full my-4 px-4 py-2 rounded-xl bg-gray-900 text-white placeholder-gray-500"
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <label className="text-lg">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full my-4 px-4 py-2 rounded-xl bg-gray-900 text-white placeholder-gray-500"
              placeholder="Your email address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <label className="text-lg">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full my-4 px-4 py-2 rounded-xl bg-gray-900 text-white placeholder-gray-500"
              placeholder="Your message"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <div className="flex flex-col md:flex-row justify-between">
              <a
                href="mailto:begaslam405@gmail.com"
                target="_blank"
                className="underline hover:text-gray-300 mb-4 md:mb-0"
              >
                Send me email directly
              </a>
              <button type="submit" className="px-4 py-2 work-sans-regular bg-white text-black rounded-xl hover:bg-gray-500 hover:text-white">
                Submit
              </button>
            </div>
            {formStatus && <p className="mt-4 text-green-500">{formStatus}</p>}
          </form>
        </div>

        <div className="md:w-1/2 text-left md:text-right">
          <div className="text-xl mb-4 mt-16 md:mt-24 work-sans-regular">Email:</div>
          <div className="text-3xl suse-title">vamsikrishnaneelam111@gmail.com</div>
          <div className="text-xl mb-4 mt-16 work-sans-regular">Location:</div>
          <div className="text-3xl suse-title">Guntur, Andhra Pradesh</div>
          <div className="text-xl mb-4 mt-16 work-sans-regular">Social:</div>
          <div className="flex justify-start md:justify-end">
            <Social />
          </div>
        </div>
      </div>
      <footer className="mt-16 text-center">
        <p className="text-sm work-sans-regular">Created with great ❤️ by Vamsi Krishna | All rights reserved</p>
      </footer>
    </div>
  );
}
