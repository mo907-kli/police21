// الحسابات الأساسية التي لا تُحذف أبداً (تقدر تضيف القيادات هنا)
const ConfigUsers = [
    { user: "admin", pass: "123", name: "dev", rank: "Minister of Interior" },
    { user: "L.S.P.D Chief", pass: "123", name: "أحمد الفهد", rank: "L.S.P.D Chief" },
];

// رتب الضباط والقيادة العليا - لهم صلاحيات كاملة (إنشاء حسابات، قبول مهام)
const OfficerRanks = [
    "Minister of Interior",
    "Deputy Minister of Interior",
    "A. Minister of Interior",
    "Police Commander",
    "L.S.P.D Chief",
    "Deputy L.S.P.D Chief",
    "Cheif of SASP",
    "Deputy Cheif of SASP",
    "Advisor Cheif of SASP",
    "Colonel",
    "Major",
    "Captain",
    "First Lieutenant",
    "Lieutenant"
];

// رتب الأفراد - صلاحياتهم محدودة
const EnlistedRanks = [
    "Staff Sergeant", 
    "First Sergeant", 
    "Sergeant",
    "Senior Lead Officer", 
    "Senior Officer", 
    "Officer III",
    "Officer II", 
    "Officer I", 
    "Solo Cadet", 
    "Cadet"
];