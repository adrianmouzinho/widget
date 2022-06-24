import { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";

import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            src: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
        placeholder: 'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
    },
    IDEA: {
        title: 'Ideia',
        image: {
            src: ideaImageUrl,
            alt: 'Imagem de um lâmpada'
        },
        placeholder: 'Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!'
    },
    OTHER: {
        title: 'Outro',
        image: {
            src: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
        placeholder: 'Queremos te ouvir. O que você gostaria de nos dizer? '
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 rounded-2xl shadow-surface w-[calc(100vw-2rem)] md:w-auto flex flex-col items-center">

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
            ) : (
                <FeedbackContentStep 
                    feedbackType={feedbackType} 
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}

            <footer className="text-xs text-zinc-400">
                Feito com ♥ por <a className="underline underline-offset-2" href="https://rocketseat.com.br">Adrian Mouzinho</a>
            </footer>
        </div>
    )
}

// parei em 01:17:00