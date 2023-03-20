export default function About() {
  return (
    <section className="py-5 px-10 md:px-32 md:py-10 w-full h-full">
      <div className="flex items-center justify-center gap-2 mb-4">
        <h3 className="text-2xl md:text-3xl uppercase">About</h3>
        <span className="block w-0.5 h-7 from-gray-600 to-yellow-500 bg-gradient-to-b"></span>
        <span className="text-2xl md:text-3xl uppercase text-yellow-600">
          Deskripsi Alat
        </span>
      </div>
      <article>
        <p className="text-lg text-justify leading-9 md:text-xl md:leading-9 md:tracking-wider text-gray-500">
          Smart bin merupakan rancang bangun tempat sampah yang bekerja secara
          otomatis tanpa adanya sentuhan fisik untuk mengurangi penyebaran
          bakteri. Smart bin akan mendeteksi sebuah objek secara otomatis.
          Selain itu smart bin akan bekerja otomatis untuk memilah sampah
          organik dan anorganik sesuai dengan jenisnya dan akan diletakkan
          berdasarkan tempatnya. Smart bin dirancang berbasis pada Arduino Uno
          dan NodeMCU sebagai IOT dari protoype ini, sehingga smart bin dapat
          termonitoring melalui jarak jauh serta smart bin akan memberikan
          notifikasi berupa suara dan persentase volume pada website apabila
          sampah sudah harus diambil oleh user.
        </p>
      </article>

      <div className="mt-6 flex items-center justify-center gap-2 mb-4">
        <h3 className="text-xl md:text-xl font-semibold uppercase">
          Sistem Fisis
        </h3>
      </div>
      <article>
        <p className="text-base text-justify leading-9 md:text-lg md:leading-9 md:tracking-wider text-gray-500">
          Flowchart atau diagram fisis dibuat untuk memudahkan user dalam
          membaca dan atau mengetahui sistem kerja prototype Smart bin secara
          fisis, baik prosedur fisis dari sistem keseluruhan prototype, prosedur
          penutup otomatis dari prototype, prosedur dalam pemilahan jenis sampah
          hingga prosedur dalam monitoring keadaan volume sampah.
        </p>
      </article>
    </section>
  );
}
