import Button from '@/components/atoms/Button';
import { useEffect, useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    setErrorMessage('');
    if (email && password && confirmPassword) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password, confirmPassword]);
  
  function handleSignup() {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    console.log('email: ', email);
    console.log('password: ', password);
    console.log('confirm password: ', confirmPassword);
  }
  
  
  return (<div className={'h-[calc(100vh_-_80px)] flex justify-center'}>
    <div className={'mt-40'}>
      <div className={'w-full border-[1px] rounded border-gray'}>
        <div className={'p-4 font-medium text-[18px] border-b-[1px] border-gray'}>Signup</div>
        <div className={'px-4 mt-2'}>
          <input className={'border-[1px] rounded w-full border-gray p-2 my-2'}
                 type='text'
                 value={email}
                 placeholder={'Enter your email'}
                 onChange={(e) => {
                   setEmail(e.target.value);
                 }}
          />
          
          <input className={'border-[1px] rounded w-full border-gray p-2 my-2'}
                 type='text'
                 value={password}
                 placeholder={'Enter your password'}
                 onChange={(e) => {
                   setPassword(e.target.value);
                 }}
          />
          <input className={'border-[1px] rounded w-full border-gray p-2 my-2'}
                 type='text'
                 value={confirmPassword}
                 placeholder={'Confirm your password'}
                 onChange={(e) => {
                   setConfirmPassword(e.target.value);
                 }}
          />
        </div>
        <div className={'w-full px-4 py-2 my-2 flex justify-between'}>
          <div>
            {!!errorMessage &&
              <div className={'bg-pastelRed px-2 py-1 rounded flex justify-between items-center transition-all' +
                ' duration-75 ease-in-out'}
              >
                <span className='material-symbols-outlined text-red-500 mx-1'>
                  warning
                </span>
                {errorMessage}
              </div>
            }
          </div>
          <Button isDisabled={isButtonDisabled}
                  text='Signup'
                  onClick={() => {
                    handleSignup();
                  }}
          />
        </div>
      </div>
    </div>
  </div>);
}
