import {
  SET_PERSONAL_INFO,
  SET_SKILL_INFO,
  SET_EDUCATION_INFO,
  SET_JOB_INFO,
  SET_INTEREST_INFO
} from "./actionTypes";

// Actions to set information on Redux
export const setPersonalInfo = payload => {
  return {
    type: SET_PERSONAL_INFO,
    payload
  };
};
export const setSkillInfo = payload => {
  return {
    type: SET_SKILL_INFO,
    payload
  };
};
export const setEducationInfo = payload => {
  return {
    type: SET_EDUCATION_INFO,
    payload
  };
};
export const setJobInfo = payload => {
  return {
    type: SET_JOB_INFO,
    payload
  };
};
export const setInterestInfo = payload => {
  return {
    type: SET_INTEREST_INFO,
    payload
  };
};
