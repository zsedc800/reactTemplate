function counter (count = 0, action) {
  switch (action.type) {
    case 'increase':
      return count + 1
    case 'descrease':
      return count - 1
    default: break
  }
  return count
}

export default function (state = {}, action) {
  return {
    count: counter(state.count, action)
  }
}