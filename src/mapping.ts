import { CrossChainTransfer } from '../generated/Sashimi/CrossChain'
import { CrossChainTransferEvent } from '../generated/schema'

export function handleCrossChainTransfer(event: CrossChainTransfer): void{
  let id = event.transaction.hash.toHexString()
  let transferEvent = new CrossChainTransferEvent(id)
  transferEvent.from = event.params.from
  transferEvent.to = event.params.targetAddress
  transferEvent.token = event.params.token
  transferEvent.amount = event.params.amount
  transferEvent.fee = event.params.fee
  transferEvent.targetChain = event.params.chain
  transferEvent.transactionId = event.transaction.hash
  transferEvent.blockNumber = event.block.number
  transferEvent.blockHash = event.block.hash
  transferEvent.save()
}
