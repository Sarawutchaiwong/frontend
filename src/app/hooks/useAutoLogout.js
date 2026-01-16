'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export const useAutoLogout = (timeoutMinutes = 30) => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(timeoutMinutes * 60); // Convert to seconds
  const [isWarningShown, setIsWarningShown] = useState(false);
  const timeoutRef = useRef(null);
  const warningTimeoutRef = useRef(null);
  const countdownRef = useRef(null);

  const resetTimer = useCallback(() => {
    setTimeLeft(timeoutMinutes * 60);
    setIsWarningShown(false);
    
    // Clear existing timeouts
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (warningTimeoutRef.current) clearTimeout(warningTimeoutRef.current);
    if (countdownRef.current) clearInterval(countdownRef.current);
    
    // Start new countdown
    countdownRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleLogout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Set warning timeout (5 minutes before logout)
    const warningTime = 5 * 60; // 5 minutes in seconds
    warningTimeoutRef.current = setTimeout(() => {
      if (timeLeft <= warningTime && !isWarningShown) {
        showWarning();
      }
    }, (timeoutMinutes - 5) * 60 * 1000);

    // Set logout timeout
    timeoutRef.current = setTimeout(() => {
      handleLogout();
    }, timeoutMinutes * 60 * 1000);
  }, [handleLogout, setIsWarningShown, setTimeLeft, showWarning, timeoutMinutes, timeLeft, isWarningShown]);

  const showWarning = () => {
    setIsWarningShown(true);
    Swal.fire({
      title: 'Session Timeout Warning',
      text: `Your session will expire in 5 minutes due to inactivity. Click "Stay Logged In" to continue.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Stay Logged In',
      cancelButtonText: 'Logout Now',
      background: '#1e1e1e',
      color: '#fff',
      timer: 300000, // 5 minutes
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Stay Logged In"
        resetTimer();
        Swal.fire({
          icon: 'success',
          title: 'Session Extended',
          text: 'Your session has been extended.',
          timer: 2000,
          showConfirmButton: false,
          background: '#1e1e1e',
          color: '#fff'
        });
      } else {
        // User clicked "Logout Now" or timer expired
        handleLogout();
      }
    });
  };

  const handleLogout = () => {
    // Clear all timeouts
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (warningTimeoutRef.current) clearTimeout(warningTimeoutRef.current);
    if (countdownRef.current) clearInterval(countdownRef.current);
    
    // Remove token
    localStorage.removeItem('token');
    
    // Show logout message
    Swal.fire({
      icon: 'info',
      title: 'Session Expired',
      text: 'You have been automatically logged out due to inactivity.',
      background: '#1e1e1e',
      color: '#fff',
      timer: 3000,
      showConfirmButton: false
    }).then(() => {
      router.push('/login');
    });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    // Reset timer on user activity
    const handleUserActivity = () => {
      resetTimer();
    };

    // Events to track user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    events.forEach(event => {
      document.addEventListener(event, handleUserActivity, true);
    });

    // Initial timer setup
    resetTimer();

    // Cleanup
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserActivity, true);
      });
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (warningTimeoutRef.current) clearTimeout(warningTimeoutRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, [resetTimer]);

  return {
    timeLeft,
    formatTime,
    resetTimer,
    isWarningShown
  };
};
