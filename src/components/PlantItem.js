import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem ({name, cover, id, light, water}) {
    return (
            <li key={id} className='lmj-plant-item'>
                <img src={cover} alt='cover' className='lmj-plant-item-cover' />
                {name}
                <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
        </li>
    )
}

export default PlantItem