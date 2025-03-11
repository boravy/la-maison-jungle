import '../styles/Categories.css'

function Categories({setActiveCategory, categories, activeCategory}) {
    return (
        <div className='lmj-categories'>
            <select className='lmj-categories-select' name='categories' id='category-select' 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
            >
                {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                <option value=''>---</option>
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
       
    )
}

export default Categories