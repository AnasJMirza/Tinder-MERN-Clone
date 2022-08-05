import React from 'react';
import './SwipeButtons.css'

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

const SwipeButtons = () => {
    return (
        <div className='swipe-buttons-container'>
            <IconButton className='swipe-button-replay'>
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className='swipe-button-left'>
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className='swipe-button-star'>
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className='swipe-button-right'>
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className='swipe-button-lightning'>
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    );
};

export default SwipeButtons;