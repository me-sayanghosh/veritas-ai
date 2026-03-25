import { useNavigate } from 'react-router-dom';

export default function Topbar({ onToggleSidebar = () => {} }) {
  const navigate = useNavigate();
  return (
    <div className="topbar">
      <div className="topbar-left">
        <button className="topbar-menu-btn" type="button" onClick={onToggleSidebar} aria-label="Open navigation">
          <span className="material-icons-round">menu</span>
        </button>
        <div className="topbar-search">
          <span className="material-icons-round">search</span>
          <input placeholder="Search knowledge base..." />
        </div>
      </div>

      <div className="topbar-right">
        <button
          className="btn btn-secondary topbar-home-btn"
          type="button"
          onClick={() => navigate('/')}
          style={{ padding: '7px 12px', fontSize: '0.78rem' }}
          title="Back to Home"
        >
          <span className="material-icons-round">home</span>
          Home
        </button>

        {/* Notifications */}
        <div className="topbar-icon-btn" title="Notifications">
          <span className="material-icons-round">notifications_none</span>
          <span className="notif-badge"></span>
        </div>

        {/* Settings shortcut */}
        <div className="topbar-icon-btn" title="Settings" onClick={() => navigate('/settings')} style={{ cursor: 'pointer' }}>
          <span className="material-icons-round">settings</span>
        </div>

        <div className="topbar-divider" style={{ width: 1, height: 22, background: 'var(--border)', flexShrink: 0 }} />

        {/* User */}
        <div className="topbar-user">
          <span className="topbar-user-name">User</span>
          <span className="pro-pill">Member</span>
          <div className="user-avatar-top">U</div>
        </div>
      </div>
    </div>
  );
}
