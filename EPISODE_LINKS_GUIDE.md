# دليل إضافة روابط الحلقات

## كيفية إضافة روابط حلقات الأنمي إلى OtakuHub

### الخطوة 1: تحضير الروابط

يمكنك الحصول على روابط الحلقات من:
- **YouTube** - أسهل طريقة، استخرج معرف الفيديو من الرابط
- **روابط مباشرة** - من مواقع البث المختلفة
- **Embed URLs** - الروابط المدمجة

#### مثال على استخراج معرف YouTube:
```
الرابط الأصلي: https://www.youtube.com/watch?v=RS7mk-UtdjQ
معرف الفيديو: RS7mk-UtdjQ
رابط Embed: https://www.youtube.com/embed/RS7mk-UtdjQ
```

### الخطوة 2: تعديل ملف app.js

افتح ملف `assets/app.js` وابحث عن:

```javascript
const onePieceEpisodes = [
    { number: 1, title: 'مغامرة جديدة', description: 'بداية أسطورية لقصة لوفي' },
    { number: 2, title: 'الكنز الأسطوري', description: 'لقاء مع زورو' },
    // ...
];
```

### الخطوة 3: إضافة الروابط

استبدل الروابط الحالية برابط embed YouTube:

```javascript
const onePieceEpisodes = [
    { 
        number: 1, 
        title: 'مغامرة جديدة', 
        description: 'بداية أسطورية لقصة لوفي',
        url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_1'
    },
    { 
        number: 2, 
        title: 'الكنز الأسطوري', 
        description: 'لقاء مع زورو',
        url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2'
    },
    // أضف المزيد
];
```

### الخطوة 4: تحديث دالة التشغيل

تأكد من أن دالة `playEpisode` تستخدم الرابط الصحيح:

```javascript
function playEpisode(animeName, episodeNumber, videoUrl) {
    const modal = document.getElementById('playerModal');
    const title = document.getElementById('episodeTitle');
    const player = document.getElementById('videoPlayer');
    const description = document.getElementById('episodeDescription');
    
    title.textContent = `${animeName} - الحلقة ${episodeNumber}`;
    player.src = videoUrl;  // استخدام الرابط المُمرر
    description.textContent = `جاري تشغيل الحلقة ${episodeNumber} من ${animeName}`;
    
    modal.classList.add('active');
}
```

### الخطوة 5: اختبار الروابط

1. احفظ الملف
2. أعد تحميل الصفحة في المتصفح
3. انقر على أي حلقة لاختبار التشغيل

## أمثلة على الروابط

### YouTube Embed URLs:
```
https://www.youtube.com/embed/RS7mk-UtdjQ
https://www.youtube.com/embed/dQw4w9WgXcQ
https://www.youtube.com/embed/jNQXAC9IVRw
```

### روابط مباشرة (إذا كانت متاحة):
```
https://example.com/anime/one-piece/episode-1.mp4
https://example.com/anime/one-piece/episode-2.mp4
```

## الخيارات المتقدمة

### إضافة معلومات إضافية للحلقة:

```javascript
const onePieceEpisodes = [
    { 
        number: 1, 
        title: 'مغامرة جديدة', 
        description: 'بداية أسطورية لقصة لوفي',
        url: 'https://www.youtube.com/embed/VIDEO_ID',
        duration: '24:30',
        aired: '1999-10-20',
        rating: 8.5,
        watched: false
    },
    // ...
];
```

### تحديث دالة التحميل:

```javascript
function loadOnePieceEpisodes() {
    const container = document.getElementById('onePieceEpisodes');
    if (!container) return;
    
    container.innerHTML = onePieceEpisodes.slice(0, 5).map(ep => `
        <div class="episode-item glass p-3 md:p-4 rounded-lg cursor-pointer" 
             onclick="playEpisode('One Piece', ${ep.number}, '${ep.url}')">
            <div class="flex justify-between items-center">
                <div>
                    <div class="text-sm md:text-base font-bold">الحلقة ${ep.number}: ${ep.title}</div>
                    <div class="text-xs text-slate-400">${ep.description}</div>
                    ${ep.duration ? `<div class="text-xs text-slate-500">المدة: ${ep.duration}</div>` : ''}
                </div>
                <i class="fas fa-play text-blue-500"></i>
            </div>
        </div>
    `).join('');
}
```

## استكشاف الأخطاء

### المشكلة: الفيديو لا يتشغل
**الحل:**
1. تحقق من صحة رابط Embed
2. تأكد من أن الفيديو متاح على YouTube
3. تحقق من عدم حظر الفيديو جغرافياً

### المشكلة: الحلقات لا تظهر
**الحل:**
1. تحقق من صيغة JSON في الملف
2. تأكد من إغلاق جميع الأقواس والفواصل
3. افتح وحدة التطوير (F12) وتحقق من الأخطاء

### المشكلة: الأحرف العربية تظهر بشكل خاطئ
**الحل:**
1. تأكد من أن الملف محفوظ بصيغة UTF-8
2. تحقق من رأس الصفحة: `<meta charset="UTF-8">`

## نصائح مهمة

✅ **استخدم روابط Embed** - أسهل وأكثر أماناً
✅ **اختبر الروابط** - قبل إضافتها للمستودع
✅ **احفظ نسخة احتياطية** - قبل إجراء تغييرات كبيرة
✅ **استخدم Git** - لتتبع التغييرات

## مصادر مفيدة

- [YouTube Embed Documentation](https://developers.google.com/youtube/iframe_api_reference)
- [HTML5 Video Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [JSON Format](https://www.json.org/)

---

**ملاحظة:** تأكد من احترام حقوق النشر عند إضافة روابط الفيديوهات!

