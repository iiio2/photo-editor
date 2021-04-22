import { useState } from 'react';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: 'deg',
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: 'px',
  },
];

function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectOption = options[selectedIndex];

  const handleSliderChange = ({ target }) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedIndex) return option;

        return { ...option, value: target.value };
      });
    });
  };

  const getImgStyle = () => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return { filter: filters.join(' ') };
  };

  return (
    <div className='container'>
      <h3 className='text-center my-4'>Photo Editor</h3>
      <div className='row'>
        <div className='col-sm-9'>
          <div className='main-image mb-2' style={getImgStyle()}></div>
          {selectOption && (
            <Slider
              min={selectOption.range.min}
              max={selectOption.range.max}
              value={selectOption.value}
              handleChange={handleSliderChange}
            />
          )}
        </div>

        <div className='col-sm-3'>
          <div className='sidebar'>
            {options.map((option, index) => {
              return (
                <Sidebar
                  key={index}
                  name={option.name}
                  active={index === selectedIndex}
                  handleClick={() => setSelectedIndex(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
