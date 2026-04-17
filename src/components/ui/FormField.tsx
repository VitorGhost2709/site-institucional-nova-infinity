import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type BaseProps = {
  label: string
  hint?: string
}

type InputFieldProps = BaseProps & InputHTMLAttributes<HTMLInputElement> & { multiline?: false }
type TextareaFieldProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement> & { multiline: true }

export function FormField(props: InputFieldProps | TextareaFieldProps) {
  const { label, hint, className, ...rest } = props

  return (
    <label className={['block space-y-2', className].filter(Boolean).join(' ')}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-xs font-semibold text-white/85">{label}</span>
        {hint ? <span className="text-xs text-white/55">{hint}</span> : null}
      </div>

      {props.multiline ? (
        <textarea
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className="min-h-28 w-full resize-y rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-sm text-white shadow-sm shadow-black/25 outline-none placeholder:text-white/40 focus:border-brand-400/60 focus:ring-2 focus:ring-brand-400/25"
        />
      ) : (
        <input
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          className="h-11 w-full rounded-xl border border-white/12 bg-white/5 px-3 text-sm text-white shadow-sm shadow-black/25 outline-none placeholder:text-white/40 focus:border-brand-400/60 focus:ring-2 focus:ring-brand-400/25"
        />
      )}
    </label>
  )
}

