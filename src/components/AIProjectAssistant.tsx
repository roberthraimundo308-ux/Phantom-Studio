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
    <section className="py-20 px-6 md:px-[52px] bg-s1 border-y border-border">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h3 className="font-headline text-4xl mb-4 flex items-center gap-3">
              <Sparkles className="text-accent w-6 h-6" />
              AI ASSISTANT
            </h3>
            <p className="font-mono text-xs text-muted mb-8 tracking-wider">
              FERRAMENTA PARA GERAÇÃO DE CASE STUDIES E DESCRIÇÕES CRIATIVAS.
            </p>
            
            <form onSubmit={handleGenerate} className="flex flex-col gap-4">
              <input
                required
                placeholder="NOME DO PROJETO"
                className="bg-transparent border border-white/10 p-4 font-mono text-[10px] tracking-widest text-foreground focus:border-accent outline-none"
                value={formData.projectName}
                onChange={e => setOutputFormData({...formData, projectName: e.target.value})}
              />
              <input
                required
                placeholder="CLIENTE"
                className="bg-transparent border border-white/10 p-4 font-mono text-[10px] tracking-widest text-foreground focus:border-accent outline-none"
                value={formData.client}
                onChange={e => setOutputFormData({...formData, client: e.target.value})}
              />
              <textarea
                required
                rows={4}
                placeholder="BREVE DESCRIÇÃO OU OBJETIVO DO PROJETO..."
                className="bg-transparent border border-white/10 p-4 font-mono text-[10px] tracking-widest text-foreground focus:border-accent outline-none resize-none"
                value={formData.brief}
                onChange={e => setOutputFormData({...formData, brief: e.target.value})}
              />
              <button 
                disabled={loading}
                className="bg-accent text-black font-mono text-[10px] tracking-[0.2em] uppercase py-4 flex items-center justify-center gap-3 hover:bg-white transition-colors"
              >
                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Send className="w-4 h-4" />}
                GERAR DESCRIÇÃO
              </button>
            </form>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex-1 border border-white/10 p-6 font-mono text-[11px] leading-relaxed text-muted min-h-[300px] bg-black/30 relative">
              {output ? (
                <div className="animate-in fade-in duration-700">{output}</div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/5 uppercase tracking-[0.3em] font-headline text-2xl">
                  Aguardando Input...
                </div>
              )}
            </div>
            {output && (
              <button 
                onClick={() => { navigator.clipboard.writeText(output); alert("Copiado!"); }}
                className="mt-4 self-end font-mono text-[9px] text-accent tracking-widest"
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
