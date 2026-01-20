import React from "react";

const data = [
  {
    id: 1,
    title: "Exploring Nature",
    image: "https://source.unsplash.com/800x600/?mountain,nature",
    span: "col-span-1 row-span-2" // item besar
  },
  {
    id: 2,
    title: "Healthy Food",
    image: "https://source.unsplash.com/400x300/?food,healthy"
  },
  {
    id: 3,
    title: "Team Work",
    image: "https://source.unsplash.com/400x300/?office,team"
  },
  {
    id: 4,
    title: "Adventure Travel",
    image: "https://source.unsplash.com/400x300/?travel,backpack"
  },
  {
    id: 5,
    title: "Painting",
    image: "https://source.unsplash.com/400x300/?art,paint"
  },
  {
    id: 6,
    title: "Swimming",
    image: "https://source.unsplash.com/400x300/?swimming,pool"
  },
  {
    id: 7,
    title: "Chess Strategy",
    image: "https://source.unsplash.com/400x300/?chess,board"
  },
  {
    id: 8,
    title: "Football Match",
    image: "https://source.unsplash.com/400x300/?football,soccer"
  },
  {
    id: 9,
    title: "Cricket Sport",
    image: "https://source.unsplash.com/400x300/?cricket,sport"
  }
];


const AliiGalery = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data.map((item, i) => (
        <div
          key={i}
          className={`relative overflow-hidden rounded-3xl shadow-md ${
            item.span ? item.span : ""
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-3">
            <p className="text-white text-sm font-medium">{item.title}</p>
          </div>
        </div>
      ))}
    </div>

    </div>
  );
};

export default AliiGalery;
