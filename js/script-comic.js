function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}const { Component } = React;

const StyledButton = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: 1.3rem;
  background: ${props => props.background || "transparent"};
  border-radius: 3px;
  display: inline-block;
  color: #ffffff;
  cursor: pointer;
  transition: 0.25s;
  ${props => props.italic && "font-style: italic;"} 
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;

function Button(props) {
  return /*#__PURE__*/(
    React.createElement(StyledButton, _extends({ onClick: props.handleClick }, props),
    props.children));


}


const Tile1Container = styled.div`
  box-sizing: border-box;
  width: 98%;
  max-height: 165px;
  height: 30vw;
  position: relative;
  overflow: hidden;
  margin: 1%;
  background: #202b3d;
  border: 5px solid black;
  animation-play-state: paused;
  cursor: pointer;

  div,
  img {
    position: absolute;
    height: 100%;
    top: 0;
    left: -22%;
    width: 140%;
    animation-play-state: inherit;
  }

  .figures {
    transform: translate(0%, 20%);
  }

  .shadows {
    transform: translate(0%, 60%) scale(1);
  }

  .text {
    transform: translate(0%, 40%);
    opacity: 0;
  }

  &.animated {
    .figures {
      animation: tile1-figures 5s forwards;
    }

    @keyframes tile1-figures {
      0% {
        transform: translate(0%, 20%);
      }
      70%,
      100% {
        transform: translate(0%, 0%);
      }
    }

    .shadows {
      animation: tile1-shadows 5s forwards;
    }

    @keyframes tile1-shadows {
      0% {
        transform: translate(0%, 60%) scale(1);
      }
      70%,
      100% {
        transform: translate(0%, 0%) scale(1);
      }
    }

    .text {
      animation: tile1-text 5s forwards;
    }

    @keyframes tile1-text {
      0% {
        transform: translate(0%, 40%);
        opacity: 0;
      }
      70% {
        opacity: 1;
      }
      100% {
        transform: translate(0%, 0%);
        opacity: 1;
      }
    }

    .highlight {
      top: 0;
      left: 0;
      background: linear-gradient(
        to bottom,
        rgba(1, 20, 23, 0) 0%,
        rgba(73, 122, 138, 0) 37%,
        rgba(240, 220, 93, 0.12) 50%,
        rgba(240, 220, 93, 0) 75%
      );
      background-size: 300%;
      animation: tile1-highlight 5s infinite;
    }

    @keyframes tile1-highlight {
      0% {
        background-position: top;
      }
      100% {
        background-position: bottom;
      }
    }
  }
`;

const figures = /*#__PURE__*/
React.createElement("img", {
  src: "img/1-1.svg",
  className: "figures",
});



const shadows = /*#__PURE__*/
React.createElement("img", {
  src: "img/1-2.svg",
  className: "shadows"});



const text = /*#__PURE__*/
React.createElement("img", {
  src: "img/1-3.svg",
  className: "text" });



class Tile1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "",
      animation: props.animation };


    this.playAnimation = this.playAnimation.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.animation !== this.state.animation) {
      this.setState(prevState => {
        prevState.animation = nextProps;
        prevState.playState = "";
        return prevState;
      });
    }
  }

  playAnimation() {
    this.setState(prevState => prevState.playState = "animated");
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(Tile1Container, {
        className: this.state.playState,
        onClick: this.playAnimation },

      shadows,
      figures,
      text,
      React.createElement("div", { className: "highlight" })));


  }}


const Tile2Container = styled.div`
  box-sizing: border-box;
  width: 98%;
  overflow: hidden;
  position: relative;
  margin: 1%;
  animation-play-state: paused;
  border: 5px solid black;
  cursor: pointer;

  img {
    display: block;
  }

  .scene {
    position: relative;
    width: 100%;
    transform: translate(-130%, 0%) scale(2);
  }
  
  .BG {
	position: absolute;
    bottom: 0;
    width: 100%;
  }

  &.animated {
    .scene {
      animation: 1s tile2-move-cover forwards;
    }
  }

  @keyframes tile2-move-cover {
    0% {
      transform: translate(-130%, 0%) scale(2);
    }
    100% {
      transform: translate(0%, 0%) scale(1);
    }
  }
`;

const scene = /*#__PURE__*/React.createElement("img", { src: "img/2-1.svg", className: "scene" });

const BG = /*#__PURE__*/React.createElement("img", {src: "img/2-2.svg", className: "BG" });

class Tile2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "",
      animation: props.animation };

    this.launchAnimation = this.launchAnimation.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.animation !== this.state.animation) {
      this.setState(prevState => {
        prevState.animation = nextProps;
        prevState.playState = "";
        return prevState;
      });
    }
  }

  launchAnimation() {
    this.setState(prevState => {
      prevState.playState = "animated";
      return prevState;
    });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(Tile2Container, {
        onClick: this.launchAnimation,
        className: this.state.playState },

      BG, scene));


  }}


const Tile3Container = styled.div`
  width: 44%;
  margin: 1% 0 1% 1%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  border: 5px solid black;
  float: left;
  cursor: pointer;


  img {
    display: block;
  }

  @media (max-width: 450px) {
    width: 98%;
    margin: 1%;
  }
  
  .BG5 {
	position: absolute;
    bottom: 0;
    width: 100%;
  }

  .figures {
    box-sizing: border-box;
    width: 56%;
    transform: translate(45%, 48%) scale(2);
  }

  &.animated {
    .figures {
      animation: tile2-figures 1s forwards;
    }
  }

  @keyframes tile2-figures {
    0% {
      transform: translate(45%, 48%) scale(2);
    }
    100% {
      transform: translate(45%, -45%) scale(2);
    }
  }

  .text {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  &.animated {
    .text {
      animation: title2-text 1s 1s forwards;
    }
    @keyframes title2-text {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const figures3 = /*#__PURE__*/React.createElement("img", { src: "img/3-1.svg", className: "figures" });

const text3 = /*#__PURE__*/React.createElement("img", { src: "img/3-2.svg", className: "text" });

const BG5 = /*#__PURE__*/React.createElement("img", { src: "img/3-3.svg", className: "BG5" });

class Tile3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "",
      animation: props.animation };

    this.triggerAnimation = this.triggerAnimation.bind(this);
  }

  triggerAnimation() {
    this.setState(prevState => prevState.playState = "animated");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.animation !== this.state.animation) {
      this.setState(prevState => {
        prevState.animation = nextProps;
        prevState.playState = "";
        return prevState;
      });
    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(Tile3Container, {
        className: this.state.playState,
        onClick: this.triggerAnimation },
	
	BG5,
    figures3,
    text3));


  }}


const Tile4Container = styled.div`
  width: 53%;
  margin: 1%;
  position: relative;
  float: right;
  overflow: hidden;
  border: 5px solid black;
  box-sizing: border-box;
  cursor: pointer;

  img {
    display: block;
  }

  @media (max-width: 450px) {
    width: 98%;
    margin: 1%;
  }

  .ground {
    position: absolute;
    bottom: 0;
    width: 110%;
	transform: translate(0%, 1%);
  }
  
    &.animated {
    .ground {
      animation: tile-4-ground 3s forwards;
    }
    @keyframes tile-4-ground {
      0% {
        transform: translate(0%, 1%);
      }
      40% {
        transform: translate(0%, 1%);
      }
	  80% {
        transform: translate(0%, 0%) scale(3);
      }
	  100% {
        transform: translate(0%, 0%) scale(3);
      }
    }
  }

  .hero {
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0%;
    transform: translate(100%, 0%);
  }

  &.animated {
    .hero {
      animation: tile-4-hero 3s forwards;
    }
    @keyframes tile-4-hero {
      0% {
        transform: translate(100%, 0%) (-10deg);
      }
      40% {
        transform: translate(0%, 0%) rotate(-10deg);
      }
	  80% {
        transform: translate(50%, -15%) scale(3);
      }
	  100% {
        transform: translate(50%, -15%) scale(3);
      }
    }
  }

  .enemies {
	width: 100%;
	right: 0%;
    position: relative;
    transform: translate(100%, 0%);
  }

  &.animated {
    .enemies {
      animation: tile-4-enemies 3s forwards;
    }
    @keyframes tile-4-enemies {
      0% {
        transform: translate(100%, 0%) (-10deg);
      }
      40% {
        transform: translate(0%, 0%) rotate(-10deg);
      }
	  80% {
        transform: translate(50%, -15%) scale(3);
      }
	  100% {
        transform: translate(75%, -15%) scale(3);
      }
    }
  }
  
    .text {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  &.animated {
    .text {
      animation: title2-text 1s 3s forwards;
    }
    @keyframes title2-text {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const ground = /*#__PURE__*/React.createElement("img", { src: "img/4-4.svg", className: "ground" });

const hero = /*#__PURE__*/React.createElement("img", { src: "img/4-1.svg", className: "hero" });

const enemies = /*#__PURE__*/React.createElement("img", { src: "img/4-2.svg", className: "enemies" });

const text4 = /*#__PURE__*/React.createElement("img", { src: "img/4-3.svg", className: "text" });

class Tile4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "",
      animation: props.animation };

    this.triggerAnimation = this.triggerAnimation.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.animation !== this.state.animation) {
      this.setState(prevState => {
        prevState.animation = nextProps;
        prevState.playState = "";
        return prevState;
      });
    }
  }

  triggerAnimation() {
    this.setState(prevState => prevState.playState = "animated");
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(Tile4Container, {
        className: this.state.playState,
        onClick: this.triggerAnimation },

      ground,
      hero,
      enemies,
	  text4));


  }}


const Tile5Container = styled.div`
  box-sizing: border-box;
  width: 53%;
  float: right;
  margin: 1% 1% 1% 0;
  border: 5px solid black;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 98%;
    margin: 1%;
  }

  .ground {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-80%, -80%) scale(3);
  }



  &.animated {
    .ground {
      animation: tile-5-ground 4s forwards ease-in;
    }

    @keyframes tile-5-ground {
      0% {
        transform: translate(-80%, -80%) scale(3);
      }
      40% {
        transform: translate(50%, 50%) scale(3);
      }
	   80% {
        transform: translate(0%, 0%) scale(1);
      }
	  100% {
        transform: translate(0%, 0%) scale(1);
      }
    }
  }
  
    .figures {
    bottom: 0;
    left: 0;
  }



  &.animated {
    .figures {
      animation: tile-5-figures 4s forwards ease-in;
    }

    @keyframes tile-5-figures {
		0% {
		transform: translate(80%, 100%) scale(1);
		}
		40% {
		transform: translate(80%, 100%) scale(1);
		}
      80% {
		transform: translate(80%, 100%) scale(1);
		}
	   100% {
        transform: translate(0%, -5%) scale(1);
      }
    }
  }

  .zap {
    position: absolute;
    left: 0;
    bottom: 1%;
    opacity: 0;
  }

  &.animated {
    .zap {
      animation: tile-5-zap 1s 4s forwards ease-in;
    }
    @keyframes tile-5-zap {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const ground5 = /*#__PURE__*/React.createElement("img", { src: "img/5-1.svg", className: "ground" });

const figures5 = /*#__PURE__*/React.createElement("img", { src: "img/5-2.svg", className: "figures" });

const zap5 = /*#__PURE__*/React.createElement("img", { src: "img/5-3.svg", className: "zap" });

class Tile5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "",
      animation: props.animation };

    this.launchAnimation = this.launchAnimation.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.animation !== this.state.animation) {
      this.setState(prevState => {
        prevState.animation = nextProps;
        prevState.playState = "";
        return prevState;
      });
    }
  }

  launchAnimation() {
    this.setState(prevState => {
      prevState.playState = "animated";
      return prevState;
    });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(Tile5Container, {
        onClick: this.launchAnimation,
        className: this.state.playState },

      ground5,
      figures5,
      zap5));


  }}
  
  
  
  const Tile6Container = styled.div`
  width: 37%;
  margin: 1% 0 1% 1%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  border: 5px solid black;
  float: left;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 98%;
    margin: 1%;
  }

  .ground {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0%, 0%) scale(1.1);
  }



  &.animated {
    .ground {
      animation: tile-6-ground forwards ease-in;
    }

    @keyframes tile-6-ground {
      0% {
        transform: translate(0%, -5%) scale(1);
      }
    }
  }
  
  
  
  
    .figures {
    bottom: 0;
    left: 0;
	opacity: 0;
  }



  &.animated {
    .figures {
      animation: tile-6-figures 4s forwards ease-in;
    }

    @keyframes tile-6-figures {
		0% {
		transform: translate(0%, -5%) scale(1);
		}
		40% {
		transform: translate(0%, -5%) scale(1);
		}
		80% {
		transform: translate(0%, -5%) scale(1);
		opacity: 0;
		}
		100% {
		opacity: 1;
        transform: translate(0%, -5%) scale(1);
      }
    }
  }
  
  

  .zap {
    position: absolute;
    left: 0;
    bottom: 1%;
    opacity: 1;
	transform: translate(0%, 0%) scale(1.1);
  }

  &.animated {
    .zap {
      animation: tile-6-zap 4s forwards ease-in;
    }
    @keyframes tile-6-zap {
      0% {
        opacity: 1;
      }
	  40% {
        opacity: 1;
      }
      60% {
        opacity: 0;
      }
	  100% {
        opacity: 0;
      }
    }
  }
  
  
    .hand {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0%, 80%);
  }



  &.animated {
    .hand {
      animation: tile-6-hand 4s forwards ease-in;
    }

    @keyframes tile-6-hand {
      0% {
        transform: translate(0%, 80%);
      }
      20% {
        transform: translate(0%, 0%);
      }
	   50% {
        transform: translate(-100%, 65%);
      }
	  100% {
        transform: translate(-100%, 65%);
      }
    }
  }
  
  
  
  .bottle {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0%, 80%);
  }



  &.animated {
    .bottle {
      animation: tile-6-bottle 4s forwards ease-in;
    }

    @keyframes tile-6-bottle {
      0% {
        transform: translate(0%, 80%);
      }
	  20% {
        transform: translate(0%, 0%) scale(1);
      }
      35% {
        transform: translate(0%, 0%) scale(1);
      }
	   80% {
        transform: translate(0%, 0%) scale(0.5);
      }
	  90% {
        transform: translate(0%, 0%) scale(0.5);
		opacity: 0;
      }
	  100% {
        transform: translate(0%, 0%) scale(0.5);
		opacity: 0;
      }
    }
  }
  
  
  
  
    .fingers {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0%, 80%);
  }



  &.animated {
    .fingers {
      animation: tile-6-fingers 4s forwards ease-in;
    }

    @keyframes tile-6-fingers {
      0% {
        transform: translate(0%, 80%);
      }
	  20% {
        transform: translate(0%, 0%);
      }
      50% {
        transform: translate(-100%, 65%);
      }
	  100% {
        transform: translate(-100%, 65%);
      }
    }
  }
  
  
  
`;

const ground6 = /*#__PURE__*/React.createElement("img", { src: "img/6-1.svg", className: "ground" });

const figures6 = /*#__PURE__*/React.createElement("img", { src: "img/6-2.svg", className: "figures" });

const zap6 = /*#__PURE__*/React.createElement("img", { src: "img/6-3.svg", className: "zap" });

const hand6 = /*#__PURE__*/React.createElement("img", { src: "img/6-4.svg", className: "hand" });

const bottle6 = /*#__PURE__*/React.createElement("img", { src: "img/6-5.svg", className: "bottle" });

const fingers6 = /*#__PURE__*/React.createElement("img", { src: "img/6-6.svg", className: "fingers" });

class Tile6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "",
      animation: props.animation };

    this.launchAnimation = this.launchAnimation.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.animation !== this.state.animation) {
      this.setState(prevState => {
        prevState.animation = nextProps;
        prevState.playState = "";
        return prevState;
      });
    }
  }

  launchAnimation() {
    this.setState(prevState => {
      prevState.playState = "animated";
      return prevState;
    });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(Tile6Container, {
        onClick: this.launchAnimation,
        className: this.state.playState },

      ground6,
      figures6,
      zap6,
	  hand6,
	  bottle6,
	  fingers6));


  }}
  
  
  
  
  
  
  const Tile7Container = styled.div`
  width: 60%;
  margin: 1%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  border: 5px solid black;
  float: right;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 98%;
    margin: 1%;
  }

  .ground {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0%, 0%);
  }

  &.animated {
    .ground {
      animation: tile-7-ground forwards ease-in;
    }

    @keyframes tile-7-ground {
      0% {
        transform: translate(0%, 0%);
      }
    }
  }



    .figures {
    bottom: 0;
    left: 0;
	transform: translate(0%, 0%);
  }



  &.animated {
    .figures {
      animation: tile-7-figures 1s forwards ease-in;
    }

    @keyframes tile-7-figures {
		0% {
		transform: translate(0%, 0%);
		}
		100% {
		transform: translate(0%, -38%);
		}
    }
  }
  
  
  .bushes {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0%, 0%);
  }

  &.animated {
    .bushes {
      animation: tile-7-bushes forwards ease-in;
    }

    @keyframes tile-7-bushes {
      0% {
        transform: translate(0%, 0%);
      }
    }
  }
  
  

  .zap {
    position: absolute;
    left: 0;
    bottom: 1%;
    opacity: 0;
  }

  &.animated {
    .zap {
      animation: tile-7-zap 1s 1s forwards ease-in;
    }
    @keyframes tile-7-zap {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  
  
   .ops {
    position: absolute;
    left: 0;
    bottom: 1%;
    opacity: 0;
  }

  &.animated {
    .ops {
      animation: tile-7-zap 1s 1s forwards ease-in;
    }
    @keyframes tile-7-ops {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  
  
`;

const ground7 = /*#__PURE__*/React.createElement("img", { src: "img/7-1.svg", className: "ground" });

const figures7 = /*#__PURE__*/React.createElement("img", { src: "img/7-2.svg", className: "figures" });

const bushes7 = /*#__PURE__*/React.createElement("img", { src: "img/7-3.svg", className: "bushes" });

const zap7 = /*#__PURE__*/React.createElement("img", { src: "img/7-4.svg", className: "zap" });

const ops7 = /*#__PURE__*/React.createElement("img", { src: "img/7-5.svg", className: "ops" });

class Tile7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "",
      animation: props.animation };

    this.launchAnimation = this.launchAnimation.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.animation !== this.state.animation) {
      this.setState(prevState => {
        prevState.animation = nextProps;
        prevState.playState = "";
        return prevState;
      });
    }
  }

  launchAnimation() {
    this.setState(prevState => {
      prevState.playState = "animated";
      return prevState;
    });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(Tile7Container, {
        onClick: this.launchAnimation,
        className: this.state.playState },

      ground7,
      figures7,
	  bushes7,
      zap7,
	  ops7));


  }}
  
  
  
  const Tile8Container = styled.div`
  box-sizing: border-box;
  width: 60%;
  float: left;
  margin: 1% 1% 0% 1% ;
  border: 5px solid black;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 98%;
    margin: 1%;
  }

  .ground {
    position: absolute;
    bottom: 0%;
    left: 0;
    transform: translate(0%, 0%);
  }

  
    .figures {
    bottom: 0;
    left: 0;
	opacity: 0;
  }



  &.animated {
    .figures {
      animation: tile-8-figures 4s forwards ease-in;
    }

    @keyframes tile-8-figures {
		 0% {
        transform: translate(0%, 0%);
		opacity: 0;
      }
      40% {
        transform: translate(0%, 0%);
		opacity: 1;
      }
	   80% {
        transform: translate(0%, 0%);
		opacity: 1;
      }
	  100% {
        transform: translate(0%, 0%);
		opacity: 1;
      }
    }
  }

  .zap {
    position: absolute;
    left: 0;
    bottom: 1%;
    opacity: 0;
  }

  &.animated {
    .zap {
      animation: tile-8-zap 4s forwards ease-in;
    }
    @keyframes tile-8-zap {
       0% {
        transform: translate(0%, 0%);
		opacity: 0;
      }
      40% {
        transform: translate(0%, 0%);
		opacity: 0;
      }
	   80% {
        transform: translate(0%, 0%);
		opacity: 1;
      }
	  100% {
        transform: translate(0%, 0%);
		opacity: 1;
      }
    }
  }
`;

const ground8 = /*#__PURE__*/React.createElement("img", { src: "img/8-1.svg", className: "ground" });

const figures8 = /*#__PURE__*/React.createElement("img", { src: "img/8-2.svg", className: "figures" });

const zap8 = /*#__PURE__*/React.createElement("img", { src: "img/8-3.svg", className: "zap" });

class Tile8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "",
      animation: props.animation };

    this.launchAnimation = this.launchAnimation.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.animation !== this.state.animation) {
      this.setState(prevState => {
        prevState.animation = nextProps;
        prevState.playState = "";
        return prevState;
      });
    }
  }

  launchAnimation() {
    this.setState(prevState => {
      prevState.playState = "animated";
      return prevState;
    });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(Tile8Container, {
        onClick: this.launchAnimation,
        className: this.state.playState },

      ground8, figures8, zap8));


  }}
  
 
  
  
  const Tile9Container = styled.div`
  box-sizing: border-box;
  width: 37%;
  float: right;
  margin: 1% 1% 0% 0;
  border: 5px solid black;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 98%;
    margin: 1%;
  }

  .ground {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0%, 0%);
  }



  &.animated {
    .ground {
      animation: tile-9-ground 4s forwards ease-in;
    }

    @keyframes tile-9-ground {
      0% {
        transform: translate(0%, 0%);
      }
      40% {
        transform: translate(0%, 0%);
      }
	   80% {
        transform: translate(0%, 0%);
      }
	  100% {
        transform: translate(0%, 0%);
      }
    }
  }
  
    .figures {
    bottom: 0;
    left: 0;
  }



  &.animated {
    .figures {
      animation: tile-9-figures 4s forwards ease-in;
    }

    @keyframes tile-9-figures {
		0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

`;

const ground9 = /*#__PURE__*/React.createElement("img", { src: "img/9-1.svg", className: "ground" });

const figures9 = /*#__PURE__*/React.createElement("img", { src: "img/9-2.svg", className: "figures" });

class Tile9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "",
      animation: props.animation };

    this.launchAnimation = this.launchAnimation.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.animation !== this.state.animation) {
      this.setState(prevState => {
        prevState.animation = nextProps;
        prevState.playState = "";
        return prevState;
      });
    }
  }

  launchAnimation() {
    this.setState(prevState => {
      prevState.playState = "animated";
      return prevState;
    });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(Tile9Container, {
        onClick: this.launchAnimation,
        className: this.state.playState },

      ground9,
      figures9));


  }}
  
  
  
  
  
  const Tile10Container = styled.div`
  box-sizing: border-box;
  width: 98%;
  overflow: hidden;
  position: relative;
  margin: 1%;
  animation-play-state: paused;
  border: 5px solid black;
  cursor: pointer;

  img {
    display: block;
  }

  .scene {
    position: relative;
    width: 100%;
    transform: translate(-130%, 0%);
  }
  
  .BG {
	position: absolute;
    bottom: 0;
    width: 100%;
  }

  &.animated {
    .scene {
      animation: 1s tile10-move-cover forwards;
    }
  }

  @keyframes tile10-move-cover {
    0% {
      transform: translate(-130%, 0%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }


    .figures {
	position: absolute;
    bottom: 0;
    left: 0;
	opacity: 0;
  }



  &.animated {
    .figures {
      animation: tile-10-figures 3s forwards ease-in;
    }

    @keyframes tile-10-figures {
		0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  
  
`;

const scene10 = /*#__PURE__*/React.createElement("img", { src: "img/10-2.svg", className: "scene" });

const BG10 = /*#__PURE__*/React.createElement("img", {src: "img/10-1.svg", className: "BG" });

const figures10 = /*#__PURE__*/React.createElement("img", {src: "img/10-3.svg", className: "figures" });

class Tile10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "",
      animation: props.animation };

    this.launchAnimation = this.launchAnimation.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.animation !== this.state.animation) {
      this.setState(prevState => {
        prevState.animation = nextProps;
        prevState.playState = "";
        return prevState;
      });
    }
  }

  launchAnimation() {
    this.setState(prevState => {
      prevState.playState = "animated";
      return prevState;
    });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(Tile10Container, {
        onClick: this.launchAnimation,
        className: this.state.playState },

      BG10, figures10, scene10));


  }}
  
  
  


class App extends Component {
  constructor(props) {
    super(props);_defineProperty(this, "resetAnimation",




    () => {
      this.setState(prevState => prevState.animation++);
    });this.state = { animation: 1 };}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { style: { margin: "auto", maxWidth: "550px" } }, /*#__PURE__*/
      React.createElement("h1", { style: { textAlign: "center" } }, "Click Tile to Launch Animation"), /*#__PURE__*/
	  React.createElement(Tile8, { animation: this.state.animation }), /*#__PURE__*/
	  React.createElement(Tile9, { animation: this.state.animation }), /*#__PURE__*/
	  React.createElement(Tile6, { animation: this.state.animation }), /*#__PURE__*/
	  React.createElement(Tile7, { animation: this.state.animation }), /*#__PURE__*/
      React.createElement(Tile1, { animation: this.state.animation }), /*#__PURE__*/
	  React.createElement(Tile10, { animation: this.state.animation }), /*#__PURE__*/
      React.createElement(Tile2, { animation: this.state.animation }), /*#__PURE__*/
      React.createElement(Tile3, { animation: this.state.animation }), /*#__PURE__*/
      React.createElement(Tile4, { animation: this.state.animation }), /*#__PURE__*/
      React.createElement(Tile5, { animation: this.state.animation }), /*#__PURE__*/
      React.createElement("div", { style: { textAlign: "center", padding: "1rem", clear: "both" } }, /*#__PURE__*/
      React.createElement(Button, { onClick: this.resetAnimation }, "Reset"))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));