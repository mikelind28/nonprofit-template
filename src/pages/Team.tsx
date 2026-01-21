import { Link } from "react-router";
import TeamCard from "../components/TeamCard";
import HeadingText from "../components/HeadingText";

export default function Team() {
  return (
    <>
      <HeadingText text={"Our Team"} />

      <div className="flex flex-col items-center *:mx-2 *:mb-2">
        <TeamCard
          imgColor={"bg-yellow-500/20"}
          employeeName={"Maecenas Malesuada"}
          employeeTitle={"Tempor Magna"}
          employeeBio={
            <p>
              Proin vulputate vestibulum ullamcorper. Mauris vitae leo eu lectus
              feugiat congue. Praesent sit amet turpis ac purus efficitur
              sollicitudin et gravida enim. Cras ex tellus, rutrum ac massa et,
              tristique maximus mi. Vestibulum egestas lacus eget ipsum
              pulvinar, in porta velit porta.
              <br />
              <br />
              Cras quis erat quis orci elementum sodales. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Quisque tortor turpis, placerat vitae justo in,
              bibendum dictum justo.
            </p>
          }
        />

        <TeamCard
          imgColor={"bg-emerald-500/20"}
          employeeName={"Ultricies Pulvinar"}
          employeeTitle={"Pellentesque Arcu Justo"}
          employeeBio={
            <p>
              Nam in convallis neque, sed imperdiet eros. Praesent eu orci vel
              tellus elementum pulvinar sit amet ac orci. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Pellentesque pretium nulla in nibh vulputate, a porta nisl
              euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur rhoncus ullamcorper gravida. Vestibulum pellentesque
              suscipit nisi.
            </p>
          }
        />

        <TeamCard
          imgColor={"bg-pink-500/20"}
          employeeName={"Suspendisse Faucibus"}
          employeeTitle={"Massa Accumsan"}
          employeeBio={
            <p>
              Suspendisse mattis ligula vel tempus sodales. Nullam scelerisque
              efficitur neque vehicula porta. Pellentesque nec lacus orci.
              Vestibulum non sodales mi. Integer placerat sapien ac lacus
              ullamcorper, vel convallis quam placerat. Ut tristique dapibus
              nisl sed imperdiet.
              <br />
              <br />
              Fusce sollicitudin augue quis dui lobortis, quis posuere ligula
              pellentesque. Vivamus auctor pellentesque velit, at malesuada ante
              faucibus ac. Cras eget rhoncus ligula.
            </p>
          }
        />
      </div>

      <p className="m-6 place-self-center">
        Want to join us? Check out our{" "}
        <Link to={{ pathname: "/careers" }} className="text-teal-800 underline">
          openings here
        </Link>
        .
      </p>
    </>
  );
}
