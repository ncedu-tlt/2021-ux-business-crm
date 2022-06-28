import React from 'react';
import './additionalinfo.component.css';
import ReactPlayer from 'react-player';

const AdditionalInfo = () => {
    return (
        <div className='wrapper'>
            <div className='info'>
                <h1>Что такое дополненная реальность?</h1>
            </div>
            <div className='video'>
                <ReactPlayer  url="https://youtu.be/cNStlZljJIc" controls={true} />
            </div>
            <div className='description'>
                <div className='description__1'>Вы можете ознакомиться с новой технологией AR в этом видео</div>

            </div>
        </div>
    )
}

export default AdditionalInfo