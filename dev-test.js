const Block = require('./build/Block').default;

const fooBlock = Block.mineBlock(Block.genesis(), 'foo')
console.log(fooBlock)