import React, {useEffect,useState} from 'react';
import axios from 'axios'
import '../App.css'


const CharacterCard = ({url}) => {


    const [characterInfo , setCharacterInfo ] = useState({})

    useEffect(()=>{
        axios.get(url)
            .then(res=> setCharacterInfo(res.data))
        },[])
    console.log(characterInfo)
    
    const characterName = characterInfo.name
    const origin = characterInfo.origin?.name
    const episodes = characterInfo.episode?.length
    const status = characterInfo.status
    const characterImg = characterInfo.image
    
    return (
        <div className='container-card'>
            <h2 className='character-name'>{characterName} </h2>
            <div className='img-info'>
                <img src={characterImg} alt="Character image" className='character-images'/>
                <div>
                    
                    <div className='text-card'>
                        <p className='p-text origin'>Origin:</p>
                        <p className='p-description'>{origin}</p>
                    </div>
                    <div className='text-card'>
                        <p className='p-text status'>Status:</p>
                        <div className='status-complete status'>



                    {
                    status === 'Dead' 
                    ? (
                        <b className='p-description p-status-dead'>{status}</b>
                    ) : status === 'Alive'
                    ? (
                        <b className='p-description p-status-alive'>{status}</b>
                    ) : <b className='p-description p-status-unknown'>{status}</b>
                    }

                    {
                    status === 'Dead' 
                    ? (
                        <div className='status-dead'></div>
                    ) : <div className='status-alive'></div>
                    }


                        </div>
                    </div>
                    <div className='text-card'>
                        <p className='p-text'>Number of episodes:</p>
                        <p className='p-description episodes'>{episodes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;