function delay(wait) {
    return new Promise((resolve) => setTimeout(resolve, wait || 1000))
  }