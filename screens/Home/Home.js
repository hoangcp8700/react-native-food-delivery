import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { dummyData, SIZES } from '../../constants'

import {
  Search,
  MenuType,
  Recommend,
  Popular,
  FoodCategories,
  Delivery,
} from '../../components/Home'
import { CardHorizontal } from '../../components/Card'

import FilterModal from './FilterModal'

const Home = () => {
  const [selectCategory, setSelectCategory] = useState(1)
  const [selectType, setSelectType] = useState(1)
  const [menuRecommend, setMenuRecommend] = useState([])
  const [menuPopular, setMenuPopular] = useState([])
  const [menuList, setMenuList] = useState([])

  const [isFilter, setIsFilter] = useState(false)

  useEffect(() => {
    handleChangeCategory(selectCategory, selectType)
  }, [selectCategory, selectType])

  const handleChangeCategory = (categoryID, menuTypeID) => {
    // menuList
    const selectedMenu = dummyData.menu.find(m => m.id === menuTypeID)
    const newMenuList = selectedMenu?.list.filter(item =>
      item.categories.includes(categoryID)
    )

    // recommend
    const getMenuRecommend = dummyData.menu.find(m => m.name === 'Recommended')
    const newRecommend = getMenuRecommend?.list.filter(item =>
      item.categories.includes(categoryID)
    )

    // popular
    const getMenuPopular = dummyData.menu.find(m => m.name === 'Popular')
    const newPopular = getMenuPopular?.list.filter(item =>
      item.categories.includes(categoryID)
    )

    setMenuList(newMenuList)
    setMenuRecommend(newRecommend)
    setMenuPopular(newPopular)
  }

  const handleChangeType = typeID => setSelectType(typeID)

  const handleChangeSelectCategory = categoryID => {
    setSelectCategory(categoryID)
    handleChangeCategory(categoryID, selectType)
  }

  const handleToggleFilter = () => setIsFilter(!isFilter)

  return (
    <View style={styles.root}>
      <Search onPress={() => handleToggleFilter()} />

      {/* filter */}

      {isFilter && <FilterModal open={isFilter} onClose={handleToggleFilter} />}

      {/* list */}
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        ListHeaderComponent={
          <View>
            {/* Delivery */}
            <Delivery />
            {/* food category */}
            <FoodCategories
              categories={dummyData.categories}
              selectCategory={selectCategory}
              handleChangeSelectCategory={handleChangeSelectCategory}
            />
            {/* Recommend */}
            <Recommend menuRecommend={menuRecommend} />
            {/* poplular */}
            <Popular menuPopular={menuPopular} />
            {/* menuType */}
            <MenuType
              selectType={selectType}
              handleChangeType={handleChangeType}
            />
          </View>
        }
        ListFooterComponent={
          // minus height footer
          <View style={{ height: 200 }} />
        }
        renderItem={({ item }) => (
          <CardHorizontal
            item={item}
            containerStyle={{
              height: 130,
              alignItems: 'center',
              marginHorizontal: SIZES.padding,
              marginBottom: SIZES.radius,
            }}
            imageStyle={{ marginTop: 20, width: 110, height: 110 }}
            onPress={() => console.log('CLICK')}
          />
        )}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
