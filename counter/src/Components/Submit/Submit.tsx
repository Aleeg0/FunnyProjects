import React, {FC} from 'react';

interface SubmitProps {
    count: number;
    onClickGoBack: () => void;
}

const Submit: FC<SubmitProps> = ({count,onClickGoBack}) => {
    return (
        <div className="submitBox">
            <img src="/assets/success.svg" alt="Success"/>
            <h3>Successful!</h3>
            <p>Invites has been send to {count} user{count > 1 ? "s":""}.</p>
            <div className="backToMenuBtn">
                <button onClick={onClickGoBack}>Back</button>
            </div>
        </div>
    );
};

export default Submit;