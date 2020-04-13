import React from 'react';
import { 
    FBButton
} from './HeaderFeedback.styled';

const HeaderFeedback = ({plusFeedBack}) => {
    const addGoodFB = () => {
        plusFeedBack('good')
    };
    const addNeutralFB = () => {
        plusFeedBack('neutral')
    };
    const addBadFB = () => {
        plusFeedBack('bad')
    };

    return <>
            <FBButton onClick={addGoodFB}>Good</FBButton>
            <FBButton onClick={addNeutralFB}>Neutral</FBButton>
            <FBButton onClick={addBadFB}>Bad</FBButton>
    </>
};

export default HeaderFeedback;