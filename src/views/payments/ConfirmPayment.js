import React, { useEffect, useState } from 'react';
import FeedBack from 'views/feedBack';

export const SuccessPAyment = () => {
    const [showAlert, setshowAlert] = useState(false);
    useEffect(() => {
        setshowAlert((prevAlert) => !prevAlert);
    }, [setshowAlert]);

    return (
        <>
            <FeedBack message={'Payment Successfully Recieved'} setshowAlert={setshowAlert} showAlert={showAlert} goHome={true} />
        </>
    );
};
