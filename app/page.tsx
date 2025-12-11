import PdfDownloadButton from "./components/PdfDownloadButton";

const sections = [
  {
    title: "1. आकर्षण का नियम",
    points: [
      "आप जिन विचारों पर केंद्रित रहते हैं, वही ऊर्जा बनकर ब्रह्मांड को संदेश भेजते हैं।",
      "सकारात्मक भावनाएँ आकर्षण को तेज़ करती हैं और नकारात्मक भावनाएँ इच्छाओं को दूर धकेलती हैं।",
      "धन, स्वास्थ्य और संबंधों से जुड़ी सकारात्मक कल्पनाएँ आपके जीवन में समान अनुभवों को आमंत्रित करती हैं।"
    ]
  },
  {
    title: "2. इच्छाओं को स्पष्ट करना",
    points: [
      "आप जो चाहते हैं उसे स्पष्ट विवरण के साथ लिखें और उसका भावनात्मक अनुभव करें।",
      "कल्पना करें कि आपकी इच्छा पहले ही पूरी हो चुकी है और उस खुशी को अभी महसूस करें।",
      "विश्वास रखें कि ब्रह्मांड ने आपकी प्रार्थना स्वीकार कर ली है और परिणाम आने तक धैर्य रखें।"
    ]
  },
  {
    title: "3. कृतज्ञता और विश्वास",
    points: [
      "कृतज्ञता उस चीज़ को शीघ्र लाती है जिसके लिए आप आभारी रहते हैं।",
      "विश्वास बनाए रखें कि इच्छित परिणाम रास्ते में है, भले ही परिस्थितियाँ विपरीत हों।",
      "अपने आप को प्रेम और आत्मविश्वास से भरें, यह उच्च कंपन आकर्षण को मजबूत करता है।"
    ]
  },
  {
    title: "4. प्रेरित कार्रवाई",
    points: [
      "अपने भीतर की प्रेरणा को सुनें और छोटे-छोटे कदम उठाते रहें।",
      "भय और संदेह को पहचान कर छोड़ दें, क्योंकि वे ऊर्जा को अवरुद्ध करते हैं।",
      "हर सफलता का जश्न मनाएँ ताकि सकारात्मक ऊर्जा का प्रवाह निरंतर बना रहे।"
    ]
  }
];

export default function Page() {
  return (
    <main className="page-wrapper">
      <article className="book-shell">
        <div className="book-ribbon" aria-hidden />
        <div className="book-content" id="book-summary">
          <header className="hero">
            <span className="hero-kicker">गुप्त सूत्र</span>
            <h1 className="hero-title">&ldquo;The Secret&rdquo; का प्रेरक हिंदी सारांश</h1>
            <p className="hero-subtitle">
              रहस्य यह सिखाता है कि आकर्षण का नियम आपके विचारों को वास्तविकता में बदल देता है।
              यह संक्षिप्त सारांश सकारात्मक सोच, कृतज्ञता और प्रेरित कार्रवाई के जरिए सफलता, प्रेम
              और स्वास्थ्य को अपने जीवन में आमंत्रित करने का मार्ग दर्शाता है।
            </p>
          </header>

          <section className="meta-grid" aria-label="पुस्तक तथ्य">
            <div className="meta-card">
              <h2 className="meta-title">लेखक</h2>
              <p className="meta-content">रॉन्डा बर्न (Rhonda Byrne)</p>
            </div>
            <div className="meta-card">
              <h2 className="meta-title">मूल विषय</h2>
              <p className="meta-content">आकर्षण का नियम, सकारात्मक सोच, सशक्त जीवन दृष्टि</p>
            </div>
            <div className="meta-card">
              <h2 className="meta-title">पठन समय</h2>
              <p className="meta-content">लगभग 10 मिनट में पूरा सारांश</p>
            </div>
          </section>

          <section className="chapter-list" aria-label="मुख्य सीख">
            {sections.map((section) => (
              <div className="chapter-card" key={section.title}>
                <h3 className="chapter-heading">{section.title}</h3>
                <ul className="chapter-points">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="action-callout" aria-label="क्रियात्मक कदम">
            <h3 className="action-title">आज से बदलाव की शुरुआत करें</h3>
            <ul className="action-steps">
              <li>हर सुबह तीन सकारात्मक कथन (affirmations) जोर से बोलें।</li>
              <li>कृतज्ञता डायरी में प्रतिदिन पाँच आभार लिखें।</li>
              <li>अपने लक्ष्य की कल्पना प्रतिदिन 5 मिनट तक करें और सफलता की भावना महसूस करें।</li>
              <li>जब भी प्रेरणा मिले, तुरंत कोई ठोस कदम उठाएँ और उसे दर्ज करें।</li>
            </ul>
          </section>

          <PdfDownloadButton targetId="book-summary" />

          <p className="footer-note">
            यह सारांश आपके भीतर छुपी शक्ति को याद दिलाता है। अपने विचारों को सजग बनाकर आप वह जीवन रच
            सकते हैं जिसका आपने हमेशा सपना देखा है।
          </p>
        </div>
      </article>
    </main>
  );
}
