// import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import Link from 'next/link';
import * as React from 'react';

function ResponsiveAppBar() {
  return (
    <div className={'flex items-center border-[1px] border-grey bg-white'}>
      <Link href={'/'}>
        <div className={'flex p-2 items-center ml-4'}>
          <span className='material-symbols-outlined'>
            keyboard_alt
            </span>
          <div
            className={'font-bold font-mono text-xl ml-2 text-gray-700'}
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
        <Link href={'/signup'}>Sign Up</Link>
      </div>
    </div>
  );
}

export default ResponsiveAppBar;
