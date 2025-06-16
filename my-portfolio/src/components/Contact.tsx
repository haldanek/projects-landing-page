'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const createMailtoLink = () => {
    const subject = encodeURIComponent(`Message from ${name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    return `mailto:khaldane244@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      alert('Please fill out your email and message before sending.');
      return;
    }
    if (typeof window !== 'undefined') {
      window.location.href = createMailtoLink();
    }
  };

  const openLinkedIn = () => {
    if (typeof window !== 'undefined') {
      window.open(
        'https://www.linkedin.com/in/kimberlee-haldane-09a292332/',
        '_blank'
      );
    }
  };

  return (
    <section id='contact' className='scroll-mt-16'>
      <Card className='comic-card'>
        <CardHeader>
          <CardTitle className='text-3xl text-comic-blue'>
            Let&apos;s Connect!
          </CardTitle>

          <CardDescription className='text-comic-black'>
            Send me an email or connect on LinkedIn
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <Input
              className='comic-input'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              className='comic-input'
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              className='comic-input'
              placeholder='Your Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type='submit' className='comic-button'>
              Send Message
            </Button>
          </form>
          <div className='mt-4'>
            <Button
              variant='outline'
              className='comic-button flex items-center bg-comic-blue'
              onClick={openLinkedIn}
            >
              <Linkedin className='mr-2 h-4 w-4' />
              Connect on LinkedIn
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
