import React from 'react';
import WorkItem from './WorkItem.js';
import WI1 from './work_items/WI1.jsx';
import WI2 from './work_items/WI2.jsx';
import WI3 from './work_items/WI3.jsx';
// import smoothscroll from 'smoothscroll-polyfill';
// import scrollSnapPolyfill from 'css-scroll-snap-polyfill'

// smoothscroll.polyfill();
// scrollSnapPolyfill();

const WORKITEMS = [WI1, WI2, WI3];
const THRESHOLD = 0.75;

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInView: 0,
    }
    this.workItemsRef = React.createRef();
    this.singleWorkItemRefs = WORKITEMS.map((elem, i) => {
      return {
        workItemId: i,
        ref: React.createRef(),
      };
    });
  }

  componentDidMount() {
    const callback = entries => {
      entries.forEach( entry => {
          if (entry.intersectionRatio > THRESHOLD) {
            this.setState({itemInView: parseInt(entry.target.id)});
          }
        }
      );
    };

    this.observer = new IntersectionObserver(callback, {
      threshold: THRESHOLD,
      root: this.workItemsRef.current,
    });

    Object.values(this.singleWorkItemRefs).forEach(item =>
      this.observer.observe(item.ref.current)
    );
  }

  toggleScrollButton(side) {
    return (this.state.itemInView === 2 && side === "R") ? " hidden" : (this.state.itemInView === 0 && side === "L") ? " hidden" : "";
  }

  doScroll(side) {
    let itemToScrollTo = null;
    let scrollByY = 0;
    if (side === "L") {
      itemToScrollTo = this.state.itemInView - 1;
    } else if (side === "R") {
      itemToScrollTo = this.state.itemInView + 1;
    }

    if (itemToScrollTo < this.singleWorkItemRefs.length && itemToScrollTo >= 0) {
      scrollByY = this.singleWorkItemRefs[itemToScrollTo].ref.current.clientWidth;
      scrollByY = side === "L" ? -scrollByY : scrollByY;
      this.workItemsRef.current.scrollBy({top: 0, left: scrollByY, behavior: "smooth"});
    }
  }

  render() {
    return (
      <section className="experience">
        <span className="experience__header">
          <h2>Experience</h2>
        </span>
        <span className="experience__work-item-index">{this.state.itemInView + 1} of 3</span>
        <span className={"scroll-button scroll-button__previous" + this.toggleScrollButton("L")} onClick={() => this.doScroll("L")}><i className="fas fa-3x fa-chevron-left"></i></span>
        <span className={"scroll-button scroll-button__next" + this.toggleScrollButton("R")} onClick={() => this.doScroll("R")}><i className="fas fa-3x fa-chevron-right"></i></span>
        <div className="work-items" ref={this.workItemsRef}>
          {
            WORKITEMS.map( (workItem, i) => {
              return <WorkItem key={i} ref={this.singleWorkItemRefs[i].ref}
              workItemId={i}
              company={workItem.company}
              jobTitle={workItem.jobTitle}
              jobDuration={workItem.jobDuration}
              jobSummary={workItem.jobSummary}
              jobDescription={workItem.jobDescription}
              jobTechnologies={workItem.jobTechnologies} />
            })
          }
        </div>
      </section>
    );
  }
}

export default Experience;
