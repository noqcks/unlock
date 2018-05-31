import { setTransaction, SET_TRANSACTION, updateTransaction, UPDATE_TRANSACTION } from '../../actions/transaction'

describe('transaction actions', () => {

  it('should create an action to set the transaction', () => {
    const transaction = {

    }
    const expectedAction = {
      type: SET_TRANSACTION,
      transaction,
    }
    expect(setTransaction(transaction)).toEqual(expectedAction)
  })

  it('should create an action to update the transaction', () => {
    const transaction = {

    }
    const expectedAction = {
      type: UPDATE_TRANSACTION,
      transaction,
    }
    expect(updateTransaction(transaction)).toEqual(expectedAction)
  })

})
