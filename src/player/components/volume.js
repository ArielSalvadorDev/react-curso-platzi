import React from 'react'
import VolumeIcon from '../../icons/components/volume'
import './volume.css'
const Volume = props => {
    return(
        <button className="Volume">
            <VolumeIcon 
                color="white"
                size={25}
            />
            <div className="Volume-range">
                <input 
                    type="range" 
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolume}
                />
            </div>
        
        </button>
    )
}
export default Volume