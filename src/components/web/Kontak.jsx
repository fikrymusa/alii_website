import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Variasi animasi untuk kontainer
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  // Variasi animasi untuk item yang akan muncul (fade in dari bawah)
  const fadeInUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda akan menangani pengiriman form
    console.log(formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };
  
  return (
    <motion.section 
      ref={ref} 
      className="bg-gray-50 section-container w-full overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-screen-2xl w-full min-h-screen mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-32 lg:py-44">
        
        {/* Header */}
        <motion.div variants={containerVariants} className="text-center mb-12">
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-header text-center text-slate-700 mb-4"
          >
            Hubungi Kami
          </motion.h2>
          <motion.p 
            variants={fadeInUpVariants}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Kami siap membantu Anda. Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau memerlukan informasi lebih lanjut.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Information */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.h3 
              variants={fadeInUpVariants}
              className="text-2xl font-semibold text-slate-700 mb-6"
            >
              Informasi Kontak
            </motion.h3>
            
            <motion.div variants={fadeInUpVariants} className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Alamat</h4>
                <p className="text-slate-600">
                  Artificial Intelligence Literacy and Innovation Institute (ALII)<br />
                  UIN Syarif Hidayatullah Jakarta<br />
                  Jl. Ir. H. Juanda No. 95, Ciputat, Tangerang Selatan 15412
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUpVariants} className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Telepon</h4>
                <p className="text-slate-600">+62 21 7401925</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUpVariants} className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Email</h4>
                <p className="text-slate-600">info@alii.uinjkt.ac.id</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUpVariants} className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Jam Operasional</h4>
                <p className="text-slate-600">
                  Senin - Jumat: 08:00 - 16:00<br />
                  Sabtu - Minggu: Tutup
                </p>
              </div>
            </motion.div>
            
            {/* Social Media */}
            <motion.div variants={fadeInUpVariants} className="pt-6">
              <h4 className="font-semibold text-slate-700 mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div variants={containerVariants}>
            <motion.h3 
              variants={fadeInUpVariants}
              className="text-2xl font-semibold text-slate-700 mb-6"
            >
              Kirim Pesan
            </motion.h3>
            
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-green-100 border border-green-300 rounded-lg text-green-700"
              >
                <div className="flex items-center space-x-2">
                  <MessageSquare size={24} />
                  <p className="font-semibold">Terima kasih! Pesan Anda telah terkirim.</p>
                </div>
                <p className="mt-2">Kami akan menghubungi Anda segera.</p>
              </motion.div>
            ) : (
              <motion.form 
                variants={fadeInUpVariants}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="nama@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Subjek pesan Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Kirim Pesan</span>
                  <Send size={18} />
                </button>
              </motion.form>
            )}
          </motion.div>
        </div>
        
        {/* Google Map */}
        <motion.div 
          variants={fadeInUpVariants}
          className="mt-12 lg:mt-16"
        >
          <h3 className="text-2xl font-semibold text-slate-700 mb-6">Lokasi Kami</h3>
          <div className="rounded-xl overflow-hidden shadow-lg h-96 sm:h-[450px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.7445453507864!3d-6.308640395463639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef11936a6c5d%3A0x8e8c9c8c8c8c8c8c!2sUIN%20Syarif%20Hidayatullah%20Jakarta!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi ALII UIN Syarif Hidayatullah Jakarta"
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;