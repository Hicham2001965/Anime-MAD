/**
 * ملف نموذج لإضافة روابط حلقات الأنمي
 * 
 * الطريقة:
 * 1. انسخ هذا الملف
 * 2. استبدل روابط YouTube بالروابط الصحيحة
 * 3. احفظ الملف
 * 4. استخدم البيانات في app.js
 */

// ===== ون بيس - One Piece =====
const onePieceEpisodes = [
    { 
        number: 1, 
        title: 'مغامرة جديدة', 
        description: 'بداية أسطورية لقصة لوفي',
        url: 'https://www.youtube.com/embed/EPISODE_1_ID'
    },
    { 
        number: 2, 
        title: 'الكنز الأسطوري', 
        description: 'لقاء مع زورو',
        url: 'https://www.youtube.com/embed/EPISODE_2_ID'
    },
    { 
        number: 3, 
        title: 'الطاقم يتشكل', 
        description: 'انضمام ناميه',
        url: 'https://www.youtube.com/embed/EPISODE_3_ID'
    },
    { 
        number: 4, 
        title: 'الخطر في الغابة', 
        description: 'أول معركة حقيقية',
        url: 'https://www.youtube.com/embed/EPISODE_4_ID'
    },
    { 
        number: 5, 
        title: 'الوصول للقرية', 
        description: 'مساعدة القرية',
        url: 'https://www.youtube.com/embed/EPISODE_5_ID'
    },
    { 
        number: 6, 
        title: 'معركة جديدة', 
        description: 'تطور جديد في القصة',
        url: 'https://www.youtube.com/embed/EPISODE_6_ID'
    },
    { 
        number: 7, 
        title: 'الطريق الطويل', 
        description: 'رحلة جديدة تبدأ',
        url: 'https://www.youtube.com/embed/EPISODE_7_ID'
    },
    { 
        number: 8, 
        title: 'الأصدقاء الجدد', 
        description: 'لقاء مع شخصيات جديدة',
        url: 'https://www.youtube.com/embed/EPISODE_8_ID'
    },
    { 
        number: 9, 
        title: 'التحديات تزداد', 
        description: 'معارك أصعب تنتظرهم',
        url: 'https://www.youtube.com/embed/EPISODE_9_ID'
    },
    { 
        number: 10, 
        title: 'الحلم الكبير', 
        description: 'تحقيق الأحلام',
        url: 'https://www.youtube.com/embed/EPISODE_10_ID'
    }
];

// ===== مذكرة الموت - Death Note =====
const deathNoteEpisodes = [
    { 
        number: 1, 
        title: 'الولادة الجديدة', 
        description: 'ظهور دفتر الموت',
        url: 'https://www.youtube.com/embed/DEATH_NOTE_EP1'
    },
    { 
        number: 2, 
        title: 'المواجهة', 
        description: 'أول استخدام للدفتر',
        url: 'https://www.youtube.com/embed/DEATH_NOTE_EP2'
    },
    // أضف المزيد من الحلقات
];

// ===== هجوم العمالقة - Attack on Titan =====
const attackOnTitanEpisodes = [
    { 
        number: 1, 
        title: 'إلى الأمام!', 
        description: 'ظهور العمالقة',
        url: 'https://www.youtube.com/embed/ATTACK_ON_TITAN_EP1'
    },
    { 
        number: 2, 
        title: 'الجندي الجديد', 
        description: 'تدريب الجنود',
        url: 'https://www.youtube.com/embed/ATTACK_ON_TITAN_EP2'
    },
    // أضف المزيد من الحلقات
];

// ===== ناروتو - Naruto =====
const narutoEpisodes = [
    { 
        number: 1, 
        title: 'ناروتو أوزوماكي!', 
        description: 'بداية قصة ناروتو',
        url: 'https://www.youtube.com/embed/NARUTO_EP1'
    },
    // أضف المزيد من الحلقات
];

// ===== بليتش - Bleach =====
const bleachEpisodes = [
    { 
        number: 1, 
        title: 'الموت والفراولة', 
        description: 'ظهور إيتشيجو',
        url: 'https://www.youtube.com/embed/BLEACH_EP1'
    },
    // أضف المزيد من الحلقات
];

/**
 * كيفية الاستخدام:
 * 
 * 1. استبدل EPISODE_X_ID بمعرف الفيديو الفعلي من YouTube
 *    مثال: https://www.youtube.com/watch?v=RS7mk-UtdjQ
 *    المعرف: RS7mk-UtdjQ
 *    الرابط النهائي: https://www.youtube.com/embed/RS7mk-UtdjQ
 * 
 * 2. يمكنك إضافة حقول إضافية مثل:
 *    - duration: "24:30"
 *    - aired: "1999-10-20"
 *    - rating: 8.5
 *    - watched: false
 * 
 * 3. بعد إضافة الروابط، استخدمها في app.js:
 *    const onePieceEpisodes = [ ... ]
 */

// ===== دالة مساعدة لاستخراج معرف YouTube =====
function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// ===== دالة مساعدة لإنشاء رابط Embed =====
function createEmbedUrl(youtubeUrl) {
    const videoId = extractYouTubeId(youtubeUrl);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}

// مثال على الاستخدام:
// const url = 'https://www.youtube.com/watch?v=RS7mk-UtdjQ';
// const embedUrl = createEmbedUrl(url);
// console.log(embedUrl); // https://www.youtube.com/embed/RS7mk-UtdjQ
