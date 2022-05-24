import React from 'react';
import './additional_info.component.css';
import ReactPlayer from 'react-player';

const AdditionalInfo = () => {
    return (
        <div className='wrapper'>
            <div className='info'>
                <h1>О дополненной реальности пару слов</h1>
            </div>
            <div className='video'>
                <ReactPlayer url="https://youtu.be/cNStlZljJIc" controls={true} />
            </div>
            <div className='description'>
                <div className='description__1'>Примерчик и его описание пару слов</div>
                <div className='description__2'>Примерчик и его описание пару слов</div>
                <div className='description__3'>Примерчик и его описание пару слов</div>
                <div className='description__4'>Примерчик и его описание пару слов</div>
            </div>
        </div>
    )
}

export default AdditionalInfo