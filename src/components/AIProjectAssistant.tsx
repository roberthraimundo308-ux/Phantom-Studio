
"use client";

import React, { useState } from "react";
import { generateProjectDescription } from "@/ai/flows/generate-project-description";
import { Sparkles, Loader2 } from "lucide-react";

export default function AIProjectAssistant() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [formData, setOutputFormData] = useState({
    projectName: "",
    projectType: "Website",
    client: "",
    brief: ""
  });

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await generateProjectDescription({
        ...formData,
        servicesProvided: ["UI/UX Design", "Development"],
        technologiesUsed: ["Next.js", "Tailwind CSS"],
        keywords: ["Modern", "High Performance", "Minimalist"]
      });
      setOutput(result.description);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 md:px-[180px] bg-[#EDE8DE] text-[#050505] border-t border-black/5">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Padronizado (Tema Claro) */}
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-black/10 pb-7 mb-20 gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-black/40 uppercase flex items-center gap-3 before:content-['04'] before:text-black/20">
            FERRAMENTA EXCLUSIVA
          </span>
          <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-black uppercase">ASSISTENTE AI</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex-1">
            <h3 className="font-headline text-3xl mb-10 flex items-center gap-4">
              <Sparkles className="text-[#050505] w-6 h-6" />
              GERADOR DE CASE STUDIES
            </h3>
            
            <form onSubmit={handleGenerate} className="flex flex-col gap-5">
              <input
                required
                placeholder="NOME DO PROJETO"
                className="bg-transparent border border-black/10 p-5 font-mono text-[10px] tracking-widest text-[#050505] focus:border-black outline-none placeholder:text-black/30 rounded-none transition-colors"
                value={formData.projectName}
                onChange={e => setOutputFormData({...formData, projectName: e.target.value})}
              />
              <input
                required
                placeholder="CLIENTE"
                className="bg-transparent border border-black/10 p-5 font-mono text-[10px] tracking-widest text-[#050505] focus:border-black outline-none placeholder:text-black/30 rounded-none transition-colors"
                value={formData.client}
                onChange={e => setOutputFormData({...formData, client: e.target.value})}
              />
              <textarea
                required
                rows={4}
                placeholder="BREVE DESCRIÇÃO OU OBJETIVO DO PROJETO..."
                className="bg-transparent border border-black/10 p-5 font-mono text-[10px] tracking-widest text-[#050505] focus:border-black outline-none resize-none placeholder:text-black/30 rounded-none transition-colors"
                value={formData.brief}
                onChange={e => setOutputFormData({...formData, brief: e.target.value})}
              />
              <button 
                disabled={loading}
                className="inline-flex items-center justify-center bg-black text-white font-mono text-[10px] tracking-[0.22em] uppercase px-5 py-3 gap-2 transition-all duration-300 group hover:gap-4 hover:bg-accent hover:text-black"
              >
                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : null}
                <span className="relative">GERAR AGORA</span>
                <span className="relative transition-all group-hover:translate-x-1">→</span>
              </button>
            </form>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex-1 border border-black/10 p-10 font-mono text-[12px] leading-[1.8] text-black/70 min-h-[400px] bg-white/40 relative backdrop-blur-sm rounded-none">
              {output ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">{output}</div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-black/5 uppercase tracking-[0.4em] font-headline text-3xl text-center px-10">
                  Aguardando Briefing...
                </div>
              )}
            </div>
            {output && (
              <button 
                onClick={() => { navigator.clipboard.writeText(output); }}
                className="mt-6 self-end font-mono text-[10px] text-black/40 tracking-widest hover:text-accent transition-colors"
              >
                [ COPIAR TEXTO ]
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
