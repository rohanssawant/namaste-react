## Namaste React Course by Akshay Saini

# _Episode 08 – Getting Classy_

### React component lifecycle diagram:

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### Timestamps:

09:30 – Class based component example
16:00 – Props, Props in Function based component, Destructure
18:00 – How to write same example in a Class based component
21:00 – Mentioned about “Super(props)”
23:00 – What if you want more props?
26:00 – How can we write local/state variables in a Function Component
28:00 – how can we create state/local variable in Class component
30:00 – “this.state” explained, Destructuring
34:00 – How do we create 2 state/local variables in both functional & class-based component
37:05 – How to update the state variables in Class component
48:20 – Life cycle of Class based components
50:00 – Detailed Explanation
Parent, child – Constructor
Parent, child – Render
58:25 – ComponentDidMount(){ }, Life cycle of a Parent-child relationship
01:05:00 -ComponentDidMount() used for API calss
01:07:00 – API calls inside useEffect()
01:14:00 – this.props.name + “child constructor”
01:20:00 – React Lifecycle Methods Diagram
01:21:00 – Why React is so fast?
01:27:00 – DOM Manipulation
01:29:00 – Render phase, Commit phase
01:33:00 – How to make API calls in class based components?
01:36:00 – GitHub API call
01:38:40 – How to update the json data into our web page
01:43:38 – Coding UserClass.js component
01:44:00 – How life cycle works here in this code
01:45:00 - Debugger
01:49:30 – ComponentDidUpdate()
01:52:00 – Mounting Cycle
01:55:00 – API rate limit exceeded
01:56:15 – Unmounting Phase/cycle
01:58:00 - in older days we were coding like this
02:09:00 – How to write the same in class based component – ProfileClass.js
02:15:00 – More Deeper we explore the old way of writing React Code
02:18:00 – what is the use case of componentWillUnmount()?
02:24:30 – Problem of Single Page Application
02:30:00 – Senior Developer should know this
02:32:00 – What will happen if we create setInterval inside useEffect
02:36:30 – coding Profile.js
02:45:30 – Async in useEffect()

- React Algo: https://github.com/acdlite/react-fiber-architecture

#### React component lifecycle

- Single Component

  - Constructor called
  - Render called
  - Comp did mount

- Parent Child Component

  - Parent constructor
  - Parent Render
    - Child Constructor
    - Child Render
  - Child comp did mount
  - Parent comp did mount

- Parent Nth Child Component
  - Parent constructor
  - Parent Render
    - Child Constructor
    - Child Render
    - Child Constructor
    - Child Render
      .
      .
      .
    - nth child constructor & render
  - nth Child comp did mount
  - Parent comp did mount

###### Render phase happens component wise but Commit phase (actual DOM manipulation always happen in a SINGLE BATCH)

##### componentDidUpdate( )

- MOUNTING

  - Constructor (dummy)
  - Render(dummy)
  - ComponentDidMount()

  - API CALL
  - this.setState -> triggers update cycle

- UPDATE
  - Render(real Api data)
  - ComponentDidUpdate()
