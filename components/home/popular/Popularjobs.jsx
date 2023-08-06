import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const router = useRouter
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {
          isLoading ? (<ActivityIndicator size='large' colors={COLORS.primary} />) : isError ? (<Text>Something Went Wrong</Text>) :
            <FlatList data={[1, 2, 3, 4, 5, 6]}
              renderItem={({ item }) => (
                <PopularJobCard item={item} />
              )} keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }} horizontal />
        }
      </View>
    </View>
  )
}

export default Popularjobs