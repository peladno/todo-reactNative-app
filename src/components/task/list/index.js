import { FlatList} from "react-native";
import { styles } from "./styles";

const ListItem = ({data, renderItem, keyExtractor}) => {
    return (
        <FlatList
            style={styles.listContainer}
            data={data}
            renderItem = {renderItem}
            keyExtractor={keyExtractor}
        />
    )
}

export default ListItem;