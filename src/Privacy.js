import React from 'react'
import './App.css'

function Privacy() {
    return(
        <div
            style={{
                // display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
            <body>
                <div id="content">
                    <iframe title='Privacy'
                            src="https://www.termsfeed.com/live/c27e852e-e4a1-4188-8429-ac9058a90a41"
                            width="100%"
                            height="100%"
                            framborder="0" />
                </div>
            </body>
        </div>
    )
}

export default Privacy