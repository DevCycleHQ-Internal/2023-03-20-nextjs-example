import { DVCClient, initialize } from '@devcycle/nodejs-server-sdk'

const sdkKey = process.env.DEVCYCLE_SERVER_SDK_KEY as string

const globalForDVC = global as unknown as {
  dvcClient: DVCClient | undefined
}


const getDVCClient = async () => {
  if (!globalForDVC.dvcClient) {
    const dvcClient = await initialize(sdkKey).onClientInitialized()
    globalForDVC.dvcClient = dvcClient
  }
  return globalForDVC.dvcClient
}

export default getDVCClient
