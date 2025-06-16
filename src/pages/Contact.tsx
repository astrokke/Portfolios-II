import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      await emailjs.send(
        'service_nndek7k',
        'template_rjw3qha',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'Tipf_OIiLj6uB73ce'
      );

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setFormStatus('error');
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/astrokke',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nathan-musielak-developpeur/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section min-h-[80vh] flex items-center justify-center">
      <div className="container-custom max-w-4xl w-full bg-gray-900/80 rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-12">
        {/* Formulaire de contact */}
        <div className="animate-fade-in">
          <h2 className="heading-3 mb-6 text-amber-400">Envoyez-moi un message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-300">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                required
                disabled={formStatus === 'sending'}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
                disabled={formStatus === 'sending'}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-gray-300">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input"
                required
                disabled={formStatus === 'sending'}
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="input min-h-[150px]"
                required
                disabled={formStatus === 'sending'}
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full relative"
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Envoi en cours...
                </span>
              ) : (
                'Envoyer'
              )}
            </button>

            {/* Status Messages */}
            {formStatus === 'success' && (
              <div className="p-4 bg-green-500/10 text-green-500 rounded-lg animate-fade-in">
                Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
              </div>
            )}
            {formStatus === 'error' && (
              <div className="p-4 bg-red-500/10 text-red-500 rounded-lg animate-fade-in">
                Une erreur est survenue. Veuillez réessayer plus tard.
              </div>
            )}
          </form>
        </div>

        {/* Informations de contact */}
        <div className="space-y-8 animate-fade-in-delay">
          <div className="card">
            <h2 className="heading-3 mb-6 text-amber-400">Informations de contact</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-200">Email</h3>
                <a
                  href="mailto:nathan@musielak.net"
                  className="text-amber-400 hover:text-amber-500 transition-colors"
                >
                  nathan@musielak.net
                </a>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-200">Réseaux sociaux</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-amber-400 transition-colors"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-200">Localisation</h3>
                <p className="text-gray-300">Montpellier, France</p>
              </div>
            </div>
          </div>

          <div className="card animate-fade-in-delay-2">
            <h2 className="heading-3 mb-6 text-amber-400">Disponibilité</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                Je suis actuellement disponible pour de nouveaux projets
                et opportunités de collaboration.
              </p>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-300">Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 