<template>
    <section class="bg-service">
        <div class="container flex flex-col items-center mx-auto py-24 gap-y-12 box-shadow">
            <div class="space-y-5 mb-4 text-center">
                <h2 class="text-4xl text-white">Frequently Asked Question</h2>
                <p class="text-gray-400 text-base">
                    The most common questions about how our business works and what can do
                    for you.
                </p>
            </div>
            <div>
                <div class="relative mb-4 ">
                    <input type="checkbox" id="toggle1" class="toggle hidden" />
                    <label class="title block bg-gray-700 p-4 cursor-pointer" for="toggle1">
                        <h3> Bagaimana Cara Melakukan Pemesanan? </h3>
                    </label>
                    <div class="content bg-gray-700 overflow-hidden">
                        <ol class="custom-counter text-left">
                            <li>Pilih Paket dan informasikan kebutuhan SEO Anda pada kami</li>
                            <li>Jelaskan fitur yang diinginkan pada website/apps anda</li>
                            <li>Jika belum ada design maka kami melakukan custom design berbayar untuk anda</li>
                            <li>Kami buat penawaran resmi harga pembuatan untuk anda</li>
                            <li>Jika sudah cocok, kami kirimkan Invoice pembayaran</li>
                            <li>Silahkan kirim data yang akan digunakan pada website / aplikasi anda</li>
                            <li>Proses pembuatan dimulai dengan jangka waktu sesuai kesepakatan</li>
                            <li>Memperlihatkan hasil jadi kepada anda, jika anda menginginkan perubahan bisa melakukan
                                revisi sebanyak 3x</li>
                        </ol>
                    </div>
                </div>
                <div class="relative mb-4 ">
                    <input type="checkbox" id="toggle2" class="toggle hidden" />
                    <label class="title block bg-gray-700 p-4 cursor-pointer" for="toggle2">
                        <h3> Apa saja yang harus disiapkan?</h3>
                    </label>
                    <div class="content bg-gray-700 overflow-hidden">
                        <ol class="custom-counter text-left">
                            <li>Siapkan design jika sudah punya design sendiri </li>
                            <li>Siapkan data website/aplikasi anda</li>
                        </ol>
                    </div>
                </div>
                <div class="relative mb-4">
                    <input type="checkbox" id="toggle3" class="toggle hidden" />
                    <label class="title block bg-gray-700 p-4 cursor-pointer" for="toggle3">
                        <h3> Bagaimana Skema Pembayaran? </h3>
                    </label>
                    <div class="content bg-gray-700 overflow-hidden">
                        <ol class="custom-counter text-left">
                            <li>Pembayaran DP sesuai kesepakatan melalui transfer ke rekening kami/pembayaran tunai ke
                                kantor kami. </li>
                            <li>Pembayaran Pelunasan sesuai kesepakatan ke rekening kami.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppsFaqs",
    data: () => {
        return {
            isOpen: false
        };
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    }
};
</script>

<style scoped>
.text-oscuro {
    color: #445065;
}

.title {
    color: white
}

.title::after,
.title::before {
    content: "";
    position: absolute;
    right: 1.25em;
    top: 1.25em;
    width: 2px;
    height: 0.75em;
    background-color: white;
    transition: all 0.4s;
}

.title::after {
    transform: rotate(90deg);
}

.content {
    max-height: 0;
}

.toggle:checked+.title,
.toggle:checked+.title+.content {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.toggle:checked+.title+.content {
    max-height: 500px;
}

.toggle:checked+.title::before {
    transform: rotate(90deg) !important;
}

.custom-counter {
    margin: 0;
    padding: 10px;
    list-style-type: none;
}

.custom-counter li {
    counter-increment: step-counter;
    margin-bottom: 10px;
    color: white;
}

.custom-counter li::before {
    content: counter(step-counter);
    margin-right: 10px;
    font-size: 80%;
    background-color: navajowhite;
    color: black;
    font-weight: bold;
    padding: 3px 8px;
    border-radius: 3px;
}
</style>
