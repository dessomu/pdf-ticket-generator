// src/templates/index.js

import {
  config as thIndigoSingleConfig,
  mapping as thIndigoSingleMapping,
} from "./th_indigo_single";

import {
  config as mmtSingleConfig,
  mapping as mmtSingleMapping,
} from "./mmt_malaysia_single";

import {
  config as mmtDoubleConfig,
  mapping as mmtDoubleMapping,
} from "./mmt_malaysia_double";

import {
  config as mmtTripleConfig,
  mapping as mmtTripleMapping,
} from "./mmt_malaysia_triple";

export const TEMPLATE_REGISTRY = {
  [thIndigoSingleConfig.id]: {
    config: thIndigoSingleConfig,
    mapping: thIndigoSingleMapping,
    pdf: "/templates/indigo_th_single.pdf",
  },
  [mmtSingleConfig.id]: {
    config: mmtSingleConfig,
    mapping: mmtSingleMapping,
    pdf: "/templates/mmt-malaysia-single.pdf", // Matches public/templates/mmt-malaysia-single.pdf
  },
  [mmtDoubleConfig.id]: {
    config: mmtDoubleConfig,
    mapping: mmtDoubleMapping,
    pdf: "/templates/mmt-malaysia-double.pdf", // Matches public/templates/mmt-malaysia-double.pdf
  },
  [mmtTripleConfig.id]: {
    config: mmtTripleConfig,
    mapping: mmtTripleMapping,
    pdf: "/templates/mmt-malaysia-tripple.pdf", // Matches public/templates/mmt-malaysia-tripple.pdf
  },
};
