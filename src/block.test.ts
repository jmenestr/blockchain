import Block from './Block'

describe('Block', () => {
    let data: any, lastBlock: Block<any>, block: Block<any>;
    beforeEach(() => {
        data = 'bar'
        lastBlock = Block.genesis();
        block = Block.mineBlock<any>(lastBlock, data);
    })
    it('sets the `data` to match the given input', () => {
        expect(block.data).toEqual(data)
    })

    it('sets the `lastHash` to match the hash of the last block', () => {
        expect(block.lasthash).toEqual(lastBlock.hash)
    })
})