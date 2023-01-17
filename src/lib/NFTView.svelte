<!-- 6) Create a new component, NFTView.svelte. 
This component should declare a type, NFT, with name and 
description string properties, and initialize an empty array 
of that type, nfts.
Using the onMount function from svelte,  
set an interval to push a new NFT object to that array, 
and then set nfts = nfts at the end of the interval. 
(this is because the variable needs to be re-assigned 
for it to be reactive to the page! -->



<script lang="ts">
import { onMount } from "svelte";
import Box from './Box.svelte'


type NFT = {
    imageURL: string;
    name: string;
    currentOwnerAddress: string;
    openSeaFloorPrice: number;
    description: string;
}

let nfts: NFT[] = []
const nounPhunks: NFT = {
    imageURL: "https://nounphunks.cool",
    name: "nounphunk #9696",
    currentOwnerAddress: "0x2349529347672934572349752890378452358324908534",
    openSeaFloorPrice: 69,
    description: "well isn't that special"
}

const rektguy: NFT = {
    imageURL: "https://poortoby.io",
    name: "tobys stupid cheap rekt guy #696966996",
    currentOwnerAddress: "tobyGMINGMI.eth",
    openSeaFloorPrice: 1.68,
    description: "SAD"
}

const eggGuy: NFT = {
    imageURL: "ipfs://asdlfaji.io.io.io.io",
    name: "duke has lots of money $420milion",
    currentOwnerAddress: "duke.eth",
    openSeaFloorPrice: 420,
    description: "take on me video but with potato or egg or w/e i dunno"
}

const nftArray: NFT[] = [nounPhunks, rektguy, eggGuy]
onMount(() => {
    const interval = setInterval(() => {
    nfts.push(...nftArray);
    nfts = nfts;
    }, 1000)


}
)
</script>


<h2>

    {#each nfts as nft}
    <Box> 
    {nft.name}<br>
    {nft.description}<br>
    {nft.openSeaFloorPrice}
    {nft.currentOwnerAddress}
    </Box>
    {/each}
    <Box/>


</h2>
