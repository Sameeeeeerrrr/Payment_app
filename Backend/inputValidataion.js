const zod = require("zod")

const signupSchema = zod.object({
    firstname: zod.string(),
    lastname: zod.string(),
    username: zod.string(),
    password: zod.string()
})

const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string()
})

const updateSchema = zod.object({
    username: zod.string().optional(),
    password: zod.string().optional(),
    email:zod.string().email().optional()
})

module.exports = { signinSchema, signupSchema , updateSchema}