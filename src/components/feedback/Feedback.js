import { Component } from 'react'
import styles from './styles.module.css'

import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions'
import Statistic from 'components/statistic/Statistic'
import Section from 'components/section/Section'

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  render() {
    const onLeaveFeedback = (evt) => {
      this.setState((prev) => ({ ...prev, [evt.target.name]: prev[evt.target.name] + 1 }))
    }

    const countTotalFeedback = () => {
      const total = Object.values(this.state).reduce((acc, item) => {
        return acc + item
      }, 0)
      return total
    }

    const positivePercentage = () => {
      const positiveFeedback = Math.round((this.state.good / countTotalFeedback()) * 100)
      return positiveFeedback
    }

    return (
      <section className={styles.container} >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title={'Statistics'}>
          <Statistic
            state={this.state}
            countTotalFeedback={countTotalFeedback}
            positivePercentage={positivePercentage} />
        </Section>
      </section>
    );
  }

}

export default FeedBack;