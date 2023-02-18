import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo.png'

export const Navbar = () => {


  return <nav style={{
    borderBottom:'solid 1px #EEEEEE',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding:'1rem'
  }}>

    <Link href='/'>
      {/* <Image src={logo} alt='Just Click On Me logo' height={30} quality={100} /> */}
      <img src='/logo.png' alt='Just Click On Me logo' height={30} />
    </Link>

    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap:'1rem'
    }}>

      <Link href='/plans'>Subscription plans</Link>
      <Link href='/benefits'>Benefits</Link>
      <Link href='/'>Why you need it?</Link>
      <Link href='/faq'>FAQ</Link>
    </div>

    <button style={{
      padding: '0.75rem 2rem',
      background: 'transparent',
      border: 'solid 2px #CBD6FF',
      color: '#0038FF',
      fontSize:'16px'
    }}>
      Get a plan
    </button>
  </nav>
}