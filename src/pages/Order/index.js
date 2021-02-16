import { H1 } from '../../components/Header'
import { Link } from './styled'
import { HOMEPAGE } from '../../routes'

export const Order = (props) => {
  console.log(props.render)
  return (
    <>
      <Link to={HOMEPAGE}>{`<< Back to homepage`}</Link>
      <H1>Thank you for your purchase!</H1>
    </>

  )
}
