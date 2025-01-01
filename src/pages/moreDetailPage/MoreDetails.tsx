import MoreDetailsForm from "./moreDetailsForm/MoreDetailsForm";
import style from  "./MoreDetailsPage.module.css"

export default function MoreDetails() {
  return (
      <div className={style.form_container}>
        <div className={style.form_heading}>
          <h2>Some More Details...</h2>
        </div>
        <div className={style.form}>
          <MoreDetailsForm /> 
        </div>
      </div>
  );
}