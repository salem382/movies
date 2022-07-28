import { useEffect, useContext } from 'react';
import {movContext} from '../../context/moviesContext'

const People = () => {

   const {person, getData, setPErson } = useContext(movContext)
    useEffect(() => {

        getData('person', setPErson);
    },[])
    return (
        <div>
            <div className='container-fluid'>
                <div className='row mt-5'>
                        <div className='col-md-4'>
                            <p className='fs-2'>Trending <br/> People </p>
                        </div>
                            {person.map((item, ind) => <div key={ind} className='col-md-2 text-center position-relative'>
                                <img src={'https://image.tmdb.org/t/p/w500/'+item.profile_path} className='w-100' alt=''/>
                                <p>{item.name}</p>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default People;