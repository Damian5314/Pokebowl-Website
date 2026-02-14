import React from 'react';
import { Link } from 'react-router-dom';
import './OrderModal.css';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <h2 className="modal-title">BESTEL ONLINE</h2>
        <p className="modal-subtitle">Je kan Poké Bowl laten bezorgen!!</p>
        <p className="modal-text">Afhankelijk van jouw adres kun je bestellen bij:</p>

        <div className="order-options">
          <a
            href="https://www.thuisbezorgd.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="order-button thuisbezorgd-button"
          >
            <svg className="order-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="6" width="15" height="8" stroke="#FF6B3D" strokeWidth="2"/>
              <path d="M16 6H20L23 9V14H16V6Z" stroke="#FF6B3D" strokeWidth="2"/>
              <circle cx="6" cy="17" r="2" stroke="#FF6B3D" strokeWidth="2"/>
              <circle cx="18" cy="17" r="2" stroke="#FF6B3D" strokeWidth="2"/>
            </svg>
            <span>Thuisbezorgd</span>
          </a>

          <a
            href="https://www.ubereats.com"
            target="_blank"
            rel="noopener noreferrer"
            className="order-button uber-button"
          >
            <img
              src="https://cdn.simpleicons.org/ubereats/FFFFFF"
              alt="Uber Eats"
              className="order-logo"
            />
            <span>Uber Eats</span>
          </a>

          <Link
            to="/menu"
            className="order-button afhalen-button"
            onClick={onClose}
          >
            <svg className="order-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 8V6C7 3.79086 8.79086 2 11 2H13C15.2091 2 17 3.79086 17 6V8M3 8H21M5 8H19L18 20C18 21.1046 17.1046 22 16 22H8C6.89543 22 6 21.1046 6 20L5 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Afhalen</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;