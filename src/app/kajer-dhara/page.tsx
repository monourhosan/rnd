import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { CallToAction, TextLink } from "@/components/editorial";

export const metadata = pageMetadata(
  "আমাদের কাজের ধারা — বাস্তবসম্মত পদ্ধতি ও নির্ভরযোগ্য তথ্য-প্রমাণ",
  "বাংলাদেশের সামাজিক ও বাজার গবেষণা পরিচালনা করি বাস্তবসম্মত পদ্ধতি ও নির্ভরযোগ্য তথ্য-প্রমাণকে সামনে রেখে। মাঠের বাস্তব অভিজ্ঞতা ও গভীর অন্তর্দৃষ্টি।",
  "/kajer-dhara"
);

interface PointMedia {
  photoSrc: string;
  photoAlt: string;
  photoCaption: string;
  gifSrc: string;
  webpSrc: string;
  gifAlt: string;
  gifCaption: string;
}

interface MethodPoint {
  num: string;
  title: string;
  text: string;
  media: PointMedia;
}

const approachPoints: MethodPoint[] = [
  {
    num: "০১",
    title: "ছকের আগে প্রেক্ষাপট",
    text: "বাইরে থেকে আনা প্রস্তুত প্রশ্নপত্র স্থানীয় বাস্তবতার সাথে সবসময় মানানসই হয় না। পারিবারিক কাঠামো, অপ্রাতিষ্ঠানিক জীবিকা, মৌসুমি পরিবর্তন এবং আঞ্চলিক ভাষার সূক্ষ্ম ব্যবহার—সবকিছুই একটি প্রশ্ন মানুষ কীভাবে বুঝবে তা প্রভাবিত করে। মাঠপর্যায়ের কাজ শুরুর আগে আমরা স্বাভাবিক ও প্রচলিত বাংলায় প্রশ্নপত্র যাচাই করি এবং মাঠের বাস্তব অভিজ্ঞতাসম্পন্ন দলের পরামর্শে তা পরিমার্জন করি।",
    media: {
      photoSrc: "/images/dhaka-street-market.webp",
      photoAlt: "স্থানীয় মহল্লার খোলা বাজারে কেনাকাটা ও মানুষের চলাচল",
      photoCaption: "স্থিরচিত্র · স্থানীয় সামাজিক ও অর্থনৈতিক প্রেক্ষাপট",
      webpSrc: "/images/market-digital-motion.webp",
      gifSrc: "/images/market-digital-motion.gif",
      gifAlt: "দোকানে সাধারণ মানুষের মোবাইল লেনদেন ও কথোপকথন",
      gifCaption: "চলমান দৃশ্য · স্বাভাবিক কথাবার্তা ও দৈনন্দিন লেনদেন",
    },
  },
  {
    num: "০২",
    title: "সুশৃঙ্খল মাঠপর্যায়ের কাজ",
    text: "নির্ভরযোগ্য ফলাফল নির্ভর করে মানুষের ঘরের দুয়ারে, বাজারের দোকানে কিংবা গ্রামীণ উঠানে তথ্য সংগ্রহের মানের ওপর। আমরা ডিজিটাল সিএপিআই (CAPI) পদ্ধতির সাথে সুস্পষ্ট নমুনা কাঠামো, জিপিএস ও সময় যাচাই, সক্রিয় তদারকি এবং স্বাধীন ব্যাক-চেক ব্যবস্থা যুক্ত করি। কোনো অসংগতি দেখা দিলে তা তথ্য সংগ্রহ শেষ হওয়ার পর নয়, বরং চলাকালীন সময়েই সমাধান করা হয়।",
    media: {
      photoSrc: "/images/bangladesh-rice-fields.webp",
      photoAlt: "গ্রামীণ ধানক্ষেতে কৃষকদের কাজ ও মাঠের বিস্তার",
      photoCaption: "স্থিরচিত্র · মাঠের ভৌগোলিক বিস্তার ও নমুনা কাঠামো",
      webpSrc: "/images/field-research-motion.webp",
      gifSrc: "/images/field-research-motion.gif",
      gifAlt: "গ্রামীণ বাড়ির উঠানে বসে তথ্যসংগ্রহকারীদের দলগত সাক্ষাৎকার",
      gifCaption: "চলমান দৃশ্য · সরাসরি উঠানে বসে অংশগ্রহণমূলক সাক্ষাৎকার",
    },
  },
  {
    num: "০৩",
    title: "পরিমাণের চেয়ে স্পষ্টতা",
    text: "জটিল সারণিতে ভরা দীর্ঘ প্রতিবেদন অনেক সময়ই নীতিনির্ধারকদের দ্রুত সিদ্ধান্ত নিতে সহায়তা করে না। আমরা গুরুত্ব দিই স্পষ্ট বিশ্লেষণ, সীমাবদ্ধতার সৎ উল্লেখ এবং ব্যবহারোপযোগী উপস্থাপনায়—তা হতে পারে পরিচ্ছন্ন ও গোপনীয়তা-সুরক্ষিত ডেটাসেট, সংক্ষিপ্ত নীতি-সংলাপ নোট কিংবা ইন্টারঅ্যাক্টিভ এক্সিকিউটিভ ড্যাশবোর্ড।",
    media: {
      photoSrc: "/images/dhaka-fruit-market.webp",
      photoAlt: "পাইকারি নৌঘাটে ফল ও পণ্যের বাজার",
      photoCaption: "স্থিরচিত্র · পাইকারি বাণিজ্য ও কাঠামোগত তথ্য",
      webpSrc: "/images/river-ghat-trade-motion.webp",
      gifSrc: "/images/river-ghat-trade-motion.gif",
      gifAlt: "ঘাটে নৌকায় পণ্য খালাস ও শ্রমিকদের কাজ",
      gifCaption: "চলমান দৃশ্য · বাস্তব সরবরাহ চেইন ও মাঠের গতিশীলতা",
    },
  },
  {
    num: "০৪",
    title: "প্রতিটি উত্তরদাতার প্রতি শ্রদ্ধা",
    text: "প্রতিটি তথ্যের পেছনে রয়েছে একজন মানুষের সময় ও আস্থা। আমাদের প্রতিটি গবেষণায় স্বেচ্ছামূলক ও অবহিত সম্মতি, বিশ্লেষণের আগে ব্যক্তিগত পরিচয় আলাদা করে সংরক্ষণ এবং কোনো বিকৃতি ছাড়াই মানুষের বাস্তব অভিজ্ঞতা তুলে ধরার নীতি কঠোরভাবে অনুসরণ করা হয়।",
    media: {
      photoSrc: "/images/bangladesh-kans-grass.webp",
      photoAlt: "কাশফুলের পাশে বসা গ্রামীণ নারী",
      photoCaption: "স্থিরচিত্র · উত্তরদাতার সম্মান ও মানবিক দৃষ্টিভঙ্গি",
      webpSrc: "/images/rural-canal-motion.webp",
      gifSrc: "/images/rural-canal-motion.gif",
      gifAlt: "সবুজ ফসলের মাঠ ও খালের স্নিগ্ধ রূপ",
      gifCaption: "চলমান দৃশ্য · গ্রামীণ জীবনের শান্ত বাস্তবতা",
    },
  },
];

const perspectivePoints: MethodPoint[] = [
  {
    num: "০১",
    title: "আক্ষরিক অনুবাদের নীরব ঝুঁকি",
    text: "অনেক প্রাতিষ্ঠানিক বা আন্তর্জাতিক গবেষণা ইংরেজিতে তৈরি হয়ে আক্ষরিকভাবে বাংলায় অনূদিত হয়। কাগজে-কলমে ভাষাটি মার্জিত ও সঠিক মনে হলেও মাঠপর্যায়ে তা দ্বিধা তৈরি করে। কোনো উপজেলা কিংবা ঢাকার ব্যস্ত মহল্লার একজন উত্তরদাতা যখন দেখেন প্রশ্নটি স্বাভাবিক কথোপকথনের বদলে পরীক্ষার প্রশ্নের মতো শোনাচ্ছে, তখন তিনি ভদ্রতা করে মাঝামাঝি কোনো একটি উত্তর বেছে নেন। শত শত উত্তরদাতা যখন প্রশ্নের অর্থ অনুমান করে উত্তর দেন, তখন চূড়ান্ত চার্ট দেখতে নিখুঁত মনে হলেও তা বাস্তবতাকে তুলে ধরে না।",
    media: {
      photoSrc: "/images/dhaka-market-street.webp",
      photoAlt: "ঢাকার ব্যস্ত মহল্লায় রিকশা ও মানুষের ভিড়",
      photoCaption: "স্থিরচিত্র · স্থানীয় কথোপকথনের স্বাভাবিক সামাজিক পরিবেশ",
      webpSrc: "/images/market-digital-motion.webp",
      gifSrc: "/images/market-digital-motion.gif",
      gifAlt: "দোকানের সামনে স্মার্টফোন ব্যবহারে স্বাভাবিক মতবিনিময়",
      gifCaption: "চলমান দৃশ্য · মানুষের স্বতঃস্ফূর্ত আলাপচারিতা",
    },
  },
  {
    num: "০২",
    title: "মানুষের দৈনন্দিন জীবনের ছন্দ মেনে পরিকল্পনা",
    text: "দৈনন্দিন জীবনযাত্রার সময়সূচি বিবেচনায় না নিলে নমুনা পরিকল্পনাও দুর্বল হয়ে পড়ে। কেবল সকাল ১০টা থেকে বিকেল ৪টার মধ্যে খানা জরিপ চালালে কর্মজীবী মানুষ, নিয়মিত যাতায়াতকারী এবং ক্ষুদ্র ব্যবসায়ীরা স্বাভাবিকভাবেই বাদ পড়ে যান। একইভাবে, ভিড়ের মধ্যে পারিবারিক আয়, ঋণ কিংবা সেবার অসন্তুষ্টি নিয়ে প্রশ্ন করলে বাস্তব উত্তরের বদলে সামাজিকভাবে গ্রহণযোগ্য উত্তর পাওয়ার ঝুঁকি বাড়ে। যত্নশীল মাঠ-পরিকল্পনায় সঠিক সময় নির্ধারণ, উপযুক্ত তথ্যসংগ্রহকারী নির্বাচন এবং ব্যক্তিগত গোপনীয়তা রক্ষার পরিবেশ আগে থেকেই নিশ্চিত করা হয়।",
    media: {
      photoSrc: "/images/dhaka-river-market.webp",
      photoAlt: "বুড়িগঙ্গার তীরে খেয়া নৌকা ও সাধারণ মানুষের পারাপার",
      photoCaption: "স্থিরচিত্র · নদীমাতৃক যাতায়াত ও জীবনযাত্রার সময়সূচি",
      webpSrc: "/images/hero-river-motion.webp",
      gifSrc: "/images/hero-river-motion.gif",
      gifAlt: "নদীতে নৌকার নিয়মিত সচল যাতায়াত ও পারাপার",
      gifCaption: "চলমান দৃশ্য · নিয়মিত কর্মজীবী ও যাত্রীদের নিত্যদিনের ছন্দ",
    },
  },
  {
    num: "০৩",
    title: "তথ্যসংগ্রহকারীদের কেবল ডেটা এন্ট্রি অপারেটর হিসেবে না দেখা",
    text: "স্কিপ-লজিক ও জিপিএস ট্র্যাকিংযুক্ত ট্যাবলেট কার্যকর সুরক্ষা দেয়, কিন্তু তা মানুষের বিচারবুদ্ধির বিকল্প নয়। সবচেয়ে নির্ভরযোগ্য তথ্য আসে সেই তথ্যসংগ্রহকারীদের কাছ থেকে, যাঁরা গবেষণার মূল উদ্দেশ্য বোঝেন, উত্তরদাতা কোনো প্রশ্ন না বুঝলে তা ধরতে পারেন এবং দৈনিক কোটা পূরণের তাড়াহুড়ো না করে ব্যতিক্রমী পরিস্থিতি তদারককারীদের জানাতে স্বাচ্ছন্দ্য বোধ করেন।",
    media: {
      photoSrc: "/images/chandpur-landscape.webp",
      photoAlt: "চাঁদপুরের শান্ত গ্রামীণ ভূদৃশ্য ও মেঠোপথ",
      photoCaption: "স্থিরচিত্র · গ্রামীণ জনপদে মাঠকর্মীর প্রবেশযোগ্যতা",
      webpSrc: "/images/field-research-motion.webp",
      gifSrc: "/images/field-research-motion.gif",
      gifAlt: "উঠানে বসে গভীর মনযোগ দিয়ে গবেষকের সাক্ষাৎকার গ্রহণ",
      gifCaption: "চলমান দৃশ্য · সক্রিয় মনযোগ ও পারস্পরিক বোঝাপড়া",
    },
  },
  {
    num: "০৪",
    title: "সৎ প্রমাণের অংশ হলো সীমাবদ্ধতার স্বীকৃতি",
    text: "গতিশীল অর্থনীতি ও সমাজে কোনো গবেষণাই সীমাবদ্ধতার ঊর্ধ্বে নয়—বর্ষাকালের প্রতিবন্ধকতা, দুর্গম এলাকা কিংবা মৌসুমি ব্যয়ের পরিবর্তন তথ্যের ওপর প্রভাব ফেলে। নির্ভরযোগ্য গবেষণা এসব সীমাবদ্ধতা আড়াল করে না; বরং স্পষ্টভাবে নথিভুক্ত করে, যাতে সিদ্ধান্ত গ্রহণকারীরা বুঝতে পারেন কোন ফলাফলের ওপর কতটুকু নির্ভর করা যাবে।",
    media: {
      photoSrc: "/images/bangladesh-fields-aerial.webp",
      photoAlt: "বাংলাদেশের সবুজ মাঠ, জলাশয় ও ট্রেনের এরিয়াল দৃশ্য",
      photoCaption: "স্থিরচিত্র · পরিবেশ ও ভৌগোলিক বাস্তবতার সীমানা",
      webpSrc: "/images/rural-canal-motion.webp",
      gifSrc: "/images/rural-canal-motion.gif",
      gifAlt: "বর্ষার মৌসুমে ধানক্ষেতের মধ্য দিয়ে সেচ খালের জলপ্রবাহ",
      gifCaption: "চলমান দৃশ্য · মৌসুমি পরিবর্তন ও বাস্তব সীমাবদ্ধতার প্রভাব",
    },
  },
];

export default function BengaliApproachPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="image-hero home-image-hero bn-hero">
        <div className="hero-motion-container" aria-hidden="true">
          <picture>
            <source srcSet="/images/hero-river-motion.webp" type="image/webp" />
            <source srcSet="/images/hero-river-motion.gif" type="image/gif" />
            <img
              src="/images/hero-river-motion.gif"
              alt="নদীমাতৃক বাংলাদেশের খেয়া পারাপার"
              className="hero-motion-media"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
        <div className="image-hero-content">
          <p className="eyebrow">মিরর মেট্রিক্স · গবেষণা দর্শন ও মাঠপর্যায়ের পদ্ধতি</p>
          <h1>আমাদের কাজের ধারা</h1>
          <p className="hero-description bn-hero-sub">
            বাস্তবসম্মত পদ্ধতি। নির্ভরযোগ্য তথ্য-প্রমাণ।
          </p>
          <TextLink href="#perspectives-article">নিবন্ধ পড়ুন</TextLink>
        </div>
      </section>

      {/* Main Container */}
      <div className="container bn-container">
        {/* Intro Manifesto */}
        <section className="bn-intro-card">
          <div className="bn-lead-wrapper">
            <p className="bn-lead-text">
              ভালো গবেষণা কেবল একটি প্রশ্নপত্র তৈরি দিয়ে শুরু হয় না। এটি শুরু হয় একটি প্রতিষ্ঠান কোন সিদ্ধান্ত নিতে চায় তা স্পষ্টভাবে বোঝা এবং মানুষ বাস্তবে কোন পরিবেশে বসবাস, কাজ ও সিদ্ধান্ত গ্রহণ করে—তা অনুধাবন করার মাধ্যমে।
            </p>
            <p className="bn-body-text">
              মিরর মেট্রিক্সে আমরা বাংলাদেশের সামাজিক ও বাজার গবেষণা পরিচালনা করি একটি সুস্পষ্ট মানদণ্ড সামনে রেখে: প্রাপ্ত তথ্য-প্রমাণ যেন বাস্তবতাকে এতটাই নির্ভুলভাবে প্রতিফলিত করে, যাতে যেকোনো যাচাইয়ে তার গ্রহণযোগ্যতা অটুট থাকে।
            </p>
          </div>
          <div className="bn-quick-nav">
            <span className="bn-quick-label">সূচিপত্র</span>
            <div className="bn-quick-links">
              <a href="#core-methodology" className="bn-pill-link">১. কাজের চার স্তম্ভ ↓</a>
              <a href="#perspectives-article" className="bn-pill-link">২. পার্সপেক্টিভস নিবন্ধ ↓</a>
            </div>
          </div>
        </section>

        {/* Part 1: Core Methodology Pillars */}
        <section className="bn-section" id="core-methodology">
          <div className="bn-section-header">
            <p className="eyebrow"><span className="tiny-square" />১. মূল নীতিমালা ও কাজের ধারা</p>
            <h2>মাঠের বাস্তবতা অনুধাবন ও তথ্যের নির্ভরযোগ্যতা</h2>
            <p className="bn-section-desc">
              প্রতিটি ধাপে স্থিরচিত্র ও সচল দৃশ্যপট তুলে ধরে কীভাবে স্থানীয় প্রেক্ষাপটকে সর্বাগ্রে রেখে সুশৃঙ্খল গবেষণা পরিচালনা করা হয়।
            </p>
          </div>

          <div className="bn-points-grid">
            {approachPoints.map((pt) => (
              <article key={pt.num} className="bn-point-card">
                <div className="bn-card-top">
                  <span className="bn-point-num">{pt.num}</span>
                  <h3>{pt.title}</h3>
                </div>

                {/* Dual Media Frame: Photo + GIF side by side */}
                <div className="bn-dual-media">
                  {/* Photo Frame */}
                  <div className="bn-media-box">
                    <div className="bn-media-img-wrap">
                      <Image
                        src={pt.media.photoSrc}
                        alt={pt.media.photoAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="bn-media-img"
                      />
                    </div>
                    <span className="bn-media-caption">
                      <span className="bn-caption-dot photo-dot" /> {pt.media.photoCaption}
                    </span>
                  </div>

                  {/* GIF / Animated WebP Frame */}
                  <div className="bn-media-box">
                    <div className="bn-media-img-wrap">
                      <picture>
                        <source srcSet={pt.media.webpSrc} type="image/webp" />
                        <source srcSet={pt.media.gifSrc} type="image/gif" />
                        <img
                          src={pt.media.gifSrc}
                          alt={pt.media.gifAlt}
                          loading="lazy"
                          decoding="async"
                          className="bn-media-img"
                        />
                      </picture>
                    </div>
                    <span className="bn-media-caption">
                      <span className="bn-caption-dot motion-dot" /> {pt.media.gifCaption}
                    </span>
                  </div>
                </div>

                <p className="bn-card-text">{pt.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Part 2: Perspectives Article */}
        <section className="bn-section bn-article-section" id="perspectives-article">
          <div className="bn-article-hero">
            <div className="bn-article-meta-badge">
              <span>বিভাগ: মাঠপর্যায়ের গবেষণা ও তথ্যের মান</span>
              <span aria-hidden="true">•</span>
              <span>পড়তে সময় লাগবে ৪ মিনিট</span>
            </div>
            <h2>কেন প্রথম সাক্ষাৎকারের আগেই তথ্যের মান নির্ধারিত হয়ে যায়</h2>
            <div className="bn-article-lead-box">
              <p>
                কোনো গবেষণার ফলাফলে অপ্রত্যাশিত বা অসংগতিপূর্ণ সংখ্যা দেখা দিলে সাধারণত বিশ্লেষণের পর্যায়ে তা ঠিক করার চেষ্টা করা হয়—অস্বাভাবিক মান বাদ দেওয়া, নমুনার ওয়েট বদলানো কিংবা স্প্রেডশিটে অসামঞ্জস্যতা কমিয়ে আনা। কিন্তু সেই পর্যায়ে পৌঁছানোর আগেই মূল ক্ষতি হয়ে যায়।
              </p>
              <p>
                বাংলাদেশের সামাজিক ও বাজার—উভয় ধরনের গবেষণাতেই তথ্যের মান বিশ্লেষণ কক্ষে নষ্ট হয় না। তথ্যের মান নির্ধারিত হয় প্রথম সাক্ষাৎকার নেওয়ার কয়েক সপ্তাহ আগেই।
              </p>
            </div>
          </div>

          <div className="bn-points-grid">
            {perspectivePoints.map((pt) => (
              <article key={pt.num} className="bn-point-card bn-perspective-card">
                <div className="bn-card-top">
                  <span className="bn-point-num">{pt.num}</span>
                  <h3>{pt.title}</h3>
                </div>

                {/* Dual Media Frame: Photo + GIF side by side */}
                <div className="bn-dual-media">
                  {/* Photo Frame */}
                  <div className="bn-media-box">
                    <div className="bn-media-img-wrap">
                      <Image
                        src={pt.media.photoSrc}
                        alt={pt.media.photoAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="bn-media-img"
                      />
                    </div>
                    <span className="bn-media-caption">
                      <span className="bn-caption-dot photo-dot" /> {pt.media.photoCaption}
                    </span>
                  </div>

                  {/* GIF / Animated WebP Frame */}
                  <div className="bn-media-box">
                    <div className="bn-media-img-wrap">
                      <picture>
                        <source srcSet={pt.media.webpSrc} type="image/webp" />
                        <source srcSet={pt.media.gifSrc} type="image/gif" />
                        <img
                          src={pt.media.gifSrc}
                          alt={pt.media.gifAlt}
                          loading="lazy"
                          decoding="async"
                          className="bn-media-img"
                        />
                      </picture>
                    </div>
                    <span className="bn-media-caption">
                      <span className="bn-caption-dot motion-dot" /> {pt.media.gifCaption}
                    </span>
                  </div>
                </div>

                <p className="bn-card-text">{pt.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Next Step / Navigation footer */}
        <section className="bn-closing-nav">
          <div>
            <p className="eyebrow">প্রকল্প আলোচনা</p>
            <h3>আপনার গবেষণা প্রশ্ন নিয়ে কথা বলুন</h3>
            <p>
              যেকোনো সামাজিক, প্রাতিষ্ঠানিক কিংবা বাজার গবেষণায় স্থানীয় প্রেক্ষাপটনির্ভর নির্ভরযোগ্য প্রমাণ পেতে আমাদের সাথে যোগাযোগ করুন।
            </p>
          </div>
          <div className="bn-action-btns">
            <Link href="/contact" className="button">
              যোগাযোগ করুন <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/approach" className="text-link">
              View English Approach
            </Link>
          </div>
        </section>
      </div>

      <CallToAction />
    </>
  );
}
