import React, { useState } from "react";
import "./Scroll.css";
import { useSpring, animated } from "react-spring";
import { Waypoint } from "react-waypoint";

export default function Scroll() {
  const [toggleTxt, settoggleTxt] = useState(false);

  const animation = useSpring({
    opacity: toggleTxt ? 1 : 0,
    transform: toggleTxt ? "translateX(0)" : "translateX(-50%)",
  });

  return (
    <div>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        commodi consequuntur delectus error est perspiciatis sit ut veritatis
        voluptatem voluptatum? Ad consequuntur, deserunt dicta eveniet hic iure
        iusto libero, molestias natus non porro quae saepe tempora vel vitae! A
        ad, alias animi aperiam architecto autem beatae cumque deleniti
        doloremque dolorum ducimus ex excepturi iste labore libero modi nihil
        pariatur perspiciatis possimus quidem quo reiciendis totam voluptatum?
        Accusantium adipisci amet beatae consequatur cupiditate dicta dolore
        dolorem enim et fuga maiores placeat quasi quos vero, voluptas? Ad alias
        aliquam amet beatae blanditiis consequatur culpa deserunt dolores error
        exercitationem facilis harum id illo in laborum molestias nostrum
        pariatur porro, possimus qui quia quidem quis quisquam recusandae
        reiciendis rem repellat similique soluta suscipit totam unde ut vero
        voluptatum? Aliquam consequuntur culpa eaque eum harum illum, impedit
        itaque maiores repellat saepe. Adipisci architecto asperiores earum
        omnis perferendis provident quaerat repellat sit. Error, explicabo
        inventore quaerat sit sunt suscipit tenetur unde? Fuga perferendis quam
        similique. Accusamus accusantium aspernatur assumenda aut beatae
        blanditiis commodi cumque cupiditate, debitis eum exercitationem harum
        maxime molestiae nesciunt obcaecati odit pariatur provident, quam quia
        quisquam rerum saepe sit veritatis voluptate voluptatem voluptatibus
        voluptatum? Architecto cupiditate ex laborum neque qui sapiente tempora
        voluptatibus?
      </p>
      <Waypoint
        bottomOffset={"30%"}
        onEnter={() => {
          if (!toggleTxt) {
            settoggleTxt(true);
          }
        }}
      />
      <animated.div style={animation} className={"cta-section"}>
        <h2>N'en ratez pas une miette</h2>
        <form>
          <label htmlFor="email">Inscrivez-vous a la newsletter</label>
          <input type="email" id="email" />
        </form>
      </animated.div>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        commodi consequuntur delectus error est perspiciatis sit ut veritatis
        voluptatem voluptatum? Ad consequuntur, deserunt dicta eveniet hic iure
        iusto libero, molestias natus non porro quae saepe tempora vel vitae! A
        ad, alias animi aperiam architecto autem beatae cumque deleniti
        doloremque dolorum ducimus ex excepturi iste labore libero modi nihil
        pariatur perspiciatis possimus quidem quo reiciendis totam voluptatum?
        Accusantium adipisci amet beatae consequatur cupiditate dicta dolore
        dolorem enim et fuga maiores placeat quasi quos vero, voluptas? Ad alias
        aliquam amet beatae blanditiis consequatur culpa deserunt dolores error
        exercitationem facilis harum id illo in laborum molestias nostrum
        pariatur porro, possimus qui quia quidem quis quisquam recusandae
        reiciendis rem repellat similique soluta suscipit totam unde ut vero
        voluptatum? Aliquam consequuntur culpa eaque eum harum illum, impedit
        itaque maiores repellat saepe. Adipisci architecto asperiores earum
        omnis perferendis provident quaerat repellat sit. Error, explicabo
        inventore quaerat sit sunt suscipit tenetur unde? Fuga perferendis quam
        similique. Accusamus accusantium aspernatur assumenda aut beatae
        blanditiis commodi cumque cupiditate, debitis eum exercitationem harum
        maxime molestiae nesciunt obcaecati odit pariatur provident, quam quia
        quisquam rerum saepe sit veritatis voluptate voluptatem voluptatibus
        voluptatum? Architecto cupiditate ex laborum neque qui sapiente tempora
        voluptatibus?
      </p>
    </div>
  );
}
