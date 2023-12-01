export default function Header() {
  return (
      <div className="header-slot" style={{ height: '50px', display: 'flex', paddingLeft: '10px', paddingRight: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className="logo" style={{padding: 0 }}>HFO</p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', alignContent: 'center', height: 'fit'}}>
              <button className='btn' onClick={() => {}}>
                  Sign In
              </button>
              <button className='btn' onClick={() => {}}>
                  Log In
              </button>
          </div>
      </div>

  )
}