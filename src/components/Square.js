import React from 'react'

class Square extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }

    onClick = (e) => {
        let val = !this.state.clicked
        this.setState({ clicked: val })
    }
    render() {
        const color = this.state.clicked ? 'red' : 'lightgray'
        return (
            <td id={this.props.data} >
                <div className="square" style={{ backgroundColor: color }} onClick={this.onClick}>
                    {this.props.data}
                </div>
            </td>
        )
    }
}

export default Square;