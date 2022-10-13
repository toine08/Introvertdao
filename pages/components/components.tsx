import Menu from './menu'
import Foot from './footer'

export default function Layout({...props}){ 
  return (
    <>
      <Menu />
      <main {...props}></main>
      <Foot />
    </>
  )
}