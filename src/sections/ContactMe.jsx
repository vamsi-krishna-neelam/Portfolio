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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '13934743-89de-4a61-9d06-f64ebaf4bd69',
          ...formData,
        }),
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

      <div className="relative md:flex md:gap-10 items-start">
        {/* Background vertical divider */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-white/20 -translate-x-1/2"></div>

        {/* Form Section */}
        <div className="md:w-1/2 z-10">
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
              className="w-full my-3 px-4 py-2 bg-white text-black placeholder-gray-500"
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <label className="text-lg">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full my-3 px-4 py-2 bg-white text-black placeholder-gray-500"
              placeholder="Your email address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <label className="text-lg">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full my-3 px-4 py-2 bg-white text-black placeholder-gray-500"
              placeholder="Your message"
              rows={5}
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
              <button type="submit" className="w-[60%] px-4 py-3 mt-4 bg-[#00b09b] text-white  hover:bg-pink-600 transition duration-300">
                Submit
              </button>
            </div>
            {formStatus && <p className="mt-4 text-green-500">{formStatus}</p>}
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="md:w-1/2 text-left md:text-right mt-16 md:mt-0 z-10">
          <div className="text-xl mb-4 work-sans-regular">Email:</div>
          <div className="text-3xl suse-title">begaslam405@gmail.com</div>

          <div className="text-xl mb-4 mt-16 work-sans-regular">Location:</div>
          <div className="text-3xl suse-title">Ghazipur, Uttar Pradesh</div>

          <div className="text-xl mb-4 mt-16 work-sans-regular">Social:</div>
          <div className="flex justify-start md:justify-end">
            <Social />
          </div>
        </div>
      </div>

      <footer className="mt-16 text-center">
        <p className="text-sm work-sans-regular">Created with great ❤️ by Aslam Beg | All rights reserved</p>
      </footer>
    </div>
  );
}
