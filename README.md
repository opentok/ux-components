<img src="https://assets.tokbox.com/img/vonage/Vonage_VideoAPI_black.svg" height="48px" alt="Tokbox is now known as Vonage" />

# UX Components

OpenTok UX Components are built with:

 - [TypeScript](http://www.typescriptlang.org/)
 - [React](https://reactjs.org/)
 - [PostCSS](https://github.com/postcss/postcss)

You can preview components using [React Storybook](https://storybook.js.org/).  Due to a current [issue](https://github.com/yarnpkg/yarn/issues/4489) with `yarn`, it's recommended that you use `npm`.

```bash
$ npm i
$ npm run storybook
```
You can view the storybook at `http://localhost:6006/`

*If you get an error regarding type declarations for a `css` file, you may need to run `npm run watch` in a separate terminal tab.*

Components are not yet available on `npm`, but you can test them in your own project by cloning the repo and then from the root directory:
```bash
 $ npm i
 $ yarn link
```
Within the root of your own project's directory, run `yarn link opentok-react-components`.  Then you can import and use components as normal:
```javascript
import { Button } from 'opentok-ux-components';
import 'opentok-ux-components/dist/style.css';

 . . .

  render() {
	  <div>
	    <Button text="hello" onClick={onClick} />
	  </div>
  }
```

## Development and Contributing

Interested in contributing? We :heart: pull requests! See the 
[Contribution](CONTRIBUTING.md) guidelines.

## Getting Help

We love to hear from you so if you have questions, comments or find a bug in the project, let us know! You can either:

- Open an issue on this repository
- See <https://support.tokbox.com/> for support options
- Tweet at us! We're [@VonageDev](https://twitter.com/VonageDev) on Twitter
- Or [join the Vonage Developer Community Slack](https://developer.nexmo.com/community/slack)

## Further Reading

- Check out the Developer Documentation at <https://tokbox.com/developer/>