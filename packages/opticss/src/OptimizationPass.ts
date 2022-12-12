import { StyleMapping, TemplateIntegrationOptions } from "@opticss/template-api";

import { Actions } from "./Actions";
import { OptiCSSOptions } from "./OpticssOptions";
import { SelectorCache } from "./query";
import { IdentGenerators } from "./util/IdentGenerator";

export class OptimizationPass {
  styleMapping: StyleMapping;
  cache: SelectorCache;
  actions: Actions;
  identGenerators: IdentGenerators<"id" | "class">;
  constructor(options: OptiCSSOptions, templateOptions: TemplateIntegrationOptions) {
    this.styleMapping = new StyleMapping(templateOptions);
    this.cache = new SelectorCache();
    this.actions = new Actions();
    this.identGenerators = new IdentGenerators({
      caseInsensitive: options.css!.caseInsensitiveSelectors!,
      namespaces: ["id", "class"],
      startValue: options.identifiers && options.identifiers.startValue,
      maxIdentCount: options.identifiers && options.identifiers.maxCount,
    });
  }
}
