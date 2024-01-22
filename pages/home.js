import {View, Text, ScrollView, } from 'react-native'

const Home = () => {
    return(<ScrollView>
        <View>
            <View>
                <Text>Home</Text>
            </View>
            <View>
                <Text>My Account</Text>
            </View>
            <View>
                <Text>Rank</Text>
            </View>
            <View>
                <Text>My Questions</Text>
            </View>
            <View>
                <Text>News Feed</Text>
            </View>
        </View>
    </ScrollView> )
}

export default Home