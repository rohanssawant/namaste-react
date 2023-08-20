## Namaste React Course by Akshay Saini

# _Episode 10 – Jo Dikhta hai, Wo bikta hai_

### React component lifecycle diagram:

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### Timestamps:

02:22 – Default way of writing CSS
03:00 – SCSS and SaSS
04:40 – New way of writing CSS in a React application (Styled Components)
06:30 – another way is using libraries & frameworks (Material UI, BootStrap, Chakra UI)
10:30 – Ant Design
11:30 – Tailwind CSS
13:55 – Tailwind CSS website
16:15 – Installation- Parcel – PostCSS
18:40 – tailwind.congig.js
19:35 - configure PostCSS
23:00 – coding postCSSrc
26:00 – Delete all CSS files & insert only 3 new lines (Tailwind)
29:00 – In Tailwind CSS, usage of ‘className’
38:25 – Tailwind Visual Studio Code extension – Tailwind Intellisense
43:07 to 01:08:30 - Coding Tailwind CSS examples
01:10:30 – Pros & cons of Tailwind CSS discussed

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
