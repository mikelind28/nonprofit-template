import HeadingText from "../components/HeadingText";
import LightTextBubble from "../components/LightTextBubble";

export default function About() {
  return (
    <div>
      <HeadingText text={"About Us"} />

      <div className="m-2 flex justify-center">
        <LightTextBubble countDownComplete={true}>
          <p>
            Nulla facilisi. Aenean metus nisi, lacinia iaculis cursus quis,
            hendrerit in arcu. Integer eleifend ligula nibh, quis auctor nunc
            egestas a. Nunc eu posuere magna. Aenean aliquet pulvinar accumsan.
            Donec varius vel nisl id faucibus. Pellentesque posuere ut ligula ac
            egestas. Phasellus quis neque non est hendrerit laoreet.
          </p>
        </LightTextBubble>
      </div>

      {/* TODO: sign up for our newsletter here! */}

      <HeadingText text={"Contact Us"} />

      <div className="flex justify-center">
        <LightTextBubble countDownComplete={true}>
          <address className="m-4">
            <a
              href="https://maps.app.goo.gl/Mf9cqHGqtz9PwtqD6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Nonprofit Name</p>
              <p>123 Main Street</p>
              <p>Anytown, USA 54321</p>
            </a>

            <a href="mailto:nonprofit-name@example.com">
              nonprofit-name@example.com
            </a>
            <br />
            <a href="tel:+11234567890">+1 (123) 456‑7890</a>
          </address>

          <div className="m-4 flex w-fit items-center justify-center gap-6 rounded-sm bg-indigo-400 p-2">
            <a href="">
              <img src="./images/InBug-White.png" width="25" height="25" />
            </a>

            <a href="">
              <img
                src="./images/Facebook_Logo_Secondary.png"
                width="25"
                height="25"
              />
            </a>

            <a href="">
              <img
                src="./images/Instagram_Glyph_White.png"
                width="25"
                height="25"
              />
            </a>

            <a href="">
              <img src="./images/logo-white.png" width="25" height="25" />
            </a>
          </div>
        </LightTextBubble>
      </div>
    </div>
  );
}
