import { useState, useEffect } from 'react';

const useVolunteers = () => {
    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        const url = `data.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setVolunteers(data))


    }, [])

    return [volunteers, setVolunteers]

}
export default useVolunteers;