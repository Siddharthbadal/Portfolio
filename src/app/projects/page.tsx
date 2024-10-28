
import Loader from "@/components/Loader";
import ProjectsList from "@/components/Projects-List";
import Link from "next/link";
import {  Suspense } from "react";

export const metadata = {
  title: "Projects | Siddharth",
  description: "I am a freelacer developer. work with python, javascript and sql. these are my projects.",
};


export default async function Projects() {
  

    return (                         

      <main className="text-center px-5">
        <h1 className="text-gray-700 text-2xl font-semibold mt-6">Projects</h1>
        
      <div className="mt-2 ">
          <Suspense fallback={<Loader  />}>
              <ProjectsList />
          </Suspense>
      </div>
                    
    </main>
      
    );
  }
  