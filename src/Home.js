// Home Component

import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card mt-4">
                            <div className="card-body">
                                <h1>Home Page</h1>
                                <h5>Single-page Application</h5>
                                <p>
                                    A single-page application is an application that loads a single HTML 
                                    page and all the necessary assets (such as JavaScript and CSS) required
                                    for the application to run. Any interactions with the page or subsequent
                                    pages do not require a round trip to the server which means the page is
                                    not reloaded.
                                </p>
                            </div>                            
                        </div>               
                    </div>
                </div>            
            </div>          
        )
    }
}

export default Home;