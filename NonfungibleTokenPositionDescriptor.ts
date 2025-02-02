import { Docker } from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/Docker@0.0.2/mod.ts'
import * as Solc from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/solc@0.0.8/mod.ts'

const rawCompilationResults = await Docker.exec('bradthomasbrown/nonfungibletokenpositiondescriptor:1.0')
const compilationResults = Solc.schemas.solcCompilationOutput.parse(JSON.parse(rawCompilationResults))
const bytecode = compilationResults.contracts!['NonfungibleTokenPositionDescriptor.sol']!['NonfungibleTokenPositionDescriptor']!.evm!.bytecode!.object!
export const NonfungibleTokenPositionDescriptor = {
    bytecode: (nftDescriptorAddress:string) => bytecode.replace(/__\$88153e50d1a910aee6c4ab4932e1a7f343\$__/, nftDescriptorAddress.slice(2))
}