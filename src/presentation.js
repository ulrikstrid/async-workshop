// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text, Image } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={4} fit caps lineHeight={1} textColor="secondary">
            Async JavaScript
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Kort och <b>gott</b>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Callbacks
          </Heading>
          <Image src={require("./images/callbacks.png")} />
        </Slide>
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Image src={require("./images/callbacksWithError.png")} />
        </Slide>
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Promises
          </Heading>
          <Image src={require("./images/promises.png")} />
        </Slide>
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Image src={require("./images/promisesWithError.png")} />
        </Slide>
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            async/await
          </Heading>
          <Image src={require("./images/asyncAwait.png")} />
        </Slide>
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Image src={require("./images/asyncAwaitWithError.png")} />
        </Slide>
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            observables (RxJS)
          </Heading>
          <Image src={require("./images/observables.png")} />
        </Slide>
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Image src={require("./images/observablesWithError.png")} />
        </Slide>
      </Deck>
    );
  }
}
