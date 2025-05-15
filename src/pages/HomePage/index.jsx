import { useState } from 'react';
import { TShirt } from '../../components/TShirt';
import { TShirtSetup } from '../../components/TShirtSetup';
import './style.css';

export const HomePage = () => {
  const [type, setType] = useState('normalShortSleeve');
  const [color, setColor] = useState('yellow');
  const [print, setPrint] = useState('Ahoj světe');

  const handleTypeChange = (typeValue) => {
    setType(typeValue);
  };

  const handleColorChange = (colorValue) => {
    setColor(colorValue);
  };

  const handlePrintChange = (printValue) => {
    setPrint(printValue);
  };

  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type={type} color={color} print={print} />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup
            onTypeChange={handleTypeChange}
            onColorChange={handleColorChange}
            onPrintChange={handlePrintChange}
          />
        </div>
      </div>
    </div>
  );
};
