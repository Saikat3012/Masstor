import React, { Fragment, useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, Image, TouchableOpacity, ImageBackground } from "react-native";
import { connect, useSelector, useDispatch } from 'react-redux';
import {
    RLText,
    RLButton,
    RLFlatList,
    RLHeader,
    RLLearningMode,
    RLOverviewIcon,
    RLViewMore,
    RLCheckIconText,
    RLFacultyView,
    RLTwoText,
    RLCollapsibleView,
    RLThreeColFeeStructure,
    RLTextInput,
    RLSlider,
    RLRateSliderItem,
    RLModal,
} from 'basecomponent';
import Images from 'constants/Images';
import Colors from 'constants/Colors';
import ENV from 'env/index';
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import LinearGradient from 'react-native-linear-gradient';

import viewstyle from 'theme/component/ViewStyle';
import Tooltip from 'react-native-walkthrough-tooltip';
import LottieView from 'lottie-react-native';
import Video from 'react-native-video';
// import VideoPlayer from 'react-native-video-player';

import OfficialSchoolPartnerIcon from 'assets/svg/officialschoolpartnericon.js';
import InfoIcon from 'assets/svg/infoicon.js';
import OverviewStudIcon from 'assets/svg/overviewstudenticon.js';
import OverviewStdIcon from 'assets/svg/overviewstdicon.js';
import OverviewSeatIcon from 'assets/svg/overviewseaticon.js';
import OverviewStarIcon from 'assets/svg/overviewstaricon.js';
import HeartIcon from 'assets/svg/dloveBlue.js';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetFeesStdWiseBySchoolId, GetAllSchoolDetailBySchoolID, GetAllFeeStructureBySchoolID, GetCriteriaBySchoolID, GetFAQBySchoolID, GetReviewBySchoolID } from 'action/user';

import _ from 'lodash';
import { FEESTRUCTURE } from 'constants/Enum';

const SchoolDetail = ({ navigation, props, route }) => {

    let commentFieldRef = React.createRef();
    let video1Ref = React.createRef();
    let video2Ref = React.createRef();

    const dispatch = useDispatch(); //Store Redux value using useDispatch
    const getSelctedAdmissionProcess = useSelector(state => state.user.ReduxSchoolCriteria)

    var currentYear = new Date().getFullYear();
    const [schoolData, SetSchoolData] = useState({});
    const [imageData, SetImageData] = useState([Images.schoolImage, Images.schoolImage, Images.schoolImage, Images.schoolImage, Images.schoolImage]);
    const [sections, SetSections] = useState([BaseText.SectionOverview, BaseText.SectionFeeStruct, BaseText.SectionCriteria, BaseText.SectionAdmision, BaseText.SectionFAQ, BaseText.SectionReview,]);
    const [selectedSec, SetSelectedSec] = useState(0);
    const [isshowOnlineToolTip, SetIsShowOnlineToolTip] = useState(false);
    const [isshowOfflineToolTip, SetIsShowOfflineToolTip] = useState(false);
    const [isshowTimelineToolTip, SetIsShowTimelineToolTip] = useState(false);
    const [comment, SetComment] = useState('')
    const [showVideoPlay, setShowVideoPlay] = useState(false)//show Video on Admission Process tab
    const [showVideoPlayAdmissionBtn, setShowVideoPlayAdmissionBtn] = useState(false) //Show Video on Admission Apply Button
    // const [amenities, SetAmenities] = useState(["Laboratories", "Auditorium", "Canteen", "Sport Area", "Garden & Lawns", "Day Care Facility", "Meditation", "Amphipheatre", "Transport Services", "Conference room", "Rooms for art & culture", "Digital Classrooms", "Yoga Centre", "Library"])
    const faculty = [
        {
            "id": 0,
            "name": "Dr. Aman Sagar",
            "designation": "Assistant Professor",
            "std": "4 to 6",
            "exp": "12",
            "sub": "Science",
            "profile": Images.EmployeeImage,
            "rate": "4.2"
        },
        {
            "id": 1,
            "name": "Dr. Aman Sagar",
            "designation": "Assistant Professor",
            "std": "4 to 6",
            "exp": "12",
            "sub": "Science",
            "profile": Images.EmployeeImage,
            "rate": "4.2"
        },
        {
            "id": 2,
            "name": "Dr. Aman Sagar",
            "designation": "Assistant Professor",
            "std": "4 to 6",
            "exp": "12",
            "sub": "Science",
            "profile": Images.EmployeeImage,
            "rate": "4.2"
        },
        {
            "id": 3,
            "name": "Dr. Aman Sagar",
            "designation": "Assistant Professor",
            "std": "4 to 6",
            "exp": "12",
            "sub": "Science",
            "profile": Images.EmployeeImage,
            "rate": "4.2"
        }
    ]
    const [amenities, SetAmenities] = useState([]);
    // const [faculty, SetFaculty] = useState([
    //     {
    //         "id": 0,
    //         "name": "Dr. Aman Sagar",
    //         "designation": "Assistant Professor",
    //         "std": "4 to 6",
    //         "exp": "12",
    //         "sub": "Science",
    //         "profile": Images.EmployeeImage,
    //         "rate": "4.2"
    //     },
    //     {
    //         "id": 1,
    //         "name": "Dr. Aman Sagar",
    //         "designation": "Assistant Professor",
    //         "std": "4 to 6",
    //         "exp": "12",
    //         "sub": "Science",
    //         "profile": Images.EmployeeImage,
    //         "rate": "4.2"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Dr. Aman Sagar",
    //         "designation": "Assistant Professor",
    //         "std": "4 to 6",
    //         "exp": "12",
    //         "sub": "Science",
    //         "profile": Images.EmployeeImage,
    //         "rate": "4.2"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Dr. Aman Sagar",
    //         "designation": "Assistant Professor",
    //         "std": "4 to 6",
    //         "exp": "12",
    //         "sub": "Science",
    //         "profile": Images.EmployeeImage,
    //         "rate": "4.2"
    //     }
    // ]);
    const [admisionCriteria, SetAdmisionCriteria] = useState([
        {
            "id": 0,
            "label": "Pre Nursery, Nursery & KG",
            "text": "Interaction with Parents and Child."
        },
        {
            "id": 1,
            "label": "CLASSES I - VII",
            "text": "Entrance Test."
        },
        {
            "id": 2,
            "label": "CLASSES IX",
            "text": "Merit and Entrance Test."
        }
    ]);
    const [documentsCriteria, SetDocumentsCriteria] = useState([
        "Birth Certificate",
        "Aadhar Card/Passport",
        "Progress Report of Previous class (Class I upwards)",
        "Two latest passport size-coloured photographs (Parents)",
        "Five latest passport size-coloured photographs (Student)",
        "Transfer Certificate (from Class I onwards)"
    ]);
    const [ageCriteria, SetAgeCriteria] = useState([
        {
            "id": 0,
            "label": "Pre Nursery",
            "text": "2+ years as on 1st April of the year seeking admission."
        },
        {
            "id": 1,
            "label": "Nursery",
            "text": "3+ years as on 1st April of the year seeking admission."
        },
        {
            "id": 2,
            "label": "KG",
            "text": "4+ years as on 1st April of the year seeking admission."
        },
        {
            "id": 3,
            "label": "Class I",
            "text": "4+ years as on 1st April of the year seeking admission."
        }
    ]);
    // const [admisionProcess, SetAdmisionProcess] = useState([
    //     "Apply for Admission.",
    //     "Complete KYC/Submit Documents.",
    //     "Wait for your Application/Request to approve from School.",
    //     "Pay Admission Test Fee.(If Approved)",
    //     "Appear for Admission Test.",
    //     "Wait for Results.",
    //     "Pay Your Admission Fee, (If Passed).",
    //     "Get your Classroom Credentials.",
    //     "Login to your Class/School.",
    //     "Attend Classes."
    // ]);
    const [admisionProcess, SetAdmisionProcess] = useState('');
    const [feeStructureD, SetFeeStructureD] = useState([]) //Fess Structure by Std
    // const [feeStructureD, SetFeeStructureD] = useState([
    //     {
    //         "id": 0,
    //         "label": "Nur - KG",
    //         "content": [
    //             {
    //                 "id": 0,
    //                 "label": "Registration Fee (One Time) Online/Offline",
    //                 "online": "Free",
    //                 "offline": "Free"
    //             },
    //             {
    //                 "id": 1,
    //                 "label": "Admission Fee (One Time)",
    //                 "online": "500",
    //                 "offline": "500"
    //             },
    //             {
    //                 "id": 2,
    //                 "label": "Security Fee (Refundable) (One Time)",
    //                 "online": "N/A",
    //                 "offline": "N/A"
    //             },
    //             {
    //                 "id": 3,
    //                 "label": "Tuition Fee (Monthly) Online/Offline",
    //                 "online": "300/700",
    //                 "offline": "300/700"
    //             },
    //             {
    //                 "id": 4,
    //                 "label": "Total at the time of admission Online/Offline",
    //                 "online": "800/1200",
    //                 "offline": "800/1200"
    //             }
    //         ]
    //     },
    //     {
    //         "id": 1,
    //         "label": "I - V",
    //         "content": [
    //             {
    //                 "id": 0,
    //                 "label": "Registration Fee (One Time) Online/Offline",
    //                 "online": "Free",
    //                 "offline": "Free"
    //             },
    //             {
    //                 "id": 1,
    //                 "label": "Admission Fee (One Time)",
    //                 "online": "500",
    //                 "offline": "500"
    //             },
    //             {
    //                 "id": 2,
    //                 "label": "Security Fee (Refundable) (One Time)",
    //                 "online": "N/A",
    //                 "offline": "N/A"
    //             },
    //             {
    //                 "id": 3,
    //                 "label": "Tuition Fee (Monthly) Online/Offline",
    //                 "online": "300/700",
    //                 "offline": "300/700"
    //             },
    //             {
    //                 "id": 4,
    //                 "label": "Total at the time of admission Online/Offline",
    //                 "online": "800/1200",
    //                 "offline": "800/1200"
    //             }
    //         ]
    //     },
    //     {
    //         "id": 2,
    //         "label": "VI - VII",
    //         "content": [
    //             {
    //                 "id": 0,
    //                 "label": "Registration Fee (One Time) Online/Offline",
    //                 "online": "Free",
    //                 "offline": "Free"
    //             },
    //             {
    //                 "id": 1,
    //                 "label": "Admission Fee (One Time)",
    //                 "online": "500",
    //                 "offline": "500"
    //             },
    //             {
    //                 "id": 2,
    //                 "label": "Security Fee (Refundable) (One Time)",
    //                 "online": "N/A",
    //                 "offline": "N/A"
    //             },
    //             {
    //                 "id": 3,
    //                 "label": "Tuition Fee (Monthly) Online/Offline",
    //                 "online": "300/700",
    //                 "offline": "300/700"
    //             },
    //             {
    //                 "id": 4,
    //                 "label": "Total at the time of admission Online/Offline",
    //                 "online": "800/1200",
    //                 "offline": "800/1200"
    //             }
    //         ]
    //     }
    // ]);
    const [faqD, SetFAQD] = useState([]);
    const [reviewD, SetReviewD] = useState([]);
    const [ratingSli, SetRatingSli] = useState([1, 1])
    const [rate, SetRate] = useState(1);
    const [showAdmissionApply, SetShowAmissionApply] = useState(false) //show admission process
    const [selectedLearningMode, SetSelectedLearningMode] = useState(0);
    const [load, SetLoad] = useState(false);
    const [showFeeModal, SetShowFeeModal] = useState(false)
    const [num, SetNum] = useState('9876543210');
    const [email, SetEmail] = useState('atul989@gmail.com');
    const [isuserLogin, setIsuserLogin] = useState(false);

    //Common UseEffect
    useEffect(() => {
        _checkUserLogin()
        _GetSchoolDetail();
        // _GetSchoolFees();
        _GetSchoolCriteria();
        _GetSchoolFAQ();
        _GetSchoolReview();
        _getFeesStdWiseBySchoolIdAPI()
        console.log("Selected School Redux------>", getSelctedAdmissionProcess);
    }, [isuserLogin])
    //Common UseEffect

    //Use Effect to fetch school detail
    useEffect(() => {
        // setTimeout(() => {
        //     SetLoad(false);
        // }, 1500);
    }, [schoolData])
    //Use Effect to fetch school detail


    //================================ Start common Function ===========================================
    // Check user is login or not
    const _checkUserLogin = async () => {
        const isUserLogin = await AsyncStorage.getItem('LoginUserAsync');
        // setUserlogin(isUserLogin)
        console.log("Async Value on Api js", isUserLogin);
        if (isUserLogin == null || isUserLogin == 'null') {
            // navigation.navigate('Login');
            setIsuserLogin(false)
        }
        else {
            // navigation.navigate('Location');
            setIsuserLogin(true)
        }
    }

    //Get School Detail
    const _GetSchoolDetail = () => {
        const { id } = route.params;
        // console.log(id);
        const params = {};
        params.schoolId = id;
        try {
            GetAllSchoolDetailBySchoolID(params, (result) => {
                if (result.success) {
                    // console.log(result.result)
                    var res = result.result;
                    // console.log(res);
                    SetAmenities(res.amenityList);
                    SetSchoolData(res.schoolDetails);
                    SetLoad(false);
                    // SetFaculty(faculty)
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
    //Get School Detail

    //Get School Fee Structure
    const _GetSchoolFees = () => {
        const { id } = route.params;
        // console.log(id);
        const params = {};
        params.SchoolId = id;
        try {
            GetAllFeeStructureBySchoolID(params, (result) => {
                if (result.success) {
                    // console.log(result.result)
                    var res = result.result;
                    // console.log(res);
                }
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    //Get School Fee Structure

    //Get School Criteria
    const _GetSchoolCriteria = () => {
        const { id } = route.params;
        // console.log(id);
        const params = {};
        params.SchoolId = id;
        try {
            GetCriteriaBySchoolID(params, (result) => {
                if (result.success) {
                    // console.log(result.result)
                    var res = result.result;
                    // console.log(res[0]);
                    var cri = res[0]
                    dispatch({
                        type: 'Selcted_SchoolCriteria',
                        data: cri
                    })
                    console.log("Response of age------------>", cri);
                    SetAdmisionProcess(cri.admissionProcess);
                    SetAdmisionCriteria(cri.subCriteria);
                    SetDocumentsCriteria(cri.requiredDocument);

                }
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    //Get School Criteria

    //Get School FAQ
    const _GetSchoolFAQ = () => {
        const { id } = route.params;
        // console.log(id);
        const params = {};
        params.SchoolId = id;
        try {
            GetFAQBySchoolID(params, (result) => {
                if (result.success) {
                    // console.log(result.result)
                    var res = result.result;
                    // console.log(res);
                    SetFAQD(res);
                }
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    //Get School FAQ

    //Get School Review
    const _GetSchoolReview = () => {
        const { id } = route.params;
        // console.log(id);
        const params = {};
        params.SchoolId = id;
        try {
            GetReviewBySchoolID(params, (result) => {
                if (result.success) {
                    // console.log(result.result)
                    var res = result.result;
                    // console.log(res);
                    SetReviewD(res);
                }
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    //Get School Review

    //================================ API common Function ===========================================
    //Get School Fee Structure by Schhol Id
    const _getFeesStdWiseBySchoolIdAPI = () => {
        const { id } = route.params;
        // console.log(id);
        const params = {};
        params.SchoolId = id;
        // console.log("School Id", params);
        try {
            GetFeesStdWiseBySchoolId(params, (result) => {
                if (result.success) {
                    // console.log(result.result)
                    var res = result.result;
                    SetFeeStructureD(res.standardWiseFees)
                    console.log("Response Of Fess Std Wise", res);
                }
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    //================================ Start common componenet =========================================== 
    //Header Render Method
    const _header = () => {
        return (
            <RLHeader
                isSchoolDetailHeader
                title={schoolData.name}
                subtitle={schoolData.location}
                onpressleft={() => navigation.goBack()}
            />
        )
    }
    //Header Render Method

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

    //Image Slider Render Method
    const _renderImageSliderItem = ({ item, index }) => {
        return (
            <View style={'image' + index}>
                <Image source={item} style={[styles.imageStyle, { marginLeft: index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * 7 : BaseStyle.DEVICE_WIDTH / 100 * 5, marginRight: index == imageData.length - 1 ? BaseStyle.DEVICE_WIDTH / 100 * 5 : 0, }]} />
            </View>
        );
    }
    //Image Slider Render Method

    //Section Tab Render Method
    const _renderSectionItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                key={"Section" + index}
                style={[styles.sectionWrapper, {
                    marginLeft: index == 0 ? 0 : 15,
                    marginRight: index == sections.length - 1 ? 15 : 0,
                }]}
                onPress={() => {
                    SetSelectedSec(index),
                        setShowVideoPlay(false)

                }}
            >
                <RLText
                    text={item}
                    style={[selectedSec == index ? styles.selectedSectionTitle : styles.unSelectedSectionTitle,]}
                />
                {selectedSec == index && <View style={styles.sectionUnderline} />}
            </TouchableOpacity>
        );
    }
    //Section Tab Render Method

    //Render Amenity Item
    const _renderAmenityItem = ({ item, index }) => {
        return (
            <View style={{
                // backgroundColor: 'yellow',
                flex: 0.5,
                marginLeft: index % 2 == 0 ? 0 : 5,
                marginRight: index % 2 == 0 ? 5 : 0,
                marginVertical: 3,
            }}>
                <RLCheckIconText
                    text={item.amenityName}
                />
            </View>
        );
    }
    //Render Amenity Item

    //Render Faculty Item
    const _renderFacultyItem = ({ item, index }) => {
        return (
            <View>
                <RLFacultyView
                    profile={item.profile}
                    name={item.name}
                    sub={item.sub}
                    desig={item.designation}
                    std={item.std}
                    exp={item.exp}
                    rate={item.rate}
                />
            </View>
        );
    }
    //Render Faculty Item

    //Render Admission Criteria Item
    const _renderAdmisionCriteriaItem = ({ item, index }) => {
        return (
            <RLTwoText
                text={"Standard " + item.standard + ": "}
                text1={item.criteria}
                textStyle={{
                    fontSize: 11,
                    fontFamily: ENV.mfontFamilyBold,
                    color: Colors.pink,
                }}
                text1Style={{
                    fontSize: 11,
                    fontFamily: ENV.mfontFamilyMedium,
                    color: Colors.pink,
                }}
            />
        );
    }
    //Render Admission Criteria Item

    //Render Document Criteria Item
    const _renderDocumentCriteriaItem = ({ item, index }) => {
        return (
            <RLTwoText
                text={(index + 1) + "- "}
                text1={item.documentName}
                textStyle={{
                    fontSize: 11,
                    fontFamily: ENV.mfontFamilyRegular,
                    color: Colors.pink,
                }}
                text1Style={{
                    fontSize: 11,
                    fontFamily: ENV.mfontFamilyRegular,
                    color: Colors.pink,
                }}
            />
        );
    }
    //Render Document Criteria Item

    //Render Age Criteria Item
    const _renderAgeCriteriaItem = ({ item, index }) => {
        return (
            <RLTwoText
                text={(index + 1) + "- " + item.label + ": "}
                text1={item.text}
                textStyle={{
                    fontSize: 11,
                    fontFamily: ENV.mfontFamilyBold,
                    color: Colors.pink,
                }}
                text1Style={{
                    fontSize: 11,
                    fontFamily: ENV.mfontFamilyMedium,
                    color: Colors.pink,
                }}
            />
        );
    }
    //Render Age Criteria Item

    //Render Admission Process Item
    const _renderAdmissionProcessItem = ({ item, index }) => {
        return (
            <RLTwoText
                text={(index + 1) + "- "}
                text1={item}
                textStyle={{
                    fontSize: 11,
                    fontFamily: ENV.mfontFamilyRegular,
                    color: Colors.pink,
                }}
                text1Style={{
                    fontSize: 11,
                    fontFamily: ENV.mfontFamilyRegular,
                    color: Colors.pink,
                }}
            />
        );
    }
    //Render Admission Process Item

    //Render Fee Structure Item
    const _renderFeeStructureItem = ({ item, index }) => {
        return (
            <View style={styles.cardView}>
                <RLCollapsibleView
                    active={true}
                    activeBGColor={Colors.blue1}
                    inActiveBGColor={Colors.pink}
                    headerheight={43}
                    header={
                        <View style={{
                            paddingVertical: 15,
                            paddingHorizontal: 10,
                        }}>
                            <RLThreeColFeeStructure
                                child1={<RLText
                                    text={item.standard}
                                    style={styles.fsHeaderTextStyle}
                                />}
                                child2={<RLText
                                    text={BaseText.onlineText}
                                    style={styles.fsHeaderTextStyle}
                                />}
                                child3={<RLText
                                    text={BaseText.offlineText}
                                    style={styles.fsHeaderTextStyle}
                                />}
                                isArrow
                            />
                        </View>
                    }
                    child={
                        <View
                            style={{ backgroundColor: Colors.white, padding: 10, }}
                        >
                            <RLFlatList
                                key={"Fee Content " + index}
                                // style={{ height: BaseStyle.DEVICE_HEIGHT / 100 * 30, }}
                                data={item.feesDetailList}
                                renderItem={(itemM) => {
                                    var itemMM = itemM.item;
                                    // console.log(itemMM, itemMM.label);
                                    return (
                                        <View style={{
                                            paddingVertical: 5,
                                            paddingHorizontal: 10,
                                        }}>
                                            <RLThreeColFeeStructure
                                                isStart
                                                child1={<RLText
                                                    text={itemMM.feeDetails}
                                                    style={styles.fsLabelTextStyle}
                                                />}
                                                child2={<RLText
                                                    text={itemMM.onlineFees}
                                                    style={styles.fsValueTextStyle}
                                                />}
                                                child3={<RLText
                                                    text={itemMM.offlineFees}
                                                    style={styles.fsValueTextStyle}
                                                />}
                                            />
                                        </View>
                                    );
                                }}
                            />
                        </View>
                    }
                />
            </View>
        );
    }
    //Render Fee Structure Item

    //Render FAQ Item
    const _renderFAQItem = ({ item, index }) => {
        return (
            <View style={styles.cardView}>
                <RLCollapsibleView
                    active={true}
                    activeBGColor={Colors.blue1}
                    inActiveBGColor={Colors.lightViolet}
                    isSimpleNInverted
                    text={item.question}
                    // text={'hhhhh'}
                    headerheight={43}
                    activeTextStyle={[styles.fsHeaderTextStyle, { color: Colors.white1 }]}
                    inActiveTextStyle={[styles.fsHeaderTextStyle, { color: Colors.pink }]}
                    child={
                        <View
                            style={{ backgroundColor: Colors.white1, padding: 10, }}
                        >
                            <RLText
                                text={item.answer}
                                style={[styles.ansTextStyle]}
                            />
                        </View>
                    }
                />
            </View>
        );
    }
    //Render FAQ Item

    //Render Review Item
    const _renderReviewItem = ({ item, index }) => {
        return (
            <View style={{ marginVertical: 10, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={Images.EmployeeImage} style={styles.stuImageStyle} />
                        <View>
                            <RLText
                                text={item.reviewerName}
                                style={{
                                    color: Colors.blue1,
                                    fontFamily: ENV.mfontFamilySemiBold,
                                    fontSize: 13,
                                }}
                            />
                            <RLText
                                text={'Student'}
                                style={{
                                    color: Colors.blue1,
                                    fontFamily: ENV.mfontFamilyRegular,
                                    fontSize: 10,
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <OverviewStarIcon />
                        <RLText
                            text={item.rating}
                            style={{
                                color: Colors.blue1,
                                fontFamily: ENV.mfontFamilyBlackItalic,
                                fontSize: 13,
                                marginLeft: 5,
                            }}
                        />
                    </View>
                </View>
                <RLText
                    text={item.review}
                    // text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te'}
                    style={{
                        color: Colors.pink,
                        fontSize: 8,
                        fontFamily: ENV.mfontFamilyRegular,
                        marginTop: 15,
                    }}
                />
            </View>
        )
    }
    //Render Review Item

    //Overview Section Render Method
    const _renderOverviewSection = () => {
        return (
            <View style={{ flex: 1, paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 7, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, }}>
                    <RLText
                        text={BaseText.modOfLearn}
                        style={styles.titleText}
                    />
                    <OfficialSchoolPartnerIcon />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Tooltip
                            contentStyle={{ width: BaseStyle.DEVICE_WIDTH / 100 * 56, padding: 15, borderRadius: 5, backgroundColor: Colors.lightgreen, }}
                            animated={true}
                            // topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
                            // arrowSize={{ width: 20, height: 18, }}
                            backgroundColor="rgba(0,0,0,0.1)"
                            isVisible={isshowOnlineToolTip}
                            content={
                                <TouchableOpacity
                                    onPress={() => {
                                        SetIsShowOnlineToolTip(false);
                                    }}
                                    activeOpacity={1}
                                >
                                    <RLText
                                        text={'Lorem ipsum dolor sit amet, consectetueradipiscing elit, sed diam nonummy nibh euismodtincidunt ut laoreet dolore magna aliquam eratvolutpat.'}
                                        style={{
                                            fontSize: 10,
                                            color: Colors.white,
                                            fontFamily: ENV.mfontFamilyRegular
                                        }}
                                    />
                                </TouchableOpacity>
                            }
                            placement={'top'}
                            onClose={() => { }}
                            showChildInTooltip={false}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    SetIsShowOnlineToolTip(!isshowOnlineToolTip);
                                }}
                                style={{ marginRight: 5, }}
                            >
                                <RLLearningMode
                                    color={Colors.lightgreen}
                                    isRight
                                    text={BaseText.onlineText}
                                />
                            </TouchableOpacity>
                        </Tooltip>
                        <Tooltip
                            contentStyle={{ width: BaseStyle.DEVICE_WIDTH / 100 * 56, padding: 15, borderRadius: 5, backgroundColor: Colors.blue5, }}
                            animated={true}
                            // topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
                            // arrowSize={{ width: 20, height: 18, }}
                            backgroundColor="rgba(0,0,0,0.1)"
                            isVisible={isshowOfflineToolTip}
                            content={
                                <TouchableOpacity
                                    onPress={() => {
                                        SetIsShowOfflineToolTip(false);
                                    }}
                                    activeOpacity={1}
                                >
                                    <RLText
                                        text={'Lorem ipsum dolor sit amet, consectetueradipiscing elit, sed diam nonummy nibh euismodtincidunt ut laoreet dolore magna aliquam eratvolutpat.'}
                                        style={{
                                            fontSize: 10,
                                            color: Colors.white,
                                            fontFamily: ENV.mfontFamilyRegular
                                        }}
                                    />
                                </TouchableOpacity>
                            }
                            placement={'top'}
                            onClose={() => { }}
                            showChildInTooltip={false}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    SetIsShowOfflineToolTip(!isshowOfflineToolTip);
                                }}
                            >
                                <RLLearningMode
                                    color={Colors.blue5}
                                    isLeft
                                    text={BaseText.offlineText}
                                />
                            </TouchableOpacity>
                        </Tooltip>
                    </View>
                    <Tooltip
                        contentStyle={{ width: BaseStyle.DEVICE_WIDTH / 100 * 56, padding: 15, borderRadius: 5, backgroundColor: Colors.lightViolet, }}
                        animated={true}
                        // topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
                        // arrowSize={{ width: 20, height: 18, }}
                        backgroundColor="rgba(0,0,0,0.1)"
                        isVisible={isshowTimelineToolTip}
                        content={
                            <TouchableOpacity
                                onPress={() => {
                                    SetIsShowTimelineToolTip(false);
                                }}
                                activeOpacity={1}
                            >
                                <RLText
                                    text={'Lorem ipsum dolor sit amet, consectetueradipiscing elit, sed diam nonummy nibh euismodtincidunt ut laoreet dolore magna aliquam eratvolutpat.'}
                                    style={{
                                        fontSize: 10,
                                        color: Colors.blue1,
                                        fontFamily: ENV.mfontFamilyRegular
                                    }}
                                />
                            </TouchableOpacity>
                        }
                        placement={'top'}
                        onClose={() => { }}
                        showChildInTooltip={false}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                SetIsShowTimelineToolTip(!isshowTimelineToolTip);
                            }}
                        >
                            <View style={{ backgroundColor: Colors.pink, borderRadius: 8, paddingVertical: 10, paddingHorizontal: 10, }}>
                                <RLText
                                    text={BaseText.admissTimeline}
                                    style={{
                                        fontFamily: ENV.mfontFamilyBold,
                                        fontSize: 7,
                                        color: Colors.white,
                                    }}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                    <RLText
                                        text={'11 Jan-15 March'}
                                        style={{
                                            fontFamily: ENV.mfontFamilyMedium,
                                            fontSize: 7,
                                            color: Colors.white,
                                        }}
                                    />
                                    <InfoIcon />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Tooltip>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, }}>
                    <RLOverviewIcon
                        text={schoolData.totalStudents}
                        text1={'Students'}
                        icon={<OverviewStudIcon />}
                    />
                    <RLOverviewIcon
                        text={'Standard'}
                        text1={schoolData.strandardFrom + ' to ' + schoolData.strandardTo}
                        icon={<OverviewStdIcon />}
                    />
                    <RLOverviewIcon
                        text={schoolData.numberOfSeats - schoolData.numberOfSeatsFilled}
                        text1={'Seat Left'}
                        icon={<OverviewSeatIcon />}
                    />
                    <RLOverviewIcon
                        text={'+4.5'}
                        text1={'rates'}
                        icon={<OverviewStarIcon />}
                    />
                </View>
                <View style={{ marginTop: 20, }}>
                    <RLText
                        text={BaseText.aboutSchool}
                        style={styles.titleText}
                    />
                    <View>
                        <RLViewMore
                            numOLin={4}
                            textStyle={{
                                fontFamily: ENV.mfontFamilyRegular,
                                fontSize: 11,
                                color: Colors.pink,
                            }}
                            rmTextLess={'see less.....'}
                            rmTextMore={'see more.....'}
                            rmTextLessStyle={{
                                fontFamily: ENV.mfontFamilyBold,
                                fontSize: 11,
                                color: Colors.pink,
                            }}
                            rmTextMoreStyle={{
                                fontFamily: ENV.mfontFamilyBold,
                                fontSize: 11,
                                color: Colors.pink,
                            }}
                            text={schoolData.details}
                        // text={'K.R. Mangalam World School Greater Noida Branch, a new milestone added in the legacy of the KRM brand stands tall for reputed value systems and xyzzzzzzzzzzzxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxzz.K.R. Mangalam World School Greater Noida Branch, a new milestone added in the legacy of the KRM brand stands tall for reputed value systems and xyzzzzzzzzzzzxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxzz'}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 20, }}>
                    <RLText
                        text={BaseText.schoolAmenities}
                        style={styles.titleText}
                    />
                    <RLFlatList
                        key={"Amenities"}
                        numColumns={2}
                        data={amenities}
                        style={{ flex: 1, marginTop: 10, }}
                        renderItem={({ item, index }) => _renderAmenityItem({ item, index })}
                    />
                </View>
                <View style={{ marginTop: 20, marginBottom: 20, }}>
                    <RLText
                        text={BaseText.staff}
                        style={styles.titleText}
                    />
                    <RLFlatList
                        // key={"Faculty"}
                        data={faculty}
                        horizontal={true}
                        // style={{ flex: 1, marginTop: 10, }}
                        style={{ marginTop: 10, }}
                        renderItem={({ item, index }) => _renderFacultyItem({ item, index })}
                    />
                </View>
            </View>
        );
    }
    //Overview Section Render Method

    //Criteria Section Render Method
    const _renderCriteriaSection = () => {
        return (
            <View style={{ flex: 1, paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 7, }}>
                <View style={{ marginTop: 15, }}>
                    <RLText
                        text={BaseText.admissionCriteria}
                        style={styles.titleText}
                    />
                    <RLFlatList
                        key={BaseText.admissionCriteria}
                        data={admisionCriteria}
                        style={{ flex: 1, marginTop: 10, }}
                        renderItem={({ item, index }) => _renderAdmisionCriteriaItem({ item, index })}
                    />
                </View>
                <View style={{ marginTop: 15, }}>
                    <RLText
                        text={BaseText.documentsCriteria}
                        style={styles.titleText}
                    />
                    <RLFlatList
                        key={BaseText.documentsCriteria}
                        data={documentsCriteria}
                        style={{ flex: 1, marginTop: 10, }}
                        renderItem={({ item, index }) => _renderDocumentCriteriaItem({ item, index })}
                    />
                </View>
                <View style={{ marginTop: 15, }}>
                    <RLText
                        text={BaseText.AgeCriteria}
                        style={styles.titleText}
                    />
                    {/* <RLFlatList
                        key={BaseText.AgeCriteria}
                        data={ageCriteria}
                        style={{ flex: 1, marginTop: 10, }}
                        renderItem={({ item, index }) => _renderAgeCriteriaItem({ item, index })}
                    /> */}
                </View>
            </View>
        );
    }
    //Criteria Section Render Method

    //Admission Process Render Method
    const _renderAdmisionProcess = () => {
        return (
            <View style={{ flex: 1, paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 7, }}>
                <View style={{ marginTop: 15, }}>
                    <RLText
                        text={BaseText.admissionProcess}
                        style={[styles.titleText, { marginBottom: 15, }]}
                    />
                    {!showVideoPlay &&
                        <ImageBackground
                            style={{
                                height: 134, width: BaseStyle.DEVICE_WIDTH / 100 * 86,
                                borderRadius: 15,
                            }}
                            imageStyle={{
                                height: 134, width: BaseStyle.DEVICE_WIDTH / 100 * 86,
                                borderRadius: 15
                            }}
                            source={Images.schoolImage}
                        >
                            <LinearGradient
                                colors={['rgba(102, 64, 138,0.5)', 'rgba(113, 74, 151,0.5)', 'rgba(126, 85, 164,0.5)']}
                                style={{
                                    height: 134, width: BaseStyle.DEVICE_WIDTH / 100 * 86,
                                    borderRadius: 15,
                                    justifyContent: 'center'
                                }}>
                                <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ height: 38, width: 38, }} onPress={() => setShowVideoPlay(true)}>
                                        <Image
                                            style={{ height: 40, width: 40, resizeMode: 'contain' }}
                                            source={Images.playVideo} />
                                    </TouchableOpacity>
                                    <RLText
                                        text={'Watch Video\n How Admission Process works'}
                                        style={{ fontSize: 11, color: Colors.white, fontFamily: ENV.mfontFamilyBoldItalic }}
                                    />
                                </View>
                            </LinearGradient>
                        </ImageBackground>
                    }

                    {showVideoPlay &&
                        <Video
                            source={{ uri: _.isNull(getSelctedAdmissionProcess.admissionProcessVideo) ? "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" : getSelctedAdmissionProcess.onlineAdmissionProcess }}
                            // source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
                            onBuffer={() => { }}                // Callback when remote video is buffering
                            onError={() => { }}               // Callback when video cannot be loaded
                            style={{
                                height: 134, width: BaseStyle.DEVICE_WIDTH / 100 * 86,
                                borderRadius: 15,
                                backgroundColor: 'black'
                            }}
                            controls={true}
                            // fullscreen={true}
                            // resizeMode={'cover'}
                            volume={1}
                            useTextureView={false}
                            ref={video1Ref}
                        // onLoad={() => setShowVideoPlay(false)}
                        // onLoadStart={() => setShowVideoPlay(true)}
                        />
                    }


                    {/* //07-04 */}
                    {/* <View style={{ backgroundColor: 'red' }}> */}
                    {/* <Video source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}   // Can be a URL or a local file.                                     // Store reference
                            onBuffer={() => { }}                // Callback when remote video is buffering
                            onError={() => { }}               // Callback when video cannot be loaded
                            style={styles.backgroundVideo}
                            controls={true}
                            fullscreen={true}
                            resizeMode={'cover'}
                            volume={1}
                            useTextureView={false}
                            ref={video1Ref}
                        /> */}
                    {/* <VideoPlayer
                            video={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
                            customStyles={styles.backgroundVideo}
                            resizeMode={'cover'}

                        // videoWidth={BaseStyle.DEVICE_WIDTH / 100 * 85}
                        // videoHeight={BaseStyle.DEVICE_HEIGHT / 100 * 25}
                        /> */}
                    {/* </View> */}
                </View>
                <View style={{ marginTop: 15, }}>
                    <RLText
                        text={BaseText.admissionProcess}
                        style={styles.titleText}
                    />
                    {/* <RLText
                        text={admisionProcess}
                        style={{
                            fontSize: 11,
                            fontFamily: ENV.mfontFamilyRegular,
                            color: Colors.pink,
                            marginBottom: 20,
                        }}
                    /> */}
                    <RLText
                        text={getSelctedAdmissionProcess.onlineAdmissionProcess}
                        style={{
                            fontSize: 11,
                            fontFamily: ENV.mfontFamilyRegular,
                            color: Colors.pink,
                            marginBottom: 20,
                        }}
                    />
                    {/* <RLFlatList
                        key={BaseText.admissionProcess}
                        data={getSelctedAdmissionProcess.onlineAdmissionProcess}
                        style={{ flex: 1, marginTop: 10, }}
                        renderItem={({ item, index }) => _renderAdmissionProcessItem({ item, index })}
                    /> */}

                </View>
            </View>
        );
    }
    //Admission Process Render Method

    //Fee Structure Render Method
    const _renderFeeStructure = () => {
        return (
            <View style={{ flex: 1, paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 5, }}>
                <View style={{ marginTop: 15, marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 2, }}>
                    <RLText
                        text={BaseText.feeStructure + " " + currentYear + " - " + (currentYear + 1)}
                        style={styles.titleText}
                    />
                    <View>
                        <RLFlatList
                            key={BaseText.feeStructure}
                            data={feeStructureD}
                            style={{ flex: 1, marginTop: 10, }}
                            renderItem={({ item, index }) => _renderFeeStructureItem({ item, index })}
                        />
                    </View>
                </View>
            </View>
        );
    }
    //Fee Structure Render Method

    //FAQ Render Method
    const _renderFAQ = () => {
        return (
            <View style={{ flex: 1, paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 5, }}>
                <View style={{ marginTop: 15, marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 2, }}>
                    <RLText
                        text={BaseText.faqTitle}
                        style={styles.titleText}
                    />
                    <View>
                        <RLFlatList
                            key={BaseText.faqTitle}
                            data={faqD}
                            style={{ flex: 1, marginTop: 10, }}
                            // style={{ marginTop: 10, }}
                            renderItem={({ item, index }) => _renderFAQItem({ item, index })}
                        />
                    </View>
                </View>
            </View>
        );
    }
    //FAQ Render Method

    //Review Render Method
    const _renderReview = () => {
        return (
            <View style={{ flex: 1, paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 7, }}>
                <View style={{ marginTop: 15, }}>
                    <RLText
                        text={BaseText.reviewTitle}
                        style={styles.titleText}
                    />
                </View>
                <View style={{ marginTop: 15, }}>
                    <RLFlatList
                        key={"Review Flatlist"}
                        data={reviewD}
                        renderItem={({ item, index }) => _renderReviewItem({ item, index })}
                    />
                </View>
                <View style={{ marginVertical: 15, }}>
                    <RLTextInput
                        isTwoImage={true}
                        refKey={'comment'}
                        value={comment}
                        fieldRef={commentFieldRef}
                        placeholder={BaseText.reviewPH}
                        onEditTextField={(value, type) => {
                            SetComment(value);
                        }}
                        onSubmitEditing={() => { }}
                        txtInputStyle={{ color: Colors.violet, fontSize: 10, fontFamily: ENV.mfontFamilyBoldm }}
                        placeholderTextColor={Colors.violet}
                        txtColor={Colors.violet}
                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 90}
                        textInputSubViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 85}
                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 65}
                        backgroundColor={Colors.gray6}
                        borderC={Colors.gray343}
                        borderW={1}
                        leftImage={Images.userProfileAccount}
                        rightImage={comment == '' ? Images.editIconBlue : Images.playBlueIcon}
                    />
                </View>
                <View>
                    <RLText
                        text={BaseText.reviewHeading1}
                        style={{
                            color: Colors.violet,
                            fontSize: 11,
                            fontFamily: ENV.mfontFamilyBold,
                        }}
                    />
                    <View style={{ marginTop: 10, }}>
                        <RLSlider
                            min={1}
                            max={5}
                            // LRpadding={40}
                            callback={(values) => {
                                // console.log(values)
                                SetRatingSli(values)
                                SetRate(values[0])
                            }}
                            single={true}
                            emptySliderStyle={{
                                backgroundColor: Colors.white,
                                borderRadius: 50,
                                borderColor: Colors.gray3,
                                borderWidth: 0.3,
                                height: 10,
                            }}
                            filledSliderStyle={{
                                backgroundColor: Colors.violet,
                                // borderRadius: 50,
                                // borderColor: Colors.gray3,
                                // borderWidth: 0.3,
                                // height: 8,
                            }}
                            sliderHeight={12}
                            sliderItems={[
                                <RLRateSliderItem
                                    key={1}
                                    value={1}
                                    label={"Very Poor"}
                                    first={ratingSli[0]}
                                    second={ratingSli.length > 1 ? ratingSli[1] : ratingSli[0]}
                                />,
                                <RLRateSliderItem
                                    key={2}
                                    value={2}
                                    label={"Poor"}
                                    first={ratingSli[0]}
                                    second={ratingSli.length > 1 ? ratingSli[1] : ratingSli[0]}
                                />,
                                <RLRateSliderItem
                                    key={3}
                                    value={3}
                                    label={"Good"}
                                    first={ratingSli[0]}
                                    second={ratingSli.length > 1 ? ratingSli[1] : ratingSli[0]}
                                />,
                                <RLRateSliderItem
                                    key={4}
                                    value={4}
                                    label={"Very Good"}
                                    first={ratingSli[0]}
                                    second={ratingSli.length > 1 ? ratingSli[1] : ratingSli[0]}
                                />,
                                <RLRateSliderItem
                                    key={5}
                                    value={5}
                                    label={"Excellent"}
                                    first={ratingSli[0]}
                                    second={ratingSli.length > 1 ? ratingSli[1] : ratingSli[0]}
                                />
                            ]}
                            isBottomLabel={true}
                        />
                    </View>
                    <View style={{ marginTop: 15, }}>
                        <RLButton
                            SimpleButton={true}
                            disabled={isuserLogin ? false : true}
                            simplebuttontext={BaseText.reviewSubmitBtnText}
                            simplebuttontextStyle={buttonStyle.simpleButtonTextStyle}
                            simplebuttonStyle={[buttonStyle.simpleButtonStyle, { marginBottom: BaseStyle.DEVICE_WIDTH / 100 * 4, marginTop: BaseStyle.DEVICE_WIDTH / 100 * 1, }]}
                            onpress={() => {

                                // console.log("Simple Button Press--");
                                // navigation.navigate("Addmissionform");
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
    //Review Render Method

    //Render How to Apply Modal
    const _renderApplyModal = () => {
        return (
            <View style={[styles.overlay,]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.modalWrapper}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, }}>
                            <RLText
                                text={BaseText.howtoApplyAdmis}
                                style={styles.titleText}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    SetShowAmissionApply(false);
                                }}
                            >
                                <Image
                                    source={Images.closeBlueWhiteIcon}
                                    style={{
                                        height: 20,
                                        width: 20,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        {!showVideoPlayAdmissionBtn &&
                            <ImageBackground
                                style={{
                                    height: 134, width: BaseStyle.DEVICE_WIDTH / 100 * 86,
                                    borderRadius: 15,
                                    marginTop: 15,
                                }}
                                imageStyle={{
                                    height: 134, width: BaseStyle.DEVICE_WIDTH / 100 * 86,
                                    borderRadius: 15
                                }}
                                source={Images.schoolImage}
                            >
                                <LinearGradient
                                    colors={['rgba(102, 64, 138,0.5)', 'rgba(113, 74, 151,0.5)', 'rgba(126, 85, 164,0.5)']}
                                    style={{
                                        height: 134, width: BaseStyle.DEVICE_WIDTH / 100 * 86,
                                        borderRadius: 15,
                                        justifyContent: 'center'
                                    }}>
                                    <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity style={{ height: 38, width: 38, }} onPress={() => setShowVideoPlayAdmissionBtn(true)}>
                                            <Image
                                                style={{ height: 40, width: 40, resizeMode: 'contain' }}
                                                source={Images.playVideo} />
                                        </TouchableOpacity>
                                        <RLText
                                            text={'Watch Video\n How Admission Process works'}
                                            style={{ fontSize: 11, color: Colors.white, fontFamily: ENV.mfontFamilyBoldItalic }}
                                        />
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        }

                        {showVideoPlayAdmissionBtn &&
                            <Video
                                // source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}   
                                source={{ uri: _.isNull(getSelctedAdmissionProcess.admissionProcessVideo) ? "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" : getSelctedAdmissionProcess.onlineAdmissionProcess }}
                                onBuffer={() => { }}                // Callback when remote video is buffering
                                onError={() => { }}               // Callback when video cannot be loaded
                                style={{
                                    height: 134, width: BaseStyle.DEVICE_WIDTH / 100 * 86,
                                    borderRadius: 15,
                                    backgroundColor: 'black',
                                    marginTop: 15,
                                }}
                                controls={true}
                                // fullscreen={true}
                                // resizeMode={'cover'}
                                volume={1}
                                useTextureView={false}
                                ref={video1Ref}
                            // onLoad={() => setShowVideoPlay(false)}
                            // onLoadStart={() => setShowVideoPlay(true)}
                            />
                        }
                        {/* <View style={{ marginTop: 15, }}>
                            <Video source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}   // Can be a URL or a local file.                                     // Store reference
                                onBuffer={() => { }}                // Callback when remote video is buffering
                                onError={() => { }}               // Callback when video cannot be loaded
                                style={styles.backgroundVideo}
                                controls={true}
                                fullscreen={true}
                                resizeMode={'cover'}
                                volume={1}
                                useTextureView={false}
                                ref={video2Ref}
                            />
                        </View> */}
                        <View style={{ marginTop: 30, }}>
                            <RLText
                                text={BaseText.htaapLearningMode}
                                style={styles.titleText}
                            />
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between', }}>
                                <TouchableOpacity onPress={() => {
                                    SetSelectedLearningMode(0);
                                }}
                                    style={[styles.learningOptionWrapper, { borderWidth: selectedLearningMode == 0 ? 0 : 0.3, borderRadius: selectedLearningMode == 0 ? 28 : 16 }]}
                                >
                                    <LinearGradient colors={selectedLearningMode == 0 ? [Colors.violet9, Colors.violet8] : [Colors.white, Colors.white]} style={[{
                                        padding: 10,
                                        flex: 1,
                                        borderRadius: selectedLearningMode == 0 ? 16 : 50,
                                        // borderWidth: selectedLearningMode == 0 ? 0.3 : 0, 
                                    }]}>
                                        <View style={{ flex: 1, }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                                <View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                        <RLText
                                                            text={'Online Class '}
                                                            style={{
                                                                fontSize: 8,
                                                                fontFamily: ENV.mfontFamilyExtraBold,
                                                                color: selectedLearningMode == 0 ? Colors.green2 : Colors.blue1,
                                                            }}

                                                        />
                                                        <RLText
                                                            text={'20 %'}
                                                            style={{
                                                                fontSize: 11,
                                                                fontFamily: ENV.mfontFamilyBoldItalic,
                                                                color: selectedLearningMode == 0 ? Colors.white : Colors.blue1,
                                                            }}

                                                        />
                                                    </View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                        <RLText
                                                            text={'Cheaper than '}
                                                            style={{
                                                                fontSize: 7,
                                                                fontFamily: ENV.mfontFamilyMedium,
                                                                color: selectedLearningMode == 0 ? Colors.white : Colors.blue1,
                                                            }}

                                                        />
                                                        <RLText
                                                            text={' offline'}
                                                            style={{
                                                                fontSize: 6,
                                                                fontFamily: ENV.mfontFamilyBoldItalic,
                                                                color: selectedLearningMode == 0 ? Colors.green2 : Colors.blue1,
                                                            }}

                                                        />
                                                    </View>
                                                    <RLText
                                                        text={'₹ 1720'}
                                                        style={{
                                                            fontSize: 11,
                                                            fontFamily: ENV.mfontFamilyBoldItalic,
                                                            color: selectedLearningMode == 0 ? Colors.white : Colors.blue1,
                                                        }}
                                                    />
                                                </View>
                                                <View style={selectedLearningMode == 0 ? styles.selectedOptionWrapper : styles.optionWrapper}>
                                                    {selectedLearningMode == 0 && <View style={styles.option}></View>}
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 28, }}>
                                                <RLText
                                                    text={'People Interested '}
                                                    style={{
                                                        fontSize: 7,
                                                        fontFamily: ENV.mfontFamilyBold,
                                                        color: selectedLearningMode == 0 ? Colors.white : Colors.blue1,
                                                    }}
                                                />
                                                <RLText
                                                    text={'2382'}
                                                    style={{
                                                        fontSize: 7,
                                                        fontFamily: ENV.mfontFamilyBlackItalic,
                                                        color: selectedLearningMode == 0 ? Colors.white : Colors.blue1,
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    SetSelectedLearningMode(1);
                                }}
                                    style={[styles.learningOptionWrapper, { borderWidth: selectedLearningMode == 1 ? 0 : 0.3, borderRadius: selectedLearningMode == 1 ? 28 : 16 }]}
                                >
                                    <LinearGradient colors={selectedLearningMode == 1 ? [Colors.violet9, Colors.violet8] : [Colors.white, Colors.white]} style={[{
                                        padding: 10,
                                        flex: 1,
                                        borderRadius: selectedLearningMode == 1 ? 16 : 50,
                                        // borderWidth: selectedLearningMode == 1 ? 0.3 : 0,
                                    }]}>
                                        <View style={{ flex: 1, }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                                <View>
                                                    <RLText
                                                        text={'Offline Class'}
                                                        style={{
                                                            fontSize: 8,
                                                            fontFamily: ENV.mfontFamilyExtraBold,
                                                            color: selectedLearningMode == 1 ? Colors.green2 : Colors.blue1,
                                                        }}

                                                    />
                                                    <RLText
                                                        text={'₹ 2500'}
                                                        style={{
                                                            fontSize: 11,
                                                            fontFamily: ENV.mfontFamilyBoldItalic,
                                                            color: selectedLearningMode == 1 ? Colors.white : Colors.blue1,
                                                        }}
                                                    />
                                                </View>
                                                <View style={selectedLearningMode == 1 ? styles.selectedOptionWrapper : styles.optionWrapper}>
                                                    {selectedLearningMode == 1 && <View style={styles.option}></View>}
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, }}>
                                                <RLText
                                                    text={'People Interested '}
                                                    style={{
                                                        fontSize: 7,
                                                        fontFamily: ENV.mfontFamilyBold,
                                                        color: selectedLearningMode == 1 ? Colors.white : Colors.blue1,
                                                    }}
                                                />
                                                <RLText
                                                    text={'1500'}
                                                    style={{
                                                        fontSize: 7,
                                                        fontFamily: ENV.mfontFamilyBlackItalic,
                                                        color: selectedLearningMode == 1 ? Colors.white : Colors.blue1,
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginTop: 30, }}>
                            <RLText
                                text={selectedLearningMode == 1 ? BaseText.htaapOfflineProcedure : BaseText.htaapOnlineProcedure}
                                style={styles.titleText}
                            />
                            <RLText
                                text={selectedLearningMode == 1 ? getSelctedAdmissionProcess.offlineAdmissionProcess : getSelctedAdmissionProcess.onlineAdmissionProcess}
                                // text={admisionProcess}
                                style={{
                                    fontSize: 11,
                                    fontFamily: ENV.mfontFamilyRegular,
                                    color: Colors.pink,
                                    marginBottom: 20,
                                }}
                            />
                            {/* <RLFlatList
                                key={BaseText.htaapOnlineProcedure}
                                data={admisionProcess}
                                style={{ marginTop: 10, }}
                                renderItem={({ item, index }) => _renderAdmissionProcessItem({ item, index })}
                            /> */}
                        </View>
                        <View style={[styles.btnWrapper, {
                            flex: 1,
                            alignItems: 'flex-end',
                            // backgroundColor: 'yellow',
                        }]}>
                            <RLButton
                                SimpleButton={true}
                                simplebuttontext={BaseText.htaapBtnText}
                                simplebuttontextStyle={buttonStyle.simpleButtonTextStyle}
                                simplebuttonStyle={[buttonStyle.simpleButtonStyle, {
                                    marginBottom: BaseStyle.DEVICE_WIDTH / 100 * 1,
                                    marginTop: BaseStyle.DEVICE_WIDTH / 100 * 2, borderRadius: 5, alignSelf: 'center',
                                }]}
                                onpress={() => {
                                    // console.log("Simple Button Press--");
                                    SetShowAmissionApply(false);
                                    // navigation.navigate("Addmissionform");
                                    navigation.navigate("ThankForInterest");
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View >
        );
    }
    //Render How to Apply Modal

    //Render method for fee structure popup
    const _renderPopupModal = () => {
        return (
            <RLModal
                feeStatus={FEESTRUCTURE.SENDING}
                num={num}
                email={email}
                modalVisible={showFeeModal}
                isMobile={false}
                onChangeInput={(text) => {
                    // console.log(text);
                    SetNum(text);
                    SetEmail(text);
                }}
                changePress={() => {
                    console.log("Change");
                    SetShowFeeModal(false);
                }}
                btnLeftPress={() => {
                    console.log("Left Btn Press");
                    SetShowFeeModal(false);
                }}
            />
        );
    }
    //Render method for fee structure popup

    return (
        <Fragment>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white, }}>
                {_header()}
                <ScrollView showsVerticalScrollIndicator={false} >
                    <RLFlatList
                        key={'Image Slider'}
                        data={imageData}
                        horizontal={true}
                        pagingEnabled={true}
                        style={{
                            flex: 1,
                            // backgroundColor: 'yellow',
                            marginVertical: 10,
                        }}
                        renderItem={({ item, index }) => _renderImageSliderItem({ item, index })}
                    />
                    <RLFlatList
                        key={"Tab Slider"}
                        style={{ marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 7, }}
                        data={sections}
                        horizontal={true}
                        renderItem={({ item, index }) => _renderSectionItem({ item, index })}
                    />
                    {selectedSec == 0 && _renderOverviewSection()}
                    {selectedSec == 1 && _renderFeeStructure()}
                    {selectedSec == 2 && _renderCriteriaSection()}
                    {selectedSec == 3 && _renderAdmisionProcess()}
                    {selectedSec == 4 && _renderFAQ()}
                    {selectedSec == 5 && _renderReview()}
                </ScrollView>
                <View style={styles.btnWrapper}>
                    <RLButton
                        TwoTextBtn={true}
                        text1Style={buttonStyle.line2BtnTextStyle}
                        textStyle={buttonStyle.line1BtnTextStyle}
                        text={BaseText.overviewApplyBtnText}
                        text1={BaseText.overviewApplyBtnText1}
                        simplebuttonStyle={[buttonStyle.twoBtnStyle,]}
                        onpress={() => {
                            SetShowAmissionApply(true)
                        }}
                    />
                    <RLButton
                        TwoTextBtn={true}
                        text1Style={[buttonStyle.line1BtnTextStyle, { color: Colors.violet, }]}
                        textStyle={[buttonStyle.line1BtnTextStyle, { color: Colors.violet, }]}
                        text={BaseText.overviewFeeBtntext}
                        text1={BaseText.overviewFeeBtntext1}
                        simplebuttonStyle={[buttonStyle.twoBtnInvertedStyle,]}
                        onpress={() => {
                            SetShowFeeModal(true)
                        }}
                    />
                    <HeartIcon height={35} />
                </View>
            </SafeAreaView>
            {showAdmissionApply && _renderApplyModal()}
            {load && _renderLoader()}
            {showFeeModal && _renderPopupModal()}
        </Fragment>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        height: BaseStyle.DEVICE_HEIGHT / 100 * 30,
    },
    sectionWrapper: {
        alignItems: 'flex-start',
        // marginHorizontal: 15,
        marginVertical: 15,
        alignContent: 'center',
    },
    selectedSectionTitle: {
        fontFamily: ENV.mfontFamilyBold,
        fontSize: 13,
        color: Colors.pink,
    },
    unSelectedSectionTitle: {
        fontFamily: ENV.mfontFamilySemiBold,
        fontSize: 13,
        color: Colors.violet,
    },
    sectionUnderline: {
        backgroundColor: Colors.pink,
        borderRadius: 50,
        marginVertical: 2,
        height: 2,
        width: '100%',
    },
    titleText: {
        fontFamily: ENV.mfontFamilyExtraBold,
        fontSize: 13,
        color: Colors.violet,
    },
    btnWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 7,
        marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2,
    },
    backgroundVideo: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        height: BaseStyle.DEVICE_HEIGHT / 100 * 25,
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        // backgroundColor: 'yellow',
        borderRadius: 20,
        marginTop: 10,
        alignSelf: 'center',
    },
    cardView: {
        borderRadius: 12,
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        // height: BaseStyle.DEVICE_HEIGHT / 100 * 40,
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.00,
        elevation: 5,
        marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 1.5,
        marginHorizontal: BaseStyle.DEVICE_WIDTH / 100 * 1,
        overflow: 'hidden',
    },
    fsHeaderTextStyle: {
        fontSize: 11,
        fontFamily: ENV.mfontFamilyBold,
        color: Colors.white,
        // flex: 1,
        // flexWrap: 'wrap',
    },
    fsLabelTextStyle: {
        fontSize: 9,
        fontFamily: ENV.mfontFamilyBold,
        color: Colors.blue1,
        // flex: 1,
        // flexWrap: 'wrap',
    },
    fsValueTextStyle: {
        fontSize: 9,
        fontFamily: ENV.mfontFamilySemiBold,
        color: Colors.pink,
        // flex: 1,
        // flexWrap: 'wrap',
    },
    ansTextStyle: {
        fontSize: 8,
        fontFamily: ENV.mfontFamilyRegular,
        color: Colors.pink,
    },
    stuImageStyle: {
        height: 40,
        width: 40,
        borderRadius: 500,
        marginRight: 5,
        backgroundColor: Colors.lightViolet,
    },
    overlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: Colors.white1Opa50,
        width: BaseStyle.DEVICE_WIDTH,
        height: BaseStyle.DEVICE_HEIGHT,
    },
    modalWrapper: {
        backgroundColor: Colors.white,
        // flex: 1,
        minHeight: BaseStyle.DEVICE_HEIGHT,
        borderRadius: 50,
        padding: 20,
        // height: BaseStyle.DEVICE_HEIGHT,
    },
    optionWrapper: {
        borderColor: Colors.pink,
        justifyContent: 'center',
        borderRadius: 50,
        height: 18,
        width: 18,
        borderWidth: 2,
    },
    selectedOptionWrapper: {
        borderColor: Colors.green2,
        justifyContent: 'center',
        borderRadius: 50,
        height: 19,
        width: 19,
        borderWidth: 2,
    },
    option: {
        backgroundColor: Colors.green2,
        borderRadius: 50,
        height: 10,
        width: 10,
        alignSelf: 'center',
    },
    learningOptionWrapper: {
        height: BaseStyle.DEVICE_WIDTH / 100 * 25,
        width: BaseStyle.DEVICE_HEIGHT / 100 * 22,
        borderRadius: 16,
        borderColor: Colors.black,
        borderWidth: 0.3,
        // padding: 10,
        overflow: 'hidden',
    },
});

const select = (store) => {
    return store;
}
export default connect(select)(SchoolDetail);