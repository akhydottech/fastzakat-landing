'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "Comment activer le mode organisation ?",
    answer: (device: 'desktop' | 'mobile') => (
      <div className="space-y-4">
        <p>Pour activer le mode organisation, suivez ces étapes :</p>
        <video 
          className="w-full rounded-lg shadow-lg"
          controls
          src={`/step_01-activer-mode-organisation${device === 'mobile' ? '_mobile' : ''}.mp4`}
        >
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    )
  },
  {
    question: "Comment inviter un membre déjà inscrit ?",
    answer: (device: 'desktop' | 'mobile') => (
      <div className="space-y-4">
        <p>Seul les membres inscrits peuvent être invités.</p>
        <p>Pour inviter un membre déjà inscrit, suivez ces étapes :</p>
        <video 
          className="w-full rounded-lg shadow-lg"
          controls
          src={`/step_02-inviter-un-membre-deja-inscrit${device === 'mobile' ? '_mobile' : ''}.mp4`}
        >
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    )
  },
  {
    question: "Comment le membre accepte-t-il l'invitation ?",
    answer: (device: 'desktop' | 'mobile') => (
      <div className="space-y-4">
        <p>Pour accepter l'invitation, le membre doit suivre ces étapes :</p>
        <video 
          className="w-full rounded-lg shadow-lg"
          controls
          src={`/step_03-le-membre-accepte-linvitation${device === 'mobile' ? '_mobile' : ''}.mp4`}
        >
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    )
  },
  {
    question: "Comment attribuer une livraison ?",
    answer: (device: 'desktop' | 'mobile') => (
      <div className="space-y-4">
        <p>Pour attribuer une livraison, suivez ces étapes :</p>
        <video 
          className="w-full rounded-lg shadow-lg"
          controls
          src={`/step_04-attribuer-la-livraison${device === 'mobile' ? '_mobile' : ''}.mp4`}
        >
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    )
  },
  {
    question: "Comment valider un dépôt ?",
    answer: (device: 'desktop' | 'mobile') => (
      <div className="space-y-4">
        <p>Pour valider un dépôt, suivez ces étapes :</p>
        <video 
          className="w-full rounded-lg shadow-lg"
          controls
          src={`/step_05-validation-du-depot${device === 'mobile' ? '_mobile' : ''}.mp4`}
        >
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    )
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Questions Fréquentes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Découvrez comment utiliser notre plateforme pour organiser vos collectes de zakat
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => setDevice('desktop')}
            className={`px-4 py-2 rounded-md ${
              device === 'desktop'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Version Desktop
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`px-4 py-2 rounded-md ${
              device === 'mobile'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Version Mobile
          </button>
        </div>

        <div className="mt-12 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="ml-6 flex-shrink-0">
                    <svg
                      className={`h-6 w-6 transform ${
                        openIndex === index ? 'rotate-180' : ''
                      } transition-transform duration-200 ease-in-out`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    {faq.answer(device)}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}