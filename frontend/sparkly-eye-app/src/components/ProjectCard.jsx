export const ProjectCard = ({ title, status, description, tech }) => (
    <div className="group bg-black/80 p-2 flex flex-col justify-between transition-opacity hover:bg-black ">
        <div className="min-h-[50px] mb-4">
            <div className="flex justify-between items-start">
                <h3 className="text-white text-2xl font-black uppercase tracking-tighter leading-[1.0] max-w-[min-content] break-words group-hover:text-cyan-400 transition-colors">
                    {title}
                </h3>
            </div>
        </div>
    
        <div className="flex-1">
            <p className="font-mono text-[14px] leading-relaxed text-white/90 group-hover:text-white transition-colors">
                {description}
            </p>
        </div>

        <div className="pt-2">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
            {tech.map(t => (
            <span key={t} className="font-mono text-[12px] text-cyan-400/90 hover:text-cyan-400 transition-colors">#{t}</span>
            ))}
            </div>
        </div>
    </div>
);