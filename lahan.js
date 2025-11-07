const lahan = [
    ["subur", "subur", "kering", "subur"],
    ["kering", "subur", "kering", "kering"],
    ["subur", "subur", "subur", "kering"],
    ["kering", "kering", "kering", "kering"]
];

const cuaca = {
    suhu: 25,
    kelembapan: 60,
    angin: 10
};

function updateLahan(lahan) {
    for (let i = 0; i < lahan.length; i++) {
        let suburCount = 0;
        for (let j = 0; j < lahan[i].length; j++) {
            if (lahan[i][j] === "subur") {
                suburCount++;
            }
        }
        const totalPetak = lahan[i].length;
        const persentaseSubur = (suburCount / totalPetak) * 100;
        if (persentaseSubur < 50) {
            for (let j = 0; j < lahan[i].length; j++) {
                lahan[i][j] = "kering";
            }
        }
    }
    return lahan;
}

function cekCuaca(cuaca) {
    return cuaca.suhu >= 20 && cuaca.suhu <= 30 &&
           cuaca.kelembapan > 50 &&
           cuaca.angin < 15;
}

function main(lahan, cuaca) {
    const lahanUpdated = updateLahan(lahan);
    let totalSubur = 0;
    let totalDitanami = 0;

    for (let i = 0; i < lahanUpdated.length; i++) {
        for (let j = 0; j < lahanUpdated[i].length; j++) {
            if (lahanUpdated[i][j] === "subur") {
                totalSubur++;
                if (cekCuaca(cuaca)) {
                    totalDitanami++;
                }
            }
        }
    }

    console.log(`Total petak subur: ${totalSubur}`);
    console.log(`Total petak yang ditanami: ${totalDitanami}`);
    if (!cekCuaca(cuaca)) {
        console.log("Cuaca tidak cocok untuk bercocok tanam");
    } else {
        console.log("Cuaca cocok untuk bercocok tanam");
    }
}

main(lahan, cuaca);
