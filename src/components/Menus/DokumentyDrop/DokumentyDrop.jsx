import "../DropDowns/ObecDrop.css";
import { Link } from "react-router-dom";

export default function ObecDrop(props) {
  return (
    <>
      {/* drop down of link "Obec" */}
      <div className="drop-container">
        
        <ul className="drop-menu">
          <li>
            <Link className="link" to="/verejne-vyhlasky">Povinně zveřejňované smlouvy</Link>
          </li>
          <li>
            <Link className="link" to="/pozvanky">Povodňový plán</Link>
          </li>
          <li>
            <Link className="link" to="/zapisy">Projektova mapa</Link>
          </li>
          <li>
            <Link className="link" to="/zpravodaj">Rezervace</Link>
          </li>
        </ul>
        <ul className="drop-menu">
          <li>
            <Link className="link" to="/vystava-kvetin">Výstava květin Čimelice</Link>
          </li>
          <li>
            <Link className="link" to="/pronajem-kurtu">Pronájem kurtů a tělocvičny</Link>
          </li>
          <li>
            <Link className="link" to="/seznam-podnikatelu">Seznam podnikatelů a služeb</Link>
          </li>
          <li>
            <Link className="link" to="/jizdni-rady">Jízdní řady</Link>
          </li>
        </ul>
        <ul className="drop-menu">
          <li>
            <Link className="link" to="/sbor-dobrovolnych-hasicu">
              Dobrovolný hasiči Čimelice
            </Link>
          </li>
          <li>
            <Link className="link" to="/zajmova-sdruzeni">Zajmová sdružení pro volný čas</Link>
          </li>
          <li>
            <Link className="link" to="/turistika-sluzby">Turistika, zajímavosti a služby</Link>
          </li>
          <li>
            <Link className="link" to="/sport">Sport</Link>
          </li>
        </ul>
        <ul className="drop-menu">
          <li>
            <Link className="link" to="/dobrovolny-svazek">Dobrovolný svazek Písecka</Link>
          </li>
          <li>
            <Link className="link" to="/dokumenty-sorp">Dokumenty SORP</Link>
          </li>
          <li>
            <Link className="link" to="/mapovy-portal">Náš mapový portál</Link>
          </li>
          <li>
            <Link className="link" to="/verejna-sprava">Portál veřejné správy</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
