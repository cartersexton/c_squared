<script>
  // Initialize the agent on page load.
  const fpPromise = import('https://fpjscdn.net/v3/53a9cG4JNZZw2JZgjKtM')
    .then(FingerprintJS => FingerprintJS.load())

  // Get the visitorId when you need it.
  fpPromise
    .then(fp => fp.get())
    .then(result => {
      const visitorId = result.visitorId
      console.log(visitorId)
    })
</script>