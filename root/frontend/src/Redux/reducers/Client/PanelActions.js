import ActionTypes from "../../actions/Client/ActionTypes";

const initialState = {
    isLoading: false,
    departments: [],
    isUpdateDepartmentSuccess: false,
    isNewJobAdded: false,
    openJobs: [],
    allCandidates: [],
    selectedJob: null,
    isInterviewStageUpdated: false,
    isInterviewStageCompleted: false,
    monthlySchedule: {},
    error: false,
};

const panelReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CLIENT_LOADING_PANEL:
            return {
                ...state,
                isUpdateDepartmentSuccess: false,
                isNewJobAdded: false,
                isInterviewStageUpdated: false,
                isInterviewStageCompleted: false,
                isLoading: true,
            };
        case ActionTypes.GET_ALL_CANDIDATES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allCandidates: action.payload,
            };
        case ActionTypes.GET_ALL_CANDIDATES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allCandidates: [],
            };
        case ActionTypes.GET_CLIENT_DEPARTMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                departments: action.payload,
            };
        case ActionTypes.ADD_NEW_JOB_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isNewJobAdded: true,
                error: false,
            };
        case ActionTypes.ADD_NEW_JOB_FAIL:
            return {
                ...state,
                isLoading: false,
                isNewJobAdded: true,
                error: true,
            };
        case ActionTypes.GET_CLIENT_DEPARTMENT_FAIL:
        case ActionTypes.GET_MONTHLY_SCHEDULE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        case ActionTypes.ADD_CLIENT_DEPARTMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isUpdateDepartmentSuccess: true,
                error: false,
            };
        case ActionTypes.ADD_CLIENT_DEPARTMENT_FAIL:
            return {
                ...state,
                isLoading: false,
                isUpdateDepartmentSuccess: true,
                error: true,
            };
        case ActionTypes.ADD_FEEDBACK_FORM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isFeedbackFormSuccess: true,
                error: false,
            };
        case ActionTypes.ADD_FEEDBACK_FORM_FAIL:
            return {
                ...state,
                isLoading: false,
                isFeedbackFormSuccess: false,
                error: true,
            };
        case ActionTypes.GET_FEEDBACK_FORM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                getFeedbackFormSuccess: action.payload,
                error: false,
            };
        case ActionTypes.GET_FEEDBACK_FORM_FAIL:
            return {
                ...state,
                isLoading: false,
                getFeedbackFormSuccess: null,
                error: true,
            };
        case ActionTypes.GET_CLIENT_OPEN_JOBS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                openJobs: action.payload,
                error: false,
            };
        case ActionTypes.GET_PARTICULAR_JOB_SUCCESS:
            return {
                ...state,
                selectedJob: action.payload,
                isLoading: false,
            };
        case ActionTypes.GET_PARTICULAR_JOB_FAIL:
            return {
                ...state,
                selectedJob: null,
                isLoading: false,
            };
        case ActionTypes.UPDATE_INTERVIEW_STAGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isInterviewStageUpdated: true,
            };
        case ActionTypes.GET_MONTHLY_SCHEDULE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                monthlySchedule: action.payload,
            };
        case ActionTypes.UPDATE_INTERVIEW_STAGE_FAIL:
        case ActionTypes.GET_CLIENT_OPEN_JOBS_FAIL:
            return {
                ...state,
                isLoading: false,
                isInterviewStageUpdated: false,
                error: true,
            };
        case ActionTypes.COMPLETE_INTERVIEW_STAGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isInterviewStageCompleted: true,
                error: false,
            };
        case ActionTypes.COMPLETE_INTERVIEW_STAGE_FAIL:
            return {
                ...state,
                isLoading: false,
                isInterviewStageCompleted: false,
                error: true,
            };
        case ActionTypes.ADD_FEEDBACK_FORM_SUCCESS: 
            
                return {
                    ...state,
                    isLoading: false,
                    getFeedbackFromSuccess: true,
                    error: false,
                };
        case ActionTypes.ADD_FEEDBACK_FORM_FAIL: 
            
                return {
                    ...state,
                    isLoading: false,
                    getFeedbackFromSuccess: false,
                    error: true,
                };
            
        case ActionTypes.EMAIL_TEMPLATE_NEW_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isaddEmailNewAdded: true,
                error: false
            }
        case ActionTypes.EMAIL_TEMPLATE_NEW_FAIL:
            return{
                ...state,
                isLoading: false,
                isaddEmailNewAdded: false,
                error: true
            }
        case ActionTypes.EMAIL_TEMPLATE_EXISTING_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isaddEmailAlreadyAdded: true,
                error: false
            }
        case ActionTypes.EMAIL_TEMPLATE_EXISTING_FAIL:
            return{
                ...state,
                isLoading: false,
                isaddEmailAlreadyAdded: false,
                error: true
            }
        default:
            return state;
    }
};

export default panelReducer;
