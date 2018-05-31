import Block from './Block'
export default class Blockchain<T> {
  public chain: Block<T>[];
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data: T) {
    const lastBlock = this.chain[this.chain.length - 1]
    const block = Block.mineBlock(lastBlock, data)
    this.chain.push(block)
    return block
  }

  isValidChain(chain: Block<T>[]) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      return false
    }

    for (let i = 1; i < chain.length; i++) {
      const current = chain[i];
      const lastBlock = chain[i - 1]

      if (current.lasthash !== lastBlock.hash || Block.blockHash(current)) {
        return false
      }

      return truecod
    }
  }
}