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
      fillOpacity="var(--star-fill-opacity, 1)"
      fill="currentColor"
    />
    <path
      d="M28.0001 7L34.1718 21.8387L50.1914 23.1229L37.9862 33.578L41.7151 49.2104L28.0001 40.8333L14.2851 49.2104L18.014 33.578L5.80876 23.1229L21.8283 21.8387L28.0001 7Z"
      // All other colours are inherited from the
      // rest of the code, instead of being set
      stroke="currentColor"
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>
);

const Unit = ({ icon, children, className, ...props }) => (
  <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10">
    <div className="max-w-md mx-auto">
      <div className={`${className} space-y-2`} {...props}>
        <div className="flex space-x-4">{icon}</div>
        <div className="space-y-2">{children}</div>
      </div>
    </div>
  </div>
);

const App = () => (
  <div className="font-sans min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto space-y-6">
      <Unit icon={<StarHalfIcon />} className="text-blue-500">
        <p>
          In the Figma to React JSX pipeline, we replace <code>#000</code>{" "}
          (black) with a special <code>currentColor</code> value.
        </p>
      </Unit>
      <Unit
        icon={
          <>
            <StarHalfIcon style={{ "--star-fill-opacity": "0.75" }} />
          </>
        }
        className="text-blue-500"
      >
        <p>
          This makes the icon take on the colour of a parent, allowing devs to
          easily change the colour of an icon to fit the context.
        </p>
        <p>
          Adding a second colour might increase complexity, but <em>if</em>{" "}
          Figma exports SVG shapes with <code>stroke-fill-opacity</code>,{" "}
          <code>shape-fill-opacity</code> or even just <code>opacity</code>{" "}
          attributes.
        </p>
      </Unit>
      <Unit
        icon={
          <>
            <StarHalfIcon style={{ "--star-fill-opacity": "0.75" }} />
            <StarHalfIcon style={{ "--star-fill-opacity": "0.5" }} />
            <StarHalfIcon style={{ "--star-fill-opacity": "0.25" }} />
          </>
        }
        className="text-red-500"
      >
        <p>
          Devs could then instead just customise that opacity on the fly (and
          continue using the original colour) to match the usecase.
        </p>
      </Unit>
    </div>
  </div>
);

export default App;
