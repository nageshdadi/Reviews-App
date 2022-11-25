// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  nextImgObj = () => {
    const {count} = this.state

    if (count <= 2) {
      this.setState(prevState => ({count: prevState.count + 1}))
    } else {
      this.setState({count: 0})
    }
  }

  prevImgObj = () => {
    const {count} = this.state

    if (count === 0) {
      this.setState({count: 3})
    } else {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state

    console.log(count)

    const prestImgObj = reviewsList[count]
    const {imgUrl, username, companyName, description} = prestImgObj

    return (
      <div className="bgContainer">
        <h1 className="head">Reviews</h1>
        <div className="card">
          <button
            testid="leftArrow"
            type="button"
            className="button"
            onClick={this.prevImgObj}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="leftArrowBtnIMg"
              alt="left arrow"
            />
          </button>
          <ul className="ulList">
            <li className="listItem">
              <div className="containerObj">
                <img src={imgUrl} className="imgUrls" alt={username} />
                <p className="name">{username}</p>
                <p>{companyName}</p>
                <p>{description}</p>
              </div>
            </li>
          </ul>
          <button
            testid="rightArrow"
            type="button"
            className="button"
            onClick={this.nextImgObj}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              className="leftArrowBtnIMg"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
