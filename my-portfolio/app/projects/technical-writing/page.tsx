'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const TechnicalWritingPage = () => {
  const router = useRouter();

  return (
    <section
      className='w-full min-h-screen flex flex-col justify-center items-center text-white bg-cover bg-center bg-no-repeat p-6'
      style={{ backgroundImage: "url('/images/sh-13.png')" }}
    >
      <h1 className='text-[4rem] md:text-[8rem] font-extrabold text-center mb-8 drop-shadow-lg leading-none text-outline-red'>
        User Stories
      </h1>

      <div className='flex flex-col gap-4 items-center'>
        <Button
          className='comic-button bg-comic-blue text-white text-lg px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black border border-black shadow-lg'
          onClick={() => router.push('/user-stories')}
        >
          Press Here to Explore
        </Button>

        <Button
          className='comic-button bg-comic-red text-white text-sm px-4 py-2 rounded-full mt-4'
          onClick={() => router.back()}
        >
          ← Back to Projects
        </Button>
      </div>
    </section>
  );
};

export default TechnicalWritingPage;
