import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import SubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import ReviewBox from '../../../components/usercomponents/reviewPage/ReviewBox/ReviewBox';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/utils/instance';

function MyReviewsPage(props) {
    const queryClient = useQueryClient();
    const authState = queryClient.getQueryState("accessTokenValidQuery")

    const [isShow, setShow] = useState(true);

    const myReviews = useQuery(
        ["myReviewsQuery"],
        async () => await instance.get("/review/me"),
        {
            enabled: authState?.data?.data,
            refetchOnWindowFocus: false,
            retry: 0,
        }
    )

    return (
        <SubLayout isShow={isShow}>
            <SubContainer>
                <BackButton setShow={setShow} title={"내 리뷰"}/>
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