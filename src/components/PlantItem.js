import CareScale from './CareScale'
import '../styles/PlantItem.css'


function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function PlantItem ({name, cover, id, light, water, price}) {
    return (
            <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
                <span className='lmj-plant-item-price'>{price}€</span>
                <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover' />
                {name}
                <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
        </li>
    )
}

export default PlantItem