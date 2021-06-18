import React from "react";
import { FlatList } from "react-native";
import _ from "lodash";

const RLFlatList = (props) => {

    const {
        style,
        key,
        renderItem,
        numColumns,
        data,
        horizontal,
        ItemSeparatorComponent,
        ListEmptyComponent,
        ListFooterComponent,
        ListFooterComponentStyle,
        ListHeaderComponent,
        ListHeaderComponentStyle,
        columnWrapperStyle,
        extraData,
        getItemLayout,
        initialNumToRender,
        initialScrollIndex,
        inverted,
        keyExtractor,
        onEndReached,
        onEndReachedThreshold,
        onRefresh,
        refreshing,
        contentContainerStyle,
        pagingEnabled,
        fref,
        scrollEnabled
    } = props;

    return (
        <FlatList
            ref={fref}
            style={[style,]}
            scrollEnabled={!_.isUndefined(scrollEnabled) ? scrollEnabled : true}
            pagingEnabled={!_.isUndefined(pagingEnabled) ? pagingEnabled : false}
            contentContainerStyle={[contentContainerStyle,]}
            data={data}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={!_.isUndefined(horizontal) ? horizontal : false}
            numColumns={!_.isUndefined(numColumns) ? numColumns : 0}
            renderItem={({ item, index }) => renderItem({ item, index })}
            ItemSeparatorComponent={({ highlighted }) => ItemSeparatorComponent ? ItemSeparatorComponent({ highlighted }) : null}
            ListEmptyComponent={ListEmptyComponent ? ListEmptyComponent() : null}
            ListFooterComponent={ListFooterComponent ? ListFooterComponent() : null}
            ListFooterComponentStyle={ListFooterComponentStyle ? ListFooterComponentStyle() : null}
            ListHeaderComponent={ListHeaderComponent ? ListHeaderComponent() : null}
            ListHeaderComponentStyle={ListHeaderComponentStyle ? ListHeaderComponentStyle() : null}
            // columnWrapperStyle={[columnWrapperStyle ? columnWrapperStyle : { flex: 1 }]}
            extraData={extraData}
            // getItemLayout={({ data, index }) => getItemLayout ? getItemLayout({ data, index }) : null}
            initialNumToRender={initialNumToRender}
            initialScrollIndex={initialScrollIndex}
            inverted={inverted ? inverted : false}
            // keyExtractor={({ item, index }) => keyExtractor ? keyExtractor({ item, index }) : index}
            onEndReached={({ info }) => onEndReached ? onEndReached({ info }) : null}
            onEndReachedThreshold={onEndReachedThreshold ? onEndReachedThreshold() : null}
            onRefresh={() => !_.isUndefined(onRefresh) ? onRefresh() : null}
            refreshing={!_.isUndefined(refreshing) ? refreshing : false}
        />
    );
};
export default RLFlatList;