import React, { useState } from 'react'

const initialState = {
    car: [],
    total: 0,
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCar = (payload) => {
        setState({
            ...state,
            car: [...state.car,payload],
            total: state.total + payload.price
        })
    }

    // const remove_from_car = (payload, index_value) => {
    //     setState({
    //         ...state,
    //         car: state.car.filter((items, index) => items.id != payload.id && index != index_value ),
            
    //     })
    // }

    const remove_from_car = (payload, indexValue) => {
        setState({
            ...state,
            car: state.car.filter(
                (item, index) => item.id != payload && index != indexValue
                ),
            total: state.total - payload.price
            });
        };
        
    return {
        state,
        addToCar,
        remove_from_car
    }
}

export default useInitialState