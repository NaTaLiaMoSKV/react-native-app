import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "./DefaultPostsScreen";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";
import { Ionicons } from "@expo/vector-icons";

const NestedScreen = createStackNavigator()
const PostsScreen = () => {
    return (
        <NestedScreen.Navigator>
            <NestedScreen.Screen  options={{ headerShown: false }}  name='DefaultPosts' component={DefaultPostsScreen} />
            <NestedScreen.Screen options={{ headerBackTitle: ' ',  headerBackImage: () => (
                        <Ionicons name="arrow-back" size={20} color="#21212180"
                            style={{ marginLeft: 10, padding: 5, transform: [{ scaleX: 1.1 }] }}
                        />
            ),
            }} name='Map' component={MapScreen} />
            <NestedScreen.Screen options={{ headerBackTitle: ' ',  headerBackImage: () => (
                        <Ionicons name="arrow-back" size={20} color="#21212180"
                            style={{ marginLeft: 10, padding: 5, transform: [{ scaleX: 1.1 }] }}
                        />
            ),
            }} name='Comments' component={CommentsScreen} />
        </NestedScreen.Navigator>
   )
}

export default PostsScreen;