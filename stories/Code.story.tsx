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

stories.add('Android', info(() => {
  const code = text(
  'Code',
  `
import com.opentok.MediaMode;
import com.opentok.ArchiveMode;
import com.opentok.Session;
import com.opentok.SessionProperties;

// A session that attempts to stream media directly between clients:
Session session = opentok.createSession();

// A session that uses the OpenTok Media Router (which is required for archiving):
Session session = opentok.createSession(new SessionProperties.Builder()
  .mediaMode(MediaMode.ROUTED)
  .build());

// A Session with a location hint:
Session session = opentok.createSession(new SessionProperties.Builder()
  .location("12.34.56.78")
  .build());

// A session that is automatically archived (it must used the routed media mode)
Session session = opentok.createSession(new SessionProperties.Builder()
  .mediaMode(MediaMode.ROUTED)
  .archiveMode(ArchiveMode.ALWAYS)
  .build());

// Store this sessionId in the database for later use:
String sessionId = session.getSessionId();
  `
);
  return <Code text={code} />
}));


stories.add('Lisp', info(() => {
  const code = text(
  'Code',
  `
(defun get-max-value (list)
(let ((ans (first list)))
  (do ((i 1 (1+ i)))
      ((>= i (length list)) ans)
    (when (> (nth i list) ans)
      (setf ans (nth i list))))))

(defmacro get-from-list(list pred)
\`(let ((ans (first ,list)))
    (do ((i 1 (1+ i)))
        ((>= i (length ,list)) ans)
      (when (,pred (nth i ,list) ans)
        (setf ans (nth i ,list))))))
  `
);
  return <Code text={code} />
}));