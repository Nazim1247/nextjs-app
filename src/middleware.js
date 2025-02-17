import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export const middleware = async (req) =>{
    // const dummyUserData = {
    //     role: 'user',
    //     email: 'test@email.com'
    // }
    // let isServicesPage = request.nextUrl.pathname.startsWith('/services')
    // let isAdmin = dummyUserData.role=='admin'

    // if(isServicesPage && !isAdmin){
    //     return NextResponse.rewrite(new URL('/login',request.url))
    // } 

    const token = await getToken({req});
    const isToken = Boolean(token);
    const isAdminUser = token?.role == 'admin'
    const isAdminSpecificRoute = req.nextUrl.pathname.startsWith('/products/add')
    if(isAdminSpecificRoute && !isAdminUser){
        return NextResponse.redirect(new URL('/api/auth/signin',req.url))
    }
  return NextResponse.next()
}
 