import React, { PureComponent } from 'react';
import Prism from 'prismjs';

export type CodehighlighterProps = {
  className?: string,
  language: string,
  plugins?: {
    title: string,
    func: Function,
  },
  children: any
};

export class Codehighlighter extends PureComponent {
  props: CodehighlighterProps;
  prismNode: any;

  componentDidMount() {
    this.hightlight();
  }

  componentDidUpdate() {
    this.hightlight();
  }

  hightlight() {
    Prism.highlightElement(this.prismNode, this.props.async);
    if (this.props.plugins) {
      this.props.plugins.map((plugin) => plugin.func(Prism));
    }
  }

  render () {
    return (
      <pre className={(this.props.plugins) ? this.props.plugins.map((plugin) => plugin.title).join(" ") : 'codehighlighter'}
           data-line={this.props.dataLine || ''}
           data-dependecies={this.props.dataDependecies || ''}
           data-user={this.props.dataUser || ''}
           data-host={this.props.dataHost || ''}
           data-prompt={this.props.dataPrompt || ''}
           data-output={this.props.dataOutput || ''} >
        <code
          ref={(prismNode) => this.prismNode = prismNode}
          className={`language-${this.props.language}`}
        >
          {this.props.children}
        </code>
      </pre>

    );
  }
}
