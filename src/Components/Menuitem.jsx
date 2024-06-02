
export const Menuitem = () => {
  return (
    <div className="w-[250px] bg-white rounded-2xl shadow-md">
      <a href="#">
        <img
          className="rounded-2xl object-cover h-[134px] w-[250px]"
          width="250"
          height="134"
          src="/src/assets/nasgorrr.jpg"
          alt="Nasi Goreng"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
            Ayam cemani
          </h5>
        </a>
        <p className="mb-3 text-sm font-medium text-gray-700">
          Ayam Bakar
        </p>
      </div>
    </div>
  );
}


