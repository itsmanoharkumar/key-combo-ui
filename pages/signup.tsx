import { Counter } from '@/components/Counter';
import SignUpCard from '@/components/SignUpCard';

export default function Signup() {
  return (
    <div className="h-full w-full flex justify-center">
      <SignUpCard />
      <Counter />
    </div>
  )
}
