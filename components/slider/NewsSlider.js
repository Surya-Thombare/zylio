"use client";
import Link from "next/link";

export default function NewsSlider() {
  return (
    <div className="news-container">
      <div className="row">
        <div className="col-lg-4">
          <div className="card-news">
            <div className="card-image">
              <Link href="/blog-post">
                <img
                  src="/assets/imgs/page/homepage1/img-news.png"
                  alt="Nivia"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card-news">
            <div className="card-image">
              <Link href="/blog-post">
                <img
                  src="/assets/imgs/page/homepage1/img-news2.png"
                  alt="Nivia"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card-news">
            <div className="card-image">
              <Link href="/blog-post">
                <img
                  src="/assets/imgs/page/homepage1/img-news3.png"
                  alt="Nivia"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
