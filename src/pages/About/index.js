import React from "react";
import clsx from "clsx";
import styles from "./About.module.scss";
import classNames from "classnames/bind";
import ScrollToMiddle from "../../components/GlobalFunctions/ScrollToMiddle";

const cx = classNames.bind(styles);
export default function About() {
  return (
    <section className={styles.main}>
      <ScrollToMiddle />
      <div className={styles.firstScrip}>
        <div className={styles.press}>
          <div className={styles.pressBlock}>
            <h2 className={clsx(styles.title, styles.headline)}>
              Welcome to MovieNHK
            </h2>
            <p>
              <strong>Giới thiệu:</strong><br></br>Điểm đến hàng đầu dành cho mọi thứ về
              điện ảnh! MovieNHK luôn tận tâm mang đến cho bạn những cập nhật
              mới nhất, những bài đánh giá sâu sắc và những nội dung hấp dẫn từ
              thế giới điện ảnh. Tại MovieNHK, tôi tin vào sức mạnh của điện ảnh
              để truyền cảm hứng, giải trí và đưa chúng ta đến những thế giới
              mới. Mục tiêu của tôi là cung cấp một nền tảng toàn diện nơi những
              người yêu điện ảnh có thể tụ tập để khám phá, thảo luận và ăn mừng
              những phép màu của màn bạc. Cho dù bạn là người xem phim thường
              xuyên, người hâm mộ nhiệt huyết hay ai đó đang tìm kiếm những gợi
              ý, MovieNHK là nguồn thông tin uy tín dành cho mọi thứ liên quan
              đến điện ảnh. Hãy cùng tôi trên hành trình điện ảnh này khi chúng
              ta khám phá thế giới đa dạng và hấp dẫn của điện ảnh, từng khung
              hình một.
            </p>
          </div>

          <div className={styles.pressBlock}>
            <p>
              <strong>Lý do bắt đầu:</strong><br></br>MovieNHK là một dự án nhỏ của sinh
              viên đại học FPT. Tôi rất mê phim ảnh và muốn chia sẻ niềm đam mê
              này với cộng đồng. Mục tiêu của tôi là tạo ra một nền tảng thân
              thiện, nơi mọi người có thể khám phá, trò chuyện và chia sẻ những
              cảm nhận, kiến thức và trải nghiệm về điện ảnh. Với MovieNHK, tôi
              hy vọng sẽ mang đến cho bạn những bài viết, đánh giá, thông tin
              mới nhất và hữu ích về các bộ phim, những thông tin về các sự
              kiện, phim trường và những câu chuyện thú vị từ thế giới điện ảnh.
              Hãy cùng tôi khám phá và cùng nhau trải nghiệm vẻ đẹp của điện ảnh
              qua MovieNHK - nơi tạo ra bởi những người yêu điện ảnh.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.secondScript}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/nha-trang-nature-elite.appspot.com/o/Images%20For%20Logo%20-%20Sliders%20-%20Other%2FLogo%20-%20Banner%20-%20Cover%20Image%2Fbackground.png?alt=media&token=1b455e43-a143-47d2-a864-0a71c76d08a8&_gl=1*1yc29x1*_ga*ODIxNzI4MDkuMTY4NDA3OTMxMQ..*_ga_CW55HF8NVT*MTY4NjI0OTE3OC4xNS4xLjE2ODYyNDkyMDUuMC4wLjA."
          alt=""
        />
      </div>
    </section>
  );
}
