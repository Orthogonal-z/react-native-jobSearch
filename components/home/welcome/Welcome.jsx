import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'

import styles from './welcome.style'

const jobType = ['Full-Time', 'Part-Time', 'Contract']


const Welcome = () => {

  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState('Full-Time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Lingaa</Text>
        <Text style={styles.welcomeMessage}>FindJobs what your skills need</Text>
      </View>

      <View style={styles.searchContainer} >
        <View style={styles.searchWrapper} >
          <TextInput style={styles.searchInput} value='' onChange={() => { }} placeholder='Search Skill' />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View >

      <View style={styles.tabsContainer}>
        <FlatList data={jobType}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={() => {
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />

      </View>
    </View >
  )
}

export default Welcome