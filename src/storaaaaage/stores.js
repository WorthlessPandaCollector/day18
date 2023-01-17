import { writable, derived, readable } from 'svelte/store'

export const name = writable('lamewad');

export const greeting = derived(name, $name => `Hello ${$name}!`)