export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Faiq Adi Wibowo',
            child: 'Putra pertama',
            father: 'Sujito S.Pd. M.Pd.',
            mother: 'Sri Purwatiningsih',
            image: './src/assets/images/cowo.jpeg'
        },
        P: {
            id: 2,
            name: 'Muthia Syafitri Amni',
            child: 'Putri pertama',
            father: 'Abrahamsyah (alm)',
            mother: 'Zuliarni',
            image: './src/assets/images/cewe.jpeg'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Desember',
            date: '06',
            day: 'Sabtu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Desember',
            date: '07',
            day: 'Minggu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        address: 'Graha Nusantara - Jl. Mr. Iskandar No.95, Beran, Mlangsen, Kec. Blora, Kabupaten Blora, Jawa Tengah'
    },

    link: {
        calendar: 'https://calendar.app.google/9dwoP3owH9eQjqqq7',
        map: 'https://share.google/WiJgKiDRetRf8I48o',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpeg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpeg'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpeg'
        },
        {
            id: 4,
            image: './src/assets/images/4.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/5.jpg'
        },
        {
            id: 6,
            image: './src/assets/images/6.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Faiq Adi Wibowo',
            icon: './src/assets/images/bca.png',
            rekening: '1960458091'
        },
        {
            id: 2,
            name: 'Muthia Syafitri Amni',
            icon: './src/assets/images/bri.png',
            rekening: '300701024174535'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbz0PfcLdG3UXR6l6NTUeNzX-Grac2kwnGGEUkgqByhxGHiMw-_c4JF2R-aM5Iw62dECsQ/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
