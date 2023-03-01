import PetsListNav from './PetsListNav'
import Pet from './Pet'
import './PetsList.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
export const PetsList = ({ pets }) => {
  const navigate = useNavigate()
  let { id } = useParams()
  console.log(id)
  useEffect(() => {
    if (!id) {
      navigate('/pets/cats')
    } else if (id !== 'cats' && id !== 'dogs' && id) {
      navigate('/error')
    }
  })

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === 'Cat' ? 0 : 1
      acc[position].push(pet)
      return acc
    },
    [[], []]
  )

  return (
    <section className='pets-wrapper'>
      <PetsListNav cats={cats} dogs={dogs} />
      <section className='pets-list'>
        {/* All cats section */}
        {id === 'cats' || !id
          ? cats.map(cat => <Pet key={cat.id} kind='cat' pet={cat} />)
          : null}

        {/* All dogs section */}
        {id === 'dogs' || !id
          ? dogs.map(dog => <Pet key={dog.id} kind='dog' pet={dog} />)
          : null}
      </section>
    </section>
  )
}

export default PetsList
