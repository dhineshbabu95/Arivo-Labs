/**
 * Layered, blurred gradient field for the hero. Movement comes from parent
 * `--hero-x` / `--hero-y` (-1…1), updated only on fine-pointer desktop when motion is allowed.
 */
export function HeroInteractiveField() {
  return (
    <>
      <div className="hero-field-layer hero-field-a" aria-hidden />
      <div className="hero-field-layer hero-field-b" aria-hidden />
      <div className="hero-field-layer hero-field-c" aria-hidden />
      <div className="hero-field-layer hero-field-d" aria-hidden />
    </>
  );
}
