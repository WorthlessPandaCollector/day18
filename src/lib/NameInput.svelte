<!-- 5) Create a new component, NameInput.svelte. 
    This component should have a text input that, when 
    you type in it, it changes the value of name variable. 
    This componetn should also have a header tag where 
    the name variable is displayed. So, as you type in the 
    input, the name displayed to the page in the header 
    changes! -->


<script lang="ts">

import { name, greeting } from '../storaaaaage/stores'
let firstClick = true;
</script>


<input bind:value={$name}>

<p>{$greeting}</p>