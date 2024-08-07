import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <h1>bienvenidos</h1>
      <section>
        <h2>accede a la app</h2>
        <Link to='/register'>Registrate</Link>
        <Link to='/login'>inicia sesion</Link>
      </section>
    </>
  )
}