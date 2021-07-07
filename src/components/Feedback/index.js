// Write your React code here.
import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {emojiShow: true}

  onChangeState = () => {
    this.setState({emojiShow: false})
  }

  onShowEmojis = () => {
    const {emojiShow} = this.state
    const {feedbackData} = this.props
    const {emojis, loveEmojiUrl} = feedbackData
    if (emojiShow) {
      return (
        <div className="card-container">
          <h1 className="heading-1">
            How satisfied are you with our customer support performance?
          </h1>
          <div className="emoji-container">
            <div className="inner-emoji-container">
              <img
                className="img-style"
                src={emojis[0].imageUrl}
                alt="sad-emoji"
                onClick={this.onChangeState}
              />
              <p className="emoji-name">{emojis[0].name}</p>
            </div>
            <div className="inner-emoji-container">
              <img
                className="img-style"
                src={emojis[1].imageUrl}
                alt="none-emoji"
                onClick={this.onChangeState}
              />
              <p>{emojis[1].name}</p>
            </div>
            <div className="inner-emoji-container">
              <img
                className="img-style"
                src={emojis[2].imageUrl}
                alt="happy-emoji"
                onClick={this.onChangeState}
              />
              <p>{emojis[2].name}</p>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="card-container-love">
        <div className="love-img-container">
          <img className="love-img-style" src={loveEmojiUrl} alt="loveEmoji" />
        </div>
        <h1 className="thank-you">Thank You!</h1>
        <p className="customer-feedback">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    return <div className="bg-container">{this.onShowEmojis()}</div>
  }
}

export default Feedback
