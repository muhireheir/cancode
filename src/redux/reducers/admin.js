const admin = (state = {}, {type,payload}) => {
    switch (type) {
        case 'DASHBOARD_NUMBERS':
            return {...state,dashboard:payload.data};
        default:
            return state;
    }
}
export default admin;