import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file
import Seat from ''

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {/* Random Sidebar Items */}
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
            Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/messages" className="sidebar-link">
            Messages
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/notifications" className="sidebar-link">
            Notifications
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/settings" className="sidebar-link">
            Settings
          </Link>
        </li>

        {/* Manage Account with Dropdown */}
        <li className="sidebar-item">
          <button
            onClick={toggleDropdown}
            className="sidebar-button"
          >
            Manage Account
            <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
          </button>
          {isOpen && (
            <ul className="dropdown-list">
              <li className="dropdown-item">
                <Link to="/profile" className="sidebar-link">
                  Profile
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/security" className="sidebar-link">
                  Security
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/logout" className="sidebar-link">
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Additional Sidebar Items */}
        <li className="sidebar-item">
          <Link to="/help" className="sidebar-link">
            Help
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/support" className="sidebar-link">
            Support
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;