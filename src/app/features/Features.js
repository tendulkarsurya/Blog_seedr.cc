import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";

export default function Features() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <section id="features">
          <h1>Features of Seedr.cc</h1>
          <p>
            Seedr.cc offers a variety of features designed to make torrenting
            safe, fast, and efficient. Here are some of the key features that
            set Seedr apart from other torrenting platforms:
          </p>

          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
            {/* Feature 1: Fast Downloads */}
            <div style={{ flex: "1", minWidth: "300px", marginBottom: "30px" }}>
              <Image
                src="/images/fast-downloads.jpg"
                alt="Fast Downloads"
                width={400}
                height={250}
                style={{ borderRadius: "10px", marginBottom: "15px" }}
              />
              <h3>Fast Downloads</h3>
              <p>
                With Seedr.cc, enjoy fast and efficient downloads directly to
                your cloud storage. No more waiting for slow torrents to
                download on your device. Seedr delivers lightning-fast speeds,
                allowing you to start watching or using your downloaded content
                almost immediately.
              </p>
            </div>

            {/* Feature 2: Secure Connection */}
            <div style={{ flex: "1", minWidth: "300px", marginBottom: "30px" }}>
              <Image
                src="/images/secure-connection.jpg"
                alt="Secure Connection"
                width={400}
                height={250}
                style={{ borderRadius: "10px", marginBottom: "15px" }}
              />
              <h3>Secure and Private</h3>
              <p>
                Seedr.cc places a strong emphasis on security. All downloads are
                encrypted, ensuring your data is safe from prying eyes. With
                Seedr, you can torrent privately, without worrying about
                exposing your IP address or risking your personal information.
              </p>
            </div>

            {/* Feature 3: Device Compatibility */}
            <div style={{ flex: "1", minWidth: "300px", marginBottom: "30px" }}>
              <Image
                src="/images/device-compatibility.jpg"
                alt="Device Compatibility"
                width={400}
                height={250}
                style={{ borderRadius: "10px", marginBottom: "15px" }}
              />
              <h3>Device Compatibility</h3>
              <p>
                No matter where you are or what device you're using, Seedr is
                fully compatible with a wide range of devices. Whether you're on
                a desktop, laptop, tablet, or smartphone, Seedr ensures you can
                manage and stream your content on any device at your
                convenience.
              </p>
            </div>

            {/* Feature 4: Instant Streaming */}
            <div style={{ flex: "1", minWidth: "300px", marginBottom: "30px" }}>
              <Image
                src="/images/instant-streaming.jpg"
                alt="Instant Streaming"
                width={400}
                height={250}
                style={{ borderRadius: "10px", marginBottom: "15px" }}
              />
              <h3>Instant Streaming</h3>
              <p>
                Seedr not only lets you download torrents but also stream them
                instantly. You can start watching your favorite movies and shows
                without having to wait for the entire file to download. Enjoy
                seamless streaming directly from the cloud to your device.
              </p>
            </div>

            {/* Feature 5: Easy User Interface */}
            <div style={{ flex: "1", minWidth: "300px", marginBottom: "30px" }}>
              <Image
                src="/images/easy-interface.jpg"
                alt="Easy Interface"
                width={400}
                height={250}
                style={{ borderRadius: "10px", marginBottom: "15px" }}
              />
              <h3>User-Friendly Interface</h3>
              <p>
                Seedr.cc is designed with simplicity in mind. With its
                easy-to-navigate interface, even a beginner can start torrenting
                in no time. Uploading torrents, managing downloads, and
                streaming content are all made easy with just a few clicks.
              </p>
            </div>

            {/* Feature 6: Premium Plans */}
            <div style={{ flex: "1", minWidth: "300px", marginBottom: "30px" }}>
              <Image
                src="/images/premium-plans.jpg"
                alt="Premium Plans"
                width={400}
                height={250}
                style={{ borderRadius: "10px", marginBottom: "15px" }}
              />
              <h3>Premium Plans for Power Users</h3>
              <p>
                Seedr.cc offers premium plans for those who want more out of
                their torrenting experience. With higher speeds, more storage,
                and additional features, the premium plans ensure you can enjoy
                even more perks and flexibility. Whether you're a casual user or
                a power user, Seedr has something for everyone.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
