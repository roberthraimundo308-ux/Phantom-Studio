"use client";

import React, { useState } from "react";
import { generateProjectDescription } from "@/ai/flows/generate-project-description";
import { Sparkles, Loader2, Send } from "lucide-react";

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
        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex-1">
            <h3 className="font-headline text-5xl mb-6 flex items-center gap-4">
              <Sparkles className="text-[#050505] w-8 h-8" />
              ASSISTENTE AI
            </h3>
            <p className="font-mono text-[11px] text-black/50 mb-12 tracking-[0.2em] uppercase leading-relaxed">
              FERRAMENTA EXCLUSIVA PARA GERAÇÃO DE CASE STUDIES E DESCRIÇÕES CRIATIVAS DE PROJETOS.
            </p>
            
            <form onSubmit={handleGenerate} className="flex flex-col gap-5">
              <input
                required
                placeholder="NOME DO PROJETO"
                className="bg-transparent border border-black/10 p-5 font-mono text-[10px] tracking-widest text-[#050505] focus:border-black outline-none placeholder:text-black/30 rounded-none"
                value={formData.projectName}
                onChange={e => setOutputFormData({...formData, projectName: e.target.value})}
              />
              <input
                required
                placeholder="CLIENTE"
                className="bg-transparent border border-black/10 p-5 font-mono text-[10px] tracking-widest text-[#050505] focus:border-black outline-none placeholder:text-black/30 rounded-none"
                value={formData.client}
                onChange={e => setOutputFormData({...formData, client: e.target.value})}
              />
              <textarea
                required
                rows={4}
                placeholder="BREVE DESCRIÇÃO OU OBJETIVO DO PROJETO..."
                className="bg-transparent border border-black/10 p-5 font-mono text-[10px] tracking-widest text-[#050505] focus:border-black outline-none resize-none placeholder:text-black/30 rounded-none"
                value={formData.brief}
                onChange={e => setOutputFormData({...formData, brief: e.target.value})}
              />
              <button 
                disabled={loading}
                className="bg-[#050505] text-white font-mono text-[10px] tracking-[0.2em] uppercase py-5 flex items-center justify-center gap-3 hover:bg-black/80 transition-all rounded-none"
              >
                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Send className="w-4 h-4" />}
                GERAR CASE STUDY
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
                className="mt-6 self-end font-mono text-[10px] text-black/40 tracking-widest hover:text-black transition-colors"
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