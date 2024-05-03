export const EMAIL = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
// checks if the email is correct. It must contain any symbols as the
// name of email, @ sign and domain, dot and TLD (com, by...)

export const FAVOURITES = /^[а-яА-Яa-zA-Z0-9, ]+$/
// checks if the favorites string contain only russian or english symbols, numbers, comma and spaces

export const TAGS = /^[а-яА-Яa-zA-Z0-9,]+$/
// checks if the tags string contain only russian or english symbols, numbers and comma
