import React from 'react';
import * as ReactDOM from 'react-dom';
import './additional_info.component.css';
import ReactPlayer from 'react-player';

const AdditionalInfo = () => {
    return (
        <div className='wrapper'>
            <div className='info'>
                <h1>О дополненной реальности пару слов</h1>
            </div>
            <div className='video'>
                {/* <video width="920" height="480" controls="true">
                    <source src="https://youtu.be/cNStlZljJIc" type="video/mp4" />
                </video> */}
                <ReactPlayer url="https://youtu.be/cNStlZljJIc" controls={true} />
            </div>
            <div className='description'>
                <div className='description_1'>Примерчик и его описание пару слов</div>
                <div className='description_2'>Примерчик и его описание пару слов</div>
                <div className='description_3'>Примерчик и его описание пару слов</div>
                <div className='description_4'>Примерчик и его описание пару слов</div>
            </div>
        </div>
    )
}

export default AdditionalInfo