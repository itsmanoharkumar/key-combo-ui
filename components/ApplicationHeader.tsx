import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import Link from 'next/link';
import * as React from 'react';

const pages = ['Products'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  return (
    <div className={'flex items-center'}>
      <Link href={'/'}>
        <div className={'flex p-2 items-center ml-4'}>
          <KeyboardAltIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
          <div
            className={'font-bold font-mono text-xl text-gray-700'}
          >
            KEY-COMBO
          </div>
        </div>
      </Link>
      
      <div className={'ml-5'}>
        <Link href={'applications'}>Applications</Link>
      </div>
      <div className={'flex-grow'}>
        &nbsp;
      </div>
      <div className={'mr-4 font-semibold'}>
        <Link href={'/register'}>Sign Up</Link>
      </div>
    </div>
  );
}

export default ResponsiveAppBar;
