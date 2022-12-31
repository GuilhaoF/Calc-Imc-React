import { useState } from "react";
import styles from "./App.module.css";
import leftArrowImage from "../src/assets/leftarrow.png";
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
  function handleBackButton() {
    setShowItemImc(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div>
      <header>
        <div className={styles.headerContainer}>
          <h2>Powered by</h2>
          <strong>Luis G.</strong>
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
            disabled={showItemImc ? true : false}
            required
            type="number"
            placeholder="Digite sua altura. ex 1.50 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />
          <input
            disabled={showItemImc ? true : false}
            required
            type="number"
            placeholder="Digite seu Peso. ex 75.3 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />
          <button
            onClick={handleCalculateButton}
            disabled={showItemImc ? true : false}
          >
            Calcular
          </button>
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
              <div className={styles.rightArrow}>
                <img
                  src={leftArrowImage}
                  alt="botao voltar"
                  width={25}
                  onClick={handleBackButton}
                />
              </div>
              <GridItem data={showItemImc} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
