import { useForm } from "react-hook-form";
import Button from "../../components/auth/Button";

const Join = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <h3>회원가입</h3>
      <form>
        <input placeholder="id" />
        <input placeholder="password" type="password" />
        <input placeholder="비밀 번호 확인" type="password" />
        <Button>회원가입</Button>
      </form>
    </div>
  );
};

export default Join;
