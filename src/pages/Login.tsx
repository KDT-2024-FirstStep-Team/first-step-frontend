import TextInput from '@/components/TextInput';

const Login = () => {
  return (
    <div>
      <TextInput
        label="이메일 주소"
        placeholder="이메일 입력"
        disabled={false}
      />
    </div>
  );
};

export default Login;
