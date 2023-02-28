"use strict";
const {
  RefObject,
  useState,
  useEffect,
  FC,
  useRef,
  PropsWithChildren,
  CSSProperties,
  StrictMode,
} = React;
const { createRoot } = ReactDOM;
function useElementOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}
const AnimateIn = ({ from, to, children }) => {
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles = {
    transition: "600ms ease-in-out",
  };
  return React.createElement(
    "div",
    {
      ref: ref,
      style: onScreen
        ? Object.assign(Object.assign({}, defaultStyles), to)
        : Object.assign(Object.assign({}, defaultStyles), from),
    },
    children
  );
};
const FadeIn = ({ children }) =>
  React.createElement(
    AnimateIn,
    { from: { opacity: 0 }, to: { opacity: 1 } },
    children
  );
const FadeUp = ({ children }) =>
  React.createElement(
    AnimateIn,
    {
      from: { opacity: 0, translate: "0 2rem" },
      to: { opacity: 1, translate: "none" },
    },
    children
  );
const ScaleIn = ({ children }) =>
  React.createElement(
    AnimateIn,
    { from: { scale: "0" }, to: { scale: "1" } },
    children
  );
const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn,
};
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      Animate.FadeIn,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.FadeUp,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.ScaleIn,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.FadeIn,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.FadeUp,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.ScaleIn,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.FadeIn,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.FadeUp,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.ScaleIn,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.FadeIn,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.FadeUp,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.ScaleIn,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.FadeIn,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.FadeUp,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.ScaleIn,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.FadeIn,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.FadeUp,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    ),
    React.createElement(
      Animate.ScaleIn,
      null,
      React.createElement("h1", null, "Hello World"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi libero ut, tenetur fugit rerum distinctio non recusandae expedita ipsum!"
      )
    )
  );
}
const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
  React.createElement(StrictMode, null, React.createElement(App, null))
);
