const Card = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col items-center">
      <h3 className="text-gray-500 mb-2 text-lg">{title}</h3>
      <p className="text-3xl font-extrabold text-blue-700">{value}</p>
    </div>
  );
};

export default Card;