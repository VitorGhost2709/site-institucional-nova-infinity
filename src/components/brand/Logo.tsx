type LogoProps = {
  /** full = símbolo + wordmark (arquivo completo); mark = apenas símbolo via CSS crop não é confiável, então usamos full sempre */
  variant?: 'full'
  tone?: 'onLight' | 'onDark'
  /** Preset de tamanho/uso para padronizar a logo no site */
  preset?: 'header' | 'hero' | 'inline' | 'footer' | 'pageHero'
  className?: string
  alt?: string
  format?: 'svg' | 'png'
  priority?: boolean
}

export function Logo({
  variant = 'full',
  tone = 'onLight',
  preset,
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

  const presetClass =
    preset === 'header'
      ? 'h-11 sm:h-12 lg:h-14 max-h-[56px] w-auto object-contain'
      : preset === 'hero'
        ? 'h-20 sm:h-24 lg:h-28 max-h-[120px] w-auto object-contain'
        : preset === 'pageHero'
          ? 'h-14 sm:h-16 lg:h-20 max-h-[96px] w-auto object-contain'
        : preset === 'footer'
          ? 'h-10 max-h-[56px] w-auto object-contain'
          : preset === 'inline'
            ? 'h-9 max-h-[44px] w-auto object-contain'
            : ''

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      className={[toneClass, 'max-w-full select-none', presetClass, className].filter(Boolean).join(' ')}
      draggable={false}
    />
  )
}

