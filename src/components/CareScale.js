import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function handleClick({scaleValue, careType}) {
	let sentence = 'Cette plante requiert '
	switch (scaleValue) {
		case 1:
		  sentence = sentence.concat('peu ')
		  break;
		case 2:
		  sentence = sentence.concat('modérement ')
		  break;
		case 3:
		  sentence = sentence.concat('beaucoup ')
		  break;
		default:
		  sentence = sentence.concat('')
	}
	const scaleType = careType === 'light' ? 'de lumière' : 'd\'arrosage'
	alert(sentence.concat(scaleType))
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