// 🟢 قائمة رتب الضباط (القيادة العليا اللي لهم صلاحيات الإدارة والقبول) 🟢
const OfficerRanks = [
    "Minister of Interior", 
    "Deputy Minister of Interior",
    "A. Minister of Interior", 
    "Chief Of Police",          // 🟢 تم الإضافة
    "Deputy Chief of Police",   // 🟢 تم الإضافة
    "A'Chief Of Police",        // 🟢 تم الإضافة
    "Police Commander", 
    "L.S.P.D Chief", 
    "Deputy L.S.P.D Chief", 
    "Colonel", 
    "Major", 
    "Captain", 
    "First Lieutenant", 
    "Lieutenant"
];

// 🟢 قائمة رتب الأفراد (ما لهم صلاحيات إدارية، بس يشوفون الأقسام العادية) 🟢
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

// 🟢 قائمة الرتب الثنائية / الأقسام 🟢
const SecondaryRanks = [
    "Police Academy",
    "Internal Affairs"
];

// 🟢 الحسابات الأساسية للنظام 🟢
const ConfigUsers = [
    { user: "admin", pass: "123", name: "dev", rank: "Minister of Interior", dept: "" },
    { user: "wx8w", pass: "123", name: "جاهد المجاهد", rank: "Minister of Interior", dept: "" },
    { user: "north__7", pass: "123", name: "جون هنتر", rank: "A. Minister of Interior", dept: "" },
    { user: "u1kx", pass: "123", name: "عوده الاحمري", rank: "Minister of Interior", dept: "" },
    { user: "2zcp", pass: "123", name: "أحمد الفهد", rank: "Minister of Interior", dept: "" },
    { user: "an9r", pass: "123", name: "اليكس تكسر", rank: "A. Minister of Interior", dept: "" },
    { user: "Saeed Faiz", pass: "123", name: "معالي سعيد فايز", rank: "Colonel", dept: "" },
    { user: "ah.46", pass: "123", name: "مشبب العتيبي", rank: "Captain", dept: "" },
    { user: "9fsl", pass: "123", name: "فيصل بن سلمان", rank: "Lieutenant", dept: "" },
    { user: "2ii6", pass: "123", name: "فيكاريو اسلا", rank: "Deputy L.S.P.D Chief", dept: "" },
    { user: "mo", pass: "123", name: "dev", rank: "Cadet", dept: "Police Academy" },
    { user: "tav.l7", pass: "123", name: "تاف مارفل", rank: "Lieutenant", dept: "Internal Affairs" }
];
