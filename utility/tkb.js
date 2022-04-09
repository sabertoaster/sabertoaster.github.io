const array = [{
        "Toán": "https://meet.google.com/gps-zzyp-wya"
    },
    {
        "SHLớp": "https://meet.google.com/gps-zzyp-wya"
    },
    {
        "Chào cờ": "https://meet.google.com/gps-zzyp-wya"
    },
    {
        "Lý": "https://meet.google.com/nhm-vhfd-hck"
    },
    {
        "CNghệ": "https://meet.google.com/nhm-vhfd-hck"
    },
    {
        "Hóa": "https://meet.google.com/rsg-ppyi-gsu"
    },
    {
        "Văn": "https://meet.google.com/jvy-ircd-huv"
    },
    {
        "Sử": "https://meet.google.com/vnm-fdmb-uzg"
    },
    {
        "Địa": "https://meet.google.com/iqg-pdbd-aga"
    },
    {
        "Anh": "https://meet.google.com/ecf-cbdg-pbt"
    },
    {
        "Pháp": "https://meet.google.com/zed-ysow-dvo"
    },
    {
        "Tin": "https://meet.google.com/msi-epmk-xjn"
    },
    {
        "Sinh": "https://meet.google.com/ktk-btkd-cct"
    },
    {
        "GDCD": "https://meet.google.com/chv-zndi-uao"
    }
]

$("td").each(function (index) {
    for (let i = 0; i < array.length; i++) {
        for (let j in array[i]) {
            if ($(this).text() == j) {
                if ($(this).attr("class") === "active1") {
                    $(this).on("click", () => window.open(array[i][j], '_blank'))
                }
            }
        }

    }
});