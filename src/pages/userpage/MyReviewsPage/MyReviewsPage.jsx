import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubLayout from '../../../components/usercomponents/SubLayout/SubLayout';
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import ReviewBox from '../../../components/usercomponents/reviewPage/ReviewBox/ReviewBox';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';

function MyReviewsPage(props) {
    const [isShow, setShow] = useState(true);

    const myReviews = useQuery(
        ["myReviewsQuery"],
        async () => await instance.get("/review/me"),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
        }
    )

    return (
        <SubLayout isShow={isShow}>
            <SubContainer>
                <BackButton setShow={setShow} />
                <div css={s.layout}>
                    {
                        myReviews?.data?.data?.reviews?.map(review =>
                            <ReviewBox review={review}/>
                        )
                    }
                </div>
            </SubContainer>
        </SubLayout>
    );
}

export default MyReviewsPage;