import { selectAuthState, selectAuthUser } from '@/store/authSlice';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux'; // updated

export default function Home() {
  const authState = useSelector(selectAuthState); // updated
  const authUser = useSelector(selectAuthUser); // updated
  
  return (
    <div>
      <Head>
        <title>Picomment</title>
        <meta name="description"
              content="Drop comments on cute cat pictures"
        />
        <link rel="icon"
              href="/favicon.ico"
        />
      </Head>
      
      <div>
        {/* Input Section - updated */}
        {authState ? <div>{authUser}</div> : <Link href={'/login'}>Login</Link>}
      </div>
    </div>
  );
}
