import React, { useState, useContext } from 'react'
import { TouchableOpacity, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Context } from '../App.js'


export default CategoryScreen = () => {
    return (
        <ScrollView>
            {
                getCategories()
            }
        </ScrollView>
    )
}

const getCategories = () => {
    // const { state, setState } = useContext(Context)
    // const { category } = state
    const  category  =  require('../assets/json/cat.json')
    // console.log('state', state);

    const handleSetCategory = current => { 
        // category[current.id] = current
        // setState({ ...state, category }) 
    }
    return category.map(item => (<CategoryItem category={item} key={item.id} setCategory={handleSetCategory} />))
}


const CategoryItem = ({ category, setCategory }) => {
    category.isSelected = category.isSelected || false

    const onPress = () => {
        setCategory({ ...category, isSelected: !category.isSelected })
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <ListItem
                key={category.id + 'i'}
                leftAvatar={{ source: require('../assets/img/icon.png') }}
                title={category.WORD}
                subtitle={category.RUS}
                checkBox={{
                    checked: category.isSelected,
                    onPress
                }}
                bottomDivider
            />
        </TouchableOpacity>)
}