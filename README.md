## Namaste React Course by Akshay Saini

# _Episode 09 – Optimising our App_

### React component lifecycle diagram:

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### Timestamps:

02:00 – Custom Hooks, Single Responsibility Principle
04:25 – Modularity
09:23 – Hook
20:00 – Create custom Hook
21:00 – write useEffect(), fetch(), How to optimize the code using custom hook?
32:00 – Make a custom Hook & put as packages (examples)
34:00 – A Hook to tell the user in Online or Offline
54:45 – Should we write “use” in a hook? Is it mandatory?
58:45 – How to further optimize the code?
01:06:00 – Make smaller modules, code-splitting, chunking, Dynamic Bundling, Lazy Loading
01:17:30 – Lazy Loading
01:25:25 – Suspense keyword
Till 01:33:00 discussed how to optimize the code
01:35:00 – Implementing Lazy Loading to other web pages
01:36:00 – Interview Tips

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
