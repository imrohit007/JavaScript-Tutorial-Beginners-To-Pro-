function isSafe(board, row, col, N) {
    // check if a queen can be placed at (row, col) safely
    // check the current row and column
    for (let i = 0; i<N; i++) {
        if (board[i][col] === 'Q' || board[row][i] === 'Q') {
            return false;
        }
    }

    // check diagonals
    for (let i=row, j=col; i>=0 && j>=0; i--,j--){
        if(board[i][j] === 'Q') {
            return false;
        }
    }

    for (let i=row, j=col; i>=0 && j<N; i--, j++){
        if (board[i][j] === 'Q'){
            return false;
        }
    }
    return true;
}

function solveNQueens(N) {
    const board = Array.from({length: N}, () => Array(N).fill('.'));
    const solutions = [];

    function backtrack(row) {
        if (row === N) {
            solutions.push(board.map(row => row.join('')));
            return;
        }

        for (let col=0; col <N; col++) {
            if (isSafe(board, row, col, N)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }

    backtrack(0);
    return solutions;
}

const N=4;
const solutions =solveNQueens(N);
console.log(solutions);