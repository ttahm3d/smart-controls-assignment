import styled from "styled-components";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineArrowRight,
} from "react-icons/ai";

const Activity = ({ activity, handleStatusChange }) => {
  return (
    <ActivityCard>
      <h2>{activity.activity}</h2>

      <FlexBox>
        <ActivityType>{activity.type}</ActivityType>
        <p title="Link to the Activity">
          {activity.link ? (
            <a href={activity.link} target="_blank" rel="noreferrer">
              <AiOutlineArrowRight />
            </a>
          ) : null}
        </p>
      </FlexBox>

      <FlexBox>
        <p>Participants: {activity.participants}</p>
        <p>{activity.price !== 0 ? "Price: $" + activity.price : "Free"}</p>
      </FlexBox>
      <FlexBox>
        <ButtonComplete
          onClick={() => handleStatusChange(activity.key, 0)}
          disabled={
            activity.status === "completed" ||
            activity.status === "notInterested"
          }
        >
          <AiOutlineCheck />
        </ButtonComplete>
        <ButtonClose
          onClick={() => handleStatusChange(activity.key, 1)}
          disabled={
            activity.status === "completed" ||
            activity.status === "notInterested"
          }
        >
          <AiOutlineClose />
        </ButtonClose>
      </FlexBox>
    </ActivityCard>
  );
};

export default Activity;

const ActivityCard = styled.div`
  padding: 1.2rem;
  box-shadow: 0px 0px 4px #333;
  width: 300px;
  color: #333;

  h2 {
    color: hsla(209, 90%, 55%, 1);
    margin: 0 0 1rem;
  }

  a {
    text-decoration: none;
    color: #fff;
    background-color: hsla(209, 90%, 55%, 1);
    font-weight: 600;
    padding: 0.5rem 0.8rem;
  }
`;

const ActivityType = styled.p`
  background-color: hsla(209, 50%, 75%, 1);
  color: hsla(209, 90%, 55%, 1);
  padding: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: Capitalize;
  display: inline-block;
`;

const ButtonComplete = styled.button`
  cursor: pointer;
  color: hsla(142, 100%, 28%, 1);
  background-color: hsla(142, 50%, 80%, 1);
  padding: 0.5rem;
  border: 0;

  &:disabled {
    color: #333;
    background-color: #ccc;
    cursor: default;
  }
`;

const ButtonClose = styled.button`
  border: 0;
  cursor: pointer;
  padding: 0.5rem;
  color: hsla(351, 100%, 28%, 1);
  background-color: hsla(351, 50%, 80%, 1);

  &:disabled {
    color: #333;
    background-color: #ccc;
    cursor: default;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
  gap: 2rem;
`;
