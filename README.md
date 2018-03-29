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

## What's happening?

package.json scripts includes `screenshot`, `regression` and a combo of the two `full-visual-regression-test`.

`screenshot` - 
- Use `storybook-chrome-screenshot` to takes screenshots of all our stories and stores them in `__snapshots__/`.
- Options for viewports can be passed in

`regression` -
- Runs `reg-suit run`, reg-suit has access to an S3 bucket (env variables) where it stores tests based on a git commit SHA. When this command is run it picks up the SHA based off where this branch has been created (and thus where the most up to date tests have been stored), downloads these files and compares them with the recently updated snapshots in `__snapshots__`. After comparison it creates a report and uploads the tests to a new folder based off the current SHA of HEAD.
- reg-suit comes with a github notify plugin, allowing failing tests to block PR. PR becomes unblocked when PR is approved by a reviewer.

## Conclusion
- Ideally we would run these in TeamCity on the creation of a PR, not locally on commit or push.
- Reports are concise and provide a clear display of whats changed
- Provides a detailed audit within the Github repo and AWS S3 bucket
- Concerns about running in TeamCity with such a large number of stories.
    - How long will it take?
    - I've been told concurrency is a limiting factor in our CI. However `reg-suit` has a concurrency flag we can make use of.
- Storing such a large number of image files in the repo may cause some issues, maybe a case for https://git-lfs.github.com/
- With such a large number of stories in the project, PRs may be polluted by reg-suit automated comment.

