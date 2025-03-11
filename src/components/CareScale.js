import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function handleClick({scaleValue, careType}) {
	const quantityLabel = {
		1: 'peu',
		2: 'modérément',
		3: 'beaucoup'
	}
	const scaleType = careType === 'light' ? 'de lumière' : 'd\'arrosage'
	alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${scaleType}`)
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? <img src={sun} alt='sun-icon' /> : <img src={water} alt='water-icon' />

	return (
		<div onClick={() => handleClick({scaleValue, careType})}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale