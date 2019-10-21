import React from 'react';

import './index.css';

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      unnatotatedImages: null,
      above: false,
      below: false,
      behind: false,
      inFront: false,
    }
  }

  async componentDidMount () {
    const request = await fetch('/getUnnanotatedImageNames');
    const unnatotatedImages = await request.json();
    this.setState({ unnatotatedImages });
  }

  toggle (key) {
    return () => this.setState({ [key]: !this.state[key] });
  }

  submit = async () => {
    const { above, below, behind, inFront, unnatotatedImages } = this.state;
    const responsePromise = await fetch(`/saveAnnotation?img=${unnatotatedImages[0]}&above=${above}&below=${below}&behind=${behind}&inFront=${inFront}`);
    const response = await responsePromise.json();
    if (!response.success) {
      return alert('Response is not ok');
    }
    this.setState({ unnatotatedImages: unnatotatedImages.slice(1) });
  }

  render () {
    if (this.state.unnatotatedImages === null) {
      return 'Loading';
    }
    if (this.state.unnatotatedImages.length === 0) {
      return 'All images have annotation';
    }
    return (
      <div className='main'>
        <img src={`/images/${this.state.unnatotatedImages[0]}`} />
        <div className='buttons'>
          <div className={this.state.above ? 'active' : ''} onClick={this.toggle('above')}> Above </div>
          <div className={this.state.below ? 'active' : ''} onClick={this.toggle('below')}> Below </div>
          <div className={this.state.behind ? 'active' : ''} onClick={this.toggle('behind')}> Behind </div>
          <div className={this.state.inFront ? 'active' : ''} onClick={this.toggle('inFront')}> In Front </div>
          <div className='submit' onClick={this.submit}> Submit </div>
        </div>
      </div>
    );
  }
};

export default Main;
