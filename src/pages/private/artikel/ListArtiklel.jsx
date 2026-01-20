import React, { useState, useEffect } from "react";
import { deleteData, DOKUMEN_URL, fetchData } from "../../../utils/api";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Plus } from "lucide-react";

const ListArtikel = ({ pilih }) => {
  const [animate, setAnimate] = useState(false);
  const [datas, setDatas] = useState([]);

  const getDatas = () => {
    fetchData(`/adm/artikel`, {
      setLoading: setAnimate,
      onSuccess: (res) => {
        setDatas(res?.data?.data || []);
      },
      onError: (err) => console.log(err),
    });
  };

  useEffect(() => {
    getDatas();
  }, []);

  const handleDelete = (id) => {
    // if (!confirm("Yakin hapus artikel ini?")) return;
    setAnimate(true);

    deleteData(`/adm/artikel_destroy?id=${id}`, {
      setLoading: setAnimate,
      onSuccess: () => {
        // setDatas((prev) => prev.filter((a) => a.id !== id));
        getDatas();
      },
      onError: (err) => console.log(err),
    });
  };

  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-800">
          List Artikel
        </h2>
      </div>

      {/* Card Wrapper */}
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Loading */}
        {animate && (
          <div className="text-center py-4 text-blue-600 font-medium animate-pulse">
            Memuat data...
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-600">
                <th className="p-4 text-left font-medium">#</th>
                <th className="p-4 text-left font-medium">Judul</th>
                <th className="p-4 text-left font-medium">Author</th>
                <th className="p-4 text-left font-medium">Kategori</th>
                <th className="p-4 text-left font-medium">Status</th>
                <th className="p-4 text-left font-medium">Featured</th>
                <th className="p-4 text-left font-medium">Komentar</th>
                <th className="p-4 text-left font-medium">Publish</th>
                <th className="p-4 text-left font-medium">Updated</th>
                <th className="p-4 text-center font-medium">Aksi</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {datas.length === 0 ? (
                <tr>
                  <td
                    colSpan="10"
                    className="text-center py-12 text-gray-500 italic"
                  >
                    Tidak ada artikel
                  </td>
                </tr>
              ) : (
                datas.map((item, index) => (
                  <tr key={item.id} className="hover:bg-blue-50/40 transition">
                    <td className="p-4 text-gray-600">{index + 1}</td>

                    {/* TITLE + IMAGE */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {/* {item.image_path} */}

                        {item.image_path ? (
                          <img
                            src={`${DOKUMEN_URL + item.image_path}`}
                            alt={item.title}
                            className="w-12 h-12 rounded object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">
                            no-img
                          </div>
                        )}
                        <div>
                          <div className="font-semibold text-gray-800">
                            {item.title}
                          </div>
                          <div className="text-xs opacity-60">
                            {item.excerpt?.slice(0, 40)}...
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* CATEGORY */}
                    <td className="p-4">{item.author}</td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                    </td>

                    {/* STATUS */}
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          item.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    {/* FEATURED */}
                    <td className="p-4 text-center">
                      {item.is_featured ? (
                        <span className="text-green-600 font-bold">✓</span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>

                    {/* COMMENTS ENABLED */}
                    <td className="p-4 text-center">
                      {item.allow_comments ? (
                        <span className="text-green-600 font-bold">✓</span>
                      ) : (
                        <span className="text-red-500 font-bold">✕</span>
                      )}
                    </td>

                    {/* PUBLISH DATE */}
                    <td className="p-4 text-gray-600">
                      {item.publish_date
                        ? new Date(item.publish_date).toLocaleDateString(
                            "id-ID"
                          )
                        : "-"}
                    </td>

                    {/* UPDATED AT */}
                    <td className="p-4 text-gray-600">
                      {new Date(item.updated_at).toLocaleString("id-ID")}
                    </td>

                    {/* ACTION BUTTONS */}
                    <td className="p-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={
                            () => pilih(item)
                            // (window.location.href = `/admin/artikel/edit/${item.id}`)
                          }
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(item.id)}
                          className="px-3 py-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListArtikel;
