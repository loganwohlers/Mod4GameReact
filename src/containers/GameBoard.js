import React from 'react'
import Square from '../components/Square'

class GameBoard extends React.Component {

    constructor() {
        super()
        this.state = {
            grid: Array(20).fill(Array(20).fill(false))
        }
    }

    render() {
        const style = {
            textAlign: "center",
            tableLayout: 'fixed',
        };

        const board = this.state.grid.map((row, i) => {
            return (
                <tr key={"row_" + i}>
                    {row.map((col, j) => {
                        return (
                            <Square key={i + "_" + j} />
                        )
                    }
                    )
                    }
                </tr>
            )
        })

        return (
            <div >
                <table cellSpacing="0" id="table" className="board" style={{ style }}>
                    <tbody >
                        {board}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default GameBoard;