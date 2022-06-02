import { ACTIONS } from '../containers/Calculator'

export default function OperationButton({ dispatch, operation }) {
    return (
        <button className='operation-button' onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>{operation}</button>
    )
}