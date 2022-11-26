const userState = {
    id: "UID078",
    name: "Nawaz Danish",
    Department: "IT",
    Address:{
        village: "Moinnagar",
        postOffice: "Goalpokher",
        district: "Uttar Dinajpur",
        state: "West Bengal",
        PIN: 733210
    }
}

const userReducer = (state = userState, action)=>{
    return state
}

export default userReducer;