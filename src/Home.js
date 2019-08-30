// Home Component

import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="jumbotron">
                            <h1 className="display-4">Single Page App</h1>
                            <figure>
                                <img className="img-fluid" src="panda-hanging-rode.png" alt="Panda" />
                            </figure>
                            <p className="lead">
                                A single-page application is an application that loads a single HTML 
                                page and all the necessary assets (such as JavaScript and CSS) required
                                for the application to run. Any interactions with the page or subsequent
                                pages do not require a round trip to the server which means the page is
                                not reloaded.</p>
                            <hr className="my-4" />
                            <p>For more information visit react website.</p>
                            <a className="btn btn-warning btn-lg" href="http://reactjs.org" role="button">Learn more</a>
                        </div>
                    </div>            
                </div>
            </div>        
        )
    }
}

export default Home;