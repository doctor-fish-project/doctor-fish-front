import React from 'react';
import ReactPaginate from 'react-paginate';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function AdminListPagination({location}) {
    const nav = useNavigate();


    const handlePageOnChange = (e) => {
        console.log(location);
        nav(`${location.pathname}?page=${e.selected + 1}`);
    }
    return (
        <div css={s.paginateContainer}>
            <ReactPaginate
                pageCount={30}
                marginPagesDisplayed={1}
                pageRangeDisplayed={10}
                previousLabel={<><FaAngleLeft /></>}
                nextLabel={<><FaAngleRight /></>}
                renderOnZeroPageCount={null}
                onPageChange={handlePageOnChange}
                activeClassName='active'
            />
        </div>
    );
}

export default AdminListPagination;