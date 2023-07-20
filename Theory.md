# Thoery

### What is `JSX` ?

- `JSX` stands for JavaScript XML. It is <b>not HTML inside JS</b>. It is HTML like syntax. We can write `React` w/o `JSX`.
- JS Engines cannot read `JSX`. JSX is transpiled before it reaches JS Engines by `BabelJS`. Transpiled simply means converting Code into Readable code for React.
- `JSX` => `React.createElement` => `ReactJS` Element-object => `HTMLElement` (render)

##### Example 1 using JSX:

```
const myElement = <h1>This is using JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

##### Example 2 Without JSX:

```
const myElement = React.createElement('h1', {}, 'This is not using JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

### `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

- `{TitleComponent}`: This is JS expression.
- `{<TitleComponent/>}`: This represents a Component which returns some JSX code.
- `{<TitleComponent></TitleComponent>}`: This is same as above. Above can be written only when there are no child components to be rendered.
