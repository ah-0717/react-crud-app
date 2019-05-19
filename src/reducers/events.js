import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // mapStateToPropsに入る
      return _.mapKeys(action.response.data, 'id');

    default:
      return events
  }
}