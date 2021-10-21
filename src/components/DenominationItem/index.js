// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickButton = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-btn"
        onClick={onClickButton}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
