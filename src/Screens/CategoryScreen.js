import React, { useState } from 'react'
import { TouchableOpacity, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect, useDispatch } from 'react-redux'
import { SELECT_CATEGORY } from '../Store/application/CategoryScreen/constants'


const CategoryScreen = ({ category }) => {
    const dispatch = useDispatch()
    console.log('wow');

    const handleSetCategory = current => {
        dispatch({ type: SELECT_CATEGORY, current })
    }
    return (
        <ScrollView>
            {category.map(item => (<CategoryItem category={item} key={item.id} setCategory={handleSetCategory} />))}
        </ScrollView>
    )
}

const CategoryItem = ({ category, setCategory }) => {
    category.isSelected = category.isSelected || false

    let [cat, setCat] = useState(category)

    const onPress = () => {
        let current = { ...cat, isSelected: !cat.isSelected }
        setCategory(current)
        setCat(current)
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <ListItem
                key={cat.id + 'i'}
                leftAvatar={{ source: require('../Assets/img/icon.png') }}
                title={cat.WORD}
                subtitle={cat.RUS}
                checkBox={{
                    checked: cat.isSelected,
                    onPress
                }}
                bottomDivider
            />
        </TouchableOpacity>)
}

const mapStateToProps = state => {
    return { category: state.category }
}

export default connect(mapStateToProps, (e, e2) => {
    alert(e2)
    return e2
})(CategoryScreen)