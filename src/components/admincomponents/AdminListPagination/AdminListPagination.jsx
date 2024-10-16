import React from 'react';
import ReactPaginate from 'react-paginate';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function AdminListPagination({ count, onChange, searchParams }) {

    return (
        <div css={s.layout}>
            <ReactPaginate
                pageCount={count}
                marginPagesDisplayed={1}
                pageRangeDisplayed={10}
                previousLabel={<><FaAngleLeft /></>}
                nextLabel={<><FaAngleRight /></>}
                renderOnZeroPageCount={() => null}
                onPageChange={onChange}
                activeClassName='active'
                forcePage={parseInt(searchParams.get("page")) - 1}
            />
        </div>
    );
}

export default AdminListPagination;