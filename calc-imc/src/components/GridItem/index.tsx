import { LevelProps } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type GridItemProps = {
  data: LevelProps;
};

export function GridItem({ data }: GridItemProps) {
  return (
    <div className={styles.main} style={{ backgroundColor: data.color }}>
      <div className={styles.gridIcon}>
        <img
          src={data.icon === "up" ? upImage : downImage}
          alt="indicador legal ou nao legal"
          width="30"
        />
      </div>
      <div className={styles.gridTitle}>{data.title}</div>
      {data.yourImc && (
        <div className={styles.yourImc}>
          Seu Imc e de : <strong>{data.yourImc.toFixed(2)}</strong> kg/m2
        </div>
      )}
      <div className={styles.gridInfo}>
        <>
          Imc esta entre <strong>{data.imc[0]}</strong> e{" "}
          <strong>{data.imc[1]}</strong>
        </>
      </div>
    </div>
  );
}
