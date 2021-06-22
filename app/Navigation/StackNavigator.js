//StackNavigator File 
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "component/Home/Home";
import Login from "component/Login/Login";
import Mobile from "component/Login/Mobile";
import Otp from "component/Login/Otp";
import Location from "component/Location/Location";
import AllowDenyLocation from "component/Location/AllowDenyLocation";
import TabNavigator from "./TabNavigator";
import Account from "component/Account/Account";
import EditProfile from "component/Account/EditProfile";
import ProfileView from "component/ProfileView";
import Localities from "component/Localities/Localities";
import CompareSchool from "component/CompareSchool/CompareSchool";
import EntranceTest from "component/EntranceTest/EntranceTest";
import AdmissionTest from "component/EntranceTest/AdmissionTest";
import FavouriteSchool from "component/FavouriteSchool/FavouriteSchool";
import CompareSchoolWise from "component/CompareSchool/CompareSchoolWise";
import AllSubjectsDone from "component/EntranceTest/AllSubjectsDone";
import TestResult from "component/MySchool/TestResult";
import SchoolDetail from "component/MySchool/SchoolDetail";
import ThankForInterest from "component/MySchool/ThankForInterest";
import Addmissionform from "component/AddmissionForm/Addmissionform";
import Documentupload from "component/AddmissionForm/Documentupload";
import SplashScreen from "component/SplashScreen/SplashScreen";
import SchoolForYou from "component/Home/SchoolForYou";
import ScheduleTest from "component/EntranceTest/ScheduleTest";
import JoinAdmissionTest from "../component/EntranceTest/JoinAdmissionTest";
import FeesPaymentMethod from "../component/EntranceTest/FeesPaymentMethod";
import Notification from "component/Notification/Notification";
import Campus from "component/Campus/Campus";
import Post from "component/Campus/Post";
import SchoolMeeting from "../component/Campus/Options/SchoolMeeting";

const Stack = createStackNavigator();

const BeforeLoginStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'SchoolMeeting'}
            headerMode={false}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Mobile" component={Mobile} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="AllowDenyLocation" component={AllowDenyLocation} />
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="ProfileView" component={ProfileView} />
            <Stack.Screen name="Localities" component={Localities} />
            <Stack.Screen name="CompareSchool" component={CompareSchool} />
            <Stack.Screen name="CompareSchoolWise" component={CompareSchoolWise} />
            <Stack.Screen name="FavouriteSchool" component={FavouriteSchool} />
            <Stack.Screen name="EntranceTest" component={EntranceTest} />
            <Stack.Screen name="AdmissionTest" component={AdmissionTest} />
            <Stack.Screen name="AllSubjectsDone" component={AllSubjectsDone} />
            <Stack.Screen name="TestResult" component={TestResult} />
            <Stack.Screen name="SchoolDetail" component={SchoolDetail} />
            <Stack.Screen name="Addmissionform" component={Addmissionform} />
            <Stack.Screen name="Documentupload" component={Documentupload} />
            <Stack.Screen name="SchoolForYou" component={SchoolForYou} />
            <Stack.Screen name="ThankForInterest" component={ThankForInterest} />
            <Stack.Screen name="ScheduleTest" component={ScheduleTest} />
            <Stack.Screen name="JoinAdmissionTest" component={JoinAdmissionTest} />
            <Stack.Screen name="FeesPaymentMethod" component={FeesPaymentMethod} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Campus" component={Campus} />
            <Stack.Screen name="Post" component={Post} />
            <Stack.Screen name="SchoolMeeting" component={SchoolMeeting} />
        </Stack.Navigator>
    );
}

// const AfterLoginStackNavigator = () => {
//     return (
//         <Stack.Navigator
//             initialRouteName={'SplashScreen'}
//             headerMode={false}>
//             <Stack.Screen name="SplashScreen" component={SplashScreen} />
//             {/* <Stack.Screen name="Login" component={Login} />
//             <Stack.Screen name="Mobile" component={Mobile} />
//             <Stack.Screen name="Otp" component={Otp} />
//             <Stack.Screen name="Location" component={Location} />
//             <Stack.Screen name="AllowDenyLocation" component={AllowDenyLocation} /> */}
//             <Stack.Screen name="Home" component={TabNavigator} />
//             <Stack.Screen name="Account" component={Account} />
//             <Stack.Screen name="EditProfile" component={EditProfile} />
//             <Stack.Screen name="ProfileView" component={ProfileView} />
//             <Stack.Screen name="Localities" component={Localities} />
//             <Stack.Screen name="CompareSchool" component={CompareSchool} />
//             <Stack.Screen name="CompareSchoolWise" component={CompareSchoolWise} />
//             <Stack.Screen name="FavouriteSchool" component={FavouriteSchool} />
//             <Stack.Screen name="EntranceTest" component={EntranceTest} />
//             <Stack.Screen name="AdmissionTest" component={AdmissionTest} />
//             <Stack.Screen name="AllSubjectsDone" component={AllSubjectsDone} />
//             <Stack.Screen name="TestResult" component={TestResult} />
//             <Stack.Screen name="SchoolDetail" component={SchoolDetail} />
//             <Stack.Screen name="Addmissionform" component={Addmissionform} />
//             <Stack.Screen name="Documentupload" component={Documentupload} />
//             <Stack.Screen name="SchoolForYou" component={SchoolForYou} />
//             <Stack.Screen name="ThankForInterest" component={ThankForInterest} />
//         </Stack.Navigator>
//     );
// }

export { BeforeLoginStackNavigator };