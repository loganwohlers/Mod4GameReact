import React from 'react'

class Square extends React.Component {

    constructor() {
        super()
        this.state = {
            clicked: false
        }
    }

    onClick = () => {
        let val = !this.state.clicked
        this.setState({ clicked: val })
    }
    render() {
        const color = this.state.clicked ? 'red' : 'lightblue'
        return (
            <td>
                <div className="square" style={{ backgroundColor: color }} onClick={this.onClick}>
                </div>
            </td>
        )
    }
}

export default Square;