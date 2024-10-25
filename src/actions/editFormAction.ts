"use server"

import  prisma  from "@/lib/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function editProjectForm(formData: FormData, id:string) {
    // auth check
    const { isAuthenticated } = getKindeServerSession()
    if(!(await isAuthenticated())){
        redirect("/api/auth/login")
    }
    
    const title =formData.get("title") as string
    const slug =(formData.get("slug") as string).replace(/\s+/g,"-").toLowerCase()
    const short =formData.get("short") as string
    const techs =formData.get("techs") as string
    const imagelink =formData.get("imagelink") as string
    const githublink =formData.get("githublink") as string
    const demolink =formData.get("demolink") as string
    const description =formData.get("description") as string
        
    await prisma.project.updateMany({
        where: { id },
        data: {
            title,
            slug,
            short,
            techs,
            description,
            imagelink,
            githublink,
            demolink
        }
    });

    revalidatePath("/projects")
}