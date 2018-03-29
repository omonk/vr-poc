# visual-regression-demo

Small proof of concept to demo a visual regression solution using `storybook-chrome-screenshot` and `reg-suit`

## What to do

Clone this repository, and install the required dependencies:

```
git clone git@github.com:omonk/vr-poc.git
cd visual-regression-demo
npm i
```

Start storybook to get familiar with the current components, also check the code
in `src/Hello.jsx`

```
npm run storybook
```

As you can see, we only have a single component that either shows a string, if a prop message was given, or it displays a default 'Hello World' message that receives through react-intl.
