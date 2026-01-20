import React, { useState } from 'react';
import { Heart, Share2, Maximize2 } from 'lucide-react';
import img01 from "../../assets/images/kegiatan01.jpeg"
import img02 from "../../assets/images/kegiatan02.JPG"
import img03 from "../../assets/images/kegiatan03.JPG"
import img04 from "../../assets/images/kegiatan04.jpeg"
import img05 from "../../assets/images/kegiatan05.jpeg"
const AlbumKegiatan = () => {
  const [likedPhotos, setLikedPhotos] = useState(new Set());

  const photoData = [
    { id: 1, src: img01, caption: 'Keindahan matahari terbenam di pantai', size: 'large', likes: 342 },
    { id: 2, src: img02, caption: 'Segelas kopi hangat di pagi hari', size: 'small', likes: 128 },
    { id: 3, src: img04, caption: 'Jalanan kota yang sibuk', size: 'small', likes: 95 },
    { id: 4, src: img03, caption: 'Pemandangan pegunungan yang megah', size: 'wide', likes: 256 },
    { id: 5, src: img03, caption: 'Bunga sakura mekar musim semi', size: 'small', likes: 410 },
    { id: 6, src: img05, caption: 'Momen bahagia bersama teman-teman', size: 'wide', likes: 523 }
  ];

  const toggleLike = (photoId) => {
    setLikedPhotos(prev => {
      const newLikes = new Set(prev);
      if (newLikes.has(photoId)) newLikes.delete(photoId);
      else newLikes.add(photoId);
      return newLikes;
    });
  };
const sizeClasses = {
  small: `
    col-span-1 
    row-span-1
  `,
  wide: `
    col-span-1 
    row-span-2
    md:col-span-2   /* melebar saat tablet+ */
    md:row-span-2
    lg:col-span-1   /* kembali bentuk bento saat desktop */
    lg:row-span-3
  `,
  large: `
    col-span-1 
    row-span-2
    md:col-span-2   /* melebar besar di tablet */
    md:row-span-3
    lg:col-span-1   /* bentuk kotak panjang di desktop */
    lg:row-span-4
  `,
};

  return (
    <div className="bg-white min-h-screen py-16 md:py-32 lg:py-44 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-header text-center mb-3">
            Galeri <span className="text-biru_soft">Foto Kegiatan</span>
          </h1>
          <p className="text-lg text-gray-600">Galeri kegiatan ALII</p>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col md:grid grid-cols-3 gap-4 auto-rows-[200px] mx-auto">
          {photoData.map((photo) => (
            <div
              key={photo.id}
              className={`relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer ${sizeClasses[photo.size]}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Action Buttons */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(photo.id);
                    }}
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-all transform hover:scale-110"
                  >
                    <Heart className={`w-5 h-5 ${likedPhotos.has(photo.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>

                  <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-all transform hover:scale-110">
                    <Share2 className="w-5 h-5" />
                  </button>

                  <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-all transform hover:scale-110">
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Caption di bagian bawah - selalu terlihat */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-medium text-sm">{photo.caption}</p>
                <p className="text-white/70 text-xs mt-1">
                  {photo.likes + (likedPhotos.has(photo.id) ? 1 : 0)} suka
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default AlbumKegiatan;
