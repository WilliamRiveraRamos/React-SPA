import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card mt-4">
                            <div className="card-body">
                                <h1>About Page</h1>
                                <p>A <b>S</b>ingle-<b>P</b>age <b>A</b>pplication (SPA) made with React, React Router, and Bootstrap.</p>
                                <ul>
                                    <li>Version: 0.0.2</li>
                                    <li>React: 16.8.6</li>
                                    <li>React Router: 5.0.0</li>
                                    <li>Node: 10.15.2</li>
                                    <li>Bootstrap: 4.1.3</li>
                                    <li>Github: <a href="https://github.com/WilliamRiveraRamos/React-SPA">Repository</a></li>
                                </ul>                                
                            </div>                            
                        </div>                    
                    </div>
                </div>            
            </div>
        )
    }
}

export default About;