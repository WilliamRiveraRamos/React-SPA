import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div class="shadow mb-5 bg-white rounded">
                            <div className="card mt-4">
                                <div className="card-body">                            
                                    <main>
                                        <article>                                    
                                            <header>
                                                <h1>My First Post</h1>
                                                <small>
                                                    <time datetime="2008-02-14 20:00" className="text-muted">
                                                        Published: 2019-05-12 21:00</time>
                                                </small>
                                                <small>
                                                    <p className="text-muted">By: William Rivera</p>
                                                </small>
                                            </header>
                                            <p>
                                                Lorem ipsu dolor, ipsum vitae gravida susipit.
                                                Lorem ipsu dolor, ipsum vitae gravida susipit.
                                                Lorem ipsu dolor, ipsum vitae gravida susipit.
                                                Lorem ipsu dolor, ipsum vitae gravida susipit.
                                            </p>
                                            <p>
                                                Lorem ipsu dolor, ipsum vitae gravida susipit.
                                                Lorem ipsu dolor, ipsum vitae gravida susipit.
                                                Lorem ipsu dolor, ipsum vitae gravida susipit.                                               
                                            </p>
                                        </article>
                                    </main>                                   
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog;