import React from 'react'
import { TouchableOpacity, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'


const CategoryScreen = (props) => {
    console.log('--->', props)
    return (
        <ScrollView>
            {
                getCategories(props)
            }
        </ScrollView>
    )
}

const getCategories = ({category}) => {

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
                leftAvatar={{ source: require('../Assets/img/icon.png') }}
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

const mapStateToProps = state => {
    console.log('CategoryScreen', state);
    return { category: state.category }
}

export default connect(mapStateToProps)(CategoryScreen)