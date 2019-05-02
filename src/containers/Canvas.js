// import React from 'react'

// class Canvas extends React.Component {

//     componentDidMount() {
//         const canvas = this.refs.canvas
//         const ctx = canvas.getContext("2d")
//         const ROW = 20;
//         const COLUMN = 20;
//         const SQ = 20;
//         this.drawSquare(50,50,"red")

//     }

//     drawSquare = (x, y, color) => {
//         ctx.fillStyle = color;
//         ctx.fillRect = (0, 0, x, y)
//         ctx.strokeStyle = color
//         ctx.strokeRect(0, 0, x, y)
//     }

//     render() {
//         return (
//             <div>
//                 <canvas ref="canvas" width={500} height={500} />
//             </div>
//         )
//     }

// }
// export default Canvas;