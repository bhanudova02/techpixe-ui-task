export function ProjectFloorPlan() {
    return (
        <div className="py-4 px-6 md:px-8 mt-10 ">
            <div>
                <div className="text-center space-y-2">
                    <h2 className="text-[#3D52A1] font-bold text-[28px] md:text-[38px]">
                        PROJECT FLOOR PLAN
                    </h2>
                    <p className="px-2 md:px-10">
                        Figma component variant layer. Arrow invite group slice. Shadow layout comment link vector. Follower slice list object font stroke. Duplicate inspect device text distribute polygon.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-16">
                <div>
                    <img src="./project_plan_1.png" width={100} height={100} alt="project" className="w-full h-full"/>
                </div>
               <div>
                    <img src="./project_plan_2.png" width={100} height={100} alt="project" className="w-full h-full md:h-[85%]"/>
                </div>
                <div>
                    <img src="./project_plan_3.png" width={100} height={100} alt="project" className="w-full h-full"/>
                </div>
                <div>
                    <img src="./project_plan_4.png" width={100} height={100} alt="project" className="w-full h-full md:h-[115%] mt-0 md:-mt-10 lg:-mt-16"/>
                </div>
            </div>
        </div>
    )
}