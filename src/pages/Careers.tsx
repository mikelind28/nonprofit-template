import CareerCard from "../components/CareerCard";
import HeadingText from "../components/HeadingText";

export default function Careers() {
  return (
    <div className="w-[95%] max-w-150 self-center">
      <HeadingText text={"Careers"} />

      <h2 className="m-4 text-lg">Open Positions:</h2>

      <CareerCard title={"Duis eu Mauris"} datePosted={new Date(2025, 8, 12)}>
        <p>
          Sed ullamcorper posuere laoreet. Aliquam semper tincidunt gravida.
          Quisque efficitur eget nisl eget luctus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec luctus ligula ut odio pharetra, ut
          ultricies nibh elementum. Phasellus facilisis lectus in magna semper,
          at scelerisque elit placerat. Praesent convallis luctus sem.
        </p>

        <ul className="my-4 flex list-disc flex-col gap-1 pl-4">
          <li>Cras id ante augue.</li>

          <li>Vestibulum iaculis fringilla ante eu ultrices.</li>

          <li>Vestibulum luctus sed sem sit amet dictum.</li>

          <li>
            Proin eget mauris auctor, venenatis justo in, lobortis orci. Cras
            dapibus nulla eget congue rhoncus.
          </li>
        </ul>

        <p>
          Duis eget tortor et turpis fringilla ultrices. Maecenas at lacus eget
          magna volutpat pellentesque at sed urna. Morbi et semper dolor, nec
          mollis ligula!
        </p>
      </CareerCard>

      <CareerCard title={"Placerat Auctor"} datePosted={new Date(2025, 9, 20)}>
        <p>
          Aenean dolor lorem, aliquam id vehicula non, interdum et sem. Integer
          viverra nec leo nec pulvinar. Nunc vitae velit libero. Curabitur
          lobortis ipsum non lacus vulputate, quis convallis urna lacinia. Proin
          placerat nisl id purus tempus, quis auctor metus pulvinar. Maecenas
          pharetra risus ante. Donec vel metus gravida, porttitor nisi dapibus,
          lobortis nulla. In dignissim libero ut ultrices auctor. Vestibulum
          congue dignissim tortor, ut cursus massa tempor in. Quisque eget
          pulvinar nisi. Duis sodales ac velit non tristique. Curabitur et
          aliquet lectus. Integer vel leo eu felis faucibus pretium in sed nisl.
        </p>

        <ul className="my-4 flex list-disc flex-col gap-1 pl-4">
          <li>
            Pellentesque tempor magna ac dui facilisis, sed viverra ex
            convallis.
          </li>

          <li>Nulla et velit placerat, efficitur odio ac, blandit nulla.</li>

          <li>
            Vivamus sapien ligula, suscipit id tempus non, commodo nec dui.
            Fusce pharetra lorem nec mi pharetra malesuada.
          </li>
        </ul>

        <p>
          Duis eget tortor et turpis fringilla ultrices. Maecenas at lacus eget
          magna volutpat pellentesque at sed urna. Morbi et semper dolor, nec
          mollis ligula!
        </p>
      </CareerCard>

      <CareerCard
        title={"Pellentesque sed Tellus"}
        datePosted={new Date(2025, 11, 5)}
      >
        <p>
          Praesent egestas egestas elit, quis placerat neque luctus ac. Nullam
          interdum nulla id posuere sodales. Vivamus scelerisque eleifend leo
          elementum finibus. Integer accumsan id magna nec maximus. Mauris purus
          massa, luctus a ex eget, pretium ultricies felis. Mauris id mauris
          feugiat, auctor quam ac, suscipit orci. Nullam libero lectus,
          scelerisque id sapien eu, consequat fringilla lorem. Cras laoreet
          lobortis lorem, sit amet elementum lectus semper quis. Quisque
          consectetur dui et odio ultrices elementum. Fusce ipsum leo, hendrerit
          in est vel, convallis lobortis diam. In suscipit odio eros, at lacinia
          dui commodo sed.
        </p>

        <ul className="my-4 flex list-disc flex-col gap-1 pl-4">
          <li>Duis non mi dictum, fringilla odio ut, gravida erat.</li>

          <li>
            Suspendisse blandit lectus non faucibus auctor. Duis volutpat nunc
            non sagittis posuere.
          </li>

          <li>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Mauris condimentum et sem quis euismod. Ut
            eget aliquam leo, ac vestibulum risus. Fusce ultrices dolor vitae
            libero blandit dignissim.
          </li>

          <li>Integer rutrum orci diam, ut fringilla magna mollis ac.</li>

          <li>Nam eu sapien in arcu posuere consectetur vitae ut tortor.</li>
        </ul>

        <p>
          Duis eget tortor et turpis fringilla ultrices. Maecenas at lacus eget
          magna volutpat pellentesque at sed urna. Morbi et semper dolor, nec
          mollis ligula!
        </p>
      </CareerCard>
    </div>
  );
}
