## Namaste React Course by Akshay Saini

- React Algo: https://github.com/acdlite/react-fiber-architecture

# _Episode 12 – Lets build our store_

### React component lifecycle diagram:

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### Timestamps:

- 00:00 – Intro to Redux
- 10:00 - Redux theory
- 40:00 - Building cart ( Redux prac )

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

### REDUX TOOL KIT

- When we press btn, it `DISPATCHES ACTION` which calls a `REDUCER FUNCTION` which updates `SLICE OF REDUX STORE`.
- For reading, there is a concept called `SUBSCRIBING THE STORE` using `SELECTOR`.

- TODO
  - [ ] Build store
  - [ ] Connect store to App
  - [ ] Slice (cart action)
  - [ ] Dispatch action
  - [ ] Selector
