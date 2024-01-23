"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setLoading(false);
    }, 500); // Start fade out after 3 seconds

    const removeTimer = setTimeout(() => {
      setVisible(false); // Remove splash screen after fade out
    }, 1000); // 1 second for fade out duration

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 bg-white flex justify-center items-center z-50 ${loading ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      <div className='mx-10'>
      <Image
        src="/LoginLogo.png" // Replace with your image path
        alt="Promises"
        width={640}
        height={250}
      />
      </div>

    </div>
  );
};

export default SplashScreen;
