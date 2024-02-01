import { NextResponse } from "next/server"
import prisma from "@/utils/connect";


//GET SINGLE POST
export const GET = async(req,{params})=>{
   const {slug}=params;
   try{
    const post=await prisma.post.update(
        {
            where:{ slug },
            data:{ views :{increment :1}},
            include:{user:true},
        });
        return new NextResponse(
        JSON.stringify(post, { status:200 } ));
    }
    catch(err){
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message:"Something went wrong!" },{ status:500 }));
    }
};
// //CREATE A POST
// export const POST = async(req)=>{
//     const session = await getAuthSession();
//     if(!session){
//         return new NextResponse(
//             JSON.stringify({ message:"Not Authenticated!" },{ status:401 }));
//     }
//    try{
//    const body = await req.json()
//    const post = await prisma.post.create(
//          {
//             data:{...body,userEmail:session.user.email },
//          });
//          return new NextResponse(
//          JSON.stringify(comment, { status:200 } ));
//      }
//      catch(err){
//          console.log(err);
//          return new NextResponse(
//              JSON.stringify({ message:"Something went wrong!" },{ status:500 }));
//      }
//  };