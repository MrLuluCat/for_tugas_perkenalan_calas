document
  .getElementById("assignment1Button")
  .addEventListener("click", function () {
    Swal.fire({
      title: "Assignment 1 <br><br><strong>Web Perkenalan</strong>",

      html: `
        <p>Buatlah website perkenalan sederhana, boleh menggunakan template bootstrap seperti ni atau membuat manual menggunakan HTML + CSS Native, lalu deploy ke <strong>Vercel</strong> via GitHub.</p>
        <ul style="text-align: left;">
          <li>Buat repository di GitHub dan push source code.*</li>
          <li>Deploy website ke <a href="https://vercel.com" style="color: black; text-decoration: underline;" target="_blank">Vercel.com.</a></li>
          <li>Berikan <strong>URL live website</strong> yang berhasil di deploy 😉.</li>
        </ul>
      `,
      icon: "info",
      confirmButtonText: "Mengerti!",
    });
  });

// Assignment 2
document
  .getElementById("assignment2Button")
  .addEventListener("click", function () {
    Swal.fire({
      title: "Assignment 2 <br><br><strong>Laravel Project</strong>",
      html: `
        <p>Buat project menggunakan Laravel 11 dengan satu controller yang menampilkan halaman index.</p>
        <ul style="text-align: left;">
          <li>Buat controller dan view.</li>
          <li>Konfigurasikan route di <code>web.php</code>.</li>
          <li>Sertakan 5 screenshot: Controller, Views, web.php, index.blade.php, dan tampilan browser.</li>
          <li>Kirimkan Bukti Screenshot didalam <strong>folder Google Drive</strong>, lalu submit link folder yang sudah <strong>di share secara public</strong> 😊.</li>
        </ul>
      `,
      icon: "info",
      confirmButtonText: "Siap!",
    });
  });

// Assignment 3
document
  .getElementById("assignment3Button")
  .addEventListener("click", function () {
    Swal.fire({
      title: "Assignment 3 <br><br><strong>Install Debian/Ubuntu</strong>",

      html: `
        <p>Instal Debian atau Ubuntu pada VirtualBox, lalu buat 2 user (biasa dan sudo).</p>
        <ul style="text-align: left;">
          <li>Screenshot instalasi OS.</li>
          <li>Screenshot hostname server kamu.</li>
          <li>Screenshot user biasa, user sudo, dan tampilan desktop / CLI.</li>
          <li>Kirimkan Bukti Screenshot didalam <strong>folder Google Drive</strong>, lalu submit link folder yang sudah <strong>di share secara public</strong> 😊.</li>
        </ul>
      `,
      icon: "info",
      confirmButtonText: "Okay!",
    });
  });

// Assignment 4
document
  .getElementById("assignment4Button")
  .addEventListener("click", function () {
    Swal.fire({
      title:
        "Assignment 4 <br><strong>Shortcut MS Excel/Google Sheets</strong>",

      html: `
        <p>Hafalkan 10 shortcut penting di MS Excel atau Google Sheets (khusus Non-FTI).</p>
        <ul style="text-align: left;">
          <li>Buat daftar shortcut berikut fungsi dan kombinasi tombolnya.</li>
          <li>Sesi hafalan akan diuji langsung 👍.</li>
        </ul>
      `,
      icon: "info",
      confirmButtonText: "Baik!",
    });
  });
