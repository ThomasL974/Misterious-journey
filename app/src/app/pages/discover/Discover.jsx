import _ from 'lodash'
import React, { useEffect } from 'react'
import { getTravels } from '../../../core/services/travels/travel.service'
import CardTravel from '../../layout/shared/card/CardTravel'

const Discover = ({ travels, setTravels }) => {

    const fetchTravels = async () => {
        try {
            const data = await getTravels()
            setTravels(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTravels();
    }, [])
    return (
        <>
            <h1>Liste des voyages</h1>
            <div className="travels">
                {_.map(travels, (travel, key) => (
                    <CardTravel travel={travel} key={key}/>
                ))}
            </div>
        </>
    )
}

export default Discover