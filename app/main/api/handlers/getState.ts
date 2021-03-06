import { asObject } from "app/common/runtimeTypes"
import { AppStateS } from "app/main/system"
import { AppState } from "app/common/runtimeTypes/ipc/state"

/**
 * AppInfo handler
 */
async function getState(system: AppStateS, params: any) {
  return asObject(system.appStateManager.state, AppState)
}

export default getState
