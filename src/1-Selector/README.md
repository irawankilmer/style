# SELECTOR
## Element/Type Selector
`Element selector` digunakan untuk menargetkan semua elemen dengan tag tertentu di dalam dokumen HTML.
```bash
p {
    color: blue;
}
```

## Class Selector
`Class selector` digunakan untuk menargetkan elemen yang memiliki atribut class tertentu di dalam dokumen HTML.
```bash
.class_name {
    font-size: 16px;
}
```
## ID Selector
`ID Selector` digunakan untuk menargetkan elemen yang memiliki atribut id tertentu di dalam dokumen HTML.
```bash
#id_name {
    background-color: yellow;
}
```
## Pseudo-Class
`Pseudo-class` digunakan untuk menargetkan elemen dalam keadaan tertentu atau status tertentu, seperti `:hover`, `:active`, `:focus`, dan lainnya.
```bash
a:hover {
    color: red;
}
```
Contoh lainnya:
- `:hover` - Ketika elemen sedang diarahkan oleh kursor mouse.
- `:active` - Ketika elemen sedang dalam keadaan aktif, biasanya saat tombol mouse atau keyboard ditekan.
- `:focus` - Ketika elemen sedang dalam fokus, biasanya setelah ditekan oleh tab atau diklik.
- `:visited` - Ketika tautan (link) telah dikunjungi oleh pengguna.
- `:first-child` - Ketika elemen merupakan child pertama dari elemen induknya.
- `:last-child` - Ketika elemen merupakan child terakhir dari elemen induknya.
- `:nth-child(n)` - Ketika elemen merupakan child ke-n dari elemen induknya.
- `:nth-of-type(n)` - Ketika elemen merupakan jenis ke-n dari jenisnya dalam elemen induknya.
Sebanarnya masih banyak lagi. Lihat di [Pseudo Class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

## Universal Selector
```bash
* {
  color: green;
}
```
Contoh lainnya lihat [disini](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors).

## Attribute Selector
`Attribute selector` mencocokkan elemen berdasarkan elemen yang memiliki atribut tertentu yang ditetapkan secara eksplisit, dengan opsi untuk menentukan nilai atribut atau nilai sub-string yang cocok.
```bash
p[title="pragos"] {
    background-color: black;
    color: white;
}
```

Dokumentasi lengkap [MDN - CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors).