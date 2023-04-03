import { setAuthState, setAuthUser } from '@/store/authSlice';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useRouter();
  function handleLogin(e: any) {
    e.preventDefault();
    dispatch(setAuthState(true));
    dispatch(setAuthUser(e.target.user.value));
    navigate.push('/home')
  }
  
  return (
    <form className="flex space-x-2"
          onSubmit={handleLogin}
    >
      <div className="input-box">
        <Input id={`user`}
               type={`text`}
               placeholder={`Set username`}
        />
      </div>
      <Button type={`submit`}>login</Button>
    </form>
  );
}
