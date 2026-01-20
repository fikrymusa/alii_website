import React, { useState, useEffect } from 'react';
// Mengganti Heroicons dengan Lucide Icons
import { Calendar, Clock, MapPin, Search, ChevronRight, User, Tag } from 'lucide-react';
import { BUTTON_NEWS } from '../ButtonComp';
import { api, DOKUMEN_URL } from '../../utils/api'; // Impor instance api Anda

const Berita = () => {
  const [activeTab, setActiveTab] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [animate, setAnimate] = useState(false);
  const [datas, setDatas] = useState([]);
  const [eventsData, setEventsData] = useState([]); // Tetap menggunakan data sample untuk events
  
  const getDatas = async () => {
    setAnimate(true);
    await api
      .get(`/website/berita`)
      .then((res) => {
        console.log("res berita", res.data);
        // Transformasi data dari backend ke format yang diharapkan oleh komponen
        const transformedData = res.data.map(item => ({
          id: item.id,
          type: 'berita', // Semua data dari backend adalah berita
          title: item.title,
          excerpt: item.excerpt,
          author: item.author,
          date: item.publish_date,
          image: item.image_path, // Gunakan image_path dari backend
          category: item.category,
          tags: item.tags ? item.tags.split(',').map(tag => tag.trim()) : [], // Ubah string tags menjadi array, dengan pengecekan null
          slug: item.slug, // Tambahkan slug untuk navigasi ke detail berita
          is_featured: item.is_featured
        }));
        setDatas(transformedData || []);
        setAnimate(false);
      })
      .catch((err) => {
        setAnimate(false);
        console.log("err", err);
      });
  };

  // Sample data untuk events (tetap menggunakan data sample karena tidak ada endpoint untuk events)
  const sampleEventsData = [
    {
      id: 4,
      type: 'event',
      title: 'Seminar Nasional AI & Machine Learning',
      description: 'Seminar mendalam tentang perkembangan terkini dalam kecerdasan buatan dan machine learning.',
      speaker: 'Dr. Ahmad Wijaya, Ph.D',
      date: '2024-02-20',
      time: '09:00 - 12:00 WIB',
      location: 'Auditorium Utama',
      image: 'https://picsum.photos/seed/event5/400/250',
      category: 'Seminar',
      registrationDeadline: '2024-02-15',
      tags: ['AI', 'ML', 'Teknologi']
    },
    {
      id: 5,
      type: 'event',
      title: 'Workshop Public Speaking',
      description: 'Tingkatkan kemampuan public speaking Anda dengan workshop intensif bersama profesional komunikasi.',
      speaker: 'Sarah Putri, M.Comm',
      date: '2024-02-25',
      time: '13:00 - 16:00 WIB',
      location: 'Ruang Workshop Lt. 3',
      image: 'https://picsum.photos/seed/event2/400/250',
      category: 'Workshop',
      registrationDeadline: '2024-02-20',
      tags: ['Soft Skill', 'Komunikasi', 'Workshop']
    },
    {
      id: 6,
      type: 'event',
      title: 'Job Fair 2024',
      description: 'Festival karir terbesar tahun ini dengan 50+ perusahaan ternama dari berbagai industri.',
      speaker: 'Multiple Speakers',
      date: '2024-03-01',
      time: '08:00 - 17:00 WIB',
      location: 'Lapangan Olahraga',
      image: 'https://picsum.photos/seed/event3/400/250',
      category: 'Karir',
      registrationDeadline: '2024-02-25',
      tags: ['Karir', 'Lowongan', 'Networking']
    }
  ];

  useEffect(() => {
    getDatas();
    setEventsData(sampleEventsData); // Set events data
  }, []);

  // Gabungkan data berita dari backend dengan data events
  const allData = [...datas, ...eventsData];

  const filteredData = allData.filter(item => {
    const matchesTab = activeTab === 'semua' || 
                      (activeTab === 'berita' && item.type === 'berita') ||
                      (activeTab === 'event' && item.type === 'event');
    
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) > new Date();
  };
  
  // Fungsi untuk menangani klik pada item berita
  const handleItemClick = (item) => {
    if (item.type === 'berita' && item.slug) {
      // Navigasi ke halaman detail berita menggunakan slug
      // Ganti dengan router Anda jika menggunakan React Router
      window.location.href = `/berita/${item.slug}`;
    } else if (item.type === 'event') {
      // Navigasi ke halaman detail event
      window.location.href = `/event/${item.id}`;
    }
  };

  // --- PERUBAHAN UTAMA ADA DI SINI ---
  // Ambil baseURL dari instance api Anda. Ini adalah cara yang lebih bersih.
  const API_BASE_URL = api.defaults?.baseURL || '';

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-32 lg:py-44 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl px-8 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-header text-center font-bold text-gray-900 mb-4">
            Berita & <span className="text-blue-600">Event</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tetap update dengan informasi terkini dan ikuti event menarik dari kami
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari berita atau event..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Tab Filters */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('semua')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'semua'
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setActiveTab('berita')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'berita'
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Berita
              </button>
              <button
                onClick={() => setActiveTab('event')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'event'
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Event
              </button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {animate && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Content Grid */}
        {!animate && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
                onClick={() => handleItemClick(item)}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    // --- PERUBAHAN ADA DI BARIS INI ---
                    src={
                      item?.image?.startsWith('http') 
                        ? item.image 
                        : `${DOKUMEN_URL}${item.image}`
                    }
                    alt={item.alt_text || item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null; // Mencegah loop error
                      // Ganti dengan gambar fallback jika gambar utama gagal dimuat
                      e.target.src = 'https://picsum.photos/seed/fallback/400/250.jpg'; 
                    }}
                  />
                  
                  {/* Badge */}
                  {item.type === 'event' && isUpcoming(item.date) && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Upcoming
                    </div>
                  )}
                  
                  {/* Featured Badge */}
                  {item.type === 'berita' && item.is_featured && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'berita' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {item.type === 'berita' ? 'Berita' : 'Event'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{item.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.excerpt || item.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 mb-4">
                    {item.type === 'berita' ? (
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{item.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags && item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-gray-200 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className='flex items-center justify-end mt-4'>
                    <BUTTON_NEWS title="Selengkapnya" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!animate && filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada hasil ditemukan</h3>
            <p className="text-gray-600">Coba ubah kata kunci atau filter pencarian Anda</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Berita;