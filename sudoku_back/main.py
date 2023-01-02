from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS

from sudoku_solver import Sudoku

app = Flask(__name__)
CORS(app)
api = Api(app)

class Sudoku_req(Resource):
    def get(self):
        return {'hello': 'world'}

    def post(self):
        grid_data = request.get_json(force=True)['grid']
        print(grid_data)

        sudoku = Sudoku(grid_data)

        if sudoku.solve():
            solution = sudoku.get_grid()
            return {'result': solution}
        else:
            return {'result': False}

api.add_resource(Sudoku_req, '/solve')

if __name__ == '__main__':
    
    app.run(debug=True)