'use client';

import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const markdownFilePath = path.join(process.cwd(), 'public', 'user-stories.md');
const markdownContent = fs.readFileSync(markdownFilePath, 'utf8');

const UserStoriesPage = () => {
  const router = useRouter();

  return (
    <div className='max-w-4xl mx-auto px-4 py-10'>
      <div className='prose prose-lg mb-6'>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
      <Button
        className='comic-button bg-comic-blue text-white rounded px-4 py-2'
        onClick={() => router.back()}
      >
        ← Back
      </Button>
    </div>
  );
};

export default UserStoriesPage;
