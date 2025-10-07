import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

export default (() => {
  const HeaderMeta: QuartzComponent = ({}: QuartzComponentProps) => {
    return (
      <div class="header-meta">
        <div>File last modified: <span data-last-modified></span></div>
      </div>
    )
  }

  HeaderMeta.css = `
.header-meta {
  position: fixed;
  right: 12px;
  top: 8px;
  font-size: 0.78rem;
  color: #6b5f4a;
}

@media (max-width: 720px) {
  .header-meta {
    position: static;
    text-align: right;
    padding: 0.5rem 1rem;
  }
}
`

  return HeaderMeta
}) satisfies QuartzComponentConstructor
