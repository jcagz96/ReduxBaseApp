export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}

export const decrement = (nr) => {
    return {
        type: 'DECREMENT',
        payload: nr
    }
}

export const login = () => {
    return {
        type: 'SIGNIN'
    }
}
export const logout = () => {
    return {
        type: 'SIGNOUT'
    }
}

export const add = (elemento) => {
    return {
        type: 'ADICIONAR',
        payload: elemento
    }
}

export const remove = (elemento) => {
    return {
        type: 'REMOVER',
        payload: elemento
    }
}