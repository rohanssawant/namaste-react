## Namaste React Course by Akshay Saini

# _Episode 07 – Finding the path_

### Timestamps:

03:00 – useEffect,useState hook explanation, Dependency Array
15:40 – React Router
19:00 – Create Routing Configuration
22:00 – Create About Component
30:00 – Rafce
33:00 – error (404 not found)
37:00 – useRouteError Hook
41:55 – Error.js
44:20 – Children Routes
51:00 – Outlet Keyword
56:00 – Create links to Header Menu
58:18 – Link Component
01:00:00 – Observe the performance
01:03:55 – Single Page Applications (SPA)
01:05:35 – 2 types of Routing: Client Side Routing & Server-side Routing
01:08:00 – Session Recap till now
01:11:50 – Dynamic Routing
01:13:35 – JSON Viewer
01:40:30 – GraphQL Introduction
01:52:40 – Dynamic Data coding
01:57:50 – Map function and its usage with a key
01:59:00 – Changing Restaurant ID’s
02:00:00 – New SuperPower Hook: UseParams
02:02:30 – Move API to constants.js
02:04:00 - Dynamic Cards- to be clickable
02:08:00 – Link Component
02:13:00 – Session Recap

- React Algo: https://github.com/acdlite/react-fiber-architecture

#### `useEffect()`

```
useEffect(()=>{},[])

useEffect(callback, dependencyArray)
```

- Default behav is to be called after every render.

- Page loads -> Component loads -> useEff is called

- If no dependencyArray, useEffect is called after every render.

- If dependencyArray is empty, useEffect gets called ONLY on initial render.

- If dependencyArray is present, useEff is called everytime that dependency is updated.

###### Never create `state` variables inside functions, conditionals statements, loops. Only inside func components on highest level.

### `react-router-dom`
