import React from 'react';
import ReactPaginate from 'react-paginate';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function AdminListPagination({ count, onChange, searchParams }) {

    return (
        <>
            {
                !!searchParams.get("page") && 
                <div css={s.layout}>
                    <ReactPaginate
                        pageCount={count}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={10}
                        previousLabel={!!count ? <><FaAngleLeft /></> : null}
                        nextLabel={!!count ? <><FaAngleRight /></> : null}
                        renderOnZeroPageCount={() => null}
                        onPageChange={onChange}
                        activeClassName='active'
                        forcePage={parseInt(searchParams.get("page")) - 1}
                    />
                </div>
            }
        </>

    );
}

export default AdminListPagination;