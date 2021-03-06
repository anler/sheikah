import * as React from "react"

import Popover from "app/renderer/ui/components/popover"

const styles = require("./style.scss")

export interface Iprops {
  className?: string
  title?: string
  caption?: string
  actions?: Array<(string | { text: any; onClick: any })>
  contentClassName?: string
}

/**
 * Wrapper UI component
 *
 * @export
 * @class Wrapper
 * @extends {React.Component<Iprops>}
 */

export default class Wrapper extends React.Component<Iprops> {

  // tslint:disable-next-line: completed-docs
  public render() {
    const actions = !!this.props.actions
      // ? (<div className={styles.actions}></div>)
      ? (<Popover className={styles.actions} dataSource={this.props.actions} />)
      : ""

    return (
      <div className={`${styles.layout} ${this.props.className}`}>
        <div className={styles.header}>
          <p className={styles.title}>{this.props.title}</p>
          <p className={styles.caption}>{this.props.caption}</p>
          {actions}
        </div>
        <div className={`${styles.content} ${this.props.contentClassName}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}