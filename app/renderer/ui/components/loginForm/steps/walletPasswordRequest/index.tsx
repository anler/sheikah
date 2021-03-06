import * as React from "react"

import { AlertMessage } from "app/renderer/ui/components/alert"
import { ButtonNavigation } from "app/renderer/ui/components/button"
import { InputDefault } from "app/renderer/ui/components/input"

const styles = require("./style.scss")

export interface Iprops {
  className?: any
  prevStep: () => void
  nextStep: (password: string) => void
  errorMessage?: string
}

/**
 * UI component prompting the user to set a wallet encryption password
 *
 * @export
 * @class WalletPasswordRequest
 * @extends {React.Component<Iprops>}
 */
export default class WalletPasswordRequest extends React.Component<Iprops> {
  /**
   * Local state to hold password
   * @type {{password: string}}
   */
  public state = {
    password: ""
  }

  /**
   * Method to store password in the local state
   * @param {React.FormEvent} event
   */
  private handlePassword = (event: React.FormEvent) => {
    this.setState({ password: (event.target as any).value })
  }

  /**
   * Method to move to the next step
   */
  private nextStep = () => { this.props.nextStep(this.state.password) }

  /**
   * Method to move to previous step
   */
  private prevStep = () => { this.props.prevStep() }

  /** render */
  // tslint:disable-next-line:prefer-function-over-method
  public render() {
    return (
      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.text}>
            Please type here the password to unlock your wallet:
          </p>
          <InputDefault
            className={styles.input}
            type="password"
            onBlur={this.handlePassword}
          />
          <AlertMessage
            className={styles.error}
            type="error"
            title="Error"
            description={this.props.errorMessage}
          />
        </div>
        <div className={styles.navigation}>
          <ButtonNavigation
            text="Cancel"
            onClick={this.prevStep}
          />
          <ButtonNavigation
            text="Unlock"
            onClick={this.nextStep}
          />
        </div>
      </div>
    )
  }
}