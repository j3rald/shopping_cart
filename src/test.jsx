/* eslint-disable no-dupe-class-members */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/state-in-constructor */
import React, { Component, PureComponent } from 'react'
import shallowCompare from 'react-addons-shallow-compare';

// Virtual DOM is copy of the actual DOM which is stored in app memory

// if in the component state value change or prop value change that time only they compare the Old DOM and New DOM
// Class Component
// Life cycle method
// 1. Mounting
// -> Constructor
// -> getDerivedStateFromProps
// -> Render
// -> componentDidUpdate

// 2. Updating
// -> getDerivedStateFromProps
// -> shouldComponentUpdate
// -> render
// -> getSnapshotBeforeUpdate
// -> componentDidUpdate

// 3. Unmounting
// -> (important to avoid memory leak problem)
// -> componentWillUnMount

// 4. Error 
// -> getDerivedStateFromError
// -> componentDidCatch

export default class Test extends PureComponent {
  state = {
      name: "Joe",
      todoItem: null,
      count: 0
    };

  //  Base on Prop value set state value
  // Constructor will call only once
  // bind the method
  // Analytics
  constructor(props) {
    super(props);
    //   this.state = {
    //   count: props.count,
    //   name: "Joe"
    // };
    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
    // API call for analytics
  }

  // Base on old prop value or old state valuew derive new State value
  //  calls every time whenever we change value or prop value
  // static getDerivedStateFromProps(props, state) {
  //   console.log('state', state);
  //   return {
  //     count: props.count !== state.count ? props.count : state.count
  //   }
  //   // if(this.props.count !== props.count) {
  //   //   return {
  //   //     count: props.count,
  //   //   }
  //   // }
  //   //    if(this.state.count !== state.count) {
  //   //   return {
  //   //     count: state.count,
  //   //   }
  //   // }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return shallowCompare(this, nextProps, nextState)
  // }

  // manipulate DOM element
  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  // html is mounted after that this life cycle method called
  // manipulate DOM element
  // register any document events
  // call onyl once
  mouseMove = () => {
    console.log('Mouse move')
  }

  async componentDidMount () {
    // console.log(document.getElementsByTagName('button'));
    // const btns = document.getElementsByTagName('button');

    // for (let i = 0; i < btns.length; i++) {
    //   const element = btns[i];
    //   element.style.backgroundColor = "red"
    // }
    document.addEventListener('mousemove', () => {
      console.log('copied');
    });
    // try {
    //   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //   const json = await res.json();
    //   this.setState({ todoItem : json})
    // } catch (error) {}
  }

  // remove alll the async code from the component when you remove component
  componentWillUnmount() {
    document.removeEventListener("mousemove", this.mouseMove)
  }

   mouseMove = () => {
    console.log('Mouse move')
  }

  increment = () => {
     this.setState((state) => ({
        count: state.count + 1,
        name: 'Joemari'
      }))
  }

  decrement = () => {
    this.setState((state) => ({
      count: state.count - 1,
      name: 'No name'
    }))
  }

  render() {
    console.log('render test');
    const { count, name, todoItem } = this.state
    return (
      <div>
        { todoItem && <h1>{todoItem.title}</h1> }
        { count < 5 && <p>{name}</p>}
        <button type="button" onClick={this.increment}>+</button>
        <p>{count}</p>
        <button type="button" onClick={this.decrement}>-</button>
      </div>
    )
  }
}
