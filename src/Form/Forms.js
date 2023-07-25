import React from "react";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import "./form_style.css";

export default function Forms() {
  return (
    <div className="info">
      {/* <Menu /> */}
      {/* <div>
        <h2 id="form">Form and information about shading technology</h2>
      </div> */}

      <div className="all">
        <div className="box1">
          <h3 className="header1">Shadign technology</h3>

          <li>
            <b> venkovní screenové rolety </b> - markýzy, pergoly, venkovní
            žaluzie
          </li>

          <li>
            <b> venkovní stínění </b>-
          </li>
          <li>
            <b>vnitřní stínění </b>
          </li>
          <li>
            <b>markýzy</b>
          </li>
          <li>
            <b>pergoly</b>
          </li>
        </div>
        <div className="box2">
          <h3 className="header2">Basic info</h3>
          stínící technika je velmi důležitá
        </div>

        <div className="box3">
          <h3 className="header3">In Detail</h3>
          <p id="text">
            Stínící technika se stává nepostradatelnou pro ochranu budov před
            přehříváním, ale také v boji proti globálnímu oteplování tím, že
            omezuje používání energeticky náročných klimatizací. ES-SO proto
            vyzývá k tomu, aby byla stínící technice věnována výrazně větší
            pozornost. Vědecká studie společnosti Guidehouse ukázala, že
            inteligentní nebo dynamická stínící technika by mohla snížit emise
            CO 2  až o 100 milionů tun a ušetřit tak až 285 miliard eur. To
            představuje potenciální úsporu energie, potřebné pro chlazení budov,
            až ve výši 60 % do roku 2050. Budovy jsou dnes v Evropě největšími
            spotřebiteli energie a představují 40 % spotřeby energie a 36 %
            emisí skleníkových plynů. Pokud bychom neudělali nic, změna klimatu
            a vlny veder zvýší počet budov vyžadujících klimatizaci odhadem
            zhruba o 60 %. Stínící technika integrovaná do systému řízení budovy
            řídí teplo a světlo inteligentním způsobem. Jedná se o udržitelné
            pasivní chladicí systémy, které také umožňují obyvatelům kontrolovat
            využívání denního světla. Global Shading Day je výzvou k objevování
            četných přínosů stínicí techniky, k přijetí opatření a také
            kontaktování odborníků. Místní svazy stínící techniky, výrobci a
            distributoři v celé Evropě budou po celý týden kolem uvedeného
            termínu 21. března 2023 pořádat informační akce a také další vlastní
            aktivity. ES-SO je evropská nezisková organizace, zastřešující
            jednotlivé národní organizace pro stínicí techniku, cílem je
            podporovat pozitivní dopad stínění na řízení vnitřního klimatu
            budov. V celé Evropě zaměstnává toto odvětví více než 450.000 lidí a
            generuje roční tržby přesahující 22 miliard eur. ES-SO, European
            Solar-Shading Organization nyní pokrývá 18 evropských zemí. ES-SO
            sídlí v Bruselu a aktivně se podílí na řadě evropských projektů jako
            navrhovatel, ale také v poradenské roli. ES-SO se od roku 2017
            připojilo k EUFORES, evropskému fóru pro obnovitelné zdroje energie
            a energetické účinnosti v Evropské unii. ES-SO zpracovává také
            vlastní webové kampaně – aktuálně se například jedná o kampaň SMART
            SOLAR SHADING. Inteligentní solární stínění má podstatný vliv na
            naše životní a pracovní prostředí. Webová stránka kampaně Smart
            Solar Shading vysvětluje výhody chytrého slunečního stínění.
            Inteligentní solární stínění je součástí dynamické obálky budovy,
            která poskytuje služby zaměřené na snížení potřeby energie na
            chlazení a vytápění a spotřebu energie na osvětlení. Českou
            republiku zastupuje SPST – Svaz podnikatelů ve stínící technice.
            Jedná se o nezávislý subjekt pro komunikaci o oboru stínící techniky
            v ČR. Cílem je stát se garantem profesionality na trhu stínící
            techniky a informovat širokou veřejnost o výhodách použití kvalitní
            stínící techniky, a to především v úsporách energie. S odbornou
            veřejností, architekty, projektanty a také akademickou obcí
            spolupracuje na nových vývojových projektech, zasazuje se o
            zastoupení moderních technologií stínění ve státních programech,
            např. v Nové zelené úsporám a také v legislativě, spolupracuje i se
            školami, čímž tak pomáhá při přípravě kvalifikované pracovní síly
            pro tento moderní obor.
          </p>
        </div>
        <div className="box4">
          <h3 className="header4">Links</h3>

          <a href="https://www.loxone.com/cscz/produkty/stineni/">
            https://www.loxone.com/cscz/produkty/stineni/
          </a>
        </div>
      </div>
      <h2 className="box5">Send form</h2>
      {/* <p id="arrow">↓</p> */}
      <Link to="/contact">
        <p
          id="shadowp_form"
          style={{ fontSize: "20px", textDecoration: "none" }}
        >
          Send message
        </p>
      </Link>
    </div>
  );
}
