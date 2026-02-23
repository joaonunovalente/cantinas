function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container text-center">
        <small className="copyright">
          Designed with <span className="sr-only">love</span>
          <i className="bi bi-heart-fill" style={{ color: '#DE5547' }}></i>
          {' '}by{' '}
          <a className="theme-link" href="http://themes.3rdwavemedia.com" target="_blank" rel="noreferrer">Xiaoying Riley</a>
          {' '}for developers
        </small>
      </div>
    </footer>
  );
}

export default Footer;
