import numpy as np

from sudoku_solver import Sudoku


if __name__ == '__main__':
    
    grid = [
        [0,1,3,0,2,0,0,0,6],
        [0,5,0,0,8,0,0,0,0],
        [0,0,0,0,0,0,3,0,4],
        [0,0,0,0,6,4,0,0,1],
        [0,7,9,0,0,0,0,5,0],
        [0,0,0,0,0,0,7,0,0],
        [0,0,6,0,4,9,0,1,5],
        [0,0,0,8,0,1,9,0,0],
        [0,0,1,0,0,0,4,0,0],
    ]

    print('Initial grid:')
    print(np.matrix(grid))

    sudoku = Sudoku(grid)
    solved_grid = sudoku.solve_sudoku()

    if solved_grid:
        print('Solved grid:')
        print(np.matrix(sudoku.get_grid()))
    else:
        print('No solution found')