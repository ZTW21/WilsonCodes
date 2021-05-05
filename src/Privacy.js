import React from 'react'

function Privacy() {
    return(
        <div
            style={{
                display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
            <h1>Privacy Info</h1>
            <body>
                <iframe title='Privacy'
                        src="https://www.termsfeed.com/live/c27e852e-e4a1-4188-8429-ac9058a90a41"
                        width="400%"
                        height="95%" />
            </body>
        </div>
    )
}

export default Privacy