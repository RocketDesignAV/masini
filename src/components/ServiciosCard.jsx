import '../../public/css/serviciosCard.css'


const ServiciosCard = () => {
  return (
    <div className='contenedorServiciosCard'>
      <div className="max-w-sm w-full lg:max-w-full lg:flex justify-between">
       
        <div className="cardText">
         
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src="/img/masini.png" alt="Avatar of Jonathan Reinink" />
              <div className="text-sm">
                {/*<p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>*/}
              </div>
            </div>
            <div className="mb-8">
            
              <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
                eaque, exercitationem praesentium nihil.
              </p>
            </div>
        </div>
        <div className="cardImg h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img src="/img/rectangle.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiciosCard;
