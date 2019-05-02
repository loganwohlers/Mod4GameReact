import React from 'react'

class SearchMenu extends React.Component {
    render() {
        return (
            <div className="ui secondary  menu">
                <div className="active item">
                    Home
                </div>
                <div className="item">
                    Messages
                </div>
                <div className="item">
                    Friends
                 </div>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search link icon"></i>
                        </div>
                    </div>
                    <div className="ui item">
                        Logout
                        </div>
                </div>
            </div>
        )
    }
}

export default SearchMenu;

