import { Component } from 'react';
import { Section } from '../components/Section/Section';
import { Statistics } from '../components/Statistics/Statistics';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import css from '../components/App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickButton = e => {
    const option = e.target.name;

    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }
    return `${result}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const handleClickButton = this.handleClickButton;
    const countTotalFeedback = this.countTotalFeedback();
    const countGoodFeedbackPercentage = this.countPositiveFeedback();
    const options = Object.keys(this.state);

    return (
      <div className={css.stats}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onFeedback={handleClickButton} />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            goodPercentage={countGoodFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
