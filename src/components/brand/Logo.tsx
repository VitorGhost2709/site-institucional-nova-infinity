type LogoProps = {
  /** full = símbolo + wordmark (arquivo completo); mark = apenas símbolo via CSS crop não é confiável, então usamos full sempre */
  variant?: 'full'
  tone?: 'onLight' | 'onDark'
  className?: string
  alt?: string
  format?: 'svg' | 'png'
  priority?: boolean
}

export function Logo({
  variant = 'full',
  tone = 'onLight',
  className,
  alt = 'Nova Infinity',
  format = 'svg',
  priority,
}: LogoProps) {
  const src = new URL(`../../assets/Nova Infinity.${format}`, import.meta.url).toString()

  // A logo fornecida é monocromática escura; em fundo escuro usamos filtro para garantir legibilidade.
  const toneClass =
    tone === 'onDark'
      ? 'invert brightness-200 contrast-125'
      : ''

  void variant // reservado para expansão futura (ex: mark/wordmark quando houver assets)

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      className={[toneClass, 'h-auto w-auto select-none', className].filter(Boolean).join(' ')}
      draggable={false}
    />
  )
}

