import ApiClient from '../utils/ApiClient'
import CustomHistory from '../utils/CustomHistory'
import { makeErrorDict } from '../utils/APIUtils'


// actions types


// reducer
const initialState = {
    showDrawer: true,
    showOrgSwitchMenu: false,
    selectedOrgIndex: 0,
    groupsLoading: false,
    groups: [
        {
            "id": 1,
            "name": "Admin",
            "memberCount": 1
        },
        {
            "id": 2,
            "name": "Volunteer",
            "memberCount": 3
        },
        {
            "id": 3,
            "name": "Head Coordinators",
            "memberCount": 1
        },
        {
            "id": 4,
            "name": "Managers",
            "memberCount": 1
        }
    ],
    orgs: [
        {
            "id": 1,
            "org_name": "E Cell",
            "user_role": "Admin",
            "profile_pic": null,
            "route_slug": "0-e-cell",
            "tagline": "Leader Beyond Borders",
            "permissions": {
                "Is Admin": {
                    "value": true,
                    "perm_int": 1
                },
                "Is Staff": {
                    "value": true,
                    "perm_int": 4
                },
                "Can create tasks": {
                    "value": true,
                    "perm_int": 3
                },
                "Can create groups": {
                    "value": true,
                    "perm_int": 6
                },
                "Can reply to queries": {
                    "value": true,
                    "perm_int": 5
                }
            }
        },
        {
            "id": 2,
            "org_name": "NITRR",
            "user_role": "Volunteer",
            "profile_pic": null,
            "route_slug": "2-nitrr",
            "tagline": "Work is worship",
            "permissions": {
                "Is Admin": {
                    "value": true,
                    "perm_int": 1
                },
                "Is Staff": {
                    "value": false,
                    "perm_int": 4
                },
                "Can create tasks": {
                    "value": false,
                    "perm_int": 3
                },
                "Can create groups": {
                    "value": false,
                    "perm_int": 6
                },
                "Can reply to queries": {
                    "value": false,
                    "perm_int": 5
                }
            }
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}


// // actions
// export const loginUser = (email, password) => dispatch => {
//     dispatch({
//         type: LOGIN_FORM_SET_LOADING,
//     })

//     ApiClient().post('/users/login/', {
//         email, password
//     })
//         .then(response => {
//             storeToken(response.data['token'])
//             dispatch({
//                 type: LOGIN_FORM_LOGIN_SUCCESS,
//             })
//             CustomHistory.push('/searchOrgs')
//         }).catch(err => {
//             const { statusCode, errorDict } = makeErrorDict(err)

//             switch (statusCode) {
//                 case 421:
//                     alert("Please check your internet connection")
//                     dispatch({
//                         type: LOGIN_FORM_LOGIN_SUCCESS,
//                     })
//                     break
//                 case 401:
//                 case 404:
//                     dispatch({
//                         type: LOGIN_USER_SPECIAL_ERROR,
//                         payload: errorDict['detail']
//                     })
//                     break
//                 case 400:
//                 default:
//                     dispatch({
//                         type: LOGIN_USER_INPUT_ERROR,
//                         payload: errorDict
//                     })
//                     break
//             }

//         })
// }
