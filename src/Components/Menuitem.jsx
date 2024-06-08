
import PropTypes from 'prop-types';

export const Menuitem = ({ imgSrc, title, description }) => {
  return (
    <div className="w-[250px] bg-white rounded-2xl shadow-md">
      <a href="#">
        <img
          className="rounded-2xl object-cover h-[134px] w-[250px]"
          width="250"
          height="134"
          src={imgSrc}
          alt={title}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h1 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
            {title}
          </h1>
        </a>
        <p className="mb-3 text-sm font-medium text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}

Menuitem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
