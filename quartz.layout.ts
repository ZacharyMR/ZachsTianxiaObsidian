import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import HeaderMeta from "./quartz/components/HeaderMeta"
import SimpleFooter from "./quartz/components/SimpleFooter"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [HeaderMeta()],
  afterBody: [],
  footer: SimpleFooter(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
  ],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
  ],
  right: [],
}

