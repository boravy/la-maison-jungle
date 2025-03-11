import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem ({name, cover, id, light, water}) {
    return (
        <div>
            <img src={cover} alt='cover' className='lmj-plant-item-cover' />
            <li key={id} className='lmj-plant-item'>
						{ /*plant.isBestSale && <span>🔥</span> */}
						{name}
						<CareScale careType='water' scaleValue={water} />
						<CareScale careType='light' scaleValue={light} />
        </li>
        </div>
       
    )
}

export default PlantItem