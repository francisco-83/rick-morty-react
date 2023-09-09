import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function App() {
  
  const [index, setIndex] = useState(0);
  const {name, species, image, text} = people[index];

  const nextPerson = () => {
    setIndex( (currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    }) 
    
  }

  const prevPerson = () => {
    setIndex( (currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length ;
      return newIndex;
    } )
    
  }



  const randomPerson = () => {
    let randomNumber = Math.floor( Math.random() * people.length );
    console.log(randomNumber);
    if(randomNumber === index ) {
      randomNumber = index +1
    }
    const newIndex  = randomNumber % people.length;
    setIndex(newIndex)
  }

  return (
    <main>
    <div className='review'>
      <div className="img-container">
      <img className='person-img' src={image} alt={name} />
      </div>
      
      <h2 className='actor'>{name}</h2>
      <h5 className='species'>{species}</h5>
      <p className='info'>{text}</p>
      <div className='btn-container'>
      <button className='btn prev-btn' onClick={prevPerson}> <FaChevronLeft /> </button>
      <button className='btn next-btn' onClick={nextPerson}> <FaChevronRight /> </button>
      </div>
      <button className='btn' onClick={randomPerson}> Random</button>


    </div>
    </main>
    
  )
}

export default App
