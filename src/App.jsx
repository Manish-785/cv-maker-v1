import { useState } from "react";

function Eductation({ handleChange }) {
  return (
    <>
      <div className="container">
        <div className="school">
          <label htmlFor="school">Institute </label>
          <br></br>
          <input
            type="text"
            name="school"
            id="school"
            placeholder="IIT Bombay"
            onChange={handleChange}
          />
        </div>
        <div className="degree">
          <label htmlFor="degree">Degree </label>
          <br></br>
          <input
            type="text"
            name="degree"
            id="degree"
            onChange={handleChange}
            placeholder="B.Tech in Chemical Engineering"
          />
        </div>
        <div>
          <label htmlFor="start">Start & End Date</label>
          <br></br>
          <div className="yearsOfStudy">
            <input
              type="month"
              name="start"
              id="start"
              onChange={handleChange}
            />
            <input type="month" name="end" id="end" onChange={handleChange} />
          </div>
        </div>
      </div>
    </>
  );
}

function ResumeMaker({
  handleChange,
  addSkill,
  removeSkill,
  updateSkill,
  skills,
  addExperience,
  removeExperience,
  updateExperience,
  experiences,
}) {
  return (
    <>
      <form>
        <fieldset className="personalDetails">
          <legend className="heading">Personal Details</legend>
          <div className="name">
            <div className="firstName">
              <label htmlFor="firstName">First Name </label>
              <br></br>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                onChange={handleChange}
                placeholder="Manish"
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name </label>
              <br></br>
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                placeholder="Singh"
              />
            </div>
            <div className="jobTitle">
              <label htmlFor="title">Professional Title</label>
              <br></br>
              <input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                placeholder="Front-End Developer"
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="contact">
          <legend className="heading">Contact Details</legend>
          <div className="Emai">
            <label htmlFor="email">Email </label>
            <br></br>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              id="email"
              required
              placeholder="abc1234@gmail.com"
            />
          </div>
          <div className="number">
            <label htmlFor="phoneNumber">Phone Number </label>
            <br></br>
            <input
              type="number"
              name="number"
              id="number"
              required
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <fieldset className="professionalSummary">
          <legend className="heading">Professional Summary </legend>
          <div className="subheading">
            Write 2-4 short & energetic sentences to interest the reader!
            Mention your role, experience & most importantly - your biggest
            achievements, best qualities and skills.
          </div>
          <input
            type="text"
            id="summary"
            name="summary"
            className="summary"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="education">
          <legend className="heading">Education</legend>
          <Eductation handleChange={handleChange} />
        </fieldset>
        <fieldset className="skills">
          <legend className="heading">Skills</legend>
          <div>
            {skills.map((skill) => (
              <div key={skill.id}>
                <input
                  type="text"
                  value={skill.value}
                  id={skill.value}
                  onChange={(event) =>
                    updateSkill(skill.id, event.target.value)
                  }
                  placeholder="Enter Skill"
                />
                <button
                  type="button"
                  style={{
                    padding: "0.5rem 35px",
                    margin: "10px",
                    color: "red",
                  }}
                  onClick={() => removeSkill(skill.id)}
                >
                  X
                </button>
              </div>
            ))}
            <button
              onClick={addSkill}
              type="button"
              style={{
                padding: "0.5rem 50px",
                margin: "10px",
              }}
            >
              +
            </button>
          </div>
        </fieldset>
        <fieldset className="WorkExperience">
          <legend className="heading">Work Experience</legend>
          <div>
            {experiences.map((experience) => (
              <div
                key={experience.id}
                style={{
                  border: "solid 1px",
                  borderRadius: "15px",
                  marginBottom: "10px",
                }}
              >
                <div className="experienceHeading">
                  <div>
                    <label htmlFor="position">Position</label>
                    <br></br>
                    <input
                      type="text"
                      name={experience.position}
                      id="position"
                      value={experience.position}
                      placeholder="Intern"
                      onChange={(event) => {
                        updateExperience(
                          experience.id,
                          event.target.value,
                          "position"
                        );
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="company">Company</label>
                    <br></br>
                    <input
                      type="text"
                      name={experience.company}
                      id="company"
                      value={experience.company}
                      placeholder="Microsoft"
                      onChange={(event) => {
                        updateExperience(
                          experience.id,
                          event.target.value,
                          "company"
                        );
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="start&end">Start & End Date</label>
                  <div className="startend">
                    <input
                      type="month"
                      name="start"
                      id="start&end"
                      value={experience.start}
                      onChange={(event) => {
                        updateExperience(
                          experience.id,
                          event.target.value,
                          "start"
                        );
                      }}
                    />
                    <input
                      type="month"
                      name="end"
                      id="start&end"
                      value={experience.end}
                      onChange={(event) => {
                        updateExperience(
                          experience.id,
                          event.target.value,
                          "end"
                        );
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <br />
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    value={experience.description}
                    onChange={(event) => {
                      updateExperience(
                        experience.id,
                        event.target.value,
                        "description"
                      );
                    }}
                  ></textarea>
                </div>
                <button
                  type="button"
                  style={{
                    padding: "0.5rem 35px",
                    margin: "10px",
                    color: "red",
                  }}
                  onClick={() => removeExperience(experience.id)}
                >
                  X
                </button>
              </div>
            ))}
            <button
              type="button"
              style={{
                padding: "0.5rem 50px",
                margin: "10px",
              }}
              onClick={addExperience}
            >
              +
            </button>
          </div>
        </fieldset>
        <div className="submission">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

function Display({ userInfo, skills, experiences }) {
  return (
    <>
      <div className="header">
        <div className="Name">
          {userInfo.firstName === "" ? "Manish" : userInfo.firstName}{" "}
          {userInfo.lastName}
          <div className="title">
            {userInfo.title === "" ? "Front-End Developer" : userInfo.title}
          </div>
          <div className="Contact">
            <span className="email">{userInfo.email}</span>
            <span className="number">
              {userInfo.number === "" ? undefined : "+91- " + userInfo.number}
            </span>
          </div>
        </div>
        <div className="proffsummary">Professional Summary</div>
        <div className="professionalsummary">
          {userInfo.summary === ""
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            : userInfo.summary}
        </div>
      </div>
      <div className="main-content">
        <div className="experiences">
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "left",
              padding: "0.5rem 40px",
              margin: "0 15px",
              position: "relative",
              top: "-15px",
            }}
          >
            Experiences
          </div>
          {experiences.map((experience) => (
            <div key={experience.id}>
              <div className="position">
                {experience.position === ""
                  ? "Software Development Engineer"
                  : experience.position}
              </div>
              <div className="company">
                {experience.company === ""
                  ? "Google India"
                  : experience.company}
              </div>
              <div className="StartEnd">
                {experience.start === "" ? "2022-05" : experience.start} -{" "}
                {experience.end === "" ? "2024-05" : experience.end}
              </div>
              <div className="description">{experience.description}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="educational-background">
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "left",
                padding: "0.5rem 0px",
                margin: "0 15px",
                position: "relative",
                top: "-15px",
              }}
            >
              Educational Background
            </div>
            <div className="school">
              {userInfo.school === "" ? "IIT Bombay" : userInfo.school}
            </div>
            <div className="studyyear">
              {userInfo.start === "" ? "2023-07" : userInfo.start} -{" "}
              {userInfo.end === "" ? "2027-05" : userInfo.end}
            </div>
            <div className="degree">
              {userInfo.degree === ""
                ? "B.Tech in Chemical Engineering"
                : userInfo.degree}
            </div>
          </div>
          <div className="Skills">
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "left",
                padding: "0.5rem 0px",
                margin: "0 0px",
                position: "relative",
                top: "-15px",
              }}
            >
              Skills
            </div>
            {skills.length === 0 ? (
              <div className="skill-items">
                HTML <br /> CSS <br /> JavaScript <br />
                ReactJS <br />
                Python
              </div>
            ) : (
              ""
            )}
            {skills.map((skill) => (
              <div className="skill-items">{skill.value}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function myApp() {
  const initialState = {
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    number: "",
    summary: "",
    school: "",
    degree: "",
    start: "",
    end: "",
  };
  const [userInfo, SetuserInfo] = useState(initialState);
  function handleChange(event) {
    const { name, value } = event.target;
    SetuserInfo({ ...userInfo, [name]: value });
  }

  const initialSkill = [];
  const Skill = {
    id: "",
    value: "",
  };
  const [skills, setSkills] = useState(initialSkill);
  function addSkill() {
    const newSkill = { ...Skill, id: generateUniqueId() };
    setSkills([...skills, newSkill]);
  }
  function removeSkill(skillId) {
    setSkills(skills.filter((skill) => skill.id !== skillId));
  }
  function updateSkill(skillId, newValue) {
    setSkills(
      skills.map((skill) =>
        skill.id === skillId ? { ...skill, value: newValue } : skill
      )
    );
  }

  const Experience = {
    position: "",
    company: "",
    start: "",
    end: "",
    description: "",
    id: "",
  };
  const [experiences, setExperiences] = useState([]);
  function addExperience() {
    const newExperience = { ...Experience, id: generateUniqueId() };
    setExperiences([...experiences, newExperience]);
  }
  function removeExperience(experienceId) {
    setExperiences(
      experiences.filter((experience) => experience.id !== experienceId)
    );
  }
  function updateExperience(experienceId, newValue, value) {
    setExperiences(
      experiences.map((experience) =>
        experience.id === experienceId
          ? { ...experience, [value]: newValue }
          : experience
      )
    );
  }

  function generateUniqueId() {
    return crypto.randomUUID();
  }

  return (
    <div className="resume">
      <div className="maker">
        <ResumeMaker
          handleChange={handleChange}
          addSkill={addSkill}
          removeSkill={removeSkill}
          updateSkill={updateSkill}
          skills={skills}
          addExperience={addExperience}
          removeExperience={removeExperience}
          updateExperience={updateExperience}
          experiences={experiences}
        />
      </div>
      <div className="display">
        <div className="resumeDisplay">
          <Display
            userInfo={userInfo}
            skills={skills}
            experiences={experiences}
          />
        </div>
      </div>
    </div>
  );
}
