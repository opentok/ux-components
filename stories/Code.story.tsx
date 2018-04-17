import * as React from 'react';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs/react';
import { wInfo, styles, colorPalette, colorNames } from "./utils";
import { withInfo } from '@storybook/addon-info';
import { Code } from '../src';

addDecorator(withKnobs);

const stories = storiesOf('Code', module);
const info = withInfo({ inline: false, source: true, styles });

stories.add('React', info(() => {
  const code = text(
  'Code',
  `
  import App from './components/App';
  import { Code } from 'opentok-ux-components';

  export default function Main () {
  return (
      <App>
        <Code text={someCode} />
      </App>
    );
  }
  `
);
  return <Code text={code} />
}));

stories.add('Scala', info(() => {
  const code = text(
  'Code',
  `
import cats.FlatMap
import cats.implicits._

final case class Kleisli[F[_], A, B](run: A => F[B]) {
  def compose[Z](k: Kleisli[F, Z, A])(implicit F: FlatMap[F]): Kleisli[F, Z, B] =
    Kleisli[F, Z, B](z => k.run(z).flatMap(run))
}
  `
);
  return <Code text={code} />
}));


