// src/templates/index.js

import {
  config as thIndigoSingleConfig,
  mapping as thIndigoSingleMapping,
} from "./th_indigo_single";

export const TEMPLATE_REGISTRY = {
  [thIndigoSingleConfig.id]: {
    config: thIndigoSingleConfig,
    mapping: thIndigoSingleMapping,
    pdf: "/templates/indigo_th_single.pdf",
  },
};
