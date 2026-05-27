import React from "react";
import { motion } from "framer-motion";
import { Check, CheckCircle2, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import couplePhoto from "@assets/ChatGPT_Image_27_de_mai._de_2026,_10_49_44_1779898371334.png";
import mapaImage from "@assets/ChatGPT_Image_26_de_mai._de_2026,_21_24_48_1779898414695.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SalesPage() {
  const goToCheckout = () => {
    window.open("https://hooponoponodojeitocerto.com.br/tribo", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* 1. HERO */}
      <section className="relative pt-24 pb-32 px-6 md:px-12 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-background to-background"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto space-y-8"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary leading-tight">
            Você Não Está Falhando na Comida.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Está Apenas Presa em um Automático Emocional Que Faz Você Repetir Ansiedade, Culpa e Autossabotagem Todos os Dias.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubra como o Ho'oponopono do Jeito Certo ajuda mulheres emocionalmente cansadas a reduzirem o ruído emocional, recuperarem clareza e começarem a emagrecer sem viver em guerra consigo mesmas.
          </motion.p>
          <motion.div variants={fadeInUp} className="pt-8">
            <Button 
              onClick={goToCheckout}
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base px-8 py-6 h-auto rounded-full font-semibold tracking-wide shadow-[0_0_30px_-5px_rgba(201,169,110,0.4)] hover:shadow-[0_0_40px_-5px_rgba(201,169,110,0.6)] transition-all duration-300 hover:scale-105"
            >
              QUERO SAIR DO AUTOMÁTICO EMOCIONAL
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. IDENTIFICATION (Talvez Section) */}
      <section className="py-24 px-6 md:px-12 bg-card border-y border-primary/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 text-primary">Talvez você não esteja cansada apenas da comida.</h2>
          <div className="space-y-6 text-lg md:text-xl text-foreground/90">
            <p className="font-serif italic text-2xl text-center mb-8">Talvez esteja cansada:</p>
            <motion.ul variants={staggerContainer} className="space-y-4 pl-4 border-l-2 border-primary/30">
              {[
                "da culpa depois de comer",
                "da mente acelerada mesmo quando o corpo está cansado",
                "de prometer que \"segunda-feira vai\" e voltar para o mesmo ciclo",
                "de esconder o desconforto emocional atrás de comida",
                "de sentir que perdeu o controle sobre si mesma",
                "de olhar no espelho e perceber um cansaço que não é só físico",
                "de começar animada e não conseguir manter constância",
                "de saber que algo emocional está travando sua vida"
              ].map((item, i) => (
                <motion.li key={i} variants={staggerItem} className="pl-6 relative before:content-[''] before:absolute before:left-[-5px] before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-primary">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <div className="pt-16 text-center space-y-6">
              <p className="text-muted-foreground">E no fundo… talvez o que você mais queira hoje não seja apenas emagrecer.</p>
              <p className="text-4xl md:text-5xl font-serif text-primary">Talvez você queira: paz.</p>
            </div>
            <div className="pt-12 text-center">
              <Button 
                onClick={goToCheckout}
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm md:text-base px-8 py-6 h-auto rounded-full font-semibold tracking-wide transition-all duration-300"
              >
                QUERO SAIR DO AUTOMÁTICO EMOCIONAL
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. MICRO IDENTIFICATION */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-center mb-12 text-foreground">Você sente que:</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "sua mente nunca desacelera completamente",
              "depois de um dia difícil surge uma urgência emocional por comida",
              "às vezes come sem nem perceber direito",
              "tenta se controlar o tempo inteiro… e isso cansa",
              "sente vergonha do próprio corpo",
              "evita roupas, fotos ou situações sociais",
              "vive cansada emocionalmente",
              "começa animada… mas não consegue manter constância",
              "sente que existe algo emocional travando sua vida",
              "já tentou dietas, motivação e força de vontade… mas os padrões sempre voltam"
            ].map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80 leading-snug">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. NEW BELIEF (O Problema Real) */}
      <section className="py-24 px-6 md:px-12 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center space-y-8 relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-primary">O problema não está apenas na comida.</h2>
          <h3 className="text-2xl md:text-3xl font-serif text-foreground/90 italic">Está no automático emocional por trás dela.</h3>
          
          <div className="text-lg text-muted-foreground text-left space-y-6 pt-8 max-w-2xl mx-auto">
            <p>Muitas mulheres tentam controlar apenas a alimentação, a rotina e a disciplina. Mas ignoram que emoções repetidas geram comportamentos automáticos.</p>
            <p>Quando sentimentos como ansiedade, vazio, tristeza e sobrecarga continuam ativos, o cérebro tenta aliviá-los rapidamente. E esse alívio se torna a comida.</p>
            <p>É por isso que as pessoas mudam por alguns dias, mas depois retornam aos mesmos ciclos.</p>
          </div>

          <div className="pt-12">
            <blockquote className="border-l-4 border-primary pl-6 py-2 text-left italic text-xl text-foreground/90 max-w-2xl mx-auto">
              "Hoje consigo deitar a cabeça no travesseiro sem a mente acelerada. Isso não acontecia há mais de vinte anos."
              <footer className="mt-4 text-sm font-sans text-primary not-italic">— Fátima Almeida</footer>
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* 5. RUÍDO EMOCIONAL */}
      <section className="py-24 px-6 md:px-12 bg-background border-b border-primary/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-primary">Quando existe excesso de pensamentos…</h2>
            <p className="text-xl leading-relaxed text-foreground/90">
              a mente entra em ruído emocional. E quando o ruído emocional domina: a clareza diminui, a ansiedade aumenta, o emocional pesa, o comportamento vira automático, e a autossabotagem começa a se repetir.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-card border border-primary/20 space-y-6">
            <p className="text-2xl font-serif italic text-foreground/80">"Eu sei o que deveria fazer… mas parece que algo me puxa de volta."</p>
            <div className="h-px w-12 bg-primary/50" />
            <p className="text-muted-foreground leading-relaxed">
              Na maioria das vezes, isso não é falta de força de vontade. São padrões emocionais repetitivos agindo no automático.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 6. TESTA SECTION */}
      <section className="py-24 px-6 md:px-12 bg-card">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary">Antes de rejeitar isso… testa.</motion.h2>
          
          <div className="space-y-6">
            {[
              "Testa observar suas emoções antes de comer.",
              "Testa perceber quantas vezes a ansiedade tenta buscar alívio automático.",
              "Testa aplicar a limpeza antes de agir no impulso.",
              "Testa perceber como sua mente responde quando o ruído emocional diminui."
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-6 rounded-xl bg-background border border-primary/10 flex gap-6 items-center">
                <span className="text-4xl font-serif text-primary/30 font-bold">0{i + 1}</span>
                <p className="text-lg md:text-xl text-foreground/90 font-light">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-16 p-8 text-center border border-primary/30 rounded-2xl">
            <p className="text-xl md:text-2xl font-serif italic text-foreground/90">
              Talvez você descubra que o problema nunca foi apenas a comida. Talvez exista apenas um padrão emocional repetindo silenciosamente há anos.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 7. METHOD PRESENTATION */}
      <section className="py-24 px-6 md:px-12 bg-background relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl text-muted-foreground uppercase tracking-widest mb-4">Foi por isso que criamos:</motion.h2>
          <motion.h3 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-primary mb-8">Ho'oponopono do Jeito Certo.</motion.h3>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Um método simples, prático e aplicável que ajuda você a:
          </motion.p>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {[
              "identificar pensamentos defeituosos",
              "limpar memórias emocionais repetitivas",
              "reduzir o ruído emocional",
              "acessar mais clareza",
              "sair do automático emocional",
              "agir através da ação inspirada",
              "gerar transformação prática na vida real"
            ].map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-lg text-foreground/90">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 8. HOW IT WORKS (4 Steps) */}
      <section className="py-24 px-6 md:px-12 bg-card border-y border-primary/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary">O método funciona em 4 etapas:</motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />
            
            {[
              {
                title: "Identificar o Problema",
                desc: "Descobrir o que realmente está sustentando os padrões emocionais, quais pensamentos estão se repetindo, e quais memórias emocionais continuam influenciando sua vida."
              },
              {
                title: "Limpar o Sentimento",
                desc: "Aplicar Ho'oponopono corretamente para reduzir excesso de pensamentos, ansiedade emocional, carga interna, impulsos automáticos, peso emocional silencioso."
              },
              {
                title: "Acessar o Limite Zero",
                desc: "Estado onde o ruído emocional diminui e a pessoa começa a perceber mais silêncio interno, mais clareza, mais direção, mais leveza emocional."
              },
              {
                title: "Agir Através da Ação Inspirada",
                desc: "O método não termina na limpeza — termina em mudança prática. Quando existe clareza: as decisões mudam, o comportamento muda, e a vida começa a mudar junto."
              }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeInUp} className={`p-8 rounded-2xl bg-background border border-primary/10 relative ${i % 2 !== 0 ? 'md:mt-16' : ''}`}>
                <div className="absolute top-8 right-8 text-6xl font-serif text-primary/10 font-bold">0{i + 1}</div>
                <h3 className="text-2xl font-serif text-primary mb-4 pr-12 relative z-10">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-24 pt-12 border-t border-primary/20 text-center max-w-2xl mx-auto">
            <p className="text-2xl font-serif italic text-foreground/90">"Em vez de reclamar, comecei a agradecer. O sentimento muda na hora."</p>
            <p className="mt-4 text-primary uppercase tracking-widest text-sm">— Fabiana</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 9. AUTHOR SECTION */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-primary/30 p-2">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <img src={couplePhoto} alt="Casal Ho'oponopono" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/20 rounded-2xl" />
            </div>
            <div className="absolute -inset-4 bg-primary/5 blur-2xl -z-10 rounded-full" />
          </motion.div>

          <div className="space-y-8">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif text-primary leading-tight">
              Nós também tentamos controlar apenas o lado externo.
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>Por muita tentativa e erro, percebemos que o problema era o automático emocional.</p>
              <p>Nós dois eliminamos 40kg através dos princípios que ensinamos hoje. A transformação começou de dentro para fora.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-8 border-t border-primary/20">
              <p className="text-2xl font-serif text-foreground/90 mb-2">Hoje somos conhecidos como: <span className="text-primary">Casal Ho'oponopono.</span></p>
              <p className="text-muted-foreground uppercase tracking-widest text-sm mb-6">Missão: Espalhar Ho'oponopono pelo mundo.</p>
              
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  "Mais de 45 mil livros vendidos",
                  "Mais de 3 mil alunos digitais",
                  "Treinamento especial nos EUA com Dr. Joe Vitale",
                  "Eventos realizados em 27 cidades",
                  "Comunidade ativa e engajada",
                  "Centenas de alunos acompanhados na Tribo",
                  "Milhares de vidas impactadas"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/80">
                    <Star className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 10. O MAPA PERSONALIZADO */}
      <section className="py-24 px-6 md:px-12 bg-card relative overflow-hidden border-y border-primary/20">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif text-primary leading-tight">
                O Mapa Personalizado é um dos ativos mais importantes da Tribo.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                Muitas pessoas querem mudar, mas não sabem o que limpar, por onde começar ou quais padrões emocionais estão ativos. O Mapa foi criado para trazer clareza emocional.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="font-serif text-xl italic text-foreground/90">O Mapa ajuda a identificar:</p>
                <ul className="space-y-4">
                  {[
                    "quais memórias emocionais precisam de atenção",
                    "quais áreas estão mais travadas",
                    "quais padrões estão se repetindo",
                    "e qual direção seguir dentro do processo"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-8 h-px bg-primary shrink-0" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-primary/30 bg-background/50 shadow-2xl">
                <img src={mapaImage} alt="Mapa Personalizado" className="w-full h-full object-contain p-8" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-20 p-8 rounded-2xl bg-background border border-primary/20 text-center">
            <p className="text-xl md:text-2xl font-serif italic text-foreground/90 max-w-3xl mx-auto">
              "Já pratico Ho'oponopono… mas com essas informações tô de boca aberta até agora."
            </p>
            <p className="mt-4 text-primary uppercase tracking-widest text-sm">— Maria Claudete</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 11. O QUE VOCÊ RECEBE */}
      <section id="pricing" className="py-24 px-6 md:px-12 bg-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif text-center mb-16 text-primary">
            Ao entrar para a Tribo Hooponopower você recebe:
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="bg-card border border-primary/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_-12px_rgba(201,169,110,0.1)]">
            <ul className="space-y-6">
              {[
                "Curso Completo de Ho'oponopono",
                "Método Ho'oponopono do Jeito Certo",
                "Mapa Personalizado",
                "Biblioteca Completa de Limpezas",
                "Ferramentas para: ansiedade, emocional, autoestima, prosperidade, relacionamentos, clareza, saúde emocional",
                "Comunidade Exclusiva",
                "Acompanhamento com André e Aline",
                "Conteúdos e práticas guiadas",
                "Atualizações contínuas",
                "Suporte durante 1 ano"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg md:text-xl text-foreground/90 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* 12. TESTIMONIALS / PROVAS */}
      <section className="py-24 px-6 md:px-12 bg-card border-y border-primary/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary">Pessoas reais. Transformações reais.</motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-4">
              {[
                "mulheres que voltaram a dormir em paz depois de anos",
                "pessoas que reduziram ansiedade e excesso de pensamentos",
                "alunos que destravaram áreas emocionais e financeiras",
                "mulheres que começaram a agir sem tanta autossabotagem"
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-4 rounded-lg bg-background/50 border-l-2 border-primary/40 text-foreground/80">
                  {item}
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "pessoas que recuperaram clareza e leveza emocional",
                "relacionamentos que melhoraram após a limpeza emocional",
                "pessoas que sentiram paz interna mesmo depois de anos de sofrimento emocional"
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-4 rounded-lg bg-background/50 border-l-2 border-primary/40 text-foreground/80">
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { text: "Consegui tirar coisas que estavam amontoadas há muito tempo. Foi uma vitória.", author: "Alice" },
              { text: "Em uma semana ele apareceu no Facebook.", author: "Heliani" },
              { text: "Há duas semanas encontrei uma pessoa… e estou iniciando um relacionamento sério.", author: "Ester, 67 anos" },
              { text: "Foi o melhor mês da história da empresa.", author: "Fabiana" }
            ].map((testimonial, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-8 rounded-2xl bg-background border border-primary/20 flex flex-col justify-between">
                <div className="mb-6">
                  <Star className="w-8 h-8 text-primary/40 mb-4 fill-primary/10" />
                  <p className="text-lg font-serif italic text-foreground/90 leading-relaxed">"{testimonial.text}"</p>
                </div>
                <p className="text-primary uppercase tracking-widest text-xs font-semibold">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 13. OBJECTION HANDLING */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif text-center mb-16 text-primary">O que pode estar te impedindo?</motion.h2>
          
          <motion.div variants={fadeInUp}>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Já tentei de tudo.",
                  a: "Talvez o problema nunca tenha sido apenas comportamento. Talvez exista um padrão emocional repetindo silenciosamente há anos."
                },
                {
                  q: "Eu começo animada e depois paro.",
                  a: "A Tribo foi criada justamente para ajudar você a manter clareza, ter direção, receber acompanhamento e aplicar o método no dia a dia."
                },
                {
                  q: "Isso parece abstrato.",
                  a: "Nosso foco não é espiritualidade vazia. Nosso foco é transformação prática através da correção emocional."
                },
                {
                  q: "Não tenho tempo.",
                  a: "As práticas foram desenvolvidas para serem simples, aplicáveis e possíveis dentro da rotina real."
                },
                {
                  q: "Já pratiquei Ho'oponopono antes.",
                  a: "Muitas pessoas apenas repetem frases sem entender o que limpar, como aplicar, e como transformar isso em mudança prática. É exatamente isso que o Ho'oponopono do Jeito Certo resolve."
                }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-primary/20 rounded-xl px-6 bg-card data-[state=open]:border-primary/50 transition-colors">
                  <AccordionTrigger className="hover:no-underline py-6 text-lg font-serif text-foreground/90 data-[state=open]:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </section>

      {/* 14. GARANTIA */}
      <section className="py-24 px-6 md:px-12 bg-card border-y border-primary/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-primary/5 blur-3xl pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-8 border border-primary/30">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Garantia Incondicional de 7 Dias</h2>
          <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed max-w-2xl mx-auto">
            Você pode entrar, acessar os conteúdos, conhecer a Tribo por dentro e aplicar as primeiras práticas. Se sentir que não faz sentido para você: basta solicitar o reembolso dentro de 7 dias. Sem burocracia. Sem risco.
          </p>
        </motion.div>
      </section>

      {/* 15. FINAL CTA */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-card to-background z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent z-0" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10 space-y-12"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif text-foreground leading-tight">
            Você chegou até aqui porque algo dentro de você sabe que é hora de mudar.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-2xl font-light text-primary">
            Pare de descontar emoções na comida. Comece a emagrecer de dentro para fora.
          </motion.p>
          <motion.div variants={fadeInUp} className="pt-8">
            <Button 
              onClick={goToCheckout}
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg md:text-xl px-12 py-8 h-auto rounded-full font-semibold tracking-wide shadow-[0_0_40px_-5px_rgba(201,169,110,0.5)] hover:shadow-[0_0_50px_-5px_rgba(201,169,110,0.7)] transition-all duration-300 hover:scale-105"
            >
              QUERO ENTRAR PARA A TRIBO AGORA
            </Button>
            <p className="mt-6 text-muted-foreground">Garantia de 7 dias. Sem risco.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 16. FOOTER */}
      <footer className="py-12 px-6 bg-card border-t border-primary/10 text-center text-sm text-muted-foreground">
        <div className="max-w-4xl mx-auto space-y-4">
          <p>© Tribo Hooponopower — Casal Ho'oponopono</p>
          <p>Todos os direitos reservados.</p>
          <p className="text-xs opacity-70">Resultados variam de pessoa para pessoa.</p>
        </div>
      </footer>
    </div>
  );
}