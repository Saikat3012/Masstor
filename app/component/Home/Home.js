import React, { Fragment, useEffect, useState } from "react";
import { Platform, Alert, alert, ImageBackground, View, Image, Text, KeyboardAvoidingView, BackHandler, StatusBar, SafeAreaView, TouchableWithoutFeedback, FlatList, TouchableOpacity, ScrollView, Modal } from "react-native";
import { connect, useDispatch, useSelector } from 'react-redux';
import ENV from 'env/index';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import Images from "constants/Images";
import { STANDARDTYPE, BOARDTYPE, LEARINGMODETYPE } from 'constants/Enum';
import BaseText from "constants/BaseText";
import buttonStyle from 'theme/component/ButtonStyle';
import viewstyle from 'theme/component/ViewStyle';
import Tooltip from 'react-native-walkthrough-tooltip';
import LottieView from 'lottie-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { consoleLog } from 'utils/console';
import {
    RLText,
    RLTextInput,
    RLButton,
    RLHeader,
    RLRoundList,
    RLSchoolInfoList,
    RLStandardModal,
    RLSchoolSearchModal,
    RLNoInternet,
    RLProcessTimelineItem,
    RLCustomizeSearchList,
    RLAutoComplete
} from 'basecomponent';
import PreviousBlue from 'assets/svg/previousBlue';
import Fillter from 'assets/svg/fillter';
import Autocomplete from 'react-native-autocomplete-input';

import { GetAllSchools, GetAllSchoolListByFilter, GetSchoolByName, CreateFavouriteSchool, DeleteFavouriteSchool } from 'action/user';
import _ from 'lodash';

let LocalUserId = "";

function findMovie(query, schoolsList) {
    if (query === '') {
        return [];
    }

    const regex = new RegExp(`${query.trim()}`, 'i');
    return schoolsList.filter((school) => school.name.search(regex) >= 0);
} //6
function comp(a, b) {
    return a.toLowerCase().trim() === b.toLowerCase().trim();
}


const Home = ({ navigation, props, state }) => {
    // const { routes } = state;
    let fieldSearchRef = React.createRef();
    let fieldSearchModalRef = React.createRef();

    const dispatch = useDispatch(); //Store Redux value using useDispatch
    const getUserLoginToken = useSelector(state => state.user.ReduxOtpToken)
    const getSelctedCityValue = useSelector(state => state.user.ReduxSelectedCity)
    const getLoctionTypeValue = useSelector(state => state.user.ReduxLocationType)
    const getLoctionCurrentValue = useSelector(state => state.user.ReduxCurrentCity)
    //    Home Screen Redux Value
    const getStandardHomeValue = useSelector(state => state.user.ReduxSelctedStdTypeHome)
    const getBoardTypeHomeValue = useSelector(state => state.user.ReduxSelctedBoardTypeHome)
    const getLearingModeTypeHomeValue = useSelector(state => state.user.ReduxSelctedLearingModeTypeHome)
    const getSearchSchooolNameValue = useSelector(state => state.user.ReduxSearchSchoolNameHome)

    const SchoolTypeDataList = [
        { id: 1, title: 'All', value: BOARDTYPE.ALL },
        { id: 2, title: 'CBSE', value: BOARDTYPE.CBSE },
        { id: 3, title: 'CISCE', value: BOARDTYPE.CISCE },
        { id: 4, title: 'IGCSE', value: BOARDTYPE.IGCSE },
        { id: 5, title: 'IB', value: BOARDTYPE.IB },
        { id: 6, title: 'State Board', value: BOARDTYPE.STATEBOARD },
        { id: 7, title: 'GSEB', value: BOARDTYPE.GSEB }
    ]
    const StandardDataList = [
        { id: 1, title: 'Nur', value: STANDARDTYPE.NUR },
        { id: 2, title: 'KG', value: STANDARDTYPE.KG },
        { id: 3, title: 'I', value: STANDARDTYPE.I },
        { id: 4, title: 'II', value: STANDARDTYPE.II },
        { id: 5, title: 'III', value: STANDARDTYPE.III },
        { id: 6, title: 'IV', value: STANDARDTYPE.IV },
        { id: 7, title: 'V', value: STANDARDTYPE.V },
        { id: 8, title: 'VI', value: STANDARDTYPE.VI },
        { id: 9, title: 'VII', value: STANDARDTYPE.VII },
        { id: 10, title: 'VIII', value: STANDARDTYPE.VIII },
        { id: 11, title: 'IX', value: STANDARDTYPE.IX },
        { id: 12, title: 'X', value: STANDARDTYPE.X },
        { id: 13, title: 'XI', value: STANDARDTYPE.XI },
        { id: 14, title: 'XII', value: STANDARDTYPE.XII }
    ]
    const LearingDataList = [
        { id: 1, title: 'Online', value: LEARINGMODETYPE.ONLINE },
        { id: 2, title: 'Offline', value: LEARINGMODETYPE.OFFLINE },
        { id: 3, title: 'Both', value: LEARINGMODETYPE.BOTH },
    ]

    const [SchoolInfoDataList, setSchoolInfoDataList] = useState([])
    const [BoardTypeSchoolInfoDataList, setBoardTypeSchoolInfoDataList] = useState([])
    const [nearestschoolInfoDataList, setNearestschoolInfoDataList] = useState([])
    const [trendingSchoolInfoDataList, setTrendingSchoolInfoDataList] = useState([])
    const [searchSchoolNameDataList, setSearchSchoolNameDataList] = useState([])//For Serach SchoolName 
    const [query, setQuery] = useState(''); //search School 
    const [fullData, setFullData] = useState([]); //temp for search schoollist Data
    const [showSearchSchool, setShowSearchSchool] = useState(false); //temp for search schoollist Data
    const [selectedSchoolId, setSelectedSchoolId] = useState(''); //temp for search schoollist Data

    const [favUpdate, setFavupdate] = useState(false);

    //AutoComplte Input
    const [allSchoolList, setAllSchoolList] = useState([]);//2
    // const [query, setQuery] = useState('');//3
    const schoolsList = findMovie(query, allSchoolList);//5

    const FillterDataList = [
        { id: 1, key: 'Relevance', isSelected: false },
        { id: 2, key: 'Price - Low to High', isSelected: false },
        { id: 3, key: 'Price High to Low', isSelected: false },
        { id: 4, key: 'Seat availablity', isSelected: false },
        { id: 5, key: 'Admission ongoing', isSelected: false },
    ]

    const SchoolTpDataList = [
        { id: 1, title: 'Private' },
        { id: 2, title: 'Private Aided' },
        { id: 3, title: 'Govt' },
    ]
    const SchoolFormatDataList = [
        { id: 1, title: 'Girls only' },
        { id: 2, title: 'Boys only' },
        { id: 3, title: 'Both' },
    ]
    const CdStatusDataList = [
        { id: 1, title: 'Day School' },
        { id: 2, title: 'Boarding School' },
        { id: 3, title: 'Day Boarding School' },
        { id: 4, title: 'Disabled Friendly School' },
    ]
    const LanguageDataList = [
        { id: 1, title: 'English' },
        { id: 2, title: 'Hindi' },
    ]
    const CustomizeDataList = [
        { id: 1, title: 'Top Rated', Img: Images.sRated },
        { id: 2, title: 'Popular', Img: Images.sPopular },
        { id: 3, title: 'Ongoing Admissions', Img: Images.sOngongingAdd },
        { id: 4, title: 'Discover Localities', Img: Images.mapWhite },
    ]

    const [selectedStdfromModal, setSelectedStdfromModal] = useState() //Select School Type
    const [selectedSchool, setSelectedSchool] = useState('') //Select School Type
    const [toolTipBoardType, setToolTipBoardType] = useState(false); //show toolTip
    const [toolTipVisibleFilter, setToolTipVisibleFilter] = useState(false); //show toolTip
    const [SelectedFilterType, setSelectedFilterType] = useState(''); //show toolTip
    const [SelectedBoardType, setSelectedBoardType] = useState(''); //show toolTip
    const [toolTipVisibleListIcon, setToolTipVisibleListIcon] = useState(false); //show toolTip
    // const [showStandardModal, setShowStandardModal] = useState(true); //show Sucess mOdal
    const [showStandardModal, setShowStandardModal] = useState(false); //show Sucess mOdal
    const [showsearchModal, setShowsearchModal] = useState(false); //show Sucess mOdal
    const [showAdvanceSearchModal, setShowAdvanceSearchModal] = useState(false); //show Sucess mOdal
    const [load, SetLoad] = useState(true);
    const [seeMoreNearSchool, setSeeMoreNearSchool] = useState(false);
    const [seeMoreForYou, setSeeMoreForYou] = useState(false);

    const [SelectedSchoolType, setSelectedSchoolType] = useState(BOARDTYPE.ALL) //Select Board Type
    const [selectedSchoolTypeName, setSelectedSchoolTypeName] = useState('ALL') //Select Board Type
    const [search, setSearch] = useState('');
    const [isTopRated, setIsTopRated] = useState(true);//show top School
    const [isPopular, setIsPopular] = useState(true);//show populor School
    const [isSchoolNearYou, setIsSchoolNearYou] = useState(true);//show near School
    const [isNormalSearch, setIsNormalSearch] = useState(false);//show normal School
    const [isBoardType, setIsBoardType] = useState(true);//show boardType School

    const [showSugesstion, setShowSugesstion] = useState(false);//show boardType School
    const [userId, setUserId] = useState(0);//set Login userId
    const [isuserLogin, setIsuserLogin] = useState(false);//local
    const [loginusertoken, setLoginusertoken] = useState();//local
    const [cityId, setCityId] = useState(0);//set Login userId
    const [cityName, setCityName] = useState();//set Login userId

    // const backAction = () => {
    //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
    //         {
    //             text: "Cancel",
    //             onPress: () => null,
    //             style: "cancel"
    //         },
    //         { text: "YES", onPress: () => BackHandler.exitApp() }
    //     ]);
    //     return true;
    // };
    // useEffect(() => {
    //     BackHandler.addEventListener("hardwareBackPress", backAction);

    //     return () =>
    //         BackHandler.removeEventListener("hardwareBackPress", backAction);
    // }, [])
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to go back?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', (e) => {
            // Prevent default behavior
            // e.preventDefault();
            _getAllSchoolListByFilterAPI()


            // Do something manually
            // ...
        });

        return unsubscribe;

    }, [])
    useEffect(() => {
        console.log("pppp");
        // consoleLog("11----->", selectedStdfromModal)
        // setShowStandardModal(true)
        // Remove Of 5 Second
        // _getAllSchoolListByFilterAPI()
        // setTimeout(() => {
        //     setShowStandardModal(true)
        // }, 2500);
        // console.log("-------sss>", allSchoolList);
        const timeout = setTimeout(() => {
            setShowStandardModal(false)
        }, 5000);
        return () => clearTimeout(timeout);

    }, [trendingSchoolInfoDataList, selectedStdfromModal, search, SelectedSchoolType])

    useEffect(() => {
        console.log("ooooo", selectedSchoolId);
        _checkUserLogin()
        _getAllSchoolListByFilterAPI()
        setTimeout(() => {
            SetLoad(false);
        }, 1000);
        // setTimeout(() => {
        //     setShowStandardModal(true);
        // }, 1000);

    }, [SelectedSchoolType, selectedStdfromModal, userId, cityName, cityId])



    useEffect(() => {
        _initSetup();
    }, [])

    const _initSetup = () => {
        _getAllSchoolListByFilterAPI();
    }
    //Initial Setup Method

    //Set Schools UseEffect
    // useEffect(() => {
    //     // console.log("school info set");
    //     setTimeout(() => {
    //         SetLoad(false);
    //     }, 1000);
    // }, [])
    //Set Schools UseEffect

    //================================ Start common Function ===========================================
    // //Check user is login or not
    const _checkUserLogin = async () => {
        const isUserLogin = await AsyncStorage.getItem('LoginUserAsync');


        // setUserlogin(isUserLogin)
        console.log("Async Value on Api js", typeof isUserLogin);
        if (isUserLogin == null || isUserLogin == 'null') {
            setUserId(0)
            setIsuserLogin(false)
        }
        else {
            //Login user Data
            const jsonPassvalue = JSON.parse(isUserLogin);
            console.log("vv", jsonPassvalue.userId);
            setUserId(jsonPassvalue.userId)
            setIsuserLogin(true)

            //Login user Token
            const getLoginuserAsyncToken = await AsyncStorage.getItem('LoginUserAsyncToken');
            setLoginusertoken(getLoginuserAsyncToken)

            //Login user selectedCity
            const getAsyncSelectedCity = await AsyncStorage.getItem('LoginUserSelectedCityAsync');
            const jsonPassCityvalue = JSON.parse(getAsyncSelectedCity);
            setCityId(jsonPassCityvalue.id)
            setCityName(jsonPassCityvalue.cityName)
            console.log("jsonPassCityvalue", jsonPassCityvalue);
            console.log("Login Selected City", getAsyncSelectedCity);

            //Login user Token
            const getLoginuserAsyncSelctedStandard = await AsyncStorage.getItem('LoginUserSelectedStandardAsync');
            if (getLoginuserAsyncSelctedStandard == null || getLoginuserAsyncSelctedStandard == 'null') {
                setShowStandardModal(true)
            }
            else {
                setShowStandardModal(false)
                console.log("ttttt", getLoginuserAsyncSelctedStandard);
                setSelectedStdfromModal(getLoginuserAsyncSelctedStandard)
            }
            // setLoginusertoken(getLoginuserAsyncToken)

        }
    }


    //Get All Schools Info
    const _GetAllSchools = () => {
        SetLoad(true)
        try {
            GetAllSchools({}, (result) => {
                if (result.success) {
                    // console.log(result.result)
                    var res = result.result;
                    // console.log(res);
                    setSchoolInfoDataList(res.items)
                }
                else {
                    SetLoad(false);
                }
            })
        }
        catch (e) {
            SetLoad(false)
            console.log(e);
        }
    }
    //Get All Schools Info

    //OnChange TextInput
    const _onChangeTextField = (value, type) => {
        switch (type) {
            case 'search':
                setShowsearchModal(true)
                _getSchoolNameFromSearch()
                break;
            case 'searchSchoolName':
                _handleSearch(value)
                // setShowsearchModal(true)
                // _getSchoolNameFromSearch()
                break;

            default:
                break;
        }
    }

    //Submit On TextInput
    const _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
    }

    //Onclick School Type
    const _onClickSchoolType = (item) => {
        // this.setState({ SelectedSchoolType: item.id })
        setSelectedSchoolTypeName(item.title)
        setSelectedSchoolType(item.value)
        // _getAllSchoolListByFilterAPI()
    }

    const _onSeeMore = (parms) => {
        switch (parms) {
            case 1:
                // alert("ji")
                setSeeMoreNearSchool(!seeMoreNearSchool)

                break;
            case 2:
                dispatch({
                    type: 'FilterSchooList_Type',
                    data: 'Schools For You'
                })
                dispatch({
                    type: 'FilterSchool',
                    data: SchoolInfoDataList
                })
                console.log("Schoollllll------>", SchoolInfoDataList);
                navigation.navigate('SchoolForYou')
                // alert(parms)

                // alert("ji")
                // setSeeMoreNearSchool(!seeMoreNearSchool)
                break;
            case 3:
                dispatch({
                    type: 'FilterSchooList_Type',
                    data: 'More CBSE Schools'
                })
                dispatch({
                    type: 'FilterSchool',
                    data: BoardTypeSchoolInfoDataList
                })
                navigation.navigate('SchoolForYou')
                // alert(parms)

                // alert("ji")
                // setSeeMoreNearSchool(!seeMoreNearSchool)
                break;
            case 4:
                dispatch({
                    type: 'FilterSchooList_Type',
                    data: 'Trending Schools'
                })
                dispatch({
                    type: 'FilterSchool',
                    data: trendingSchoolInfoDataList
                })
                navigation.navigate('SchoolForYou')
                // alert(parms)

                // alert("ji")
                // setSeeMoreNearSchool(!seeMoreNearSchool)
                break;
            default:
                break;
        }
    }

    //Standard Continue Botton------------------------>
    const _onPressStandardContinue = () => {
        _getAllSchoolListByFilterAPI()
        setShowStandardModal(false)
    }

    //Searching
    const _handleSearch = (text) => {
        const formattedQuery = text.toLowerCase();
        const formattedQueryU = text.toUpperCase();
        const filteredData = fullData.filter(user => {
            return contains(user, formattedQuery, formattedQueryU);
        });
        // const filteredData = fullData.filter(function (user) {
        //     return contains(user, formattedQuery);
        // });

        setSearchSchoolNameDataList(filteredData);
        console.log("earchSchoolNameDataList", searchSchoolNameDataList.length);
        setQuery(text);
    };

    const contains = ({ name }, query, formattedQueryU) => {
        // const { first, last } = name;

        if (name.includes(query) || name.includes(formattedQueryU)) {
            console.log("yes found");
            setShowSearchSchool(false)
            // console.log("name", name);
            return true;
        }
        else {
            console.log("not found");
            setShowSearchSchool(true)
            return false;
        }
        // console.log("fale", name);
    };

    const _onFocusSearchInputHome = () => {
        setShowsearchModal(true)
        _getSchoolNameFromSearch()
    }

    const _onClickSearchSchoolItem = ({ item, index }) => {
        setSearch(item.name)
        setShowSearchSchool(false)
        dispatch({
            type: 'Selected_School',
            data: item
        })
        navigation.navigate('SchoolDetail', { "id": item.schoolId })
        // setShowsearchModal(false)
        // _getAllSchoolListByFilterAPI()

        // if (showsearchModal == false) {
        //     dispatch({
        //         type: 'Selcted_SearchSchoolNameHome',
        //         data: item.name
        //     })
        // }
    }

    const _onClickAdvanceSerchItem = (item, parms) => {
        switch (parms) {
            case 1:
                dispatch({
                    type: 'Selcted_StdTypeHome',
                    data: item.value
                })
                break;
            case 2:
                dispatch({
                    type: 'Selcted_BoardTypeHome',
                    data: item.value
                })
                break;
            case 3:
                dispatch({
                    type: 'Selcted_LearingModeTypeHome',
                    data: item.value
                })
                break;
            // case 4:
            //     dispatch({
            //         type: 'Selcted_StdTypeHome',
            //         data: item.value
            //     })
            //     break;
            // case 5:
            //     dispatch({
            //         type: 'Selcted_StdTypeHome',
            //         data: item.value
            //     })
            //     break;
            // case 6:
            //     dispatch({
            //         type: 'Selcted_StdTypeHome',
            //         data: item.value
            //     })
            //     break;
            // case 7:
            //     dispatch({
            //         type: 'Selcted_StdTypeHome',
            //         data: item.value
            //     })
            //     break;

            default:
                break;
        }
    }

    const _onClickModalItem = (item) => {
        AsyncStorage.setItem('LoginUserSelectedStandardAsync', item.value.toString())
        setSelectedStdfromModal(item.value)
        setTimeout(() => {
            setShowStandardModal(false)
        }, 3000);
        // setShowStandardModal(true)
        // setShowStandardModal(false)
        //    above Comment line 15

        // console.log("Selcted Item Value", item.value);
        // alert(item.value)
        // _getAllSchoolListByFilterAPI()
    }

    const _onClickFaviourtSchool = (item, index, listtype) => {
        console.log("School Id", item.schoolId);
        setSelectedSchoolId(item.schoolId)
        if (isuserLogin) {
            if (item.isFavourite == true) {
                _deleteFavouriteSchoolAPI(item.schoolId, index, listtype)
            } else {
                _createFavioutAPI(item.schoolId, index, listtype)
            }
        }
        else {
            alert("You have to do login first")
        }

    }

    const _onClickSelectedSchool = (item) => {
        dispatch({
            type: 'Selected_School',
            data: item
        })
        navigation.navigate('SchoolDetail', { "id": item.schoolId })
    }

    //================================ API common Function ===========================================
    //Get All School List By Filter
    const _getAllSchoolListByFilterAPI = async () => {
        console.log("Current City Name", cityId, cityName);
        console.log("Selected Std from async", selectedStdfromModal);
        // console.log("get on api", selectedStdfromModal);
        // console.log("get on api schoolName", getSearchSchooolNameValue);

        // console.log("serach Value-->", search);
        // console.log("serach Value-->", SelectedSchoolType);
        // console.log("Redux value Of stadanred-->", getStandardHomeValue, getBoardTypeHomeValue, getLearingModeTypeHomeValue);

        SetLoad(true)
        const params = {
            PageIndex: 0,
            PageSize: 10,
            PageCount: 0,
            SearchText: search,
            BoardType: SelectedSchoolType,
            IsTopRated: isTopRated,
            IsPopular: isPopular,
            CityId: cityId,
            // CityId: getSelctedCityValue,
            IsSchoolNearYou: isSchoolNearYou,
            IsNormalSearch: isNormalSearch,
            IsBoardType: isBoardType,
            Standard: selectedStdfromModal,
            UserId: userId,
            // Standard: ''
        }
        // const params = {
        //     PageIndex: 0,
        //     PageSize: 10,
        //     PageCount: 0,
        //     SearchText: search,
        //     BoardType: SelectedSchoolType,
        //     IsTopRated: false,
        //     IsPopular: false,
        //     CityId: 1,
        //     // CityId: getSelctedCityValue,
        //     IsSchoolNearYou: false,
        //     IsNormalSearch: false,
        //     IsBoardType: false,
        //     Standard: selectedStdfromModal
        //     // Standard: ''
        // }
        console.log("parms-->", params);
        try {
            GetAllSchoolListByFilter(params, (result) => {
                console.log("Response on SchoolList-->", result);
                if (result.success) {
                    consoleLog("Response On Sucess SchoolList-->", result.success);
                    var res = result.result;

                    // console.log("Schhol For You", res);
                    // console.log(res.searchSchoolList);
                    // console.log(res.nearestSchoolList);
                    if (_.isNull(res.searchSchoolList)) {
                        searchSchoolList = [];
                    }
                    else {
                        setSchoolInfoDataList(res.searchSchoolList)
                    }
                    if (_.isNull(res.boardTypeSchoolList)) {
                        boardTypeSchoolList = [];
                    }
                    else {
                        setBoardTypeSchoolInfoDataList(res.boardTypeSchoolList)
                    }
                    if (_.isNull(res.nearestSchoolList)) {
                        nearestSchoolList = [];
                    }
                    else {
                        setNearestschoolInfoDataList(res.nearestSchoolList)
                    }
                    if (_.isNull(res.trendingSchoolList)) {
                        trendingSchoolList = [];
                    }
                    else {
                        setTrendingSchoolInfoDataList(res.trendingSchoolList)
                    }
                    var searchSchoolListArray = res.searchSchoolList.concat(res.boardTypeSchoolList, res.nearestSchoolList, res.trendingSchoolList);
                    // setAllSchoolList(searchSchoolListArray)
                    setSearchSchoolNameDataList(searchSchoolListArray)
                    setFullData(searchSchoolListArray);
                    // setMainJSON(res.searchSchoolList)
                    SetLoad(false)
                    // navigation.navigate('Otp');
                }
                else {
                    SetLoad(false)
                    consoleLog("Response Fail on  SchoolList");
                }
            })
        }
        catch (e) {
            SetLoad(false)
            console.log(e);
        }
    }

    //Api For get School Name and store in single Array
    const _getSchoolNameFromSearch = () => {
        SetLoad(true)
        const params = {
            PageIndex: 0,
            PageSize: 10,
            PageCount: 0,
            SearchText: search,
            BoardType: SelectedSchoolType,
            IsTopRated: isTopRated,
            IsPopular: isPopular,
            CityId: cityId,
            // CityId: getSelctedCityValue,
            IsSchoolNearYou: isSchoolNearYou,
            IsNormalSearch: isNormalSearch,
            IsBoardType: isBoardType,
            Standard: selectedStdfromModal
            // Standard: ''
        }
        try {
            GetAllSchoolListByFilter(params, (result) => {
                console.log("Response on Modal SchoolList -->", result);
                if (result.success) {
                    // consoleLog("Response On Modal Sucess SchoolList-->", result.success);
                    var res = result.result;
                    // console.log(" Response On Modal", res);
                    //Conacte Array
                    // var searchSchoolListArray = concatArray(res.searchSchoolList, res.boardTypeSchoolList);
                    var searchSchoolListArray = res.searchSchoolList.concat(res.boardTypeSchoolList, res.nearestSchoolList, res.trendingSchoolList);
                    // console.log("searchSchoolListArray---->", searchSchoolListArray);
                    setSearchSchoolNameDataList(searchSchoolListArray)
                    setFullData(searchSchoolListArray);
                    console.log("----->", searchSchoolNameDataList);
                    // console.log(res.searchSchoolList);
                    // setSchoolInfoDataList(res.searchSchoolList)
                    // setBoardTypeSchoolInfoDataList(res.boardTypeSchoolList)
                    // setNearestschoolInfoDataList(res.nearestSchoolList)
                    // setTrendingSchoolInfoDataList(res.trendingSchoolList)
                    SetLoad(false)
                    // navigation.navigate('Otp');
                }
                else {
                    SetLoad(false)
                    consoleLog("Response Fail on Modal SchoolList");
                }
            })
        }
        catch (e) {
            SetLoad(false)
            console.log
        }
    }

    const _createFavioutAPI = (schoolId, schoolIndex, listtype) => {
        SetLoad(true)
        const params = {
            "schoolId": schoolId,
            "token": isuserLogin ? loginusertoken : getUserLoginToken
        }
        console.log("parms on cretae Faviourt SChool");
        try {
            CreateFavouriteSchool(params, (result) => {
                console.log("Response on Create School -->", result);
                if (result.success) {
                    consoleLog("Response On Sucess-->", result.success);
                    if (listtype == 1) {
                        var newDataSchool = SchoolInfoDataList;
                        var newSchool = _.filter(newDataSchool, { 'schoolId': schoolId })
                        newSchool[0].isFavourite = true;
                        newDataSchool[schoolIndex] = newSchool[0]
                        setSchoolInfoDataList(newDataSchool)
                    }
                    if (listtype == 2) {
                        var newDataBSchool = BoardTypeSchoolInfoDataList;
                        var newBSchool = _.filter(newDataBSchool, { 'schoolId': schoolId })
                        newBSchool[0].isFavourite = true;
                        newDataBSchool[schoolIndex] = newBSchool[0]
                        setBoardTypeSchoolInfoDataList(newDataBSchool)

                    }
                    if (listtype == 3) {
                        var newDataTSchool = trendingSchoolInfoDataList;
                        var newTSchool = _.filter(newDataTSchool, { 'schoolId': schoolId })
                        newTSchool[0].isFavourite = true;
                        newDataTSchool[schoolIndex] = newTSchool[0]
                        setTrendingSchoolInfoDataList(newDataTSchool)

                    }

                    // // Board
                    // var newDataBSchool = BoardTypeSchoolInfoDataList;
                    // var newBSchool = _.filter(newDataBSchool, { 'schoolId': schoolId })
                    // newBSchool[0].isFavourite = true;
                    // newDataBSchool[schoolIndex] = newBSchool[0]


                    // var newDataSchool = SchoolInfoDataList.map(el => {
                    //     if (el.schoolId == selectedSchoolId)
                    //         return Object.assign({}, el, { isFavourite: true })
                    //     return el
                    // });
                    // var newDataBoard = BoardTypeSchoolInfoDataList.map(e1 => {
                    //     if (e1.schoolId == selectedSchoolId)
                    //         return Object.assign({}, e1, { isFavourite: true })
                    //     return e1
                    // });
                    // var newDataTrend = trendingSchoolInfoDataList.map(e2 => {
                    //     if (e2.schoolId == selectedSchoolId)
                    //         return Object.assign({}, e2, { isFavourite: true })
                    //     return e2
                    // });
                    // // SchoolInfoDataList.find(v => v.schoolId === selectedSchoolId).isFavourite = false;
                    // // BoardTypeSchoolInfoDataList.find(v => v.schoolId === selectedSchoolId).isFavourite = false;
                    // // trendingSchoolInfoDataList.find(v => v.schoolId === selectedSchoolId).isFavourite = false;

                    // setBoardTypeSchoolInfoDataList(newDataBSchool)
                    // console.log("newDataSchool------>", newDataSchool);
                    // setBoardTypeSchoolInfoDataList(newDataBoard)
                    // setTrendingSchoolInfoDataList(newDataTrend)
                    SetLoad(false)
                    setFavupdate(!favUpdate)

                }
                else {
                    SetLoad(false)
                    // setOtpStatus(OTP.FAIL);
                    // SetShowModal(false)
                    consoleLog("Response Fail on Mobile");
                }
            })
        }
        catch (e) {
            SetLoad(false)
            console.log(e);
        }
    }

    const _deleteFavouriteSchoolAPI = (schoolId, schoolIndex, listtype) => {
        SetLoad(true)
        const params = {
            "schoolid": schoolId,
            "token": isuserLogin ? loginusertoken : getUserLoginToken

        }
        console.log("parms on Delete Faviourt SChool", params);
        try {
            DeleteFavouriteSchool(params, (result) => {
                console.log("Response on Delete School -->", result);
                if (result.success) {
                    consoleLog("Response On Delete Favourite Sucess-->", result.success);
                    // var newDataSchool = SchoolInfoDataList;
                    // var newSchool = _.filter(newDataSchool, { 'schoolId': schoolId })[0]
                    // newSchool.isFavourite = false;
                    // newDataSchool[schoolIndex] = newSchool

                    if (listtype == 1) {
                        var newDataSchool = SchoolInfoDataList;
                        var newSchool = _.filter(newDataSchool, { 'schoolId': schoolId })
                        newSchool[0].isFavourite = false;
                        newDataSchool[schoolIndex] = newSchool[0]
                        setSchoolInfoDataList(newDataSchool)
                    }
                    if (listtype == 2) {
                        var newDataBSchool = BoardTypeSchoolInfoDataList;
                        var newBSchool = _.filter(newDataBSchool, { 'schoolId': schoolId })
                        newBSchool[0].isFavourite = false;
                        newDataBSchool[schoolIndex] = newBSchool[0]
                        setBoardTypeSchoolInfoDataList(newDataBSchool)

                    }
                    if (listtype == 3) {
                        var newDataTSchool = trendingSchoolInfoDataList;
                        var newTSchool = _.filter(newDataTSchool, { 'schoolId': schoolId })
                        newTSchool[0].isFavourite = false;
                        newDataTSchool[schoolIndex] = newTSchool[0]
                        setTrendingSchoolInfoDataList(newDataTSchool)

                    }













                    // var newDataSchool = SchoolInfoDataList.map(el => {
                    //     if (el.schoolId == selectedSchoolId)
                    //         return Object.assign({}, el, { isFavourite: false })
                    //     return el
                    // });
                    // var newDataBoard = BoardTypeSchoolInfoDataList.map(e1 => {
                    //     if (e1.schoolId == selectedSchoolId)
                    //         return Object.assign({}, e1, { isFavourite: false })
                    //     return e1
                    // });
                    // var newDataTrend = trendingSchoolInfoDataList.map(e2 => {
                    //     if (e2.schoolId == selectedSchoolId)
                    //         return Object.assign({}, e2, { isFavourite: false })
                    //     return e2
                    // });
                    // SchoolInfoDataList.find(v => v.schoolId === selectedSchoolId).isFavourite = false;
                    // BoardTypeSchoolInfoDataList.find(v => v.schoolId === selectedSchoolId).isFavourite = false;
                    // trendingSchoolInfoDataList.find(v => v.schoolId === selectedSchoolId).isFavourite = false;
                    // setSchoolInfoDataList(newDataSchool)
                    // console.log("newDataSchool------>", newDataSchool);
                    // setBoardTypeSchoolInfoDataList(newDataBoard)
                    // setTrendingSchoolInfoDataList(newDataTrend)
                    SetLoad(false)
                    setFavupdate(!favUpdate)
                }
                else {
                    SetLoad(false)
                    // setOtpStatus(OTP.FAIL);
                    // SetShowModal(false)
                    consoleLog("Response Fail on Mobile");
                }
            })
        }
        catch (e) {
            SetLoad(false)
            console.log(e);
        }
    }
    //Get All School  By Name
    // const _getSchoolByNameAPI = () => {
    //     SetLoad(true)
    //     const params = {
    //         schoolName: 'K R Mangalam'
    //     }
    //     // console.log("parms");
    //     try {
    //         GetSchoolByName(params, (result) => {
    //             console.log("Response on schoolname-->", result);
    //             if (result.success) {
    //                 consoleLog("Response On Sucess School Name-->", result.success);
    //                 var res = result.result;
    //                 console.log("Schhol For You", res);
    //                 SetLoad(false)
    //                 // navigation.navigate('Otp');
    //             }
    //             else {
    //                 SetLoad(false)
    //                 consoleLog("Response Fail on  SchoolList");
    //             }
    //         })
    //     }
    //     catch (e) {
    //         SetLoad(false)
    //         console.log(e);
    //     }
    // }
    //================================ Start common componenet =========================================== 
    const _header = () => {
        return (
            <RLHeader
                isBothImageHeader
                leftImg={Images.appheaderIcon}
                rightImg={Images.notificationGray}
                leftImgstyle={{ height: 25, width: 90, resizeMode: 'contain' }}
                rightImgStyle={{ height: 21, width: 17, resizeMode: 'contain' }}
            />
        )
    }

    //Render Loading Animation
    const _renderLoader = () => {
        return (
            <View style={viewstyle.lottieLoadingWrapperStyle}>
                <LottieView
                    source={Images.loadingJson}
                    style={viewstyle.lottieLoadingViewStyle}
                    autoPlay={true}
                />
            </View>
        );
    }
    //Render Loading Animation

    //School Type FlatList item
    const _renderSchoolTypeItem = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: item.value == SelectedSchoolType ? Colors.white : Colors.pink
                }}
                customBtnStyle={{ backgroundColor: item.value == SelectedSchoolType ? Colors.pink : Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, }}
                onPress={() => _onClickSchoolType(item)}
            />
        )
    }

    // School Info List with Api Calling p
    const _renderSchoolInfoItem = ({ item, index }) => {
        // consoleLog("uri", item.schoolImageList[0])
        // var schoolImg = item.schoolImageList[0]
        if (seeMoreForYou == false && index < 5) {
            return (
                <RLSchoolInfoList
                    IslikeSchoolInfo={true}
                    schoolname={item.name}
                    schoollocation={item.location}
                    seatsLeft={item.numberOfSeats - item.numberOfSeatsFilled}
                    boardType={item.boardType == 0 ? 'CBSE' : item.boardType == 1 ? 'CISCE' : item.boardType == 2 ? 'IGCSE' : item.boardType == 3 ? 'IB' : item.boardType == 4 ? 'STATEBOARD' : item.boardType == 5 ? 'GSEB' : ''}
                    standard={`${'Std '}${item.strandardFrom}${'-'}${item.strandardTo}`}
                    vistor={item.visitCount}
                    fees={`${'Rs '}${item.minFees}${'-'}${item.maxFees}`}
                    backgroundImg={item.schoolImageList[0]}
                    marginLeft={index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * 5 : BaseStyle.DEVICE_WIDTH / 100 * 0}
                    placement={'top'}
                    toolbackgroundColor={Colors.blue3}
                    tooltext={'Lorem ipsum dolor sit amet, consectetueradipiscing elit, sed diam nonummy nibh euismodtincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit'}
                    schoolLikeBtnImg={Images.officeadmissionLogo}
                    // itemClick={() => navigation.navigate('SchoolDetail', { "id": item.id })}
                    // itemClick={() => navigation.navigate('SchoolDetail', { "id": item.schoolId })}
                    itemClick={() => _onClickSelectedSchool(item)}
                    onPressFaviourt={() => _onClickFaviourtSchool(item, index, 1)}
                    favouriteBackground={item.isFavourite ? Colors.pink : Colors.white}
                    IsfavouriteImage={item.isFavourite ? Images.heartwhite : Images.heart2}
                />
            )
        }
        if (seeMoreForYou == true) {
            return (
                <RLSchoolInfoList
                    IslikeSchoolInfo={true}
                    // backgroundImg={{
                    //     uri: 'masstor.mrcto.org\\MasstorAssets\\samaj1_4de0.jpg',
                    // }}
                    // backgroundImg={{
                    //     uri: 'masstor.mrcto.org\\MasstorAssets\\samaj1_4de0.jpg',
                    // }}
                    schoolname={item.name}
                    schoollocation={item.location}
                    seatsLeft={item.numberOfSeats - item.numberOfSeatsFilled}
                    boardType={item.boardType == 0 ? 'CBSE' : item.boardType == 1 ? 'CISCE' : item.boardType == 2 ? 'IGCSE' : item.boardType == 3 ? 'IB' : item.boardType == 4 ? 'STATEBOARD' : item.boardType == 5 ? 'GSEB' : ''}
                    standard={`${'Std '}${item.strandardFrom}${'-'}${item.strandardTo}`}
                    vistor={item.visitCount}
                    // fees={'Rs 500-10000 '}
                    fees={`${'Rs '}${item.minFees}${'-'}${item.maxFees}`}
                    backgroundImg={item.schoolImageList[0]}
                    // standard={'Std ' + item.strandardFrom + ' to ' + item.strandardTo}
                    // backgroundImg={item.schoolimage}
                    // schoolname={item.schoolname}
                    // schoolname={'K.R. Mangalam World School'}
                    // schoollocation={'Noida, UP'}
                    // standard={' Std 4th-10th'}
                    // fees={item.fees}
                    // boardType={item.boardType}
                    marginLeft={index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * 5 : BaseStyle.DEVICE_WIDTH / 100 * 0}
                    // isshowToolTip
                    // schoolTolTipShow={item.name == selectedSchool ? toolTipVisibleListIcon : false}
                    // onCloseToolTip={() => setToolTipVisibleListIcon(false)}
                    // onPressToolButton={() => { setSelectedSchool(item.name), setToolTipVisibleListIcon(true) }}
                    placement={'top'}
                    toolbackgroundColor={Colors.blue3}
                    tooltext={'Lorem ipsum dolor sit amet, consectetueradipiscing elit, sed diam nonummy nibh euismodtincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit'}
                    schoolLikeBtnImg={Images.officeadmissionLogo}
                    // itemClick={() => navigation.navigate('SchoolDetail', { "id": item.schoolId })}
                    itemClick={() => _onClickSelectedSchool(item)}
                    onPressFaviourt={() => _onClickFaviourtSchool(item, index, 1)}
                    favouriteBackground={item.isFavourite ? Colors.pink : Colors.white}
                    IsfavouriteImage={item.isFavourite ? Images.heartwhite : Images.heart2}
                />
            )
        }

    }

    const _renderBoardTypeSchoolInfoItem = ({ item, index }) => {
        return (
            <RLSchoolInfoList
                IslikeSchoolInfo={true}
                // backgroundImg={{
                //     uri: 'masstor.mrcto.org\\MasstorAssets\\samaj1_4de0.jpg',
                // }}
                // backgroundImg={{
                //     uri: 'masstor.mrcto.org\\MasstorAssets\\samaj1_4de0.jpg',
                // }}
                schoolname={item.name}
                schoollocation={item.location}
                seatsLeft={item.numberOfSeats - item.numberOfSeatsFilled}
                boardType={item.boardType == 0 ? 'CBSE' : item.boardType == 1 ? 'CISCE' : item.boardType == 2 ? 'IGCSE' : item.boardType == 3 ? 'IB' : item.boardType == 4 ? 'STATEBOARD' : item.boardType == 5 ? 'GSEB' : ''}
                standard={`${'Std '}${item.strandardFrom}${'-'}${item.strandardTo}`}
                vistor={item.visitCount}
                // fees={'Rs 500-10000 '}
                fees={`${'Rs '}${item.minFees}${'-'}${item.maxFees}`}
                backgroundImg={item.schoolImageList[0]}
                // standard={'Std ' + item.strandardFrom + ' to ' + item.strandardTo}
                // backgroundImg={item.schoolimage}
                // schoolname={item.schoolname}
                // schoolname={'K.R. Mangalam World School'}
                // schoollocation={'Noida, UP'}
                // standard={' Std 4th-10th'}
                // fees={item.fees}
                // boardType={item.boardType}
                marginLeft={index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * 5 : BaseStyle.DEVICE_WIDTH / 100 * 0}
                // isshowToolTip
                // schoolTolTipShow={item.name == selectedSchool ? toolTipVisibleListIcon : false}
                // onCloseToolTip={() => setToolTipVisibleListIcon(false)}
                // onPressToolButton={() => { setSelectedSchool(item.name), setToolTipVisibleListIcon(true) }}
                placement={'top'}
                toolbackgroundColor={Colors.blue3}
                tooltext={'Lorem ipsum dolor sit amet, consectetueradipiscing elit, sed diam nonummy nibh euismodtincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit'}
                schoolLikeBtnImg={Images.officeadmissionLogo}
                // itemClick={() => navigation.navigate('SchoolDetail', { "id": item.schoolId })}
                itemClick={() => _onClickSelectedSchool(item)}
                onPressFaviourt={() => _onClickFaviourtSchool(item, index, 2)}
                favouriteBackground={item.isFavourite ? Colors.pink : Colors.white}
                IsfavouriteImage={item.isFavourite ? Images.heartwhite : Images.heart2}
            />
        )
    }
    //Item Seprator
    const FlatListItemFooter = () => {
        if (SchoolInfoDataList.length > 5) {
            return (
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => setSeeMoreForYou(true)}>
                        <Image
                            source={Images.nextRound}
                            style={{
                                resizeMode: 'contain',
                                height: 40,
                                width: 40,
                            }} />
                    </TouchableOpacity>
                    <RLText
                        text={BaseText.SeeMore}
                        style={{
                            fontSize: 15,
                            color: Colors.violet,
                            fontFamily: ENV.mfontFamilySemiBold,
                            paddingTop: 5
                        }}
                    />
                    <RLText
                        text={`${SchoolInfoDataList.length}${' Schools'}`}
                        style={{
                            fontSize: 10,
                            color: Colors.violet,
                            fontFamily: ENV.mfontFamilySemiBold,
                        }}
                    />

                </View>
            )
        }
        else {
            return (
                <View style={{ backgroundColor: 'red', alignSelf: 'center', alignItems: 'center' }}></View>
            )
        }

    }

    const FlatListItemFooterAdvanceSearch = () => {
        return (
            <Text onPress={() => { setShowSearchSchool(false), setShowAdvanceSearchModal(true) }} style={{ paddingBottom: 40, marginLeft: BaseStyle.DEVICE_WIDTH / 100 * 5, color: Colors.violet, fontFamily: ENV.mfontFamilyBoldItalic, fontSize: 14, }}>{BaseText.AdvanceSearch}</Text>
        )
    }
    //Item Seprator
    const FlatListItemSeparator = () => {
        return (
            <View style={{ borderBottomWidth: 0.5, borderColor: Colors.gray3 }}></View>
        )
    }

    //Standard Modal
    const _rendeStandardModal = () => {
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={showStandardModal}
                // onRequestClose={() => { setShowStandardModal(false), setShowAdvanceSearchModal(false), setShowsearchModal(false) }}>
                onRequestClose={() => { setShowStandardModal(false) }}>
                {/* RLStandardModal */}
                {/* {(!showsearchModal && !showAdvanceSearchModal) && */}
                <RLStandardModal
                    // onPress={() => setShowStandardModal(false)}
                    // onPress={() => _onPressStandardContinue()}
                    // outsideModal={() => setShowStandardModal(false)}
                    // outsideModal={() => alert("ui")}
                    StandardDataList={StandardDataList}
                    renderItem={({ item, index }) => _rendeStandardItemModal({ item, index })}
                    keyExtractor={item => item.id.toString()}
                />
                {/* } */}
                {/* {showsearchModal &&
                    <RLSchoolSearchModal
                        fieldRef={fieldSearchModalRef}
                        onEditTextField={(value) => _onChangeTextField(value, 'location')}
                        onSubmitEditing={() => _onSubmitEditing(fieldSearchModalRef)}
                        outsideModal={() => { setShowsearchModal(false) }}
                        onPressAdvanceSearch={() => { setShowAdvanceSearchModal(true), setShowsearchModal(false) }}
                        keyExtractor={(item, index) => item.id.toString()}
                        renderItem={({ item, index }) => _renderSchoolInfoItemModal({ item, index })}
                    />
                }
                {showAdvanceSearchModal &&
                    _renderShowAdvanceSearch()
                } */}
            </Modal>
        )
    }

    //Search School Modal
    const _rendeSchoolNameModal = () => {
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={showAdvanceSearchModal}
                // onRequestClose={() => { setShowStandardModal(false), setShowAdvanceSearchModal(false), setShowsearchModal(false) }}>
                onRequestClose={() => { setShowAdvanceSearchModal(false) }}>
                {/* RLStandardModal */}
                {/* {(!showsearchModal && !showAdvanceSearchModal) && */}
                {/* <RLStandardModal
                    // onPress={() => setShowStandardModal(false)}
                    onPress={() => _onPressStandardContinue()}
                    outsideModal={() => setShowStandardModal(false)}
                    StandardDataList={StandardDataList}
                    renderItem={({ item, index }) => _rendeStandardItemModal({ item, index })}
                    keyExtractor={item => item.id.toString()}
                /> */}
                {/* } */}
                {/* {!showAdvanceSearchModal &&
                    <RLSchoolSearchModal
                        fieldRef={fieldSearchModalRef}
                        onEditTextField={(value) => _onChangeTextField(value, 'searchSchoolName')}
                        onSubmitEditing={() => _onSubmitEditing(fieldSearchModalRef)}
                        outsideModal={() => { setShowsearchModal(false) }}
                        onPressAdvanceSearch={() => { setShowAdvanceSearchModal(true) }}
                        datalist={searchSchoolNameDataList}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => _renderSchoolInfoItemModal({ item, index })}
                    // value={query}
                    />
                } */}
                {showAdvanceSearchModal &&
                    _renderShowAdvanceSearch()
                }
            </Modal>
        )
    }

    //Show AdvanceSearch Modal UI
    const _renderShowAdvanceSearch = () => {
        return (
            <TouchableWithoutFeedback onPress={() => { setShowAdvanceSearchModal(false), setShowsearchModal(false) }} >
                <View style={{
                    flex: 1,
                    // backgroundColor: 'rgba(57,57,57,0.80)',
                    backgroundColor: 'rgba(57,57,57,0.20)',
                    justifyContent: 'center',
                }}>
                    {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, maxHeight: BaseStyle.DEVICE_HEIGHT / 100 * 70, borderRadius: 14, backgroundColor: Colors.white, paddingVertical: 20, alignSelf: 'center' }}>
                        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={{ alignSelf: 'center', width: BaseStyle.DEVICE_WIDTH / 100 * 80, }}>
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.Standard}</Text>
                                <FlatList
                                    style={{ marginTop: 10, marginBottom: 15 }}
                                    bounces={false}
                                    data={StandardDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem1({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.Board}</Text>
                                <FlatList
                                    style={{ marginTop: 10, marginBottom: 15 }}
                                    bounces={false}
                                    data={SchoolTypeDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem2({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.LearningMode}</Text>
                                <FlatList
                                    style={{ marginTop: 10, marginBottom: 15 }}
                                    bounces={false}
                                    data={LearingDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem3({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.SchoolType}</Text>
                                <FlatList
                                    style={{ marginTop: 10, marginBottom: 15 }}
                                    bounces={false}
                                    data={SchoolTpDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem4({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.SchoolFormat}</Text>
                                <FlatList
                                    style={{ marginTop: 10, marginBottom: 15 }}
                                    bounces={false}
                                    data={SchoolFormatDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem5({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.COEDStatus}</Text>
                                <FlatList
                                    style={{ marginTop: 10, marginBottom: 15 }}
                                    bounces={false}
                                    data={CdStatusDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem6({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilyBold, fontSize: 12 }} >{BaseText.Languageofintruction}</Text>
                                <FlatList
                                    style={{ marginTop: 10, }}
                                    bounces={false}
                                    data={LanguageDataList}
                                    renderItem={({ item, index }) => _rendeAdvanceSearchItem7({ item, index })}
                                    keyExtractor={item => item.id.toString()}
                                    contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', }}
                                />
                                <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => { setShowAdvanceSearchModal(false), setShowsearchModal(false), _getAllSchoolListByFilterAPI() }}>
                                    <Image
                                        source={Images.previousRoundBlue}
                                        style={{ height: 31, width: 31, resizeMode: 'contain' }} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    {/* </ScrollView> */}
                </View>
            </TouchableWithoutFeedback>

        )
    }

    //School Type FlatList item
    const _rendeAdvanceSearchItem1 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 1)}
            />
        )
    }
    const _rendeAdvanceSearchItem2 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 2)}
            />
        )
    }
    const _rendeAdvanceSearchItem3 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 3)}
            />
        )
    }
    const _rendeAdvanceSearchItem4 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 4)}
            />
        )
    }
    const _rendeAdvanceSearchItem5 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 5)}
            />
        )
    }
    const _rendeAdvanceSearchItem6 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 6)}
            />
        )
    }
    const _rendeAdvanceSearchItem7 = ({ item, index }) => {
        return (
            <RLRoundList
                title={item.title}
                titleStyle={{
                    fontSize: 8,
                    fontFamily: ENV.mfontFamilyRegular, color: Colors.pink
                }}
                customBtnStyle={{ backgroundColor: Colors.white, borderColor: Colors.pink, marginRight: 15, borderRadius: 15, marginBottom: 8 }}
                onPress={() => _onClickAdvanceSerchItem(item, 7)}
            />
        )
    }

    const _renderHowItWorks = () => {
        return (
            <ImageBackground
                source={Images.howItWorksImage}
                style={{
                    // height: BaseStyle.DEVICE_HEIGHT / 100 * 75,
                    height: BaseStyle.DEVICE_HEIGHT / 100 * 70,
                    width: BaseStyle.DEVICE_WIDTH,
                    // resizeMode: 'center',
                    marginBottom: 80
                }}
            >
                <View style={{ flex: 1, paddingVertical: BaseStyle.DEVICE_HEIGHT / 100 * 1.5, justifyContent: 'space-between', }}>
                    <View>
                        <RLText
                            text={BaseText.hiwTitle}
                            style={{
                                fontSize: 20,
                                fontFamily: ENV.mfontFamilyBlack,
                                color: Colors.white,
                                textAlign: 'center',
                            }}
                        />
                    </View>
                    <View style={{ alignSelf: 'center', alignItems: 'center', }}>
                        <RLButton
                            SimpleButton={true}
                            simplebuttontext={BaseText.hiwBtnText}
                            simplebuttontextStyle={{
                                fontSize: 10,
                                fontFamily: ENV.mfontFamilyRegular,
                                color: Colors.violet,
                            }}
                            simplebuttonStyle={[{ marginVertical: BaseStyle.DEVICE_WIDTH / 100 * 1, backgroundColor: Colors.white, borderRadius: 50, paddingVertical: 10, paddingHorizontal: 15, }]}
                            onpress={() => {

                            }}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={Images.lightBulbImage} style={{ height: 18, width: 18, }} />
                            <RLText
                                text={BaseText.hiwText}
                                style={{
                                    fontSize: 12,
                                    fontFamily: ENV.mfontFamilyRegular,
                                    color: Colors.white,
                                    marginLeft: 5,
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }

    const _renderSimplifiedProcess = () => {
        return (
            <View style={{}}>
                <RLText
                    style={{
                        fontSize: 20,
                        fontFamily: ENV.mfontFamilyBlack,
                        color: Colors.violet,
                        marginBottom: 25,
                        marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 5,
                    }}
                    text={BaseText.simpProText}
                />
                {/* <Image
                    source={Images.tlLineImage}
                    style={{
                        width: BaseStyle.DEVICE_WIDTH - BaseStyle.DEVICE_WIDTH / 100 * 9,
                        height: BaseStyle.DEVICE_HEIGHT / 100 * 19,
                        // resizeMode: 'cover',
                        alignSelf: 'center',
                        marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 5,
                    }}
                /> */}

                <Image
                    source={Images.tlLineImage}
                    style={{
                        width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                        height: 150,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                    }}
                />

                {/* <View style={{ marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 5, }}>
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: BaseStyle.DEVICE_WIDTH - BaseStyle.DEVICE_WIDTH / 5.5,
                            marginBottom: 5,
                            // backgroundColor: 'yellow',
                        }}
                    >
                        <RLText
                            style={{
                                fontSize: 10,
                                fontFamily: ENV.mfontFamilyBold,
                                color: Colors.violet,
                                width: '20%',
                                textAlign: 'center',
                            }}
                            text={BaseText.spExpl}
                        />
                        <RLText
                            style={{
                                fontSize: 10,
                                fontFamily: ENV.mfontFamilyBold,
                                color: Colors.violet,
                                width: '20%',
                                textAlign: 'center',
                                // marginLeft: '20%',
                            }}
                            text={BaseText.spAdminTra}
                        />
                        <RLText
                            style={{
                                fontSize: 10,
                                fontFamily: ENV.mfontFamilyBold,
                                color: Colors.violet,
                                width: '20%',
                                textAlign: 'center',
                                // marginLeft: '5%',
                            }}
                            text={BaseText.spSingleKYC}
                        />
                    </View>
                    <Image
                        source={Images.tlLineImage}
                        style={{
                            width: BaseStyle.DEVICE_WIDTH - BaseStyle.DEVICE_WIDTH / 6.4,
                            height: BaseStyle.DEVICE_HEIGHT / 100 * 10,
                            // resizeMode: 'cover',
                            alignSelf: 'center',
                        }}
                    />
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // backgroundColor: 'yellow',
                            // marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 9,
                            position: 'absolute',
                            top: BaseStyle.DEVICE_HEIGHT / 100 * 6.5,
                            width: BaseStyle.DEVICE_WIDTH - BaseStyle.DEVICE_WIDTH / 4.3,
                        }}
                    >
                        <RLProcessTimelineItem color={Colors.violet} image={Images.tlSearchImage} isUp />
                        <RLProcessTimelineItem color={Colors.pink} image={Images.tlCompareImage} />
                        <RLProcessTimelineItem color={Colors.violet} image={Images.tlLocationImage} />
                        <RLProcessTimelineItem color={Colors.pink} image={Images.tlResearchImage} />
                        <RLProcessTimelineItem color={Colors.violet} image={Images.tlContactFormImage} />
                    </View>
                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: BaseStyle.DEVICE_WIDTH - BaseStyle.DEVICE_WIDTH / 1.85,
                            // backgroundColor: 'yellow',
                            marginTop: 5,
                        }}
                    >
                        <RLText
                            style={{
                                fontSize: 10,
                                fontFamily: ENV.mfontFamilyBold,
                                color: Colors.pink,
                                width: '30%',
                                textAlign: 'center',
                            }}
                            text={BaseText.spCompSch}
                        />
                        <RLText
                            style={{
                                fontSize: 10,
                                fontFamily: ENV.mfontFamilyBold,
                                color: Colors.pink,
                                width: '30%',
                                textAlign: 'center',
                            }}
                            text={BaseText.spResuTra}
                        />
                    </View>
                </View> */}
            </View>
        );
    }

    //Standard modal Item
    const _rendeStandardItemModal = ({ item, index }) => {
        // console.log("item value", item.value);
        return (
            <TouchableOpacity onPress={() => _onClickModalItem(item)} style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 20, height: 56, alignItems: 'center', marginVertical: 10 }}>
                <ImageBackground
                    style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: 68, }}
                    source={item.value == selectedStdfromModal ? Images.standardtagBlue : Images.standardtabWhite}
                >
                    <Text style={{ color: item.value == selectedStdfromModal ? Colors.white : Colors.violet, fontFamily: ENV.mfontFamilyBlack, fontSize: 14 }}>{item.title}</Text>
                    <Text style={{ color: item.value == selectedStdfromModal ? Colors.white : Colors.violet, fontFamily: ENV.mfontFamilyMedium, fontSize: 10 }}>{'Std'}</Text>

                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const _renderSchoolInfoItemModal = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} onPress={() => _onClickSearchSchoolItem({ item, index })}>
                <View style={{ flexDirection: 'row', marginBottom: 18 }}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 25, justifyContent: 'center', }}>

                        <Image
                            // source={Images.schoolImage}
                            source={item.schoolImageList[0]}
                            // source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}
                            source={{ uri: 'http://masstor.mrcto.org//MasstorAssets//samaj1_4de0.jpg' }}
                            style={{ height: 49, width: 49, borderRadius: 49 / 2, alignSelf: 'center', }} />
                    </View>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 75, borderBottomWidth: 0.5, borderBottomColor: Colors.gray5, justifyContent: 'center' }}>
                        <Text style={{ color: Colors.pink, fontFamily: ENV.mfontFamilyBold, fontSize: 13 }}>{item.name}</Text>
                        <Text style={{ color: Colors.pink, fontFamily: ENV.mfontFamilyMedium, fontSize: 10 }}>{item.location}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const _renderCustomizeSearchItem = ({ item, index }) => {
        return (
            <RLCustomizeSearchList
                icon={item.Img}
                title={item.title}
            />
        )
    }

    const _renderNearSchoolInfoItem = ({ item, index }) => {
        if (seeMoreNearSchool == false && index < 4) {
            return (
                <RLSchoolInfoList
                    IsNearSchoolInfo={true}
                    // backgroundImg={item.schoolimage}
                    backgroundImg={item.schoolImageList[0]}
                    schoolname={item.name}
                    schoollocation={item.location}
                    standard={`${'Std '}${item.strandardFrom}${'-'}${item.strandardTo}`}
                    boardType={'CBSC'}
                    fees={`${'Rs '}${item.minFees}${'-'}${item.maxFees}`}
                    // schoolname={item.schoolname}
                    // schoolname={'K.R. Mangalam World School'}
                    // schoollocation={item.location}
                    // schoollocation={'Noida, UP'}
                    // seatsLeft={item.numberOfSeats - item.numberOfSeatsFilled}
                    // standard={'Std ' + item.strandardFrom + ' to ' + item.strandardTo}
                    // fees={item.fees}
                    // fees={'Rs 500-10000 '}
                    // boardType={item.boardType}
                    // marginLeft={index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * 5 : BaseStyle.DEVICE_WIDTH / 100 * 0}
                    // isshowToolTip
                    // schoolTolTipShow={item.name == selectedSchool ? toolTipVisibleListIcon : false}
                    // onCloseToolTip={() => setToolTipVisibleListIcon(false)}
                    // onPressToolButton={() => { setSelectedSchool(item.name), setToolTipVisibleListIcon(true) }}
                    placement={'top'}
                    toolbackgroundColor={Colors.blue3}
                    tooltext={'Lorem ipsum dolor sit amet, consectetueradipiscing elit, sed diam nonummy nibh euismodtincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit'}
                    schoolLikeBtnImg={Images.officeadmissionLogo}
                    // itemClick={() => navigation.navigate('SchoolDetail', { "id": item.schoolId })}
                    itemClick={() => _onClickSelectedSchool(item)}
                    marginLeft={BaseStyle.DEVICE_WIDTH / 100 * 4}
                    marginRight={BaseStyle.DEVICE_WIDTH / 100 * 4}
                />
            )
        }
        if (seeMoreNearSchool == true) {
            return (
                <RLSchoolInfoList
                    IsNearSchoolInfo={true}
                    // backgroundImg={item.schoolimage}
                    backgroundImg={Images.school1}
                    schoolname={item.name}
                    schoollocation={item.location}
                    standard={`${'Std '}${item.strandardFrom}${'-'}${item.strandardTo}`}
                    boardType={'CBSC'}
                    fees={`${'Rs '}${item.minFees}${'-'}${item.maxFees}`}
                    // schoolname={item.schoolname}
                    // schoolname={'K.R. Mangalam World School'}
                    // schoollocation={item.location}
                    // schoollocation={'Noida, UP'}
                    // seatsLeft={item.numberOfSeats - item.numberOfSeatsFilled}
                    // standard={'Std ' + item.strandardFrom + ' to ' + item.strandardTo}
                    // fees={item.fees}
                    // fees={'Rs 500-10000 '}
                    // boardType={item.boardType}
                    // marginLeft={index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * 5 : BaseStyle.DEVICE_WIDTH / 100 * 0}
                    // isshowToolTip
                    // schoolTolTipShow={item.name == selectedSchool ? toolTipVisibleListIcon : false}
                    // onCloseToolTip={() => setToolTipVisibleListIcon(false)}
                    // onPressToolButton={() => { setSelectedSchool(item.name), setToolTipVisibleListIcon(true) }}
                    placement={'top'}
                    toolbackgroundColor={Colors.blue3}
                    tooltext={'Lorem ipsum dolor sit amet, consectetueradipiscing elit, sed diam nonummy nibh euismodtincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit'}
                    schoolLikeBtnImg={Images.officeadmissionLogo}
                    // itemClick={() => navigation.navigate('SchoolDetail', { "id": item.id })}
                    marginLeft={BaseStyle.DEVICE_WIDTH / 100 * 4}
                    marginRight={BaseStyle.DEVICE_WIDTH / 100 * 4}
                />
            )
        }

    }
    const _rendertrendingSchoolInfoItem = ({ item, index }) => {
        return (
            <RLSchoolInfoList
                IsNearSchoolInfo={true}
                // backgroundImg={item.schoolimage}
                backgroundImg={item.schoolImageList[0]}
                schoolname={item.name}
                schoollocation={item.location}
                standard={`${'Std '}${item.strandardFrom}${'-'}${item.strandardTo}`}
                boardType={item.boardType == 0 ? 'CBSE' : item.boardType == 1 ? 'CISCE' : item.boardType == 2 ? 'IGCSE' : item.boardType == 3 ? 'IB' : item.boardType == 4 ? 'STATEBOARD' : item.boardType == 5 ? 'GSEB' : ''}
                fees={`${'Rs '}${item.minFees}${'-'}${item.maxFees}`}
                // schoolname={item.schoolname}
                // schoolname={'K.R. Mangalam World School'}
                // schoollocation={item.location}
                // schoollocation={'Noida, UP'}
                // seatsLeft={item.numberOfSeats - item.numberOfSeatsFilled}
                // standard={'Std ' + item.strandardFrom + ' to ' + item.strandardTo}
                // fees={item.fees}
                // fees={'Rs 500-10000 '}
                // boardType={item.boardType}
                // marginLeft={index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * 5 : BaseStyle.DEVICE_WIDTH / 100 * 0}
                // isshowToolTip
                // schoolTolTipShow={item.name == selectedSchool ? toolTipVisibleListIcon : false}
                // onCloseToolTip={() => setToolTipVisibleListIcon(false)}
                // onPressToolButton={() => { setSelectedSchool(item.name), setToolTipVisibleListIcon(true) }}
                placement={'top'}
                toolbackgroundColor={Colors.blue3}
                tooltext={'Lorem ipsum dolor sit amet, consectetueradipiscing elit, sed diam nonummy nibh euismodtincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit'}
                schoolLikeBtnImg={Images.officeadmissionLogo}
                // itemClick={() => navigation.navigate('SchoolDetail', { "id": item.schoolId })}
                itemClick={() => _onClickSelectedSchool(item)}
                marginLeft={BaseStyle.DEVICE_WIDTH / 100 * 4}
                marginRight={BaseStyle.DEVICE_WIDTH / 100 * 4}
                onPressFaviourt={() => _onClickFaviourtSchool(item, index, 3)}
                favouriteBackground={item.isFavourite ? Colors.pink : Colors.white}
                IsfavouriteImage={item.isFavourite ? Images.heartwhite : Images.heart2}
            />
        )
    }



    // console.log("Load: ", load)
    return (
        // <Fragment>
        <KeyboardAvoidingView style={{ flex: 1, }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white, }}>
                <View style={{ flex: 1, }}>
                    {_rendeStandardModal()}
                    {_rendeSchoolNameModal()}
                    {_header()}
                    <RLNoInternet
                        RefreshClick={() => {
                            // console.log("Refresh Click Home");
                            // _initSetup();
                        }}
                        style={{
                            // height: BaseStyle.DEVICE_HEIGHT,
                        }}
                        height={BaseStyle.DEVICE_HEIGHT / 100 * 80}
                    />

                    {/* Search */}
                    <ScrollView bounces={false}
                        contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ marginTop: 5 }}>
                            <RLTextInput
                                SearchTextInput={true}
                                refKey={'search'}
                                placeholder={'Search School'}
                                fieldRef={fieldSearchRef}
                                onEditTextField={(value) => _onChangeTextField(value, 'searchSchoolName')}
                                onSubmitEditing={() => _onSubmitEditing(fieldSearchRef)}
                                searchPink={true}
                                txtInputStyle={{ color: Colors.pink, fontSize: 14, fontFamily: ENV.mpolisfontFamilyRegular }}
                                placeholderTextColor={Colors.gray8}
                                hideShowImage={Images.searchGray}
                                // value={search}
                                defaultValue={search}
                                // onFocus={() => _onFocusSearchInputHome()}
                                // // onFocus={() => setShowSugesstion(true)}
                                searchCityName={getLoctionTypeValue == 'Allow' ? getLoctionCurrentValue : cityName}
                            // searchCityName={cityName}
                            />
                        </View>


                        {/* Scholltype List */}
                        <View style={{ marginVertical: 25, flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', }}>
                            <FlatList
                                bounces={false}
                                showsHorizontalScrollIndicator={false}
                                data={SchoolTypeDataList}
                                renderItem={({ item, index }) => _renderSchoolTypeItem({ item, index })}
                                keyExtractor={item => item.id.toString()}
                                horizontal={true}
                            />

                            <View style={{
                                backgroundColor: Colors.white, width: BaseStyle.DEVICE_WIDTH / 100 * 10,
                                alignItems: 'flex-end',
                                justifyContent: 'center'

                                // justifyContent: 'space-between',
                                // alignItems: 'center',
                                // flexDirection: 'row',


                                // shadowColor: "red",
                                // shadowOpacity: 0.9,
                                // shadowRadius: 4,
                                // shadowOffset: {
                                //     height: 0,
                                //     width: 2
                                // },
                                // elevation: 8
                                // backgroundColor: 'red'
                            }}>
                                {/* <Image source={Images.filterShdow} /> */}
                                <Tooltip
                                    contentStyle={{ borderRadius: 0, padding: 0, }}
                                    animated={true}
                                    backgroundColor="rgba(0,0,0,0.5)"
                                    isVisible={toolTipVisibleFilter}
                                    content={
                                        <FlatList
                                            bounces={false}
                                            data={FillterDataList}
                                            ItemSeparatorComponent={FlatListItemSeparator}
                                            renderItem={({ item }) => (
                                                <TouchableOpacity
                                                    onPress={() => { setSelectedFilterType(item.id) }}>
                                                    <View
                                                        style={{
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            paddingHorizontal: 10,
                                                            paddingVertical: 15,
                                                            width: 160,
                                                            justifyContent: 'flex-end'
                                                        }}>
                                                        <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilySemiBold, fontSize: 10, }}>{item.key} </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            )}
                                            keyExtractor={item => item.id.toString()}
                                        />
                                    }
                                    placement="bottom"
                                    onClose={() => setToolTipVisibleFilter(false)}
                                    showChildInTooltip={false}>
                                    <TouchableOpacity onPress={() => setToolTipVisibleFilter(true)}>
                                        <Image
                                            style={{ width: 18, height: 15, resizeMode: 'contain' }}
                                            source={Images.fillter}
                                        />
                                    </TouchableOpacity>
                                </Tooltip>
                            </View>
                        </View>

                        <ImageBackground
                            style={{
                                height: 120,
                                width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                alignSelf: 'center',
                                // backgroundColor: Colors.white,
                                backgroundColor: Colors.violet,
                                borderRadius: 15,
                                shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 7,
                                backgroundColor: 'pink',

                            }}
                            imageStyle={{
                                borderRadius: 15,
                            }}

                            source={Images.banner1}
                        >
                            <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 85, }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', }}>
                                    <Image source={Images.lightBulbImage} style={{ height: 7, width: 7, resizeMode: 'contain' }} />
                                    <RLText
                                        text={BaseText.hiwText}
                                        style={{
                                            fontSize: 12,
                                            fontFamily: ENV.mfontFamilyRegular,
                                            color: Colors.white,
                                            marginLeft: 5,
                                            paddingVertical: 5
                                        }}
                                    />
                                </View>
                                <RLText
                                    text={'School from Home'}
                                    style={{
                                        fontSize: 16,
                                        fontFamily: ENV.mfontFamilyBold,
                                        color: Colors.white,
                                        alignSelf: 'flex-end',
                                        paddingVertical: 5
                                    }}
                                />
                                <RLText
                                    text={`${'73% Students & 86% Parents prefer online education after Covid-19.'}`}
                                    style={{
                                        fontSize: 10,
                                        fontFamily: ENV.mfontFamilyMedium,
                                        color: Colors.white,
                                        alignSelf: 'flex-end',
                                        width: BaseStyle.DEVICE_WIDTH / 100 * 40,
                                        textAlign: 'right',
                                        paddingVertical: 5
                                    }}
                                />

                            </View>
                        </ImageBackground>
                        {SchoolInfoDataList.length > 0 &&
                            <View>
                                {/* School For You */}
                                <View style={{ flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, justifyContent: 'space-between', alignSelf: 'center', marginVertical: 25, alignItems: 'center' }}>
                                    <RLText
                                        text={'Schools For You'}
                                        style={{
                                            fontSize: 20,
                                            color: Colors.violet,
                                            fontFamily: ENV.mfontFamilyBlack,
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 70,

                                        }}
                                    />
                                    <TouchableOpacity /*onPress={() => setToolTipVisibleFilter(true)} */
                                        onPress={() => {
                                            _onSeeMore(2)

                                        }}
                                    >
                                        <Text style={{ fontSize: 10, fontFamily: ENV.mfontFamilySemiBold, color: Colors.pink }}>{BaseText.SeeMore}</Text>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <FlatList
                                        data={SchoolInfoDataList}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        extraData={favUpdate}
                                        // keyExtractor={(item, index) => item.id.toString()}
                                        keyExtractor={(item, index) => index}
                                        renderItem={({ item, index }) => _renderSchoolInfoItem({ item, index })}
                                        ListFooterComponent={FlatListItemFooter}
                                        ListFooterComponentStyle={{ justifyContent: 'center' }}
                                    />
                                </View>
                            </View>
                        }
                        <ImageBackground
                            style={{
                                height: 120,
                                width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                alignSelf: 'center',
                                // backgroundColor: Colors.white,
                                // backgroundColor: Colors.violet,
                                borderRadius: 15,
                                shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 7,
                                marginVertical: 25,
                                justifyContent: 'space-between'
                            }}
                            imageStyle={{ borderRadius: 15, }}
                            source={Images.banner2}>


                            <RLText
                                text={'Apply to Schools of your choice with'}
                                style={{
                                    fontSize: 16,
                                    fontFamily: ENV.mfontFamilyBold,
                                    color: Colors.white,
                                    alignSelf: 'center',
                                    paddingVertical: 5,
                                    textAlign: 'center',
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 85,
                                }}
                            />
                            <RLText
                                text={'Verified Partners'}
                                style={{
                                    fontSize: 9,
                                    fontFamily: ENV.mfontFamilyBold,
                                    color: Colors.white,
                                    alignSelf: 'center',
                                    paddingVertical: 5,
                                    textAlign: 'center',
                                    width: BaseStyle.DEVICE_WIDTH / 100 * 85,
                                }}
                            />
                        </ImageBackground>
                        {BoardTypeSchoolInfoDataList.length > 0 &&
                            <View>
                                <View style={{ flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, justifyContent: 'space-between', alignSelf: 'center', alignItems: 'center', marginBottom: 25 }}>
                                    <View>
                                        <Tooltip
                                            contentStyle={{ borderRadius: 0, padding: 0, }}
                                            animated={true}
                                            backgroundColor="rgba(0,0,0,0.5)"
                                            isVisible={toolTipBoardType}
                                            content={
                                                <FlatList
                                                    bounces={false}
                                                    data={SchoolTypeDataList}
                                                    ItemSeparatorComponent={FlatListItemSeparator}
                                                    renderItem={({ item }) => (
                                                        <TouchableOpacity
                                                            onPress={() => { _onClickSchoolType(item), setToolTipBoardType(false) }}>
                                                            <View
                                                                style={{
                                                                    flexDirection: 'row',
                                                                    alignItems: 'center',
                                                                    paddingHorizontal: 10,
                                                                    paddingVertical: 10,
                                                                    justifyContent: 'center',
                                                                    backgroundColor: item.value == SelectedSchoolType ? Colors.gray6 : Colors.white

                                                                }}>
                                                                <Text style={{ color: Colors.violet, fontFamily: ENV.mfontFamilySemiBold, fontSize: 11, }}>{item.title} </Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    )}
                                                    keyExtractor={item => item.id.toString()}
                                                />
                                            }
                                            placement="bottom"
                                            onClose={() => setToolTipBoardType(false)}
                                            showChildInTooltip={false}>
                                            <Text style={{
                                                fontSize: 20,
                                                color: Colors.violet,
                                                fontFamily: ENV.mfontFamilyBlack,
                                                width: BaseStyle.DEVICE_WIDTH / 100 * 70,

                                            }}>{'More '}
                                                <Text onPress={() => setToolTipBoardType(true)} style={{ textDecorationLine: 'underline' }}>{selectedSchoolTypeName}</Text>
                                                <Text>{' Schools'}</Text>
                                            </Text>

                                        </Tooltip>
                                    </View>


                                    <TouchableOpacity onPress={() => _onSeeMore(3)} >
                                        <Text style={{ fontSize: 10, fontFamily: ENV.mfontFamilySemiBold, color: Colors.pink }}>{BaseText.SeeMore}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <FlatList
                                        data={BoardTypeSchoolInfoDataList}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        extraData={favUpdate}
                                        // keyExtractor={(item, index) => item.id.toString()}
                                        keyExtractor={(item, index) => index}
                                        renderItem={({ item, index }) => _renderBoardTypeSchoolInfoItem({ item, index })}
                                    />
                                </View>
                            </View>
                        }
                        <ImageBackground
                            style={{
                                height: 120,
                                width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                alignSelf: 'center',
                                // backgroundColor: Colors.white,

                                borderRadius: 15,
                                shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 7,
                                marginVertical: 25,

                            }}
                            imageStyle={{ borderRadius: 15, }}
                            source={Images.banner3}>
                            <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 85, alignSelf: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Image source={Images.lightBulbImage} style={{ height: 7, width: 7, resizeMode: 'contain' }} />
                                    <RLText
                                        text={BaseText.hiwText}
                                        style={{
                                            fontSize: 12,
                                            fontFamily: ENV.mfontFamilyRegular,
                                            color: Colors.white,
                                            marginLeft: 5,
                                            paddingVertical: 5
                                        }}
                                    />
                                </View>
                                <RLText
                                    text={'No more distance issue \nwith schooling'}
                                    style={{
                                        fontSize: 16,
                                        fontFamily: ENV.mfontFamilyBold,
                                        color: Colors.white,

                                        paddingVertical: 5
                                    }}
                                />
                                <RLText
                                    text={`${'Find more suitable schools around your preferred location.'}`}
                                    style={{
                                        fontSize: 10,
                                        fontFamily: ENV.mfontFamilyMedium,
                                        color: Colors.white,

                                        width: BaseStyle.DEVICE_WIDTH / 100 * 70,


                                    }}
                                />

                            </View>
                        </ImageBackground>

                        <RLText
                            text={BaseText.CustomizeSearch}
                            style={{
                                fontSize: 20,
                                color: Colors.violet,
                                fontFamily: ENV.mfontFamilyBlack,
                                width: BaseStyle.DEVICE_WIDTH / 100 * 90,
                                alignSelf: 'center',

                            }}
                        />
                        <View style={{ marginVertical: 25, width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center' }}>
                            <FlatList
                                style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', }}
                                data={CustomizeDataList}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => item.id.toString()}
                                renderItem={({ item, index }) => _renderCustomizeSearchItem({ item, index })}
                                scrollEnabled={false}
                            />
                        </View>
                        {nearestschoolInfoDataList.length > 0 &&
                            <View>
                                <View style={{ flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, justifyContent: 'space-between', alignSelf: 'center', alignItems: 'center', marginBottom: 25 }}>
                                    <RLText
                                        text={BaseText.SchoolsNearYou}
                                        style={{
                                            fontSize: 20,
                                            color: Colors.violet,
                                            fontFamily: ENV.mfontFamilyBlack,
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 70,

                                        }}
                                    />
                                    <TouchableOpacity style={{ borderWidth: 1, borderColor: Colors.violet, borderRadius: 20, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5 }}>
                                        <Image
                                            source={Images.searchLocationPink}
                                            style={{
                                                resizeMode: 'contain',
                                                height: 11,
                                                width: 11,
                                            }} />
                                        <Text style={{ paddingLeft: 5, fontSize: 10, fontFamily: ENV.mfontFamilySemiBold, color: Colors.pink }}>{getLoctionTypeValue == 'Allow' ? getLoctionCurrentValue : getSelctedCityValue.cityName}</Text>
                                    </TouchableOpacity>
                                </View>
                                {/* <View style={{ alignSelf: 'center', backgroundColor: 'red' }}> */}
                                <FlatList
                                    data={nearestschoolInfoDataList}
                                    // horizontal={false}
                                    // showsHorizontalScrollIndicator={false}
                                    // numColumns={2}
                                    keyExtractor={(item, index) => index}
                                    // keyExtractor={(item, index) => item.id.toString()}
                                    renderItem={({ item, index }) => _renderNearSchoolInfoItem({ item, index })}
                                    contentContainerStyle={{
                                        flexWrap: 'wrap', justifyContent: 'space-between', flexDirection: 'row',
                                    }}
                                />
                                {/* </View> */}

                                <TouchableOpacity
                                    style={{ borderRadius: 50, borderWidth: 1, borderColor: Colors.violet, alignSelf: 'center', paddingVertical: 8, paddingHorizontal: 15, marginVertical: 25 }}
                                    onPress={() => _onSeeMore(1)}>
                                    <Text style={{ fontSize: 10, fontFamily: ENV.mfontFamilyRegular, color: Colors.violet }}>{'See More '}<Text style={{ fontSize: 8, fontFamily: ENV.mfontFamilyMedium, color: Colors.pink }}>{`${nearestschoolInfoDataList.length}${' School'}`}</Text></Text>
                                </TouchableOpacity>
                            </View>
                        }
                        {_renderSimplifiedProcess()}

                        {trendingSchoolInfoDataList.length > 0 &&
                            <View>
                                <View style={{ flexDirection: 'row', width: BaseStyle.DEVICE_WIDTH / 100 * 90, justifyContent: 'space-between', alignSelf: 'center', marginVertical: 25, alignItems: 'center' }}>
                                    <RLText
                                        text={BaseText.TrendingSchools}
                                        style={{
                                            fontSize: 20,
                                            color: Colors.violet,
                                            fontFamily: ENV.mfontFamilyBlack,
                                            width: BaseStyle.DEVICE_WIDTH / 100 * 70,

                                        }}
                                    />
                                    <TouchableOpacity onPress={() => _onSeeMore(4)} >
                                        <Text style={{ fontSize: 10, fontFamily: ENV.mfontFamilySemiBold, color: Colors.pink }}>{BaseText.SeeMore}</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginBottom: 25 }}>
                                    <FlatList
                                        data={trendingSchoolInfoDataList}
                                        extraData={favUpdate}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        // keyExtractor={(item, index) => item.id.toString()}
                                        keyExtractor={(item, index) => index}
                                        renderItem={({ item, index }) => _rendertrendingSchoolInfoItem({ item, index })}
                                    />
                                </View>
                            </View>
                        }
                        {/* <Image source={Images.filterShdow} style={{ height: 50, width: 50, alignSelf: 'center', }} /> */}
                        {_renderHowItWorks()}

                        {/* new code============ */}
                        {showSearchSchool &&
                            <FlatList
                                keyboardShouldPersistTaps='handled'
                                style={{

                                    shadowOffset: { width: 0, height: 0 },
                                    shadowColor: Platform.OS == 'ios' ? Colors.gray : 'black',
                                    shadowOpacity: 0.5,
                                    elevation: 8,
                                    backgroundColor: Colors.white, borderBottomLeftRadius: 14, borderBottomRightRadius: 14, width: BaseStyle.DEVICE_WIDTH / 100 * 90, alignSelf: 'center', position: 'absolute', top: 50,
                                }}
                                data={searchSchoolNameDataList}
                                renderItem={({ item, index }) => _renderSchoolInfoItemModal({ item, index })}
                                keyExtractor={(item, index) => index}
                                ListFooterComponent={FlatListItemFooterAdvanceSearch}
                            />
                        }


                    </ScrollView>
                </View>
            </SafeAreaView>
            { load && _renderLoader()}
        </KeyboardAvoidingView>
        // </Fragment >
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Home);