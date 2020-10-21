import React from 'react';

function LoggedInAs({ loggedInAs }) {

    return (
        <>
            <div className="border rounded bg-white loggedInAs">{loggedInAs.msg}</div>
        </>
    )
}
export default LoggedInAs;