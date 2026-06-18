"use client";

import { useInView } from "react-intersection-observer";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  { name: "Firdous Ansari", role: "Client", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg", text: "Was a bit hesitant to pay & get a logo designed online but then this team helped me till i was completely satisfied..very enthusiastic,hardworking and excellent with their work!! Thanks once again for delivering it within the time given..Great Work!!", rating: 5 },
  { name: "Victor Everystus", role: "Client", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg", text: "Prayerful Wishes! I feel so fortunate to have a job at ‘Logo Makers’ that I thoroughly enjoy, and I wanted to let you know that you’re a big part of my Name Logo. Your enthusiasm and support make it a pleasure to come to work forth coming days. I just thought you should know that you’re doing a great job. Thank you!", rating: 5 },
  { name: "Iti Fatehpuria", role: "Client", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-3.jpg", text: "Found this page in random instagram search without much expectations. But it was Superb experience, Amazing service with very reasonable price. Mr Sameer Patel, the designer was very patient, understood my requirements and designed the logo perfectly. I Strongly recommend", rating: 5 },
  { name: "Emine Narxoz", role: "Client", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Team-8.jpg", text: "It was a great pleasure to work with this team who are very friendly, efficient and fast in delivering your requirement. Thank you for making the logo and a wonderful video for our cricket team. Hopefully we will have more collaborations in the future!", rating: 5 },
  { name: "Cheenti Enterprise", role: "Client", image: "https://jkbrandingindia.com/wp-content/uploads/2024/10/Testimonial-2.jpg", text: "Response was too fast. While the logo has changed frequently, they prepared wonderful logo within the day. Thank you for your quick response.", rating: 5 },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section id="testimonials" ref={ref} style={{ padding: "100px 0", background: "linear-gradient(rgba(11,60,93,0.92), rgba(0,69,99,0.95)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", position: "relative", overflow: "hidden" }}>
      
      <div className="site-wrap" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ textAlign: "center", marginBottom: "50px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
            <span style={{ color: "#f58220", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Client Reviews</span>
            <div style={{ width: "32px", height: "2px", background: "#f58220" }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>
            What Our <span style={{ color: "#f58220" }}>Clients Say</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.75 }}>
            Hear from businesses we&apos;ve helped transform through powerful branding.
          </p>
        </div>

        <div style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease 0.2s", position: "relative", paddingBottom: "60px" }}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            loop={true}
            onSwiper={setSwiperInstance}
            className="pb-4"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} style={{ height: "auto" }}>
                <div style={{ height: "100%", padding: "36px 28px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: "#fff", display: "flex", flexDirection: "column" }}>
                  <Quote size={32} style={{ color: "rgba(245,130,32,0.3)", marginBottom: "16px", transform: "scaleX(-1)" }} />
                  <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.75, marginBottom: "24px", flexGrow: 1 }}>&ldquo;{t.text}&rdquo;</p>
                  <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
                    {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} style={{ color: "#f58220" }} fill="#f58220" />)}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.image} alt={t.name} style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(245,130,32,0.5)" }} />
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "15px", color: "#111" }}>{t.name}</p>
                      <p style={{ fontSize: "13px", color: "#f58220", fontWeight: 600 }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", position: "absolute", bottom: "0", left: "0", right: "0", zIndex: 10 }}>
            <button 
              onClick={() => swiperInstance?.slidePrev()} 
              style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", transition: "all 0.3s" }} 
              className="hover:bg-[#f58220] hover:border-[#f58220]"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="custom-pagination" style={{ display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }} />
            
            <button 
              onClick={() => swiperInstance?.slideNext()} 
              style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", transition: "all 0.3s" }} 
              className="hover:bg-[#f58220] hover:border-[#f58220]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.3);
          opacity: 1;
          border-radius: 999px;
          transition: all 0.3s ease;
          margin: 0 !important;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background: #f58220;
        }
      `}} />
    </section>
  );
}
