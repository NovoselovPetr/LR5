function mirror(matrix) {
    let answer = [];
    let len = matrix[0].length;
    for (let i = 0; i < matrix.length; i++) {
        answer[i] = [];
        for (let j = len-1; j >= 0; j--) {
            answer[i][len - j - 1] = matrix[i][j];
        }
    }
    return answer;
}

console.log("Программа для отзеркаливания матрицы относительно вертикальной оси");
let matrix = [[1, 2, 1, 0],
              [7, 12, 4, 9],
              [3, 5, 1, -1],
              [11, 5, 2, 8]];

console.log("Дана матрица:");
for (let i in matrix) {
    console.log(matrix[i]);
}
console.log("\nОтзеркаленная матрица:");
for (let i in mirror(matrix)) {
    console.log(mirror(matrix)[i]);
}

