<ScrollView bounces={false} style={{alignSelf:'center'}}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{
                        marginTop: 10,
                        width: BaseStyle.DEVICE_WIDTH * 0.95,
                        height: BaseStyle.DEVICE_HEIGHT * 0.8,
                    }}>
                        <FlatList
                            data={chatList}
                            renderItem={({ item }) => (
                                <RenderChatList data={item} />
                                )}
                            keyExtractor={item => item.id}
                        />
                        {/* {chatList.map( (each) => {
                            return (
                                <RenderChatList data={each} key={each.id }/>
                            )
                        })

                        } */}
                    </View>
                    <View style={{
                        width: BaseStyle.DEVICE_WIDTH * 0.9,
                        flexDirection: 'row',
                        borderRadius: 28,
                        backgroundColor: '#F2F2F2',
                        alignItems: 'center',
                        marginBottom: 20,
                        
                    }}>
                        <TouchableOpacity style={{
                            position: 'absolute',
                            left: 8,
                        }}
                            onPress={()=>handleAddAttachment()}
                        >
                            <Image source={Images.addPost} style={{
                            height: 25,
                            width: 25
                        }} />
                        </TouchableOpacity>
                        
                        <TextInput
                            placeholder='Write Something'
                            onChangeText={( text ) => {setMessageText( text )}}
                            value={messageText}
                            style={{
                                width: BaseStyle.DEVICE_WIDTH * 0.5,
                                marginLeft:50
                            }}

                        />
                        <TouchableOpacity style={{
                            position: 'absolute',
                            right: 8,
                        }}
                            disabled={messageText.length == 0}
                            onPress={()=>handleSend()}
                        >
                            <Image source={Images.campusSend} style={{
                            height: 25,
                            width: 25
                        }} />
                        </TouchableOpacity>
                    </View>

                    
                    
                </ScrollView>