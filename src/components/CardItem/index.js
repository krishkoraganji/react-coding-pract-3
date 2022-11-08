import './index.css'

const CardItem = props => {
  const {Details} = props
  const {title, description, imgUrl, className} = Details
  return (
    <li className={className}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} alt="Avathar" />
      </div>
    </li>
  )
}
export default CardItem
