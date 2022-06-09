import React, {useState} from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const titleCategories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ];

  return (
    <div className="categories">
      <ul>
        {
          titleCategories.map((value, index) => (
            <li onClick={() => setActiveIndex(index)} className={activeIndex === index ? "active" : ""}>
              {value}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Categories;
