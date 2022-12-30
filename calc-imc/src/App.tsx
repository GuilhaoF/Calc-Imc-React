import { useState } from "react";
import styles from "./App.module.css";
import PoweredImage from "./assets/powered.png";
import { GridItem } from "./components/GridItem";
import { levels, calculateImc, LevelProps } from "./helpers/imc";

export default function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showItemImc, setShowItemImc] = useState<LevelProps | null>();

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setShowItemImc(calculateImc(heightField, weightField));
    } else {
      alert("Digite Todos os Campos");
    }
  };

  return (
    <div>
      <header>
        <div className={styles.headerContainer}>
          <img src={PoweredImage} alt="logo" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculo de Imc</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <input
            required
            type="number"
            placeholder="Digite sua altura. ex 1.50 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />
          <input
            required
            type="number"
            placeholder="Digite seu Peso. ex 75.3 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!showItemImc && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} data={item} />
              ))}
            </div>
          )}
          {showItemImc && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow}></div>
              <GridItem data={showItemImc} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
