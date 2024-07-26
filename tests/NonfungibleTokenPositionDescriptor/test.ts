import { assert } from "https://deno.land/std@0.224.0/assert/assert.ts";
import { NonfungibleTokenPositionDescriptor } from "../../NonfungibleTokenPositionDescriptor.ts";

Deno.test('NonfungibleTokenPositionDescriptor object and properties test', () => {
    assert(NonfungibleTokenPositionDescriptor && NonfungibleTokenPositionDescriptor.bytecode(''.padEnd(40, 'A')))
    console.log(NonfungibleTokenPositionDescriptor.bytecode(''.padEnd(40, 'A')))
})