# Hooks

* Hooks are going to be released next year!
* hooks are not conditional: no if-else when using them


## Custom Hooks

* custom hooks names **must** use the word 'use' as a preffix.
* custom hooks can return whatever you want but it's recommended to return a plain value or an object
* the example of the input username and password rocks! Instead of having the onChange and value within the input, you extract them into functions and then group them as one `useInput` custom hook.
```

 const username = userInput('Mark');
 const password = userInput('******');

```

* submitForm function: instead of adding each form value with a new variable, I can do a form array with all the form field values and loop thru them. You can build a `useForm` hook with all the setup and validations needed. 

* `bind` for external components
* `bindInput` for my internal components


## useCallback

* it's a React hook used as optimization (related to the `useEffect` hook)(TODO: read the docs. I missed the explanation :/)
* you can use setters inside the callback, but in order to use the newest values, you'll have to call the setter with a function like: `setCounter(counter => counter + 1)`
* if you're not using setters within the useCallback hook, you can use the useCallback 2nd argument (similar to useEffect) so we can "recreate" the callback function based on a list of 'variables' (like `useEffect`).


## useEffect

* the effects are triggered after the component is rendered.
* you can use async/await for the 1st param! But beware that you need to return something at the end. We should use it with caution
* there are side effects!
* it can replace the logic we have to fetch data based on driver_id props, which is used among componentDidMount, componentDidUpdate and getDerivedStateFromProps
* the `useEffect` 2nd argument is called `inputs`. If you don't define it, the effect will be called every time the functional component/render, no matter what changed. Most of the time, we want to run these effects only in certain ocassions, like when a driver_id changes. For that case, you use the 2nd argument (an array) and pass the variables you want to 'watch'
* if you want to use a 'condition' has part of the 2nd argument, put it in a variable and add the variable to the array (the stuff that the chinese guy asked. Focus a particular input when some conditions are met).


## Cleaning effects

* you could return a function from your effect. That function will be used as a 'cleanup' function. It will be executed when the functional component is unmounted.
* it's not another argument of the `useEffect` because of closures. You want to read the variables used within your effect function. 

**loading & fetchUser example**
* basically, you define a complex state object and use one hook and one effect to avoid separate re-renders of your component
** when the api returns a value, you'll update the `user` and the `loading` flag at the same time
* the example has an `useState`, an `useEffect` and it also has as cleanup function. Wow!


## useRef

* you can combine these React hook with `useEffect`
* inputRef.current.focus only when the input has changed
* it's also used to keep track of previous state variable values


### A replacement for BodyClassName component
* we can write a custom hook to handle the document.body.classList object


# Context API

* Advice: create the context in a separate file in order to avoid circular reference problems
* With hooks, you can use `useContext`!
** it doesn't have a setContext fn :/ BUT you can do it using `useState`
** basically, you define a useState to provide the context value at parent level. Every time the state changes, the `useContext` will be executed in all the children components that are consuming to the modified context.
* you can define an state to pass functions or callback functions down to the consumers. For example, he defined  `{name: themeName, styles: themes[themeName], toggleName}`. The name is a string, `styles` is an object and `toggleName` is a function that a child can execute. This `toggleName` (when called) could trigger a `setThemeName` change within the state, which will cause a provider value change (and a re-render of the children)

## Theme Manager
* a component that helps 'encapsule' the ThemeContext usage
* The idea is using it to set the provider and the context values and then render its children. The cool part is that you put all the context definitions in just one place and that's it! Also, you could use `useState` to grab&use things from it and expose it to the consumer. So, you could expose a callback prop like `setUser` or similar and let your consumers use it to modify the state (like Redux does it with redux actions).


# Compound Components

* you can use `useContext` to create compound components
* you can concatenate providers and consumers and it will just work. Why? Because the consumer are always looking for their 1st parent provider
<Tabs> //-> this is the provider
	<Tab value="aa"/> //-> this is a compount component that uses `useContext` to get the selected tab.

Tabs tiene un selectedTab, un `isOpened` y demás. Ambos dentro de un inner `useState`.
Tabs is the parent. It's the one that uses the TabsManager/Context with a couple of state props (like `selectedTab` or `isOpened`). These props can be also passed to the consumers so they can interact with them.


# Controlled Components

* input with value and onChange 'hooks' (input onChange={e => setPepe(e.target.value)} value={pepe} && const [pepe, setPepe] = useState(pepeInitialValue) )
* The idea is to 'lift the state up' from a component so we can use it and modify the inner consumer components
* He just re-create the Tabs component so it can be like an `input` tag (which handles its internal state + allow changes from outside)
* Check AppControlledComponentExercise.js

# RenderProps

* you can combine it with hooks! Like, getting the state from a hook and pass it as an argument to the renderProp method of your choice.
* The `FetchData` component is an example on how you can use hooks and renderProps to encapsulate effects and make parents aware when the effect has finished
** Also, you could concatenate the `FetchData` components to do fetch compositions. That cannot be done with hooks alone. You need renderProps




**Notes**
* Leave feedback at https://kitze.typeform.com/to/LItBEd
* Kitze recommends using render props for fetching data.
* `useMemo` hook is a 'pseudo-replacement' for reselect
* look for Kent C Doods testing library. The README has some tips regarding React testing techniques that we could use! (https://github.com/kentcdodds/react-testing-library)
** check the unit-test recommendations around hooks
* look for the nikgraf custom hooks. It's a list of all the hooks you'll ever going to need (https://nikgraf.github.io/react-hooks/)
* also, check the list of hooks from Kitz (https://github.com/kitze/react-hanger)
* Animations?
** there is a `react-spring` lib for animations! And it works with hooks. Better take a look at it
** look for `react-pose` (also for animations)
* Check the twizzy-landing repo from Kitze. It has an example on how he handles the animations from the twizzy.app website :muscle (use-intro-animations.js I think)
** it also has some examples around React Suspense. How to lazy load a component until the rest of your app has finished (check the 'Script' folder)

* VS Code: look for a Presentations widget. It helps when presenting the code.





















