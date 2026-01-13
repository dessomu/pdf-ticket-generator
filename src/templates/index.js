// src/templates/index.js

import {
  config as thIndigoSingleConfig,
  mapping as thIndigoSingleMapping,
} from "./th_indigo_single";

import {
  config as indigoIndoSingleConfig,
  mapping as indigoIndoSingleMapping,
} from "./indigo_indo_single";

import {
  config as tripIataSingleConfig,
  mapping as tripIataSingleMapping,
} from "./trip_iata_single";

import {
  config as tripIataDoubleConfig,
  mapping as tripIataDoubleMapping,
} from "./trip_iata_double";

import {
  config as goibiboSingleConfig,
  mapping as goibiboSingleMapping,
} from "./goibibo_single";

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

import {
  config as moveMalaysiaSingleConfig,
  mapping as moveMalaysiaSingleMapping,
} from "./move_malaysia_single";

import {
  config as cleartripSingleConfig,
  mapping as cleartripSingleMapping,
} from "./cleartrip_single";

import {
  config as cleartripDoubleConfig,
  mapping as cleartripDoubleMapping,
} from "./cleartrip_double";


export const TEMPLATE_REGISTRY = {
  [thIndigoSingleConfig.id]: {
    config: thIndigoSingleConfig,
    mapping: thIndigoSingleMapping,
    pdf: "/templates/indigo_th_single.pdf",
  },
  [indigoIndoSingleConfig.id]: {
    config: indigoIndoSingleConfig,
    mapping: indigoIndoSingleMapping,
    pdf: "/templates/indigo_indo_single.pdf", // Assuming pdf name
  },
  [tripIataSingleConfig.id]: {
      config: tripIataSingleConfig,
      mapping: tripIataSingleMapping,
      pdf: "/templates/trip_iata_single.pdf",
  },
  [tripIataDoubleConfig.id]: {
      config: tripIataDoubleConfig,
      mapping: tripIataDoubleMapping,
      pdf: "/templates/trip_iata_double.pdf",
  },
  [goibiboSingleConfig.id]: {
      config: goibiboSingleConfig,
      mapping: goibiboSingleMapping,
      pdf: "/templates/goibibo_single.pdf",
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
  [moveMalaysiaSingleConfig.id]: {
    config: moveMalaysiaSingleConfig,
    mapping: moveMalaysiaSingleMapping,
    pdf: "/templates/move_malaysia_single.pdf",
  },
  [cleartripSingleConfig.id]: {
    config: cleartripSingleConfig,
    mapping: cleartripSingleMapping,
    pdf: "/templates/cleartrip_single.pdf",
  },
  [cleartripDoubleConfig.id]: {
    config: cleartripDoubleConfig,
    mapping: cleartripDoubleMapping,
    pdf: "/templates/cleartrip_double.pdf",
  },
};
