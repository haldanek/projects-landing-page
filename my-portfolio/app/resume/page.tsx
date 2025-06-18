'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const certificates = [
  '/images/hero.png',
  '/images/hero.png',
  '/images/hero.png',
  '/images/hero.png',
];

const CertificatesPage = () => {
  const router = useRouter();

  return (
    <div className='p-6'>
      <h1 className='text-4xl font-bold mb-4 text-comic-green'>
        My Certificates
      </h1>

      {certificates.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6'>
          {certificates.map((src, idx) => (
            <div key={idx} className='rounded overflow-hidden shadow-lg'>
              <Image
                src={src}
                alt={`Certificate ${idx + 1}`}
                width={400}
                height={300}
                className='object-cover w-full h-auto rounded'
              />
            </div>
          ))}
        </div>
      ) : (
        <div className='text-center text-comic-black text-lg mb-6'>
          No certificates yet. Coming soon!
        </div>
      )}

      <Button
        onClick={() => router.back()}
        className='comic-button bg-comic-blue text-white rounded px-4 py-2'
      >
        ← Back to Portfolio
      </Button>
    </div>
  );
};
  

export default CertificatesPage;
