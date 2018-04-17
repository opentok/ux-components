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
  live?: boolean;
  /** Additional styles to apply */
  style?: { [key: string]: string };
  /** Additional className to apply */
  className?: string;
}

export interface ITerminalState {
  content: ITerminalContent[];
  displayedContent: ITerminalContent[];
  currentLine: number;
  currentCharacter: number;
  allContentDisplayed: boolean;
}

export default class Terminal extends Component {
  props: ITerminalPropTypes;
  state: ITerminalState;
  constructor(props: ITerminalPropTypes) {
    super(props);
    const content = props.content || [{ type: 'code', text: '_' }]
    this.state = {
      content,
      displayedContent: props.live ? [] : content,
      currentLine: 0,
      currentCharacter: 0,
      allContentDisplayed: false,
    }
    this.typeNextChar = this.typeNextChar.bind(this);
    this.displayNextLine = this.displayNextLine.bind(this);
    this.displayComment = this.displayComment.bind(this);
  }
  componentDidMount() {
    if (this.props.live && this.state.content.length) {
      setTimeout(this.displayNextLine, 2000);
    }
  }

  displayComment() {
    const { content, currentLine, currentCharacter, displayedContent } = this.state;
    const comment = content[currentLine];
    this.setState({
      displayedContent: displayedContent.concat(comment),
      currentLine: currentLine + 1,
    }, () => setTimeout(this.displayNextLine, 500));
  }

  typeNextChar(): void {
    const { content, currentLine, currentCharacter, displayedContent } = this.state;
    const contentLine = content[currentLine];
    const nextChar = contentLine.text[currentCharacter];
    if (!nextChar) {
      return this.setState({
        currentLine: currentLine + 1,
        currentCharacter: 0
      }, () => setTimeout(this.displayNextLine, 500));
    }

    const isSpace = nextChar === ' ';
    const nextCharIndex = currentCharacter + 1;
    return this.setState({
      displayedContent: [
        ...displayedContent.slice(0, 1),
        { ...contentLine, text: `${contentLine.text.slice(0, currentCharacter + 1)}` }
      ],
      currentCharacter: currentCharacter + 1
    }, () => setTimeout(this.typeNextChar, 75));
  }

  displayNextLine() {
    const { content, currentLine, displayedContent } = this.state;
    if (currentLine < content.length) {
      const lineType = content[currentLine].type;
      if (lineType === 'code') {
        this.typeNextChar();
      }
      if (lineType === 'comment') {
        this.displayComment();
      }
    } else {
      this.setState({ allContentDisplayed: true });
    }
  }

  render() {
    const { displayedContent } = this.state;
    const classes = classNames(styles.terminal, this.props.className);
    return (
      <div className={classes} style={this.props.style} >
        <div className={styles.header}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.content}>
          <pre >
            {
              displayedContent.map(({ type, text, highlight}, index) =>
                <code key={index} className={styles.line}>
                  <span className={classNames(styles[type], { [styles.highlight]: highlight })}>
                    {text}
                  </span>
                </code>
              )
            }
          </pre>
        </div>
      </div>
    );
  }
}
