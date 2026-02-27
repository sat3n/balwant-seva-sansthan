'use client';

import { useState, FormEvent, useRef } from 'react';
import { useTranslations } from 'next-intl';

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const t = useTranslations('getInvolved.form');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = t('errors.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('errors.emailInvalid');
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = t('errors.messageRequired');
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = formRef.current?.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
      el?.focus();
      return;
    }

    setErrors({});
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  };

  if (status === 'success') {
    return (
      <div
        className="bg-secondary/10 dark:bg-secondary/20 rounded-xl p-8 text-center"
        role="status"
      >
        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-secondary dark:text-secondary-light">
          {t('success')}
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-text-dark dark:text-text-light mb-1">
          {t('name')} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-surface-dark-card
            text-text-dark dark:text-text-light
            transition-colors
            ${errors.name
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30'
              : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/30'
            }`}
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-sm text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-text-dark dark:text-text-light mb-1">
          {t('email')} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-surface-dark-card
            text-text-dark dark:text-text-light
            transition-colors
            ${errors.email
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30'
              : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/30'
            }`}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-text-dark dark:text-text-light mb-1">
          {t('phone')}
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          autoComplete="tel"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-surface-dark-card
            text-text-dark dark:text-text-light
            border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/30
            transition-colors"
        />
      </div>

      {/* Inquiry Type */}
      <div>
        <label htmlFor="contact-inquiry" className="block text-sm font-medium text-text-dark dark:text-text-light mb-1">
          {t('inquiryType')}
        </label>
        <select
          id="contact-inquiry"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={(e) => handleChange('inquiryType', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-surface-dark-card
            text-text-dark dark:text-text-light
            border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/30
            transition-colors"
        >
          <option value="general">{t('inquiryOptions.general')}</option>
          <option value="donation">{t('inquiryOptions.donation')}</option>
          <option value="volunteer">{t('inquiryOptions.volunteer')}</option>
          <option value="partnership">{t('inquiryOptions.partnership')}</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-text-dark dark:text-text-light mb-1">
          {t('message')} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-surface-dark-card
            text-text-dark dark:text-text-light
            transition-colors resize-y
            ${errors.message
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30'
              : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/30'
            }`}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-sm text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg
          transition-colors min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed
          flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {t('submitting')}
          </>
        ) : (
          t('submit')
        )}
      </button>
    </form>
  );
}
