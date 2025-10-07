import { Emitter } from "../types"
import { BuildCtx } from "../../util/ctx"

export const TianxiaScript: Emitter = () => {
  return {
    name: "TianxiaScript",
    emit(ctx: BuildCtx) {
      // This plugin doesn't emit files, just adds external resources
      return []
    },
    externalResources(ctx: BuildCtx) {
      return {
        js: [
          {
            loadTime: "afterDOMReady",
            contentType: "inline",
            script: `
              document.addEventListener('DOMContentLoaded', () => {
                const last = document.querySelector('[data-last-modified]');
                if (last) {
                  const lm = document.lastModified || '';
                  last.textContent = lm ? lm : '';
                }
              });
            `,
          },
        ],
      }
    },
  }
}
