// Popunder + Tabunder Rotator v2026 (merged, single URL list, all random)
(function maulinator_2026(){

  // ==================== DAFTAR URL (dipakai popunder & tabunder) ====================
  const DAFTAR_URL = [
    "https://xselebgram.blogspot.com/",
    "https://abg.yulianti.xyz/at01/",
"https://abg.yulianti.xyz/at02/",
"https://abg.yulianti.xyz/at03/",
"https://abg.yulianti.xyz/at04/",
"https://abg.yulianti.xyz/at05/",
"https://abg.yulianti.xyz/at06/",
"https://abg.yulianti.xyz/at07/",
"https://abg.yulianti.xyz/at08/",
"https://abg.yulianti.xyz/at09/",
"https://abg.yulianti.xyz/at10/",
"https://abg.yulianti.xyz/at11/",
"https://abg.yulianti.xyz/at12/",
"https://abg.yulianti.xyz/at13/",
"https://abg.yulianti.xyz/at14/",
"https://abg.yulianti.xyz/at15/",
"https://abg.yulianti.xyz/at16/",
"https://abg.yulianti.xyz/at17/",
"https://abg.yulianti.xyz/at18/",
"https://abg.yulianti.xyz/at19/",
"https://abg.yulianti.xyz/at20/",
"https://abg.yulianti.xyz/at21/",
"https://abg.yulianti.xyz/at22/",
"https://abg.yulianti.xyz/at23/",
"https://abg.yulianti.xyz/at24/",
"https://abg.yulianti.xyz/at25/",
"https://abg.yulianti.xyz/at26/",
"https://abg.yulianti.xyz/at27/",
"https://abg.yulianti.xyz/at28/",
"https://abg.yulianti.xyz/at29/",
"https://abg.yulianti.xyz/at30/",
"https://abg.yulianti.xyz/at31/",
"https://abg.yulianti.xyz/at32/",
"https://abg.yulianti.xyz/at33/",
"https://abg.yulianti.xyz/at34/",
"https://abg.yulianti.xyz/at35/",
"https://abg.yulianti.xyz/at36/",
"https://abg.yulianti.xyz/at37/",
"https://abg.yulianti.xyz/at38/",
"https://abg.yulianti.xyz/at39/",
"https://abg.yulianti.xyz/at40/",
"https://abg.yulianti.xyz/at41/",
"https://abg.yulianti.xyz/at42/",
"https://abg.yulianti.xyz/at43/",
"https://abg.yulianti.xyz/at44/",
"https://abg.yulianti.xyz/at45/",
"https://abg.yulianti.xyz/at46/",
"https://abg.yulianti.xyz/at47/",
"https://abg.yulianti.xyz/at48/",
"https://abg.yulianti.xyz/at49/",
"https://abg.yulianti.xyz/at50/"
  ];

  // ==================== RANDOM HELPER ====================
  function CRRandom(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  // ==================== TABUNDER ====================
  const JEDA_MINIMAL = 2000;
  var terakhirTrigger = 0;

  function bukaTabunder() {
    var sekarang = Date.now();

    if (sekarang - terakhirTrigger < JEDA_MINIMAL) {
      return;
    }

    terakhirTrigger = sekarang;

    var urlIklan = CRRandom(DAFTAR_URL);
    var tabBaru = window.open(urlIklan, "_blank");

    if (tabBaru) {
      setTimeout(function() {
        window.focus();
      }, 100);
    }
  }

  // ==================== HANDLER GABUNGAN ====================
  document.addEventListener("click", function(){

    // --- Popunder: tiap klik, URL random ---
    const url = CRRandom(DAFTAR_URL);
    const win = window.open(url, "_blank");

    if(win){
      win.blur();
      window.focus();
    }

    // --- Tabunder: jeda 2 detik, URL random ---
    bukaTabunder();

  }, true);

})();
