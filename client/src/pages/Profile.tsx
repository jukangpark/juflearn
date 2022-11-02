import { useParams } from "react-router";

const Profile = () => {
  console.log(useParams()); // useParams();
  return (
    <div>
      <h1>프로필 페이지</h1>
    </div>
  );
};

export default Profile;
