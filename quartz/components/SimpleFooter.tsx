import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

export default (() => {
  const SimpleFooter: QuartzComponent = ({}: QuartzComponentProps) => {
    return (
      <footer>—</footer>
    )
  }

  SimpleFooter.css = `
footer {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #5d523f;
}
`

  return SimpleFooter
}) satisfies QuartzComponentConstructor
