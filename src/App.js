import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import ActivityList from "./components/Activity/ActivityList";
import styled from "styled-components";

function App() {
  const [activityList, setActivityList] = useState([]);
  const [activity, setActivity] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  // fetch data from api
  const fetchData = async () => {
    const response = await axios.get(`https://www.boredapi.com/api/activity/`);
    setActivity(response.data);
    if (activity !== null) {
      activity.status = "none";
      activity.description = "";
      setActivityList([...activityList, activity]);
    }
  };

  // fetch data from localStorage
  useEffect(() => {
    const data = localStorage.getItem("my-activity-list");
    if (data) {
      setActivityList(JSON.parse(data));
    }
  }, []);

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem("my-activity-list", JSON.stringify(activityList));
  });

  useEffect(() => {}, [activity]);

  useEffect(() => {}, [activityList]);

  useEffect(() => {}, [filteredList]);

  const handleStatusChange = (activityKey, text) => {
    const changedActivityList = activityList.map((activity) => {
      if (activity.key === activityKey) {
        const updatedActivity = {
          ...activity,
          status: text,
        };

        return updatedActivity;
      }
      return activity;
    });

    setActivityList(changedActivityList);
  };

  useEffect(() => {});

  useEffect(() => {
    if (selectedOption === "none" || !selectedOption) {
      setFilteredList(activityList);
    } else {
      const newActivityList = activityList.filter(
        (activity) => activity.status === selectedOption
      );
      setFilteredList(newActivityList);
    }
  }, [activityList, selectedOption]);

  return (
    <div className="App">
      <HeaderComponent title="Activities" />
      <FlexBox>
        <Button onClick={fetchData}>Add New Activity</Button>
        <form>
          <label htmlFor="filter">Filter&nbsp;</label>
          <Dropdown
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <DropdownOption value="none">
              &mdash;&mdash;All&mdash;&mdash;
            </DropdownOption>
            <DropdownOption value="completed">Completed</DropdownOption>
            <DropdownOption value="notInterested">
              Not Interested
            </DropdownOption>
          </Dropdown>
        </form>
      </FlexBox>
      <ActivityList
        activityList={filteredList}
        handleStatusChange={handleStatusChange}
      />
    </div>
  );
}

export default App;

const Button = styled.button`
  background-color: hsla(209, 100%, 55%, 1);
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
  cursor: pointer;
`;

const FlexBox = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Dropdown = styled.select`
  font-family: inherit;
  padding: 0.5rem 1.5rem;
`;

const DropdownOption = styled.option`
  font-family: inherit;
  padding: 0.5rem 1.5rem;
`;
