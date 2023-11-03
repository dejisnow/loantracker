//middleware denies users entry into certin parts of our appwhen signed out
export {default} from 'next-auth/middleware'

export const config ={matcher:['/dashboard']}
