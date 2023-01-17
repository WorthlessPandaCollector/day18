<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
  const alerts = () => {
    alert("ahhh")
  }
</script>

<button on:click={increment}>
  count is {count}
</button>

<button on:click={alerts}>alert
</button>

