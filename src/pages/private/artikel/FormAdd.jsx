import React, { useState, useRef, useEffect } from "react";
import { postData, postFormData } from "../../../utils/api";
import CkEditor from "../../../components/admin/CkEditor";

export const FormAdd = ({ dtp, kembali }) => {
  const [animate, setAnimate] = useState(false);
  const [id, setId] = useState(dtp?.id || "");
  const [title, setTitle] = useState(dtp?.title || "");
  const [category, setCategory] = useState(dtp?.category || "");
  const [pubDate, setPubDate] = useState(dtp?.pubDate || "");
  const [author, setAuthor] = useState(dtp?.author || "");
  const [excerpt, setExcerpt] = useState(dtp?.excerpt || "");
  const [excerptCount, setExcerptCount] = useState(0);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(dtp?.image || null);
  const [altText, setAltText] = useState(dtp?.altText || "");
  const [content, setContent] = useState(dtp?.content || "");
  const [tags, setTags] = useState(dtp?.tags || "");
  const [status, setStatus] = useState(dtp?.status || "draft");
  const [featured, setFeatured] = useState(dtp?.featured || false);
  const [allowComments, setAllowComments] = useState(dtp?.allowComments || true);
  const [metaTitle, setMetaTitle] = useState(dtp?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(dtp?.metaDescription || "");
  const [metaDescCount, setMetaDescCount] = useState(0);

  const fileInputRef = useRef(null);

  useEffect(() => {
    setExcerptCount(excerpt.length);
  }, [excerpt]);

  useEffect(() => {
    setMetaDescCount(metaDescription.length);
  }, [metaDescription]);

  // Prefill data jika ada dtp (edit mode)
  useEffect(() => {
    if (dtp) {
      setId(dtp.id || "");
      setTitle(dtp.title || "");
      setCategory(dtp.category || "");
      setPubDate(dtp.pubDate || "");
      setAuthor(dtp.author || "");
      setExcerpt(dtp.excerpt || "");
      setAltText(dtp.altText || "");
      setContent(dtp.content || "");
      setTags(dtp.tags || "");
      setStatus(dtp.status || "draft");
      setFeatured(dtp.featured || false);
      setAllowComments(dtp.allowComments || true);
      setMetaTitle(dtp.meta_title || "");
      setMetaDescription(dtp.meta_description || "");
      setImagePreview(dtp.image || null);
    }
  }, [dtp]);


console.log('dtp', dtp)

  function handleImageChange(e) {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert("Ukuran file maksimal 2MB");
      return;
    }
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  }

  function removeImage() {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (!title.trim()) {
      alert("Judul artikel harus diisi.");
      return;
    }
    if (!category.trim()) {
      alert("Kategori harus dipilih.");
      return;
    }
    if (excerpt.length < 150 || excerpt.length > 200) {
      alert("Ringkasan harus antara 150-200 karakter.");
      return;
    }
    if (!content.trim()) {
      alert("Konten artikel harus diisi.");
      return;
    }

    const payload = new FormData();

    // Append semua data sebagai string
    if (id) payload.append("id", id);
    payload.append("title", title.trim());
    payload.append("category", category);
    payload.append("publish_date", pubDate || new Date().toISOString().split('T')[0]);
    payload.append("author", author.trim());
    payload.append("excerpt", excerpt.trim());
    payload.append("content", content.trim());
    payload.append("tags", tags.trim());
    payload.append("status", status);
    payload.append("alt_text", altText.trim());
    payload.append("meta_title", metaTitle.trim());
    payload.append("meta_description", metaDescription.trim());
    
    // Boolean fields - kirim sebagai string "true"/"false"
    payload.append("is_featured", featured.toString());
    payload.append("allow_comments", allowComments.toString());

    // File image
    if (imageFile) {
      payload.append("image", imageFile);
    }

    // Debug: lihat apa yang dikirim
    console.log("📤 FormData contents:");
    for (let [key, value] of payload.entries()) {
      if (key !== 'image') {
        console.log(`${key}:`, value, `(type: ${typeof value})`);
      } else {
        console.log(`${key}:`, value.name, `(type: File)`);
      }
    }

    try {
      const result = await postFormData("/adm/artikel_store", payload, {
        setLoading: setAnimate,
        onSuccess: (res) => {
          console.log("✅ Berhasil:", res.data);
          alert("Artikel berhasil disimpan ✔");
          // resetForm();
          // if (kembali) kembali();
        },
        onError: (err) => {
          console.log("❌ Error Server:", err);
          const errorMessage = err.detail || err.message || "Unknown error";
          alert(`Gagal menyimpan: ${errorMessage}`);
        }
      });

    } catch (error) {
      console.error("🚨 Catch error:", error);
      alert("Terjadi kesalahan saat menyimpan data ❌");
    }
  }

  function resetForm() {
    setId("");
    setTitle("");
    setCategory("");
    setPubDate("");
    setAuthor("");
    setExcerpt("");
    setImageFile(null);
    setImagePreview(null);
    setAltText("");
    setContent("");
    setTags("");
    setStatus("draft");
    setFeatured(false);
    setAllowComments(true);
    setMetaTitle("");
    setMetaDescription("");
    if (fileInputRef.current) fileInputRef.current.value = null;
  }

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          {id ? "Edit Artikel" : "Buat Artikel Baru"}
        </h2>
        <button
          type="button"
          onClick={kembali}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Kembali
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields tetap sama seperti sebelumnya */}
        <div>
          <label className="block text-sm font-medium mb-1">Judul Artikel *</label>
          <input
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            type="text"
            maxLength={100}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Maksimal 100 karakter"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Kategori *</label>
            <select
              className="w-full border rounded-lg px-3 py-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Pilih kategori</option>
              <option value="Berita">Berita</option>
              <option value="Opini">Opini</option>
              <option value="Tutorial">Tutorial</option>
              <option value="Kajian">Kajian</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tanggal Publikasi *</label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2"
              value={pubDate}
              onChange={(e) => setPubDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Penulis *</label>
            <input
              className="w-full border rounded-lg px-4 py-2"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Nama penulis"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Ringkasan/Excerpt *</label>
          <textarea
            className="w-full border rounded-lg px-4 py-2 min-h-[90px]"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="150-200 karakter untuk preview di halaman utama"
            required
          />
          <div className={`text-sm mt-1 ${excerptCount < 150 || excerptCount > 200 ? 'text-red-500' : 'text-gray-500'}`}>
            {excerptCount} karakter (150-200 disarankan)
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
          <div>
            <label className="block text-sm font-medium mb-1">Gambar Utama</label>
            <div className="border-dashed border-2 border-gray-200 rounded-lg p-3 flex flex-col items-center justify-center">
              {imagePreview ? (
                <div className="w-full">
                  <img 
                    src={imagePreview} 
                    alt={altText || "preview"} 
                    className="w-full h-40 object-cover rounded-md" 
                  />
                  <div className="flex gap-2 mt-2">
                    <button 
                      type="button" 
                      onClick={() => fileInputRef.current?.click()} 
                      className="px-3 py-1 bg-gray-100 rounded text-sm"
                    >
                      Ganti gambar
                    </button>
                    <button 
                      type="button" 
                      onClick={removeImage} 
                      className="px-3 py-1 bg-red-100 rounded text-sm"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-gray-500">Max 2MB, ratio 16:9 recommended</p>
                  <div className="mt-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm"
                    >
                      📸 Upload gambar
                    </button>
                  </div>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
            <input
              className="w-full border rounded-lg px-3 py-2 mt-2"
              placeholder="Alt Text (untuk SEO)"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1">Isi Artikel *</label>
      <CkEditor
              value={content}
              onChange={setContent}
              placeholder="Tulis artikel yang menarik dan informatif di sini..."
              height="220px" // Sesuaikan tinggi yang diinginkan
            />           
            
             {/* <textarea
              className="w-full border rounded-lg px-4 py-3 min-h-[220px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Mulai menulis artikel Anda di sini..."
              required
            /> */}
            <div className="text-sm text-gray-500 mt-1">
              Panjang konten: {content.length} karakter
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tag/Keyword</label>
          <input
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Gunakan koma untuk memisahkan setiap tag"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium mb-1">Status Publikasi *</label>
            <select 
              value={status} 
              onChange={(e) => setStatus(e.target.value)} 
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="draft">Draft</option>
              <option value="review">Review</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input 
              id="featured" 
              type="checkbox" 
              checked={featured} 
              onChange={() => setFeatured((s) => !s)} 
            />
            <label htmlFor="featured" className="text-sm">Featured Article</label>
          </div>

          <div className="flex items-center gap-2">
            <input 
              id="comments" 
              type="checkbox" 
              checked={allowComments} 
              onChange={() => setAllowComments((s) => !s)} 
            />
            <label htmlFor="comments" className="text-sm">Allow Comments</label>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">SEO & Social Media</h3>
          <div>
            <label className="block text-sm font-medium mb-1">Meta Title</label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Maksimal 60 karakter"
              maxLength={60}
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
            />
            <div className="text-sm text-gray-500 mt-1">{metaTitle.length}/60 karakter</div>
          </div>
          <div className="mt-3">
            <label className="block text-sm font-medium mb-1">Meta Description</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 min-h-[80px]"
              placeholder="Maksimal 160 karakter"
              maxLength={160}
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
            />
            <div className="text-sm text-gray-500 mt-1">{metaDescCount}/160 karakter</div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button 
            type="button" 
            onClick={() => {
              setStatus("draft");
              handleSubmit({ preventDefault: () => {} });
            }} 
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Simpan Draft
          </button>
          <button 
            type="submit" 
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            {status === "published" ? "Publish" : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
};