import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required');
      return;
    }

    // Example form submission logic
    // Replace with your form handling code (e.g., API call)
    console.log('Form submitted:', formData);
    setSuccess('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col items-center py-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>TechWave/Contact</title>
      </Helmet>
      
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-purple-500 text-2xl mr-3" />
              <div className="text-gray-700">
                <h3 className="font-semibold">Email</h3>
                <p>contact@techwave.com</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-purple-500 text-2xl mr-3" />
              <div className="text-gray-700">
                <h3 className="font-semibold">Phone</h3>
                <p>(+123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-purple-500 text-2xl mr-3" />
              <div className="text-gray-700">
                <h3 className="font-semibold">Address</h3>
                <p>123 Tech Avenue, Silicon Valley, CA</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-gray-700">Name:</label>
              <input
                className="border-2 border-purple-500 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700">Email:</label>
              <input
                className="border-2 border-purple-500 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700">Message:</label>
              <textarea
                className="border-2 border-purple-500 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-500 text-white rounded-lg px-6 py-3 hover:bg-purple-600 transition"
              >
                Send Message
              </button>
            </div>

            {error && (
              <div className="text-red-500 font-bold text-center mt-4">
                <p>{error}</p>
              </div>
            )}
            {success && (
              <div className="text-green-500 font-bold text-center mt-4">
                <p>{success}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
