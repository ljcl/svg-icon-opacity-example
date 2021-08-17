import "./styles.css";

const StarHalfIcon = (props) => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28.0215 7.05182C28.0135 7.03265 27.9863 7.03265 27.9784 7.05182L21.8336 21.8255C21.8303 21.8336 21.8227 21.8391 21.814 21.8398L5.86452 23.1185C5.84383 23.1201 5.83544 23.146 5.8512 23.1595L18.003 33.5688C18.0096 33.5744 18.0125 33.5834 18.0105 33.5919L14.2979 49.1558C14.2931 49.176 14.3151 49.192 14.3328 49.1812L27.9878 40.8408L28.0215 7.05182Z"
      // OVER HERE - defaulting the opacity to 1
      fill-opacity="var(--star-fill-opacity, 1)"
      fill="currentColor"
    />
    <path
      d="M28.0001 7L34.1718 21.8387L50.1914 23.1229L37.9862 33.578L41.7151 49.2104L28.0001 40.8333L14.2851 49.2104L18.014 33.578L5.80876 23.1229L21.8283 21.8387L28.0001 7Z"
      // All other colours are inherited from the
      // rest of the code, instead of being set
      stroke="currentColor"
      stroke-width="4"
      stroke-linejoin="round"
    />
  </svg>
);

const App = () => (
  <div className="App">
    <StarHalfIcon />
    <p>
      Black is replaced with a special <code>currentColor</code> property in the
      icon pipeline.
    </p>
    <p style={{ color: "blue" }}>
      This lets devs easily change the colour to fit the scenario.{" "}
      <StarHalfIcon />
    </p>
    <p>
      Adding a second colour might increase complexity, but <em>if</em> figma
      lets us set <code>stroke-fill-opacity</code>.
    </p>
    <p style={{ color: "red" }}>
      Devs could then customise that opacity (and keep using the original
      colour) to suite the usecase.
    </p>
    <p style={{ color: "red" }}>
      <StarHalfIcon style={{ "--star-fill-opacity": "0.75" }} />
      <StarHalfIcon style={{ "--star-fill-opacity": "0.5" }} />
      <StarHalfIcon style={{ "--star-fill-opacity": "0.25" }} />
    </p>
  </div>
);

export default App;
