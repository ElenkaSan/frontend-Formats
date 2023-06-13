import React from "react";
// import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import "./component.css";
import paycode from "../img/paycode.png"

const Pay = () => {
  return (
    <div>
    <main className="page-wrapper">
        <section className="container pt-5 pb-lg-2 pb-xl-4 py-xxl-5 my-5"> <br/>
        <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
         <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a>
        </div>
        <h1 className="display-3 pb-2 mb-sm-4 mb-lg-5">Реквизиты компании и варианты оплаты:</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-5"> 
              <p className="h4">В нашем центре существует несколько вариантов оплаты услуг:</p>
              <ol className="fs-lg"> 
                <li>Возможность оплаты по QR- коду(Система быстрых платежей от ЦБРФ). Как это сделать? 
              Открываетелюбое приложение банка в телефоне, сканируете наш QR- код ипереводите сумму 
              абонемента издоговора. </li>
                <li>Оплата по терминалу. Удобный способ, если у вас с собой есть карта.</li>
                <li>Наличными денежными средствами.Мы найдем для вас сдачу.</li>
                <li>Перевести через любое приложениеБанка по реквизитам, 
              но только в этом случае будет комиссия с плательщика, что для вас может быть неудобно.</li> 
              </ol>
              <p className="fs-lg">Выбирайте   свой   удобный   способ,   в   любом   случае   у   нас   кассоваяинтеграция с
             налоговым органом, и мы вам предоставим чек об оплате.</p>
            </div>
          <div className="col-md-6">
            <img src={paycode} alt="qrcode" className="float-start me-3"/>
          </div>
        </div>
      </div>
      <div className="pb-sm-3 pt-4">
        <table className="table fs-lg">
          <thead>
            <tr>
              <th scope="col" className="h5">Название</th>
              <th scope="col" className="h5">Индивидуальный предприниматель Рублева Анна Владимировна</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">ИНН</th>
            <td>890303237826</td>
          </tr>
          <tr>
            <th scope="row">Расчётный счёт</th>
            <td>40802810201500373472</td>
          </tr>
          <tr>
            <th scope="row">ОКВЭД:</th>
            <td colspan="2">85.41.9 Образование дополнительное детей ивзрослых прочее, не включенное в другиегруппировки</td>
          </tr>
          </tbody>
        </table>
        <table className="table fs-lg">
          <thead> <p className="h5"> Данные о банке</p>
            <tr>
            <th scope="col" className="h5">Название банка-получателя</th>
            <th scope="col" className="h5">ООО «БАНК ТОЧКА»</th>
           </tr>
          </thead>
          <tbody>
           <tr>
      <th scope="row">Корреспондентский счёт</th>
      <td>30101810745374525104 в ГУ банка России по ЦФО</td>
    </tr>
    <tr>
      <th scope="row">БИК банка </th>
      <td>044525104</td>
    </tr>
    <tr>
      <th scope="row">ИНН банка</th>
      <td colspan="2">7706092528</td>
    </tr>
    <tr>
      <th scope="row">КПП банка </th>
      <td colspan="2">770543002</td>
    </tr>
    <tr>
      <th scope="row">ОКПО банка</th>
      <td colspan="2">04503985</td>
    </tr>
    <tr>
      <th scope="row">ОГРН банка</th>
      <td colspan="2">1027739019208</td>
    </tr>
    <tr>
      <th scope="row">ОКТМО банка </th>
      <td colspan="2">45906000000</td>
    </tr>
  </tbody>
</table>
<p className="h4 text-center">Внимание! Заключение договора о предоставлении услуг обязательно!</p>
        </div>
        </section>
     </main>
    </div>
  )
}

export default Pay;