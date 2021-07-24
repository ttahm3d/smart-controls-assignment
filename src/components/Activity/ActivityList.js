import React from "react";
import styled from "styled-components";
import Activity from "./Activity";

const ActivityList = ({
  activityList,
  handleStatusChange,
  handleDescriptionChange,
}) => {
  return (
    <ActivityListWrapper>
      {activityList.map((activity) => (
        <Activity
          key={activity.key}
          handleStatusChange={handleStatusChange}
          activity={activity}
        />
      ))}
    </ActivityListWrapper>
  );
};

export default ActivityList;

const ActivityListWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem auto;
  width: 90vw;
  max-width: 1024px;
`;
