import API from 'api';//import Api File

//Post user Register and Send Otp for Registration in Mobile,Home
export const MobileAuthenticate = async (params, cb) => {
    API.POST(`/MobileAuth/Authenticate`, params)
        .then(json => {
            console.log("Response Of Json On Action", json);
            cb(json)
        })
}

//Post Create Faviourt School Home
export const CreateFavouriteSchool = async (params, cb) => {
    API.POST(`/services/app/SchoolFavourite/Create`, params)
        .then(json => {
            console.log("Response Of create School On Action", json);
            cb(json)
        })
}

//Get All Schools for Listing in Home
export const GetAllSchools = async (params, cb) => {
    API.GET(`/services/app/School/GetAll`, params)
        .then(json => {
            // console.log("Response Of Json On Action", json);
            cb(json)
        })
}
//Get All Schools for Listing in Home

//Get School's Detail by it's ID
export const GetAllSchoolDetailByID = async (params, cb) => {
    API.GET(`/services/app/School/Get`, params)
        .then(json => {
            // console.log("Response Of Json On Action", json);
            cb(json)
        })
}
//Get School's Detail by it's ID

//Get School Details By School ID
export const GetAllSchoolDetailBySchoolID = async (params, cb) => {
    API.GET(`/services/app/School/GetSchoolDetailsBySchoolId`, params)
        .then(json => {
            // console.log("Response Of Json On Action", json);
            cb(json)
        })
}
//Get School Details By School ID

//Get School's Fee Structure by School ID
export const GetAllFeeStructureBySchoolID = async (params, cb) => {
    API.GET(`/services/app/FeesStructure/GetAllbySchoolId`, params)
        .then(json => {
            // console.log("Response Of Json On Action", json);
            cb(json)
        })
}
//Get School's Fee Structure by School ID

//Get School's Criteria by School ID
export const GetCriteriaBySchoolID = async (params, cb) => {
    API.GET(`/services/app/SchoolCriteria/GetCriteriaBySchoolId`, params)
        .then(json => {
            // console.log("Response Of Json On Action", json);
            cb(json)
        })
}
//Get School's Criteria by School ID

//Get School's FAQ by School ID
export const GetFAQBySchoolID = async (params, cb) => {
    API.GET(`/services/app/SchoolFAQ/GetFAQBySchoolId`, params)
        .then(json => {
            // console.log("Response Of Json On Action", json);
            cb(json)
        })
}
//Get School's FAQ by School ID

//Get School's Review by School ID
export const GetReviewBySchoolID = async (params, cb) => {
    API.GET(`/services/app/SchoolReview/GetReviewBySchoolId`, params)
        .then(json => {
            // console.log("Response Of Json On Action", json);
            cb(json)
        })
}
//Get School's Review by School ID

//Get All City for Deny Location
export const GetAllCity = async (params, cb) => {
    API.GET(`/services/app/CityMaster/GetAll`, params)
        .then(json => {
            // console.log("Response Of Json On Action", json);
            cb(json)
        })
}

//Get All School by Filter for Home
export const GetAllSchoolListByFilter = async (params, cb) => {
    API.GET(`/services/app/School/GetSchoolListByFilter`, params)
        .then(json => {
            // console.log("Response Of Json On Action", json);
            cb(json)
        })
}

//Get All School By Name Home
export const GetSchoolByName = async (params, cb) => {
    API.GET(`/services/app/School/GetSchoolByName`, params)
        .then(json => {
            // console.log("Response Of Json On Action", json);
            cb(json)
        })
}

//Get Fess Structure By SchoolID OverView
export const GetFeesStdWiseBySchoolId = async (params, cb) => {
    API.GET(`/services/app/FeesStructure/GetFeesStdWiseBySchoolId`, params)
        .then(json => {
            // console.log("Response Of Json On Action", json);
            cb(json)
        })
}

//Get User Login Info Profile
export const GetUserByToken = async (params, cb) => {
    API.GET(`/services/app/User/GetUserByToken`, params)
        .then(json => {
            console.log("Response Of GetUserByToken : ", json);
            cb(json)
        })
}

//Get Faviourt School in Faviourt
export const GetSchoolFavouriteByToken = async (params, cb) => {
    API.GET(`/services/app/SchoolFavourite/GetSchoolFavouriteByToken`, params)
        .then(json => {
            console.log("Response Of GetSchoolFavouriteByToken : ", json);
            cb(json)
        })
}

//Get Token From Login User[otp]
export const GetTokenFromUserId = async (params, cb) => {
    API.GET(`/MobileAuth/GetTokenFromUserId`, params)
        .then(json => {
            console.log("Response Of GetTokenFromUserId : ", json);
            cb(json)
        })
}

//Delete faviourte[faviourte]
export const DeleteFavouriteSchool = async (params, cb) => {
    API.DELETE(`/services/app/SchoolFavourite/RemoveFavouriteBySchoolId`, params)
        .then(json => {
            console.log("Response Of Un favourite Action : ", json);
            cb(json)
        })
}

//Update User Profile[Account]
export const UpdateProfile = async (params, cb) => {
    API.PUT(`/services/app/User/Update`, params)
        .then(json => {
            console.log("Response Of update Profile Action : ", json);
            cb(json)
        })
}