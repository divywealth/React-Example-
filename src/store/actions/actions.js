
export const ADDTODO = (payload) => {
    return {
        type: 'ADDTODO', 
        payload: payload
    }
}

export const DELETE_TODO = (payload) => {
    return {
      type: 'DELETE_TODO', 
      payload: payload
    }
}

export const JUST_TEST = () => {
    return {
      type: 'JUST_TEST',
      payload: 'How are you doing'
    }
}

export const ALLOW_LOGIN = () => {
    return {
        type: 'ALLOW_LOGIN',
        payload: 'hey'
    }
}