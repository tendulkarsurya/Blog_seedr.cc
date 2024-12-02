import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "next/image";

export default function SeederBlog() {
  return (
    <>
      {/* <Header /> */}
      <main>
        {/* About Section */}
        <section id="about">
          <h1>Welcome to the Seedr.cc Blog</h1>
          <p>
            Seedr.cc is your go-to solution for cloud-based torrenting. With its
            powerful features, you can securely download torrents to the cloud
            and stream content directly on your devices.
          </p>
          <Image
            src="/images/seedr-dashboard.jpg" // Place an image in the public/images folder
            alt="Seedr Dashboard"
            width={800}
            height={400}
            style={{ borderRadius: "10px", margin: "20px 0" }}
          />
          <p>
            Whether you're downloading a movie, a software file, or any other
            torrent, Seedr makes it effortless and secure. Dive into the world
            of seamless torrenting today!
          </p>
        </section>

        {/* Features Section */}
        <section id="features" style={{ marginTop: "40px" }}>
          <h2>Top Features of Seedr.cc</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <Image
                src="/images/fast-downloads.jpg"
                alt="Fast Downloads"
                width={400}
                height={250}
                style={{ borderRadius: "10px" }}
              />
              <h3>Fast Downloads</h3>
              <p>
                Seedr ensures lightning-fast downloads directly to the cloud,
                saving you time and bandwidth.
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <Image
                src="/images/secure-connection.jpg"
                alt="Secure Connection"
                width={400}
                height={250}
                style={{ borderRadius: "10px" }}
              />
              <h3>Secure Connection</h3>
              <p>
                Enjoy peace of mind with SSL encryption and privacy-focused
                features that keep your data safe.
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "400px" }}>
              <Image
                src="/images/device-compatibility.jpg"
                alt="Device Compatibility"
                width={800}
                height={250}
                style={{ borderRadius: "10px" }}
              />
              <h3>Device Compatibility</h3>
              <p>
                Access Seedr.cc from any device, whether you're on a PC,
                smartphone, or tablet.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" style={{ marginTop: "40px" }}>
          <h2>What Our Users Say</h2>
          <div style={{ marginTop: "20px" }}>
            <blockquote style={blockquoteStyle}>
              <p>
                "Seedr.cc is a game-changer! I can download and stream torrents
                without worrying about security. It's fast, reliable, and so
                easy to use."
              </p>
              <cite>- Alex J., Tech Enthusiast</cite>
            </blockquote>
            <blockquote style={blockquoteStyle}>
              <p>
                "I've been using Seedr for months, and it's been an amazing
                experience. The premium plans are worth every penny!"
              </p>
              <cite>- Sarah T., Freelancer</cite>
            </blockquote>
          </div>
        </section>

        {/* Call to Action */}
        <section id="cta" style={{ marginTop: "40px", textAlign: "center" }}>
          <h2>Get Started with Seedr.cc Today</h2>
          <p>
            Ready to experience seamless torrenting? Sign up now and enjoy the
            benefits of Seedr.cc!
          </p>
          <a
            href="https://www.seedr.cc/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#ffcc00",
              color: "#1e1e1e",
              textDecoration: "none",
              fontWeight: "bold",
              borderRadius: "5px",
              marginTop: "20px",
            }}
          >
            Visit Seedr.cc
          </a>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}

// Blockquote Styling
const blockquoteStyle = {
  backgroundColor: "#f9f9f9",
  borderLeft: "5px solid #ffcc00",
  margin: "20px 0",
  padding: "15px 20px",
  fontStyle: "italic",
};
