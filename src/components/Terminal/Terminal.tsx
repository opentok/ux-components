import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import * as styles from './Terminal.css';

export interface ITerminalContent {
  /** Is the line a comment or code */
  type: 'code' | 'comment';
  /** The text to display */
  text: string;
  /** Should the line be highlighted? */
  highlight?: boolean;
};

export interface ITerminalPropTypes {
  /** Text to display */
  content?: ITerminalContent[];
  /** Should the terminal update in real-time? */
  active?: boolean;
  /** Re-run the terminal once all content displayed? */
  repeat?: boolean;
  /** Additional styles to apply */
  style?: { [key: string]: string };
  /** Additional className to apply */
  className?: string;
}

export interface ITerminalState {
  content: ITerminalContent[];
  displayedContent: ITerminalContent[];
}

export default class Terminal extends Component {
  props: ITerminalPropTypes;
  state: ITerminalState;
  static emptyLine: ITerminalContent = { type: 'code', text: '_' };
  constructor(props: ITerminalPropTypes) {
    super(props);
    if (!props.active && props.repeat) {
      console.warn('Setting repeat to true has no effect in a non-active Terminal');
    }
    const content = props.content || [Terminal.emptyLine];
    this.state = {
      content,
      displayedContent: props.active ? [] : content,
    }
    this.typeNextLine = this.typeNextLine.bind(this);
    this.displayNextLine = this.displayNextLine.bind(this);
  }
  componentDidMount() {
    if (this.props.active && this.state.content.length) {
      setTimeout(this.displayNextLine, 1500);
    }
  }

  typeNextLine(lineIndex: number, charIndex: number) {
    const { content, displayedContent } = this.state;
    const { text } = content[lineIndex];
    const nextChar = text[charIndex];
    const lastLine = displayedContent[displayedContent.length - 1];
    if (nextChar) {
      const updatedLine = {...lastLine, text: `${lastLine.text.slice(0, -1)}${text[charIndex]}_` };
      this.setState({
        displayedContent: [...displayedContent.slice(0, -1), updatedLine]
      }, () => setTimeout(() => this.typeNextLine(lineIndex, charIndex + 1), 50));
    } else {
      this.setState({
        displayedContent: [
          ...displayedContent.slice(0, -1),
          { ...lastLine, text: lastLine.text.slice(0, -1) }
        ]
      }, () => setTimeout(() => this.displayNextLine(lineIndex + 1), 500));
    }
  }

  displayNextLine(lineIndex: number = 0) {
    const { content, displayedContent } = this.state;
    const line = content[lineIndex];
    if (line) {
      const { type, text } = line;
      if (type === 'comment') {
        this.setState({
          displayedContent: [...displayedContent, line]
        }, () => setTimeout(() => this.displayNextLine(lineIndex + 1), 500));
      }
      if (type === 'code') {
        this.setState({
          displayedContent: [...displayedContent, Terminal.emptyLine]
        }, () => this.typeNextLine(lineIndex, 0));
      }
    } else {
      if (this.props.repeat) {
        setTimeout(() => {
          this.setState({
            displayedContent: []
          }, () => setTimeout(this.displayNextLine, 1500));
        }, 4500);
      }
    }
  }

  render() {
    const { displayedContent } = this.state;
    const classes = classNames(styles.terminal, this.props.className);
    return (
      <div className={classes} style={this.props.style} >
        <div className={styles.header}>
          <span className={styles.button} />
          <span className={styles.button} />
          <span className={styles.button} />
        </div>
        <div className={styles.content}>
          <pre >
            {
              displayedContent.map(({ type, text, highlight }, index) =>
                <div key={index} className={styles.line}>
                  <span className={classNames(styles[type], { [styles.highlight]: highlight })}>
                    {text}
                  </span>
                </div>
              )
            }
          </pre>
        </div>
      </div>
    );
  }
}
