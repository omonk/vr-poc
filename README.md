# visual regression proof of concept

Proof of concept to demo a visual regression solution using `storybook-chrome-screenshot` and `reg-suit` integrated into TeamCity with reg-suit github app

## What to do

Clone this repository, and install the required dependencies:

```
git clone git@github.com:omonk/vr-poc.git
cd vr-poc
npm i
```

Start storybook to get familiar with the current components, also check the code
in `src/Hello.jsx`

```
npm run storybook
```

As you can see, we only have a single component that either shows a string, if a prop message was given, or it displays a default 'Hello World' message that receives through react-intl.
