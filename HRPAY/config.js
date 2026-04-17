const CONFIG = {
  // CONFIG INPUTS start
  inputs: {
    // ===== PAYROLL =====
    nama: { placeholder: "contoh: Mona" },
    gapok: { placeholder: "contoh: 7.000.000,-" },
    tunjangan: { placeholder: "contoh: 1.500.000,-" },
    bonus: { placeholder: "contoh: 300.000,-" },
    asuransiPT: { placeholder: "0 %", min: 0, step: 0.01, value: 0 },

    // ===== SEVERANCE =====
    sevNama: { placeholder: "contoh: Mona" },
    sevUpah: { placeholder: "contoh: 7.000.000,-" },
    sevCuti: { placeholder: "Hari", min: 0, max: 100 },


  },// CONFIG INPUTS end



  // CONFIG SELECTS start
  selects: {
    ptkpStatus: [
    { value: "TK0", text: "TK0 (Tidak Kawin, 0 anak)" },
    { value: "TK1", text: "TK1 (Tidak Kawin, 1 anak)" },
    { value: "TK2", text: "TK2 (Tidak Kawin, 2 anak)" },
    { value: "TK3", text: "TK3 (Tidak Kawin, 3 anak)" },
    { value: "K0", text: "K0 (Kawin, 0 anak, Istri tidak bekerja)" },
    { value: "K1", text: "K1 (Kawin, 1 anak, Istri tidak bekerja)" },
    { value: "K2", text: "K2 (Kawin, 2 anak, Istri tidak bekerja)" },
    { value: "K3", text: "K3 (Kawin, 3 anak, Istri tidak bekerja)" },
    { value: "KI0", text: "KI0 (Kawin, 0 anak, Istri bekerja)" },
    { value: "KI1", text: "KI1 (Kawin, 1 anak, Istri bekerja)" },
    { value: "KI2", text: "KI2 (Kawin, 2 anak, Istri bekerja)" },
    { value: "KI3", text: "KI3 (Kawin, 3 anak, Istri bekerja)" }
    ],

    npwp: [
      { value: "1", text: "Ada NPWP" },
      { value: "1.2", text: "Tidak Ada NPWP (+20%)" }
    ],

    sevHariKerja: [
      { value: "5", text: "5 Hari Dalam Seminggu" },
      { value: "6", text: "6 Hari Dalam Seminggu", selected: true }
    ],

    sevAlasan: [
      { value: "efisiensi", text: "Efisiensi / Perampingan" },
    { value: "merger", text: "Merger / Akuisisi" },
    { value: "pailit", text: "Perusahaan Pailit" },
    { value: "tutup_rugi", text: "Perusahaan Tutup Karena Rugi" },
    { value: "force", text: "Force Majeure" },
    { value: "mangkir", text: "Mangkir" },
    { value: "pelanggaran", text: "Pelanggaran Berat" },
    { value: "sakit", text: "Sakit Berkepanjangan" },
    { value: "pensiun", text: "Pensiun" },
    { value: "meninggal", text: "Meninggal Dunia" },
    { value: "resign", text: "Mengundurkan Diri" },
    { value: "kontrak_habis", text: "Kontrak habis (PKWT)" }
    ]
  },// CONFIG SELECTS end

  // ===== FAKTOR PHK =====
  faktor: {   // 👉 ini juga sebaiknya dikasih grouping biar rapi
    efisiensi: { value: 0.5, step: 0.05 },
    merger: { value: 0.5, step: 0.05 },
    pailit: { value: 0.5, step: 0.05 },
    tutup_rugi: { value: 0.5, step: 0.05 },
    force: { value: 0.5, step: 0.05 },
    sakit: { value: 2, step: 2 },
    pensiun: { value: 1.75, step: 1.75 },
    meninggal: { value: 2, step: 2 },
    resign: { value: 0, step: 0 },
    mangkir: { value: 0, step: 0 },
    pelanggaran: { value: 0, step: 0 },
    kontrak_habis: { value: 0, step: 0 }
  },

  bpjs: {
    kespt: { value: 4, min: 0, max: 100, step: 0.1 },
    jhtpt: { value: 3.7, min: 0, max: 100, step: 0.1 },
    jppt: { value: 2, min: 0, max: 100, step: 0.1 },

    kes: { value: 1, min: 0, max: 100, step: 0.1 },
    jht: { value: 2, min: 0, max: 100, step: 0.1 },
    jp: { value: 1, min: 0, max: 100, step: 0.1 },

    maxkespt: { value: "12000000" },
    maxjhtpt: { placeholder: "Max Gaji" },
    maxjppt: { value: "11086300" },

    maxkes: { value: "12000000" },
    maxjht: { placeholder: "Max Gaji" },
    maxjp: { value: "11086300" }
  }
};

// ===== APLYCONFIG start =====
function applyConfig(){

  // ===== INPUT (SEMUA) =====
  for(const id in CONFIG.inputs){
    const el = document.getElementById(id);
    if(!el) continue;

    const cfg = CONFIG.inputs[id];

    if(cfg.placeholder !== undefined) el.placeholder = cfg.placeholder;
    if(cfg.value !== undefined) el.value = cfg.value;
    if(cfg.min !== undefined) el.min = cfg.min;
    if(cfg.max !== undefined) el.max = cfg.max;
    if(cfg.step !== undefined) el.step = cfg.step;
  }

  // ===== BPJS =====
  for(const id in CONFIG.bpjs){
    const el = document.getElementById(id);
    if(!el) continue;

    const cfg = CONFIG.bpjs[id];

    if(cfg.placeholder !== undefined) el.placeholder = cfg.placeholder;
    if(cfg.value !== undefined) el.value = cfg.value;
    if(cfg.min !== undefined) el.min = cfg.min;
    if(cfg.max !== undefined) el.max = cfg.max;
    if(cfg.step !== undefined) el.step = cfg.step;
  }

  // ===== SELECT =====
  for(const id in CONFIG.selects){
    const el = document.getElementById(id);
    if(!el) continue;

    el.innerHTML = CONFIG.selects[id].map(opt =>
      `<option value="${opt.value}" ${opt.selected ? "selected" : ""}>
        ${opt.text}
      </option>`
    ).join("");
  }
}
// ===== APLYCONFIG end =====
