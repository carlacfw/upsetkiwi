export default function(state=[], action) {
  switch (action.type) {
    case 'RECEIVE_COMPANIES':
      return [...action.companies]
      break;
      case 'ADD_COMPANY':
      return [...state, action.company]
      break;
      case 'ADD_COMPLAINT':
      return [...state, action.complaint]
    default:
    return state

  }
}
