export const capitialize = (str) => {
    return str[0].toUpperCase() + str.substring(1)
}

export const trunctcate = (str, limit) => {
    return str.slice(0, limit) + '...'
}