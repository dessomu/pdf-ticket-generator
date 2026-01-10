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

import {
  config as moveSingleConfig,
  mapping as moveSingleMapping,
} from "./move_thailand_single";

import {
  config as moveDoubleConfig,
  mapping as moveDoubleMapping,
} from "./move_thailand_double";

export const TEMPLATE_REGISTRY = {
  [thIndigoSingleConfig.id]: {
    config: thIndigoSingleConfig,
    mapping: thIndigoSingleMapping,
    pdf: "/templates/indigo_th_single.pdf",
  },
  [mmtSingleConfig.id]: {
    config: mmtSingleConfig,
    mapping: mmtSingleMapping,
    pdf: "/templates/mmt-malaysia-single.pdf",
  },
  [mmtDoubleConfig.id]: {
    config: mmtDoubleConfig,
    mapping: mmtDoubleMapping,
    pdf: "/templates/mmt-malaysia-double.pdf",
  },
  [mmtTripleConfig.id]: {
    config: mmtTripleConfig,
    mapping: mmtTripleMapping,
    pdf: "/templates/mmt-malaysia-tripple.pdf",
  },
  [moveSingleConfig.id]: {
    config: moveSingleConfig,
    mapping: moveSingleMapping,
    pdf: "/templates/move_thailand_single.pdf",
  },
  [moveDoubleConfig.id]: {
    config: moveDoubleConfig,
    mapping: moveDoubleMapping,
    pdf: "/templates/move_thailand_double.pdf",
  },
};
