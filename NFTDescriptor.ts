import { Docker } from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/Docker@0.0.2/mod.ts'
import * as Solc from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/solc@0.0.8/mod.ts'

const rawCompilationResults = await Docker.exec('bradthomasbrown/nftdescriptor:1.0')
const compilationResults = Solc.schemas.solcCompilationOutput.parse(JSON.parse(rawCompilationResults))
const bytecode = compilationResults.contracts!['NFTDescriptor.sol']!['NFTDescriptor']!.evm!.bytecode!.object!
export const NFTDescriptor = { bytecode }