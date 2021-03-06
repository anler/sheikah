import * as React from "react"
import Wrapper from "app/renderer/ui/components/wrapper"

const styles = require("./style.scss")

export interface BalanceProps {
  className?: string
  availableBalance?: string
  timelocked?: string
  unconfirmed?: string
  total?: string
}

/**
 * Wallet UI component
 *
 * @export
 * @class Wallet
 * @extends {React.Component<BalanceProps>}
 */

export default class Balances extends React.Component<BalanceProps> {
  // tslint:disable-next-line: completed-docs
  public render() {
    return (
      <Wrapper
        title="BALANCES"
        contentClassName={styles.balances}
        className={`${this.props.className}`}
      >
        <div className={styles.line}>
          <p className={styles.text}>Available balance</p>
          <p>{this.props.availableBalance} <span className={styles.wit}>WIT</span></p>
        </div>
        <div className={styles.line}>
          <p className={styles.text}>Timelocked</p>
          <p>{this.props.timelocked} <span className={styles.wit}>WIT</span></p>
        </div>
        <div className={styles.line}>
          <p className={styles.text}>Unconfirmed</p>
          <p>{this.props.unconfirmed} <span className={styles.wit}>WIT</span></p>
        </div>
        <div className={styles.line}>
          <p className={styles.text}>Total</p>
          <p>{this.props.total} <span className={styles.wit}>WIT</span></p>
        </div>
      </Wrapper>
    )
  }
}