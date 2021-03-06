export const trades = document.querySelector('.trades');
export const tradesContent = document.querySelector('.trades__content');
export const deleteButton = document.querySelector(".popup__close");
export const openTrustsFromFreighter = document.querySelector('.open-trust__freighter');
export const openTrustsFromAlbedo = document.querySelector('.open-trust__albedo');
export const popup = document.querySelector('#popup');
export const popupTite = popup.querySelector('.popup__title');
export const popupResult= popup.querySelector('.popup__result');
export const loader = document.querySelector('.loader');
export const prices = document.querySelectorAll('.assets__price_now');

export const ALSETContent = document.querySelector('#ALSET');
export const ELLPAContent = document.querySelector('#ELLPA');
export const ELGOOGContent = document.querySelector('#ELGOOG');
export const EKINContent = document.querySelector('#EKIN');
export const KOOBECAFContent = document.querySelector('#KOOBECAF');
export const ISPEPContent = document.querySelector('#ISPEP');
export const MARGALETContent = document.querySelector('#MARGALET');
export const ASIVContent = document.querySelector('#ASIV');
export const TFOSORCIMContent = document.querySelector('#TFOSORCIM');
export const LAPYAPContent = document.querySelector('#LAPYAP');

export const alsetChart = document.querySelector('#alset');
export const ellpaChart = document.querySelector('#ellpa');
export const elgoogChart = document.querySelector('#elgoog');
export const ekinChart = document.querySelector('#ekin');
export const koobecafChart = document.querySelector('#koobecaf');
export const ispepChart = document.querySelector('#ispep');
export const margeletChart = document.querySelector('#margelet');
export const asivChart = document.querySelector('#asiv');
export const trosorcimChart = document.querySelector('#trosorcim');
export const lapyapChart = document.querySelector('#lapyap');

export const server = new StellarSdk.Server("https://horizon.stellar.lobstr.co");
export const XLM = new StellarSdk.Asset.native();
export const QADSAN = new StellarSdk.Asset('QADSAN', 'GAOLE7JSN4OB7344UCOOEGIHEQY2XNLCW6YHKOCGZLTDV4VRTXQM27QU');
export const ELGOOG = new StellarSdk.Asset('ELGOOG', 'GBVKFKU77FCA75TQ6EYAUKIZG4NJL5NTMU3I3YJJI3MQUMG2GLH44EM4');
export const ASIV = new StellarSdk.Asset('ASIV', 'GDO7QNI3HTR76XGHLT3IROR5IKJ52CM2CWA5L2TXBKJWQV7OFLKIWCG3');
export const LAPYAP = new StellarSdk.Asset('LAPYAP', 'GA25AUGGORR7SQT3FGENZ35GMZI444QS7DHTUUJHUZ7IIMX4A4D6ATA2');
export const EKIN = new StellarSdk.Asset('EKIN', 'GCSDHUTR6YQZVN7HV3GVJJAHQ2LBYKJJMWCNJYHLB2XSUXLXQPS5IVEJ');
export const EKOOBECAF = new StellarSdk.Asset('KOOBECAF', 'GC36VPQFLYRBRZ34FLOMT72VJGQBMGUMT2QLIT32XOIP4TR34V74D5IH');
export const TFOSORCIM = new StellarSdk.Asset('TFOSORCIM', 'GCC2J6OJAAGJ6OMTOI5MIJMNQ2ONCFKCVYISORBBEEXCBGXYCG6ZP5EG');
export const ELPPA = new StellarSdk.Asset('ELPPA', 'GANJZG7S2TZKAQG5VP4ZCCWZYLVAX3YB5QITBMGZTFLOSNTE35ZDPETC');
export const ISPEP = new StellarSdk.Asset('ISPEP', 'GBGOBGXU5AGHADC6H7KGMEPXEIOJY7ZKIKLBTU363OCQTZNPTGNTVQJK');
export const ALSET = new StellarSdk.Asset('ALSET', 'GA4LXEHVL7WZOFL7KRQEZ36ASVNJFP6OHQRS6UQ36GFFGYS7ZZNAVBBJ');
export const MARGELET = new StellarSdk.Asset('MARGELET', 'GA5PB5WXXE4GTJWCDOPJPACFO7KC5IIIOO356XUCP37JPRDHJ2DL4AFI');
export const NOZAMA = new StellarSdk.Asset('NOZAMA', 'GDVA6YXBBNA7ONRYIWQDVSZC366EU5HQIBKPY4PNM4QBVSDJCKYMF2EE');
export const AllAssets = [QADSAN, MARGELET, NOZAMA, ELGOOG, ASIV, LAPYAP, EKIN, EKOOBECAF, TFOSORCIM, ELPPA, ISPEP, ALSET];
export const AllAssetsForTrade = [ALSET, ELPPA, ELGOOG, EKIN, EKOOBECAF, ISPEP, MARGELET, ASIV, TFOSORCIM, LAPYAP];
