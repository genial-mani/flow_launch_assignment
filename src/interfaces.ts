export interface projectInterface{
    src: string,
    title: string,
    desc: string,
    techStack: {name: string, icon: string}[],
    liveLink: string,
    githubLink: string, 
}

export interface educationInterface{
    website: string,
    photo: string,
    institution: string,
    program: string,
    year: string,
    description: string[],
}

export interface skillInterface{
    name: string,
    icon: string,
}

export interface workInterface{
    company: string,
    position: string,
    duration: string,
    desc: string,
    techStack: {name: string, icon: string}[],
}

export interface certificateInterface{
    img: string,
    title: string,
    subtitle: string,
}