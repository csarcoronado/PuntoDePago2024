import './pago.css'
import './puntos.css'
import { GiCash } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
//import {CircularProgressbarWithChildren} from 'react-circular-progressbar'
//import "react-circular-progressbar/dist/styles.css"
import { ChangeEvent, useEffect } from 'react';
import { BorraImagg } from './interfaces/interfaces';
import { useState } from 'react';

const Header = () => {
const [formData, setFormData] = useState<BorraImagg>({cliente:'', puntos: '', producto:'', puntosG:'', efectivo:'', transferencia:'', vdRegalo:'', cheque:'', tdDebito:'', tdCredito:'', monto:'', money:'', moneyG:''});
const [, setPorcentaje] = useState<number>(0);
const [total, setTotal] = useState<number>(0);
const [mostrarss, setMostrarss] = useState(false);
const [mostrarsss, setMostrarsss] = useState(false);
const handleInputChange = (e: ChangeEvent<HTMLInputElement>, fieldName: string) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
    [fieldName]:value,
  });
      // Actualizar dinámicamente el porcentaje cuando cambia el input
      calcularPorcentaje();
      calcularTotal();
};

const calcularPorcentaje = () => {
  const precioProducto = parseFloat(formData.producto);
  const puntosAcumulados = parseFloat(formData.puntosG);

  if (!isNaN(precioProducto) && !isNaN(puntosAcumulados) && precioProducto !== 0) {
    const nuevoPorcentaje = (puntosAcumulados / precioProducto) * 100;
    setPorcentaje(isNaN(nuevoPorcentaje) ? 0 : nuevoPorcentaje.toFixed(2));
  } else {
    setPorcentaje(0);
  }
};

const calcularTotal = () => {
  const efectivo = parseFloat(formData.efectivo) || 0;
  const transferencia = parseFloat(formData.transferencia) || 0;
  const vdRegalo = parseFloat(formData.moneyG) || 0;
  const cheque = parseFloat(formData.cheque) || 0;
  const tdDebito = parseFloat(formData.tdDebito) || 0;
  const tdCredito = parseFloat(formData.tdCredito) || 0;
  const puntos = parseFloat(formData.puntosG) || 0;

  const totalCalculado = efectivo + transferencia + vdRegalo + cheque + tdDebito + tdCredito + puntos;
  setTotal(totalCalculado);
};

useEffect(() => {
  // Actualizar dinámicamente el porcentaje al cargar el componente
  calcularPorcentaje();
}, [formData]); // Dependencia añadida: el efecto se ejecutará cuando cambie formData

useEffect(() => {
  calcularTotal();
}, [
  formData.efectivo,
  formData.transferencia,
  formData.moneyG,
  formData.cheque,
  formData.tdDebito,
  formData.tdCredito,
  formData.puntosG,
]);

const mostrarFormularioss = () => {
  setMostrarss(true);
};

const mostrarFormulariosss = () => {
  setMostrarsss(true);
};

return(
        <div> 
        <div className="container">            
        <div className="container1">
        <div>
           <div><strong>Resumen de la orden</strong></div>
           <div>
                    <strong>Compra final:</strong>
                    <p>aqui estaran los productos finalmente comprados</p>
                    <p><strong>Nombre:</strong> Cesar Castillo </p>
                    <p><strong>Estado:</strong> Sinaloa</p> 
                    <p><strong>Codigo Postal:</strong> 82030</p> 
                    <p><strong>Teléfono:</strong> 6692601076</p>
     
           </div>
           <div><strong>Detalles de la orden</strong></div>
             <div>
               <p><strong>Numero de pedido:</strong> 0 </p>
               <p><strong>Subtotal:</strong> 0</p>
               <p><strong>Ahorrando:</strong> 0</p>
               <p><strong>Impuesto:</strong> $</p>
               <p><strong>Puntos ganados:</strong> {Number(formData.producto)/100}</p>
               <p><strong>Total: </strong>{formData.producto}</p>
               <div className='containerr1'>
         <label htmlFor="name"><strong>Total:</strong></label>
         <input
           className='inputt'
           type="text"
           id="producto"
           name="producto"
           value={formData.producto}
           onChange={handleInputChange}
         />
       </div>
             </div>
         </div>    </div>
        <div className="container2"><div className='conteiner1'>
           <div>
             <div className='conteiner1'>
             <div>
               <div className='letras'><strong>Opciones de pago</strong></div>
               <div className='containerPs'>
                <form className="formi">
             <input type="text" required  value={total}/>
             <label className="lbl-nombrei" >
               <span className='text-nombi coloricon'>
               Dinero Recibido<GiCash />
               </span>
             </label>
           </form>
           <form className="formii">
             <input type="text" required value={Math.max(Number(formData.producto) - total, 0)}/>
             <label className="lbl-nombreii">
               <span className='text-nombii coloricon'>
               Dinero Restante<BsCashCoin />
               </span>
             </label>
           </form>
           </div>
              <div className="containerP">
             <form className="form">
             <input type="text" required id='efectivo' name='efectivo' value={formData.efectivo} onChange={handleInputChange}/>
             <label className="lbl-nombre">
               <span className='text-nomb'>
                 Efectivo
               </span>
             </label>
           </form>
           <form className="form">
             <input type="text" required id='transferencia' name='transferencia' value={formData.transferencia} onChange={handleInputChange}/>
             <label className="lbl-nombre">
               <span className='text-nomb'>
               Transferencia
               </span>
             </label>
           </form>
           <form className="form">
             <input type="text" required value={formData.moneyG} onClick={mostrarFormularioss} onChange={handleInputChange}/>
             <label className="lbl-nombre">
               <span className='text-nomb'>
               V. de regalo
               </span>
             </label>
           </form>

           <form className="form">
             <input type="text" required id='cheque' name='cheque' value={formData.cheque} onChange={handleInputChange}/>
             <label className="lbl-nombre">
               <span className='text-nomb'>
               Cheque
               </span>
             </label>
           </form>
           <form className="form">
             <input type="text" required id='tdDebito' name='tdDebito' value={formData.tdDebito} onChange={handleInputChange}/>
             <label className="lbl-nombre">
               <span className='text-nomb'>
               T. de debito
               </span>
             </label>
           </form>
           <form className="form">
             <input type="text" required id='tdCredito' name='tdCredito' value={formData.tdCredito} onChange={handleInputChange}/>
             <label className="lbl-nombre">
               <span className='text-nomb'>
               T. de credito
               </span>
             </label>
           </form>
           
           <form className="form">
             <input type="text" required value={formData.puntosG} onClick={mostrarFormulariosss}/>
             <label className="lbl-nombre">
               <span className='text-nomb'>
               Puntos
               </span>
             </label>
           </form>
           </div>
           <div className='containerPs'>
           {mostrarss && (
        <div className='containerTr'>

        <p className='p'><strong> "Vale" </strong></p>
        <p className='p'><strong>Dinero: </strong>{formData.money}</p>
        <p className='p'><strong>D. gastado: </strong>{formData.moneyG}</p>
        <p className='p'><strong>Dinero restante: </strong>{Math.max(Number(formData.money) - Number(formData.moneyG), 0)}</p>
        <div className='containerr1'>
           <label htmlFor="precio"><strong>Dinero electronico</strong></label>
           <input
             className='inputt'
             type="text"
             id="money"
             name="money"
             value={formData.money}
             onChange={handleInputChange}
           />
         </div>
         <div className='containerr1'>
           <label htmlFor="precio"><strong>Dinero a gastar</strong></label>
           <input
             className='inputt'
             type="text"
             id="moneyG"
             name="moneyG"
             value={formData.moneyG}
             onChange={(e) => {
              // Verificar si el nuevo valor es menor o igual a formData.puntos
              const newValue = Math.min(Number(e.target.value), Number(formData.money));
              handleInputChange({ target: { name: 'moneyG', value: newValue } });
            }}
           />
         </div>
         <button onClick={() => setMostrarss(false)}>x</button>
        </div> 
      )}    
          

            
      {/* <div className='h1responsive'>
       
      <CircularProgressbarWithChildren value={porcentaje}> 
      <div style={{ fontSize: '80%', height: 'auto' }}>
          <strong>{Math.min(porcentaje, 100)}%</strong>
        </div>
      </CircularProgressbarWithChildren>
      </div> */}
      
                                                                                                                                                  
    <div className='conteiner2'>
           <div className='ppp'><strong>Dinero Recibido</strong></div>
           <div>
           <div className='ppp'><strong>Recibo:</strong></div>
           <p className='pp'>Efectivo: {formData.efectivo}</p>
           <p className='pp'>Transferencia: {formData.transferencia}</p>
           <p className='pp'>V. de regalo: {formData.moneyG}</p>
           <p className='pp'>Cheque: {formData.cheque}</p>
           <p className='pp'>T. de Debito: {formData.tdDebito}</p>
           <p className='pp'>T. de credito: {formData.tdCredito}</p>
           <p className='pp'>Puntos: {formData.puntosG}</p>
           <p><strong className='ppp'>Cambio: </strong>{total - Number(formData.producto)}</p>
           </div>
           <button className='button'>Finalizar Compra</button> 
           </div> 
      {mostrarsss && (
        <div className='containerTr'>

<p className='p'><strong> "Puntaje" </strong></p>
<p className='p'><strong>Puntos: </strong>{formData.puntos}</p>
<p className='p'><strong>P. gastados: </strong>{formData.puntosG}</p>
<p className='p'><strong>Puntos restantes: </strong>{Math.max(Number(formData.puntos) - Number(formData.puntosG), 0)}</p>
<div className='containerr1'>
   <label htmlFor="precio"><strong>Puntos acumulados</strong></label>
   <input
     className='inputt'
     type="text"
     id="puntos"
     name="puntos"
     value={formData.puntos}
     onChange={handleInputChange}
   />
 </div>
 <div className='containerr1'>
   <label htmlFor="precio"><strong>Puntos a gastar</strong></label>
   <input
     className='inputt'
     type="text"
     id="puntosG"
     name="puntosG"
     value={formData.puntosG}
     onChange={(e) => {
      // Verificar si el nuevo valor es menor o igual a formData.puntos
      const newValue = Math.min(Number(e.target.value), Number(formData.puntos));
      handleInputChange({ target: { name: 'puntosG', value: newValue } });
    }}
   />
 </div>
 <button onClick={() => setMostrarsss(false)}>x</button>
</div>              
      )}      
        </div>
           </div>    
       </div>
       </div>
       </div></div>
        </div>

        </div>
    )
}
 export default Header