const papan = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "K", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]
];

function findPosition(papan, piece) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (papan[i][j] === piece) {
                return [i, j];
            }
        }
    }
    return null;
}

function isPathClear(papan, start, end) {
    const [r1, c1] = start;
    const [r2, c2] = end;
    if (r1 === r2) {
        const minC = Math.min(c1, c2);
        const maxC = Math.max(c1, c2);
        for (let c = minC + 1; c < maxC; c++) {
            if (papan[r1][c] !== ".") return false;
        }
        return true;
    } else if (c1 === c2) {
        const minR = Math.min(r1, r2);
        const maxR = Math.max(r1, r2);
        for (let r = minR + 1; r < maxR; r++) {
            if (papan[r][c1] !== ".") return false;
        }
        return true;
    }
    return false;
}

function cekSkak(papan) {
    const kingPos = findPosition(papan, "K");
    const rookPos = findPosition(papan, "R");
    if (!kingPos || !rookPos) return "Aman";

    const [kr, kc] = kingPos;
    const [rr, rc] = rookPos;

    if ((kr === rr || kc === rc) && isPathClear(papan, rookPos, kingPos)) {
        return "SKAK!";
    }
    return "Aman";
}

console.log(cekSkak(papan));
