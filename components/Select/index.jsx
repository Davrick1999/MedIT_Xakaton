import Select, { components } from "react-select";

function CSelect({
  children,
  className,
  placeholder = "",
  width,
  height = "32px",
  isClearable = false,
  isSearchable = false,
  isMulti = false,
  isDisabled = false,
  isLoading = false,
  hideSelectedOptions = false,
  options = [],
  borderRight,
  borderLeft,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  closeMenuOnSelect,
  defaultValue,
  style,
  ...rest
}) {
  const uniqueId = "select_" + Math.random().toFixed(5).slice(2);

  const customStyles = {
    control: (styles) => {
      return {
        ...styles,

        width: width,

        minHeight: height,
        borderRadius: "0.2rem",

        borderTopLeftRadius: borderTopLeftRadius,
        borderTopRightRadius: borderTopRightRadius,
        borderBottomLeftRadius: borderBottomLeftRadius,
        borderBottomRightRadius: borderBottomRightRadius,
        border: "1px solid rgba(229, 231, 235)",
        ":hover": {
          border: "1px solid #b3b3b3",
        },
        borderRight: borderRight,
        boderLeft: borderLeft,

        ":focus-within": {
          border: "2px solid rgba(64, 148, 247, 0.5)",
          boxShadow:
            "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(text-gray-500)",
        },
      };
    },
    valueContainer: (provided, state) => ({
      ...provided,
      padding: "0 12px",
      fontSize: "12.5px",
    }),
    input: (provided, state) => ({
      ...provided,

      margin: "0px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    clearIndicator: (state) => ({
      marginRight: "-7px",
      marginTop: "-4px",
      color: "#ccc",
      cursor: "pointer",
      "&:hover": {
        color: "#888",
      },
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: height,
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#999",
      };
    },
    option: (styles) => {
      return {
        ...styles,
        fontSize: "14px",
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "#F0F7EE",
        border: "1px solid #eee",
      };
    },
  };

  return (
    <div
      style={style}
      className={`${className} text-body focus-within:z-40 border-0`}
    >
      <Select
        id={uniqueId}
        className="basic-single"
        classNamePrefix="select"
        placeholder={placeholder}
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        isLoading={isLoading}
        hideSelectedOptions={hideSelectedOptions}
        isMulti={isMulti}
        isClearable={isClearable}
        isSearchable={isSearchable}
        options={options}
        closeMenuOnSelect={closeMenuOnSelect}
        styles={customStyles}
        components={{
          Menu: (props) => <components.Menu {...props} className="menu" />,
          NoOptionsMessage: (props) => (
            <components.NoOptionsMessage {...props}>
              <span className="text-sm">Нет вариантов</span>
            </components.NoOptionsMessage>
          ),
        }}
        onMenuClose={() => {
          const menuEl = document.querySelector(`#${uniqueId} .menu`);
          const containerEl = menuEl?.parentElement;
          const clonedMenuEl = menuEl?.cloneNode(true);

          if (!clonedMenuEl) return;

          clonedMenuEl.classList.add("menu--close");
          clonedMenuEl.addEventListener("animationend", () => {
            containerEl?.removeChild(clonedMenuEl);
          });

          containerEl?.appendChild(clonedMenuEl);
        }}
        {...rest}
      />
    </div>
  );
}

export default CSelect;
