import React from 'react';
import './widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets-article">
            <div className="widgets-article-left">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets-article-right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets-header">
            <h2>News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Hidden Catnip Stash Found", "Top news - 10000+ readers")}
        {newsArticle("Price of Yarn Increases", "Top news - 9582 readers")}

    </div>

  )
}

export default Widgets