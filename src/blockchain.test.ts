import Blockchain from './Blockchain';
import Block from './Block'

describe('Blockchain', () => {
    let bc: Blockchain<any>;
    beforeEach(() => {
      bc = new Blockchain()
    })

    it('start with genesis block', () => {
      expect(bc.chain[0]).toEqual(Block.genesis())
    })

    it('adds a new block', () => {
      const data = 'foo';
      bc.addBlock(data)

      expect(bc.chain[bc.chain.length - 1].data).toEqual(data)
    })
})