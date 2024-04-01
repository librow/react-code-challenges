import { useState, useEffect } from 'react'

const getDogPic = async () => {
  const api = 'https://dog.ceo/api/breeds/image/random';
  const response = await fetch(api);
  const dog = await response.json();
  
  return dog.message;
}

export default function DogPics () {
  // API: https://dog.ceo/dog-api/
  const [dogPic, setDogPic] = useState('');

  useEffect(() => {
    getDogPic().then(pic => setDogPic(pic));
  }, [])

  return (
    <div className='dog-pics'>
      <img src={dogPic} alt='dog pic' />
      <button onClick={async e => setDogPic(await getDogPic())}>🐶</button>
    </div>
  )
}
