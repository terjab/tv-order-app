import { connect } from 'react-redux'
import { H1 } from '../../components/Header'
import { Link, P, Summary, SummaryItem, SummaryHeader, HR, PriceDetail, Price, PriceWrapper } from './styled'
import { HOMEPAGE } from '../../routes'
import qs from 'qs'

export const OrderPackage = ({ location, programs, selectedPackage }) => {
  const { regular, extras } = qs.parse(location.pathname.substr(9))

  return (
    <>
      <Link to={HOMEPAGE}>{`<< Back to homepage`}</Link>
      <H1>Thank you for your purchase!</H1>
      <P>Order summary:</P>
      <HR></HR>
      <Summary>
        <SummaryHeader>Tarif:</SummaryHeader>
        <SummaryItem>{selectedPackage.name}</SummaryItem>
        <HR></HR>
        <SummaryHeader>Packages:</SummaryHeader>
        {Object.entries(programs).map(name => (<SummaryItem>{name[0]} - {name[1]}x</SummaryItem>) )}
        <HR></HR>
      </Summary>
      <PriceWrapper>
        <Price>Total price: {parseInt(regular)+ parseInt(extras)}$</Price>
        <PriceDetail>Tarif price: {regular}$</PriceDetail>
        <PriceDetail>Extra programs price: {extras}$</PriceDetail>
      </PriceWrapper>
    </>

  )
}

const mapStateToProps = state => ({
  programs: state.programs,
  selectedPackage: state.selectedDropdownData.selectedPackage,
})

export const Order = connect(mapStateToProps)(OrderPackage)