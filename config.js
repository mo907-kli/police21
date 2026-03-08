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
    "High Commander",
    "General",
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
    { user: "north__7", pass: "123", name: "جون هنتر", rank: "Deputy Minister of Interior", dept: "" },
    { user: "u1kx", pass: "123", name: "عوده الاحمري", rank: "A. Minister of Interior", dept: "" },
    { user: "notmiz.", pass: "123", name: "عيد علي", rank: "Chief Of Police", dept: "" },
    { user: "2ii6", pass: "123", name: "فيكاريو  اسلا", rank: "Deputy Chief of Police", dept: "" },
    { user: "ylt0", pass: "123", name: "جوزيف مورفي", rank: "A'Chief Of Police", dept: "" },
    { user: "ia9q", pass: "123", name: "محمد المطيري", rank: "Police Commander", dept: "" },
    { user: "t1iq", pass: "123", name: "سفر الدوسري", rank: "Police Commander", dept: "" },
    { user: "3ljb", pass: "123", name: "ميشيل بيتر", rank: "Police Commander", dept: "" },
    { user: "basku0", pass: "123", name: "سايكو دام", rank: "Police Commander", dept: "" },
    { user: "iilother", pass: "123", name: "لوثر ماركوس", rank: "L.S.P.D Chief", dept: "" },
    { user: "mohammed9117956", pass: "123", name: "محمد الخالدي", rank: "Deputy L.S.P.D Chief", dept: "" },
    { user: "neax7", pass: "123", name: "سيف الدوسري", rank: "High Commander", dept: "" },
    { user: "9rth", pass: "123", name: "جاكس ريبر", rank: "High Commander", dept: "" },
    { user: "4lmd", pass: "123", name: "صقر المجد", rank: "High Commander", dept: "" },
    { user: "3njw.1_68178", pass: "123", name: "ليون ماركو", rank: "High Commander", dept: "" },
    { user: "biggboss_055", pass: "123", name: "سعيد احمد", rank: "High Commander", dept: "" },
    { user: "kq_0", pass: "123", name: "تركي دميتري", rank: "High Commander", dept: "" },
    { user: "_2gg", pass: "123", name: "مارك بانثر", rank: "High Commander", dept: "" },
    { user: "idarls", pass: "123", name: "سلفر ستالون", rank: "General", dept: "" },
    { user: "q2_rr", pass: "123", name: "تانا الشمري", rank: "General", dept: "" },
    { user: "Saeed Faiz", pass: "123", name: "معالي سعيد فايز", rank: "Colonel", dept: "" },
    { user: "alhtlani55", pass: "123", name: "نواف الهتلاني", rank: "Major", dept: "" },
    { user: "qgr9", pass: "123", name: "كارلوس الشمري", rank: "Major", dept: "" },
    { user: "ah.46", pass: "123", name: "مشبب العتيبي", rank: "Captain", dept: "" },
    { user: "tav.l7", pass: "123", name: "تاف مارفل", rank: "Captain", dept: "" },
    { user: "2m.ulster", pass: "123", name: "نواف عبدالله", rank: "Captain", dept: "" },
    { user: "w.ssk", pass: "123", name: "ناصر  اسلا", rank: "First Lieutenant", dept: "" },
    { user: "i_s7s", pass: "123", name: "حسين الحازمي", rank: "First Lieutenant", dept: "" },
    { user: "ple.6", pass: "123", name: "عسكر الرشيدي", rank: "First Lieutenant", dept: "" },
    { user: "z4.e", pass: "123", name: "جهيمان العتيبي", rank: "First Lieutenant", dept: "" },
    { user: "lwx_515", pass: "123", name: "مشعل ثامر", rank: "First Lieutenant", dept: "" },
    { user: "lwx_515", pass: "123", name: "الحربي غزالة", rank: "First Lieutenant", dept: "" },
    { user: "3hwe", pass: "123", name: "راد السبيعي", rank: "Lieutenant", dept: "" },
    { user: "ire.sh", pass: "123", name: "خالد احمد", rank: "Lieutenant", dept: "" },
    { user: "r_0c", pass: "123", name: "هزاع إلتشابو", rank: "Lieutenant", dept: "" },
    { user: "i.2lk", pass: "123", name: "سعود حمد", rank: "Lieutenant", dept: "" },
    { user: "595h", pass: "123", name: "بتال", rank: "Lieutenant", dept: "" },
    { user: "9_x", pass: "123", name: "وليام بيتر", rank: "Lieutenant", dept: "" },
    { user: "mo", pass: "123", name: "dev", rank: "Cadet", dept: "Police Academy" },
    
];


