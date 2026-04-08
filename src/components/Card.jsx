const Card = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-5 shadow transition-shadow duration-200 hover:shadow-lg">
      <h3 className="mb-2 text-center text-base text-gray-500 sm:text-lg">{title}</h3>
      <p className="text-2xl font-extrabold text-blue-700 sm:text-3xl">{value}</p>
    </div>
  );
};

export default Card;
