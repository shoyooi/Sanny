import { useState } from 'react';
import { sendMessage } from '../services/api';
import type { Message } from '../types';

const socials = [
  { platform: 'Instagram', handle: '@sannyx13',    href: 'https://instagram.com/sannyx13'    },
  { platform: 'TikTok',    handle: '@urmanshuzo_', href: 'https://tiktok.com/@urmanshuzo_'   },
  { platform: 'Facebook',  handle: '@Sanny Sabio', href: 'https://facebook.com/Sanny.Sabio'  },
];

export default function Contact() {
  const [form, setForm]       = useState<Message>({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true); setError(null);
    try {
      await sendMessage(form);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError('Failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section about-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">03</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-line" />
        </div>

        <div className="contact-wrap">
          <div className="contact-left reveal">
            <h3 className="contact-tagline">Let&apos;s work<br /><span>together.</span></h3>
            <p className="contact-desc">
              Have a project in mind? Feel free to reach out via social media or the form.
            </p>
            <div className="social-list">
              {socials.map(s => (
                <a key={s.platform} href={s.href} className="social-item" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon">{s.platform[0]}</div>
                  <div className="social-info">
                    <span className="social-platform">{s.platform}</span>
                    <span className="social-handle">{s.handle}</span>
                  </div>
                  <span className="social-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form reveal reveal-delay-2" onSubmit={onSubmit} noValidate>
            {[
              { id: 'name',    label: 'Your Name',      type: 'text',  placeholder: 'John Doe'           },
              { id: 'email',   label: 'Email Address',  type: 'email', placeholder: 'john@example.com'   },
            ].map(f => (
              <div key={f.id} className="form-group">
                <label className="form-label" htmlFor={f.id}>{f.label}</label>
                <input
                  className="form-input" id={f.id} name={f.id}
                  type={f.type} placeholder={f.placeholder}
                  value={form[f.id as keyof Message]} onChange={onChange} required
                />
              </div>
            ))}
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                className="form-textarea" id="message" name="message"
                placeholder="Tell me about your project…"
                value={form.message} onChange={onChange} required
              />
            </div>
            {success && <div className="form-success show">✓ Message sent! I'll get back to you soon.</div>}
            {error   && <div className="form-error">{error}</div>}
            <button className="form-btn" type="submit" disabled={sending}>
              {sending ? 'Sending…' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
