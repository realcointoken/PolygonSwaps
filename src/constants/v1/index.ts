import { Interface } from '@ethersproject/abi'
import { ChainId } from 'sdkv2'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x8db97c7cece249c2b98bdc0226cc4c2a57bf52fc', //TODO
  [ChainId.BSCTESTNET]: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff'
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
