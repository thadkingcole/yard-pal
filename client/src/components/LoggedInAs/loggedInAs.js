import React from 'react';

function LoggedInAs({ loggedInAs }) {

    return (
        <>
            <div className="loggedInAs">logged in as:</div>
            <div>
                <span className="border rounded p-1 bg-white">{loggedInAs.msg}</span>
            </div>


        </>
    )
}
export default LoggedInAs;