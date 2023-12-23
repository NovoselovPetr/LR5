function outputFromOddColumns(matrix) {
    let answer = [];
    let len = matrix[0].length;
    for (let j = 0; j < len; j+=2) {
        for (let i in matrix) {
            answer.push(matrix[i][j]);
        }
    }
    return answer;
}

console.log("Программа для вывода элементов из нечётных столбцов матрицы");
let matrix = [[1, 2, 1, 4, 7],
              [7, 12, 4, 1, 3],
              [3, 5, 1, 6, 1],
              [7, 12, 4, 1, -1]];

console.log("Дана матрица:");
for (let i in matrix){
    console.log(matrix[i]);
}
console.log("\nЭлементы нечетных столбцов заданной матрицы:\n" + outputFromOddColumns(matrix));
