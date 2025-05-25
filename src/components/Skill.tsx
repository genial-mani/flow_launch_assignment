import { skillInterface } from "@/interfaces"
import { Icon } from "@iconify/react/dist/iconify.js"

const Skill = ({skill}: {skill: skillInterface}) => {
  return (
    <div className="w-fit h-fit px-2 sm:px-5 py-2 rounded-lg border-2 border-purple-800 flex items-center gap-2">
        <div className="size-5 sm:size-8"><Icon icon={skill?.icon} width="sm:30px" height="sm:30px"/></div>
        <p className="text-sm md:text-[18px]">{skill?.name}</p>
    </div>
  )
}

export default Skill