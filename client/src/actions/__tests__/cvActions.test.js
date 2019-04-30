import {
  setPersonalInfo,
  setSkillInfo,
  setEducationInfo,
  setJobInfo,
  setInterestInfo
} from "../cvActions";
import {
  SET_PERSONAL_INFO,
  SET_SKILLS_INFO,
  SET_EDUCATION_INFO,
  SET_JOB_INFO,
  SET_INTEREST_INFO
} from "../actionTypes";

const payload = {};

test("setPersonalInfo action should have SET_PERSONAL_INFO type", () => {
  const setPersonalInfoAction = setPersonalInfo(payload);
  expect(setPersonalInfoAction).toEqual({ type: SET_PERSONAL_INFO, payload });
});

test("setSkillInfo action should have SET_SKILL_INFO type", () => {
  const setSkillInfoAction = setSkillInfo(payload);
  expect(setSkillInfoAction).toEqual({ type: SET_SKILLS_INFO, payload });
});

test("setEducationInfo action should have SET_EDUCATION_INFO type", () => {
  const setEducationInfoAction = setEducationInfo(payload);
  expect(setEducationInfoAction).toEqual({ type: SET_EDUCATION_INFO, payload });
});

test("setJobInfo action should have SET_JOB_INFO type", () => {
  const setJobInfoAction = setJobInfo(payload);
  expect(setJobInfoAction).toEqual({ type: SET_JOB_INFO, payload });
});

test("setInterestInfo action should have SET_INTEREST_INFO type", () => {
  const setInterestInfoAction = setInterestInfo(payload);
  expect(setInterestInfoAction).toEqual({ type: SET_INTEREST_INFO, payload });
});
