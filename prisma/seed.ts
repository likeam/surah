import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 1. Ayat-ul-Kursi (verse)
  const kursi = await prisma.surah.upsert({
    where: { id: "ayat-ul-kursi" },
    update: {},
    create: {
      id: "ayat-ul-kursi",
      name: "Ayat-ul-Kursi",
      arabicName: "آیۃ الکرسی",
      transliteration: "Ayat-ul-Kursi",
      category: "verse",
      audioUrl: "https://www.qurancentral.com/audio/ayat-ul-kursi-mishary.mp3",
      seoTitle: "Ayat-ul-Kursi with Urdu Translation",
      seoDesc:
        "Read and listen to Ayat-ul-Kursi with Urdu translation in Nastaleeq font.",
      verses: {
        create: {
          verseNumber: 255,
          arabicText:
            "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ",
          urduTranslation:
            "ﷲ تعالیٰ وہ ہے جس کے سوا کوئی معبود نہیں، زندہ اور قائم رکھنے والا ہے، اسے نہ اونگھ آتی ہے نہ نیند، اسی کی ہے جو کچھ آسمانوں میں ہے اور جو کچھ زمین میں ہے، کون ہے جو اس کی اجازت کے بغیر اس کے ہاں سفارش کرے؟ وہ جانتا ہے جو ان کے سامنے ہے اور جو ان کے پیچھے ہے، اور وہ اس کے علم میں سے کسی چیز کا احاطہ نہیں کر سکتے مگر جتنا وہ چاہے، اس کی کرسی نے آسمانوں اور زمین کو گھیر رکھا ہے، اور ان دونوں کی حفاظت اس پر گراں نہیں، اور وہ بلند و بزرگ ہے۔",
        },
      },
    },
  });

  // 2. Surah Yaseen (first 5 verses for demo – you can add all 83)
  const yaseen = await prisma.surah.upsert({
    where: { id: "surah-yaseen" },
    update: {},
    create: {
      id: "surah-yaseen",
      name: "Surah Yaseen",
      arabicName: "سورۃ یٰسین",
      transliteration: "Surah Yaseen",
      category: "surah",
      audioUrl: "https://www.qurancentral.com/audio/surah-yaseen-mishary.mp3",
      seoTitle: "Surah Yaseen with Urdu Translation",
      seoDesc:
        "Read and listen to Surah Yaseen with Urdu translation in Nastaleeq font.",
      verses: {
        createMany: {
          data: [
            {
              verseNumber: 1,
              arabicText: "يٰسٓ",
              urduTranslation: "یٰسٓ",
            },
            {
              verseNumber: 2,
              arabicText: "وَٱلْقُرْءَانِ ٱلْحَكِيمِ",
              urduTranslation: "قسم ہے حکمت والے قرآن کی",
            },
            {
              verseNumber: 3,
              arabicText: "إِنَّكَ لَمِنَ ٱلْمُرْسَلِينَ",
              urduTranslation: "بیشک آپ رسولوں میں سے ہیں",
            },
            {
              verseNumber: 4,
              arabicText: "عَلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ",
              urduTranslation: "سیدھے راستے پر ہیں",
            },
            {
              verseNumber: 5,
              arabicText: "تَنزِيلَ ٱلْعَزِيزِ ٱلرَّحِيمِ",
              urduTranslation:
                "یہ اس زبردست رحمت والے کی طرف سے نازل کیا گیا ہے",
            },
            // Add remaining 78 verses for production
          ],
        },
      },
    },
  });

  console.log({ kursi, yaseen });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
