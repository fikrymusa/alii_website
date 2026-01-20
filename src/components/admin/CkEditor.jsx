// src/components/CkEditor.jsx

import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

/**
 * Komponen Rich Text Editor yang dapat digunakan kembali menggunakan CKEditor 5.
 * @param {object} props - Props komponen.
 * @param {string} props.value - Nilai HTML awal untuk editor.
 * @param {function} props.onChange - Fungsi yang dipanggil setiap kali konten editor berubah.
 * @param {string} [props.placeholder] - Teks placeholder untuk editor.
 * @param {string} [props.height='400px'] - Tinggi editor.
 */
const CkEditor = ({ value, onChange, placeholder, height = '400px' }) => {

  const editorConfiguration = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        '|',
        'undo',
        'redo'
      ]
    },
    placeholder: placeholder || 'Mulai menulis di sini...',
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
    }
  };

  return (

      <CKEditor
        editor={ClassicEditor}
        data={value}
        config={editorConfiguration}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data); // Kirim data HTML yang baru ke parent component
        }}
      />

  );
};

export default CkEditor;