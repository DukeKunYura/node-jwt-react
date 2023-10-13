import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
  routes: TBreadCrumb[];
};

export type TBreadCrumb = {
  path: string | null;
  breadcrumb: string;
};

/**
 * Компонент для хлебных крошек
 */
const BreadCrumbs: FC<Props> = ({ routes }) => {
  const navigate = useNavigate();

  const handleArrow = () => {
    navigate(-1);
  };

  return (
    <div style={{ "display": "flex", "flexDirection": "row", "alignItems": "center" }}>
      <svg
        style={{ "margin": "8px", "cursor": "pointer" }}
        onClick={handleArrow}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
      </svg>
      <div className="">
        {routes.slice(0, -1).map((item, index) => {
          if (item.path)
            return (
              <span key={index}>
                <Link style={{ "cursor": "pointer", "textDecoration": "none" }} to={item.path}>
                  {item.breadcrumb}
                </Link>
                {' / '}
              </span>
            );
          else return item.breadcrumb + ' / ';
        })}
        {routes[routes.length - 1].breadcrumb}
      </div>
    </div>
  );
};

export default BreadCrumbs;


// использование:

const routes: TBreadCrumb[] = [
  { breadcrumb: 'Материалы', path: '/materials' },
  { breadcrumb: 'Документы', path: '/materials/documents' },
  { breadcrumb: 'Список документов', path: null }
];

<BreadCrumbs routes={routes} />
