import { SHA256 } from 'crypto-js'
export default class Block<T> {
    public timestamp: number;
    public lasthash: string;
    public hash: string;
    public data: T;

    constructor(timestamp: number, lastHash: string, hash: string, data: T) {
        this.timestamp = timestamp
        this.hash = hash;
        this.lasthash = lastHash;
        this.data = data;
    }

    toString() { 
        return `Block --
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lasthash.substring(0,10)}
            Hash: ${this.hash.substring(0, 10)}
            Data: ${this.data}
        `
    }

    static blockHash<T>({ timestamp, lasthash, data}: Block<T>) {
        return Block.hash(timestamp, lasthash, data)
    }
    static genesis<T>() {
        return new Block<T>(0, '----', 'fr2dk3k3i', [] as any)
    }

    static mineBlock<T>({ hash: lastHash }: Block<T>, data: T) {
        const timeStamp = Date.now()
        const hash = Block.hash<T>(timeStamp, lastHash, data)
        return new Block(timeStamp, lastHash, hash, data)
    }

    static hash<T>(timestamp: number, lastHash: string, data: T) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString()
    }
}
