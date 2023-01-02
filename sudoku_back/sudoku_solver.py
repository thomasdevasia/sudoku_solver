class Sudoku:
    
    # Initialize the grid
    def __init__(self, grid):
        self.grid = grid

    # check if the number is valid for the given position
    def is_valid(self, row, col, num):
        # check if the number is already in the row
        for i in range(9):
            if self.grid[row][i] == num:
                return False

        # check if the number is already in the column
        for i in range(9):
            if self.grid[i][col] == num:
                return False

        # check if the number is already in the 3x3 box
        for i in range(3):
            for j in range(3):
                if self.grid[(row // 3) * 3 + i][(col // 3) * 3 + j] == num:
                    return False

        return True

    # check for empty cells
    def find_empty_cell(self):
        for i in range(9):
            for j in range(9):
                if self.grid[i][j] == 0:
                    return (i, j)

        return None
    
        # solve the sudoku
    def solve(self):

        # find next empty cell
        empty_cell = self.find_empty_cell()

        if empty_cell is None:
            return True

        row, col = empty_cell

        # try all numbers from 1 to 9
        for num in range(1, 10):
            if self.is_valid(row, col, num):
                self.grid[row][col] = num
                # print(self.grid)
                if self.solve():
                    return True

                self.grid[row][col] = 0

        return False

    def get_grid(self):
        return self.grid