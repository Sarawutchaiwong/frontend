'use client';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function SessionSettings({ onTimeoutChange }) {
  const [timeoutMinutes, setTimeoutMinutes] = useState(30);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved timeout from localStorage
    const savedTimeout = localStorage.getItem('sessionTimeout');
    if (savedTimeout) {
      setTimeoutMinutes(parseInt(savedTimeout));
    }
  }, []);

  const handleTimeoutChange = (newTimeout) => {
    setTimeoutMinutes(newTimeout);
    localStorage.setItem('sessionTimeout', newTimeout.toString());
    
    // Notify parent component
    if (onTimeoutChange) {
      onTimeoutChange(newTimeout);
    }

    Swal.fire({
      icon: 'success',
      title: 'Session Timeout Updated',
      text: `Session timeout has been set to ${newTimeout} minutes.`,
      timer: 2000,
      showConfirmButton: false,
      background: '#1e1e1e',
      color: '#fff'
    });
  };

  const timeoutOptions = [
    { value: 15, label: '15 minutes' },
    { value: 30, label: '30 minutes' },
    { value: 60, label: '1 hour' },
    { value: 120, label: '2 hours' },
    { value: 240, label: '4 hours' }
  ];

  return (
    <>
      {/* Settings Button */}
      <button
        className="btn btn-sm btn-outline-info me-2"
        onClick={() => setIsOpen(true)}
        title="Session Settings"
      >
        <i className="bi bi-gear"></i>
      </button>

      {/* Settings Modal */}
      {isOpen && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header border-secondary">
                <h5 className="modal-title">
                  <i className="bi bi-gear me-2"></i>
                  Session Settings
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setIsOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Session Timeout Duration</label>
                  <select
                    className="form-select bg-dark text-white border-secondary"
                    value={timeoutMinutes}
                    onChange={(e) => handleTimeoutChange(parseInt(e.target.value))}
                  >
                    {timeoutOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="form-text text-muted">
                    Your session will automatically expire after this duration of inactivity.
                  </div>
                </div>
                
                <div className="alert alert-info">
                  <i className="bi bi-info-circle me-2"></i>
                  <strong>Note:</strong> Any user activity (mouse movement, clicks, keyboard input) will reset the timer.
                </div>
              </div>
              <div className="modal-footer border-secondary">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
