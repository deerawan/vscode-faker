export async function fakerFactory(locale: string) {
  switch (locale) {
    case 'az':
      const { fakerAZ } = await import('@faker-js/faker');
      return fakerAZ;
    case 'ar':
      const { fakerAR } = await import('@faker-js/faker');
      return fakerAR;
    case 'cz':
    case 'cs_CZ ':
      const { fakerCS_CZ } = await import('@faker-js/faker');
      return fakerCS_CZ;
    case 'de':
      const { fakerDE } = await import('@faker-js/faker');
      return fakerDE;
    case 'de_AT':
      const { fakerDE_AT } = await import('@faker-js/faker');
      return fakerDE_AT;
    case 'de_CH':
      const { fakerDE_CH } = await import('@faker-js/faker');
      return fakerDE_CH;
    case 'en':
      const { fakerEN } = await import('@faker-js/faker');
      return fakerEN;
    case 'en_AU':
      const { fakerEN_AU } = await import('@faker-js/faker');
      return fakerEN_AU;
    case 'en_AU_ocker':
      const { fakerEN_AU_ocker } = await import('@faker-js/faker');
      return fakerEN_AU_ocker;
    case 'en_BORK':
      const { fakerEN_BORK } = await import('@faker-js/faker');
      return fakerEN_BORK;
    case 'en_CA':
      const { fakerEN_CA } = await import('@faker-js/faker');
      return fakerEN_CA;
    case 'en_GB':
      const { fakerEN_GB } = await import('@faker-js/faker');
      return fakerEN_GB;
    case 'en_IE':
      const { fakerEN_IE } = await import('@faker-js/faker');
      return fakerEN_IE;
    case 'en_IN':
    case 'en_IND':
      const { fakerEN_IN } = await import('@faker-js/faker');
      return fakerEN_IN;
    case 'en_US':
      const { fakerEN_US } = await import('@faker-js/faker');
      return fakerEN_US;
    case 'en_ZA':
      const { fakerEN_ZA } = await import('@faker-js/faker');
      return fakerEN_ZA;
    case 'es':
      const { fakerES } = await import('@faker-js/faker');
      return fakerES;
    case 'es_MX':
      const { fakerES_MX } = await import('@faker-js/faker');
      return fakerES_MX;
    case 'fa':
      const { fakerFA } = await import('@faker-js/faker');
      return fakerFA;
    case 'fi':
      const { fakerFI } = await import('@faker-js/faker');
      return fakerFI;
    case 'fr':
      const { fakerFR } = await import('@faker-js/faker');
      return fakerFR;
    case 'fr_CA':
      const { fakerFR_CA } = await import('@faker-js/faker');
      return fakerFR_CA;
    case 'fr_CH':
      const { fakerFR_CH } = await import('@faker-js/faker');
      return fakerFR_CH;
    case 'id_ID':
      const { fakerID_ID } = await import('@faker-js/faker');
      return fakerID_ID;
    case 'it':
      const { fakerIT } = await import('@faker-js/faker');
      return fakerIT;
    case 'ja':
      const { fakerJA } = await import('@faker-js/faker');
      return fakerJA;
    case 'ge':
    case 'ka_GE':
      const { fakerKA_GE } = await import('@faker-js/faker');
      return fakerKA_GE;
    case 'ko':
      const { fakerKO } = await import('@faker-js/faker');
      return fakerKO;
    case 'nb_NO':
      const { fakerNB_NO } = await import('@faker-js/faker');
      return fakerNB_NO;
    case 'ne':
      const { fakerNE } = await import('@faker-js/faker');
      return fakerNE;
    case 'nl':
      const { fakerNL } = await import('@faker-js/faker');
      return fakerNL;
    case 'nl_BE':
      const { fakerNL_BE } = await import('@faker-js/faker');
      return fakerNL_BE;
    case 'pl':
      const { fakerPL } = await import('@faker-js/faker');
      return fakerPL;
    case 'pt_BR':
      const { fakerPT_BR } = await import('@faker-js/faker');
      return fakerPT_BR;
    case 'pt_PT':
      const { fakerPT_PT } = await import('@faker-js/faker');
      return fakerPT_PT;
    case 'ro':
      const { fakerRO } = await import('@faker-js/faker');
      return fakerRO;
    case 'ru':
      const { fakerRU } = await import('@faker-js/faker');
      return fakerRU;
    case 'sk':
      const { fakerSK } = await import('@faker-js/faker');
      return fakerSK;
    case 'sv':
      const { fakerSV } = await import('@faker-js/faker');
      return fakerSV;
    case 'tr':
      const { fakerTR } = await import('@faker-js/faker');
      return fakerTR;
    case 'uk':
      const { fakerUK } = await import('@faker-js/faker');
      return fakerUK;
    case 'vi':
      const { fakerVI } = await import('@faker-js/faker');
      return fakerVI;
    case 'zh_CN':
      const { fakerZH_CN } = await import('@faker-js/faker');
      return fakerZH_CN;
    case 'zh_TW':
      const { fakerZH_TW } = await import('@faker-js/faker');
      return fakerZH_TW;
    default:
      const { faker } = await import('@faker-js/faker');
      return faker;
  }
}
