import React, { useState } from "react";
import "../styles/Testimonials.css";

const testimonials = [
  { id: 1, name: "أحمد الخليفي", feedback: "أفضل قهوة ذقتها في حياتي! جودة ممتازة وطعم لا يُنسى.", avatar: "../images/user1.jpg" },
  { id: 2, name: "سارة القحطاني", feedback: "خدمة رائعة، الشحن سريع، والطعم أصلي يمني 100%.", avatar: "/images/user2.jpg" },
  { id: 3, name: "محمد اليمني", feedback: "كل يوم أبدأ صباحي بفنجان من يمن بن، تجربة مميزة حقًا.", avatar: "/images/user3.jpg" },
  { id: 4, name: "نوره سعد", feedback: "منتجات ممتازة وأنيقة، الطعم والفخامة معًا!", avatar: "/images/user4.jpg" },
  { id: 5, name: "يارا عبد الله", feedback: "منتجات ممتازة وأنيقة، الطعم والفخامة معًا!", avatar: "/images/user4.jpg" },
  { id: 6, name: "نور عبد الله", feedback: "منتجات ممتازة وأنيقة، الطعم والفخامة معًا!", avatar: "/images/user4.jpg" },
  { id: 7, name: "نور عبد الله", feedback: "منتجات ممتازة وأنيقة، الطعم والفخامة معًا!", avatar: "/images/user4.jpg" },
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false); 
  const [visibleCount, setVisibleCount] = useState(4);

  const toggleShowAll = () => setShowAll(prev => !prev);
  const showMore = () => setVisibleCount(prev => prev + 4);

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, visibleCount);
  const hasMore = !showAll && visibleCount < testimonials.length;

  return (
    <section id="testimonials" className="chat-section">
      <h2 className="chat-title">آراء العملاء</h2>

      <div className="chat-container">
        {displayedTestimonials.map((t, index) => (
          <div key={t.id} className={`chat-row ${index % 2 === 0 ? "left" : "right"}`}>
            <img src={t.avatar} alt={t.name} className="chat-avatar" />
            <div className="chat-bubble">
              <p className="chat-text">{t.feedback}</p>
              <span className="chat-name">{t.name}</span>
            </div>
          </div>
        ))}

        {/* النص التفاعلي بدل الزر */}
        {hasMore || showAll ? (
          <p className="toggle-text" onClick={toggleShowAll}>
            {showAll ? "عرض أقل" : "عرض المزيد"}
          </p>
        ) : null}
      </div>
    </section>
  );
}
