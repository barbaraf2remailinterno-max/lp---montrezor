"use client";

import { useState, useCallback, useEffect, useRef } from "react";

// ── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  nome: string;
  objetivo: string;
  tipologia: string;
  prazo: string;
  financiamento: string;
  faixa_investimento: string;
  telefone: string;
  email: string;
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  return value;
}

function calcScore(data: FormData): "A - Quente" | "B - Morno" | "C - Frio" {
  const hotPrazo =
    data.prazo === "Nos próximos 2 meses";
  const hotFaixa =
    data.faixa_investimento === "Acima de R$ 700 mil" ||
    data.faixa_investimento === "Entre R$ 500 e R$ 700 mil";
  if (hotPrazo && hotFaixa) return "A - Quente";
  const warmPrazo = data.prazo === "Entre 3 e 6 meses";
  const warmFaixa = data.faixa_investimento === "Entre R$ 300 e R$ 500 mil";
  if (warmPrazo || warmFaixa) return "B - Morno";
  return "C - Frio";
}

// ── Option Button ─────────────────────────────────────────────────────────────
function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full h-[52px] rounded-[10px] text-sm font-medium text-left px-4 transition-all duration-150 border ${
        selected
          ? "border-2 border-[#E8440A] bg-[#FFF3EE] text-[#E8440A] font-semibold"
          : "border-[1.5px] border-[#E2E8F0] bg-white text-[#1A1A1A] hover:border-[#E8440A50] hover:bg-[#FFF8F6]"
      }`}
    >
      {label}
    </button>
  );
}

// ── Confirmation Timer ────────────────────────────────────────────────────────
function CountdownTimer() {
  const [seconds, setSeconds] = useState(900); // 15:00

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-1 mt-6">
      <div className="bg-[#0B1E3E] text-white text-2xl font-mono font-bold px-3 py-2 rounded-lg min-w-[52px] text-center">
        {mm}
      </div>
      <span className="text-[#0B1E3E] text-2xl font-bold">:</span>
      <div className="bg-[#0B1E3E] text-white text-2xl font-mono font-bold px-3 py-2 rounded-lg min-w-[52px] text-center">
        {ss}
      </div>
    </div>
  );
}

// ── Check Icon ────────────────────────────────────────────────────────────────
function AnimatedCheck() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center"
        style={{ animation: "checkScale 0.4s ease-out forwards" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  );
}

// ── Confirmation Screen ───────────────────────────────────────────────────────
function ConfirmationScreen({ nome }: { nome: string }) {
  const firstName = nome.split(" ")[0];
  return (
    <div className="flex flex-col items-center text-center py-6">
      <AnimatedCheck />
      <h3 className="text-xl font-bold text-[#0B1E3E] mt-6 leading-snug">
        {firstName}, sua visita ao Montrezor
        <br />
        está sendo agendada!
      </h3>
      <p className="text-gray-500 text-sm mt-3 leading-relaxed">
        Um consultor Evler entrará em contato
        <br />
        <span className="font-semibold text-[#0B1E3E]">em até 15 minutos.</span>
      </p>
      <div className="mt-1">
        <p className="text-xs text-gray-400 mb-1">Contagem regressiva</p>
        <CountdownTimer />
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [animating, setAnimating] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    objetivo: "",
    tipologia: "",
    prazo: "",
    financiamento: "",
    faixa_investimento: "",
    telefone: "",
    email: "",
  });

  const totalSteps = 7;
  const firstName = formData.nome.split(" ")[0] || "";

  // ── Navigate ────────────────────────────────────────────────────────────────
  const goTo = useCallback(
    (newStep: number, dir: "forward" | "back") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setStep(newStep);
        setAnimating(false);
      }, 280);
    },
    [animating]
  );

  // ── Validate step ───────────────────────────────────────────────────────────
  function validateStep(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (step === 1) {
      if (!formData.nome || formData.nome.trim().length < 3) {
        newErrors.nome = "Por favor, informe seu nome completo (mín. 3 letras).";
      }
    }
    if (step === 7) {
      if (!formData.telefone || formData.telefone.replace(/\D/g, "").length < 10) {
        newErrors.telefone = "Informe um telefone válido.";
      }
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Informe um e-mail válido.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // ── Next step ───────────────────────────────────────────────────────────────
  async function handleNext() {
    if (!validateStep()) return;

    if (step === totalSteps) {
      await submitForm();
      return;
    }
    goTo(step + 1, "forward");
  }

  function handleBack() {
    if (step > 1) goTo(step - 1, "back");
  }

  function selectOption(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  // Seleciona opção e avança automaticamente após breve delay visual
  function selectAndAdvance(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTimeout(() => goTo(step + 1, "forward"), 280);
  }

  // ── Submit ──────────────────────────────────────────────────────────────────
  async function submitForm() {
    const score = calcScore(formData);
    const payload = {
      ...formData,
      score,
      timestamp: new Date().toISOString(),
      origem: "landing-montrezor",
    };

    try {
      const webhook = process.env.NEXT_PUBLIC_CRM_WEBHOOK;
      if (webhook) {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
    } catch (_) {
      // silently fail — show confirmation anyway
    }

    setSubmitted(true);
  }

  // ── Progress ────────────────────────────────────────────────────────────────
  const progress = Math.round((step / totalSteps) * 100);

  // ── Steps config ────────────────────────────────────────────────────────────
  const steps = {
    1: {
      question: "Qual é o seu nome completo?",
      content: (
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={formData.nome}
            onChange={(e) =>
              setFormData((p) => ({ ...p, nome: e.target.value }))
            }
            placeholder="Ex: João Silva"
            className={`w-full h-[52px] rounded-[10px] border px-4 text-sm focus:outline-none focus:border-[#E8440A] transition-colors ${
              errors.nome ? "border-red-400" : "border-[#E2E8F0]"
            }`}
            onKeyDown={(e) => e.key === "Enter" && handleNext()}
          />
          {errors.nome && (
            <p className="text-red-500 text-xs">{errors.nome}</p>
          )}
        </div>
      ),
      btnLabel: "Começar" as string | null,
      showOptions: false,
    },
    2: {
      question: `${firstName}, qual é o seu objetivo com esse imóvel?`,
      content: (
        <div className="flex flex-col gap-2.5">
          {[
            "Para moradia",
            "Para investimento",
            "Ainda estou decidindo",
          ].map((opt) => (
            <OptionButton
              key={opt}
              label={opt}
              selected={formData.objetivo === opt}
              onClick={() => selectAndAdvance("objetivo", opt)}
            />
          ))}
        </div>
      ),
      btnLabel: null,
      showOptions: true,
    },
    3: {
      question: "Qual tamanho de apartamento você busca?",
      content: (
        <div className="flex flex-col gap-2.5">
          {[
            "3 quartos",
            "2 quartos",
            "1 quarto",
          ].map((opt) => (
            <OptionButton
              key={opt}
              label={opt}
              selected={formData.tipologia === opt}
              onClick={() => selectAndAdvance("tipologia", opt)}
            />
          ))}
        </div>
      ),
      btnLabel: null,
      showOptions: true,
    },
    4: {
      question: "Qual é o seu prazo ideal para fechar negócio?",
      content: (
        <div className="flex flex-col gap-2.5">
          {[
            "Nos próximos 2 meses",
            "Entre 3 e 6 meses",
            "Ainda não sei",
          ].map((opt) => (
            <OptionButton
              key={opt}
              label={opt}
              selected={formData.prazo === opt}
              onClick={() => selectAndAdvance("prazo", opt)}
            />
          ))}
        </div>
      ),
      btnLabel: null,
      showOptions: true,
    },
    5: {
      question: "Como você pretende adquirir o imóvel?",
      content: (
        <div className="flex flex-col gap-2.5">
          {[
            "À vista ou parcial à vista",
            "Financiamento",
            "FGTS + financiamento",
            "Ainda preciso entender as opções",
          ].map((opt) => (
            <OptionButton
              key={opt}
              label={opt}
              selected={formData.financiamento === opt}
              onClick={() => selectAndAdvance("financiamento", opt)}
            />
          ))}
        </div>
      ),
      btnLabel: null,
      showOptions: true,
    },
    6: {
      question: "Qual faixa de investimento está no seu planejamento?",
      content: (
        <div className="flex flex-col gap-2.5">
          {[
            "Acima de R$ 700 mil",
            "Entre R$ 500 e R$ 700 mil",
            "Entre R$ 300 e R$ 500 mil",
            "Abaixo de R$ 300 mil",
          ].map((opt) => (
            <OptionButton
              key={opt}
              label={opt}
              selected={formData.faixa_investimento === opt}
              onClick={() => selectAndAdvance("faixa_investimento", opt)}
            />
          ))}
        </div>
      ),
      btnLabel: null,
      showOptions: true,
    },
    7: {
      question: `Perfeito, ${firstName}! Informe seus dados para contato.`,
      content: (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div>
              <input
                type="tel"
                value={formData.telefone}
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    telefone: formatPhone(e.target.value),
                  }))
                }
                placeholder="(32) 9XXXX-XXXX"
                className={`w-full h-[52px] rounded-[10px] border px-4 text-sm focus:outline-none focus:border-[#E8440A] transition-colors ${
                  errors.telefone ? "border-red-400" : "border-[#E2E8F0]"
                }`}
              />
              {errors.telefone && (
                <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, email: e.target.value }))
                }
                placeholder="seu@email.com"
                className={`w-full h-[52px] rounded-[10px] border px-4 text-sm focus:outline-none focus:border-[#E8440A] transition-colors ${
                  errors.email ? "border-red-400" : "border-[#E2E8F0]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>
        </div>
      ),
      btnLabel: "Garantir minha visita" as string | null,
      showOptions: true,
    },
  } as const;

  const currentStep = steps[step as keyof typeof steps];

  // ── Animation class ─────────────────────────────────────────────────────────
  const animClass = animating
    ? direction === "forward"
      ? "opacity-0 translate-x-8"
      : "opacity-0 -translate-x-8"
    : "opacity-100 translate-x-0";

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-7 w-full max-w-[420px]">
        <ConfirmationScreen nome={formData.nome} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-7 w-full max-w-[420px]">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-[18px] font-bold text-[#0B1E3E]">
          Garanta sua visita
        </h2>
        {/* Progress label */}
        <p className="text-[11px] text-[#888] mt-3 mb-1.5">
          Etapa {step} de {totalSteps}
        </p>
        {/* Progress bar */}
        <div className="w-full h-1 bg-[#E2E8F0] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#E8440A] rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step content */}
      <div
        className={`transition-all duration-[280ms] ease-in-out ${animClass}`}
        key={step}
      >
        <p className="text-[15px] font-semibold text-[#0B1E3E] mb-4 leading-snug">
          {currentStep.question}
        </p>
        {currentStep.content}
      </div>

      {/* Actions */}
      <div className="mt-5 flex flex-col gap-3">
        {currentStep.btnLabel && (
          <button
            type="button"
            onClick={handleNext}
            className="w-full h-[52px] rounded-[10px] bg-[#E8440A] text-white font-semibold text-sm hover:bg-[#C83508] transition-colors"
          >
            {currentStep.btnLabel}
          </button>
        )}
        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="text-center text-[13px] text-[#999] hover:text-[#666] transition-colors"
          >
            ← Voltar
          </button>
        )}
      </div>
    </div>
  );
}
