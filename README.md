## Namaste React Course by Akshay Saini

- React Algo: https://github.com/acdlite/react-fiber-architecture

# _Episode 11 – Data is the new oil_

### React component lifecycle diagram:

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### Timestamps:

- 00:50 – Higher order comp theory & example
- 23:00 - BUilding accordion
- 01:45:00 - Lifting state up

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

- HIGHER ORDER COMP
  - A comp which takes a comp & returns a comp. It kind of enhances the comp.
  - Are pure func, should not change anything, we just need to enhance stuff or add something on top of it.
